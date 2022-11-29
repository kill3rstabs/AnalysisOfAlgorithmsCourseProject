let order = []
let dupBlocks;
const fromBook_7_4_5 = (blocks) => {


    dupBlocks = blocks.slice() // Copying blocks array
    hybrid_quick_sort(dupBlocks, 0, dupBlocks.length - 1)
    for (let i = 0; i < dupBlocks.length; i++) {
        order.push([null, null, null, i])
    }
    return order
}



const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (dupBlocks, l, r) => {
    const pivot = l
    let j = l

    for (let i = l + 1; i <= r; i++) {
        order.push([i, pivot, null, null])
        if (dupBlocks[i] < dupBlocks[pivot]) {
            j += 1
            order.push([i, j, dupBlocks.slice(), null])
            swap(dupBlocks, i, j)
            order.push([i, j, dupBlocks.slice(), null])
        }
    }
    order.push([pivot, j, dupBlocks.slice(), null])
    swap(dupBlocks, pivot, j)
    order.push([pivot, j, dupBlocks.slice(), null])
    order.push([null, null, null, j])
    return j
}



const hybrid_quick_sort = (dupBlocks, l, r) => {
    console.log("In hybrid quick sort value of l and r is " + l + " " + r)
    while (l < r) {
        if (r - l + 1 < 10) {
            insertionSort_(dupBlocks, l, r);
            break
        }
        else {
            let m = partition(dupBlocks, l, r)
            if (m - l < r - m) {
                hybrid_quick_sort(dupBlocks, l, m - 1)
                l = m + 1
            }
            else {
                hybrid_quick_sort(dupBlocks, m + 1, r)
                r = m - 1
            }
        }

    }
    return
}

const insertionSort_ = (blocks_, l, r) => {
    console.log("In insertion sort value of l and r is " + l + " " + r)
    let i, j

    for (i = l + 1; i < r + 1; i++) {
        j = i - 1
        while (j >= 0 && dupBlocks[j] > dupBlocks[j + 1]) {
            swap(dupBlocks, j, j + 1)
            order.push([j, j + 1, null, null])              // Compare
            order.push([j, j + 1, dupBlocks.slice(), null]) // Swap
            j -= 1

        }
    }
    for (i = l; i < r + 1; i++) {
        order.push([null, null, null, i])
    }
}


export default fromBook_7_4_5


