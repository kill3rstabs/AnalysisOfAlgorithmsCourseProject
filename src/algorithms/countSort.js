let order = []

// let countingSort = (arr, min, max) => {
const countSort = (blocks) => {
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
    return order;
};

export default countSort    


