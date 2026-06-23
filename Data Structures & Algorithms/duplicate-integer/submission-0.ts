class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashMap = {};
        
        for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in hashMap)) {
      hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
    } else {
      return true;
    }
  }
  return false;
    }
}
