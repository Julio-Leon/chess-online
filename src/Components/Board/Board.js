function Board({ board }) {
    return (
        <div className="board">
            {
                board && board.map((row, i) => {
                    return <Row key={i} i={i} row ={row} />
                })
            }
        </div>
    )
}

export default Board;