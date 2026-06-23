class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seenNumbers = {}

        for (let i = 0; i < nums.length; i++) {
            let compliment = target - nums[i]

            if (compliment in seenNumbers) {
                return [seenNumbers[compliment], i]
            }

            seenNumbers[nums[i]] = i
        }

        return []
    }
}
