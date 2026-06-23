class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let joinedStrings = ""
        for (let str of strs) {
            joinedStrings = joinedStrings + str.length + "#" + str
        }

        return joinedStrings
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = []
        let i = 0
        while (i < str.length) {
            let hashIndex = str.indexOf("#", i)
            let strLength = Number(str.slice(i, hashIndex))
            let slicedStr = str.slice(hashIndex + 1, strLength + 1 + hashIndex)
            result.push(slicedStr)
            i = hashIndex + 1 + strLength
        }

        return result

    }
}
