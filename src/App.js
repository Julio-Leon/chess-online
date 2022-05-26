import { useState } from 'react';

import './App.css';

import { Table } from './Classes/Table'

function App() {

  const [table, setTable] = useState(new Table())

  console.log(table)

  return (
    <div className="App">
      Hello World

    {
      table && table.board.map(row => {
        return row.map(node => {
          return <h2> {node.currentPiece} </h2>
        })
      })
    }

    </div>
  );
}

export default App;
