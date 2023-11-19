// Array Freq Counter
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1; // .get()
        return acc;
    }, {});
}

// Mode
function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}


// String to Num
function convertNumsArray(numsSplit) {
    let result = [];

    for (let i = 0; i < numsSplit.length; i++) {
        let valtoNumber = Number(numsSplit[i]);

        if (Number.isNaN(valtoNumber)) {
            return new Error(`${numsSplit[i]} at index ${i} is not valid`);
        }
        result.push(valtoNumber);
    }

    return result;
}

// Mean
function findMean(nums) {
    if (nums.length == 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length
}

// Median
function findMedian(nums){
    // Sort then find middle element

    nums.sort((a, b) => a - b); // Sort by Object

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex-1]) / 2;
    } else {
        median = nums[middleIndex];
    }

    return median
}

module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertNumsArray
};