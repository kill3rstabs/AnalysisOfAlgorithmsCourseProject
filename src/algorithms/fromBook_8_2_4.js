let order = []
const fromBook_8_2_4 = (blocks) => {
    let dupBlocks = blocks.slice() // copying blocks array
    let min = Math.min(...dupBlocks)
    let max = Math.max(...dupBlocks)

    let i = min,
        j = 0,
        len = dupBlocks.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[dupBlocks[i]] += 1;
    }
    console.log(min)
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            dupBlocks[j] = i;
            order.push([null, null, dupBlocks.slice(), null]) // Swap
            console.log(dupBlocks[i])
            count[i]--;
            order.push([null, null, null, j]) // i-th element is in correct position ( Sorted )
            j++;
        }
    }
    console.log(dupBlocks)
    let a = prompt("Enter 'a' i.e. the lower limit of the range")
    let b = prompt("Enter 'b' i.e. the upper limit of the range")
    let rangeCount = 0
    for (let i = 0; i < dupBlocks.length; i++) {
        if (dupBlocks[i] >= a && dupBlocks[i] <= b)
            rangeCount++
    }
    alert("There are " + rangeCount + " number that lie within the range of " + a + " and " + b)

    return order;
}

export default fromBook_8_2_4