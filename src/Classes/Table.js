class Node {
    constructor(row, col) {
        this.currentPiece = 0
        this.row = row
        this.col = col
    }
}


export class Table {
    constructor() {
        const tempTable = []
        for (let i = 0; i < 8; i++) {
            const tempRow = []
            for (let j = 0; j < 8; j++) {
                tempRow.push(new Node(i, j))
            }
            tempTable.push(tempRow)
        }
        this.board = tempTable
        this.whiteOccupiedLocations = []
        this.blackOccupiedLocations = []
        this.blackKingLocation = null
        this.whiteKingLocation = null
    }

    checkOccupiedLocations () {
        this.board.forEach((row, i) => {
            row.forEach((node, j) => {
                if (node.currentPiece === 1) {
                    this.whiteKingLocation = [i, j]
                } else if (node.currentPiece === 1) {
                    this.blackKingLocation = [i ,j]
                } 
                
                if (node.currentPiece > 1) {
                    this.whiteOccupiedLocations.push([i, j])
                } else if (node.currentPiece < -1) {
                    this.blackOccupiedLocations.push([i, j])
                }
            })
        })
    }
}