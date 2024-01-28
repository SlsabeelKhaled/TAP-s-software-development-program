function Question2(nums) {
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0 || nums[i] > n) {
            return "Error: All numbers should be in the range [0, n]";
        }
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return "Error: All numbers in the array should be unique";
            }
        }
    }
    let totalSum = 0;
    for (let i = 0; i <= n; i++) {
        totalSum += i;
    }
    let arraySum = 0;
    for (let i = 0; i < n; i++) {
        arraySum += nums[i];
    }
    return totalSum - arraySum;
}



// Example 1
const nums1 = [4, 0, 1];
console.log(Question2(nums1)); 

// Example 2
const nums2 = [9, 9, 4, 2, 3, 5, 7, 0, 1];
console.log(Question2(nums2));

// Example 3
const nums3 = [1,3,2];
console.log(Question2(nums3)); 
