/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" key={props.key} onClick={props.onClick} type="button">
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const lists = [];
    let c = 0;
    let row = [];
    for (let i = 0; i < 19; i += 1) {
      row = [];
      for (let j = 0; j < 19; j += 1) {
        row.push(this.renderSquare(c));
        c += 1;
      }

      lists.push(<div className="board-row" key={i}>{row}</div>);
    }

    return (
      <div>
        {lists}

      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [];
  for (let i = 0; i < 361; i += 1) {
    lines.push([i, i + 1, i + 2, i + 3, i + 4]);
    lines.push([i, i + 19, i + 38, i + 57, i + 76]);
    lines.push([i, i + 20, i + 40, i + 60, i + 80]);
    lines.push([i, i + 18, i + 36, i + 54, i + 72]);
  }
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a]
      && squares[a] === squares[b]
      && squares[a] === squares[c]
      && squares[a] === squares[d]
      && squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
}

// eslint-disable-next-line react/no-multi-comp
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(361).fill(null),
      }],
      stepNumber: 0,
      blackIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.blackIsNext ? '●' : '○';
    this.setState({
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      blackIsNext: !this.state.blackIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      blackIsNext: (step % 2) === 0,
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} type="button">{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.blackIsNext ? '●' : '○'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
