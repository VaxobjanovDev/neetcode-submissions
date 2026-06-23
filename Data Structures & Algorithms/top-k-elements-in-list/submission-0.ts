class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hashMap = {}

        for (let num of nums) {
            hashMap[num] = (hashMap[num] || 0) + 1
        }

        const entries = Object.entries(hashMap)
        entries.sort((a: object, b: object) => b[1] - a[1])

        return entries.slice(0, k).map((entry) => Number(entry[0]))
    }
}
