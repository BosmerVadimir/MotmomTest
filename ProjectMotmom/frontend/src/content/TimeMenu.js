import React,{Component} from "react";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick} style={props.style}>
            {props.value}
        </button>
    );
}

const gray = '#666666';
const white = '#ffffff';

export default class TimeMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(15).fill(1),
            xIsNext: true,
            color: white

        };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 1 : 2 ;
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                style={{background:this.state.color}}
            />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row"  >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                </div>

            </div>
        );
    }
}