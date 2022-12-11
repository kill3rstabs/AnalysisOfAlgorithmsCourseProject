let order = []

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

const radixSort = (blocks) => {
    let dupBlocks = blocks.slice()
    let holder = []
    let maxDigitCount = mostDigits(dupBlocks)
    for (let k = 0; k < maxDigitCount; k++) {
        holder = []

        let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
        for (let i = 0; i < dupBlocks.length; i++) {
            let digit = getDigit(dupBlocks[i], k)
            digitBuckets[digit].push(dupBlocks[i])
        }
        for (let i = 0; i < digitBuckets.length; i++) {
            for (let j = 0; j < digitBuckets[i].length; j++) {
                if (digitBuckets[i][j] != []) {
                    holder.push(digitBuckets[i][j])
                }

            }

        }
        console.log(holder)
        order.push([null, null, holder.slice(), null]) // Swap
        console.log(dupBlocks)
        // New order after each loop
        dupBlocks = [].concat(...digitBuckets)
    }
    for (let i = 0; i < holder.length; i++) {
        order.push([null, null, null, i]) // j-th element is in correct position ( Sorted )
    }
    // return dupBlocks
    return order
}

export default radixSort

// let arr = [4, 99, 3, 333, 784, 120, 67, 78]

// let arr_ = radixSort(arr)
// console.log(arr_)

// order.push([j, j + 1, null, null])                  // Compare





