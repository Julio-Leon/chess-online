function Node({ node, i, j }) {
    return (
        <div className="node">
            {node.currentPiece}
        </div>
    )
}

export default Node;