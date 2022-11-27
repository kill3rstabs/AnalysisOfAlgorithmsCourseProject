let order = []
const fromBook_7_4_5 = (blocks) => {


    const dupBlocks = blocks.slice() // Copying blocks array
    hybrid_quick_sort(dupBlocks, 0, dupBlocks.length - 1)
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
    while (l < r) {
        if (r - l < 10) {
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

const insertionSort_ = (blocks) => {
    // const dupBlocks = blocks // copying blocks array

    let i, j

    for (i = 0; i < blocks.length; i++) {
        j = i - 1
        while (j >= 0 && blocks[j] > blocks[j + 1]) {
            order.push([j, j + 1, blocks.slice(), null]) // Swap
            swap(blocks, j, j + 1)
            order.push([j, j + 1, null, null])              // Compare
            order.push([j, j + 1, blocks.slice(), null]) // Swap
            j -= 1
        }
    }

    for (i = 0; i < blocks.length; i++) {
        order.push([null, null, null, i])
    }
    return
}


export default fromBook_7_4_5

// order.push([j, j + 1, null, null])                  // Compare

// order.push([j, j + 1, dupBlocks.slice(), null]) // Swap

// order.push([null, null, null, j]) // j-th element is in correct position ( Sorted )
