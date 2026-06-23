class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hashMap = {}

        for (let word of strs) {
            let sortedStr = word.split('').sort().join('')

            if (!(sortedStr in hashMap)) {
                hashMap[sortedStr] = []
            }

            hashMap[sortedStr].push(word)
        }

        return Object.values(hashMap)
    }
}
