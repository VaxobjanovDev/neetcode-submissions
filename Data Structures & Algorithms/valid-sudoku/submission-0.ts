class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const hasSeen = new Set()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c]

                if (val === '.') {
                    continue
                }

                const rowKey = `row-${r}-${val}`
                const colKey = `col-${c}-${val}`
                const boxKey = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${val}`

                if (hasSeen.has(rowKey) || hasSeen.has(colKey) || hasSeen.has(boxKey)) {
                    return false
                }

                hasSeen.add(rowKey)
                hasSeen.add(colKey)
                hasSeen.add(boxKey)
            }
        }

        return true
    }
}
