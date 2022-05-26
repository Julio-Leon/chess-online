function Row({ row, i }) {
    return (
        <div className="row">
            {
                row && row.map((node, j) => {
                    return <Node key={[i, j]} j={j} i={i} node ={node} />
                })
            }
        </div>
    )
}

export default Row;