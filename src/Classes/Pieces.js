class Piece {
    constructor(color, row, col) {
        this.color = color
        this.row = row
        this.col = col
        this.availableMoves = []
    }
}

class King extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 1
        if (color === 'black') {
            this.id *= -1
        }
    }
}

class Queen extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 2
        if (color === 'black') {
            this.id *= -1
        }
    }
}

class Knight extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 3
        if (color === 'black') {
            this.id *= -1
        }
    }

    
}

class Bishop extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 4
        if (color === 'black') {
            this.id *= -1
        }
    }
}

class Rook extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 5
        if (color === 'black') {
            this.id *= -1
        }
    }
}

class Pawn extends Piece {
    constructor(color, row, col, availableMoves) {
        super(color, row, col, availableMoves)
        this.id = 6
        if (color === 'black') {
            this.id *= -1
        }
    }
}