

let order = [];

const maxHeapify = (dupBlocks, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && dupBlocks[l] > dupBlocks[largest]) {
        largest = l;
    }

    // If right child is smaller than smallest so far 
    if (r < n && dupBlocks[r] > dupBlocks[largest]) {
        largest = r;
    }

    order.push([i, largest, null, null])                  // Compare
    // If smallest is not root 
    if (largest !== i) {
        order.push([i, largest, null, null])                  // Compare
        // order.push([i, largest, dupBlocks.slice(), null]) // Swap
        let temp = dupBlocks[i];
        dupBlocks[i] = dupBlocks[largest];
        dupBlocks[largest] = temp;
        order.push([i, largest, dupBlocks.slice(), null]) // Swap

        // Recursively heapify the affected sub-tree 
        maxHeapify(dupBlocks, n, largest);

    }
    // order.push([i, largest, dupBlocks.slice(), null]) // Swap
}

// main function to do heap sort 
const heapSort = (blocks) => {
    // Build heap (reblocksange blocksay)
    const dupBlocks = blocks.slice();
    const n = dupBlocks.length
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        maxHeapify(dupBlocks, n, i);
    }

    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end 
        let temp = dupBlocks[0];
        dupBlocks[0] = dupBlocks[i];
        dupBlocks[i] = temp;

        // call max heapify on the reduced heap 
        maxHeapify(dupBlocks, i, 0);
        order.push([null, null, null, i]) // i-th element is in correct position ( Sorted )
        if (i == 0)
            break

    }
    return order
}

export default heapSort







