class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        const letterCount = {}

        for (let char of s) {
            letterCount[char] = (letterCount[char] || 0) + 1
        }

        for (let char of t) {
            if (!letterCount[char]) {
                return false
            }

            letterCount[char]--
        }

        return true
    }
}
