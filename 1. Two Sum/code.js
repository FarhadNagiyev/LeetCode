let nums = [3, 3] 
let target = 6

let twoSum = function (nums, target) {

    numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        for (let j = 0; j < numsLength; j++) {
            let sumOfNumbers = nums[i] + nums[j]
            if (sumOfNumbers === target && i != j) {
                let result = [i, j]
                return result;
            }
        }
    }

};

const result = twoSum(nums, target)
console.log(result)
