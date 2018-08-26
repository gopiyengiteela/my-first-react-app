import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
        return(
        <button className="square" 
            onClick={props.onClick}>
            {props.value}
        </button>)
}

function calculatewinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
            xIsNext:true,
        };
    }

    handleClick(i){
        const squares=this.state.squares.slice();
        if(calculatewinner(squares)||squares[i]){
            return;
        }
        squares[i]=this.state.xIsNext?'X':'O';
        this.setState({
            squares:squares,
            xIsNext:!this.state.xIsNext,
        });
    }

    renderSuqre(i){
        return <Square value={this.state.squares[i]}
            onClick={()=> this.handleClick(i)} />;
    }

    render(){
        
        const winner=calculatewinner(this.state.squares);
        let status;

        if(winner){
            status='Winner :'+winner;
        }else{
            status='Next player :'+(this.state.xIsNext?'X':'O');
        }
        return(
            <div>
                <div className="status">
                    {status}
                </div>
                <div className="board-row">
                    {this.renderSuqre(0)}
                    {this.renderSuqre(1)}
                    {this.renderSuqre(2)}
                </div>
                <div className="board-row">
                    {this.renderSuqre(3)}
                    {this.renderSuqre(4)}
                    {this.renderSuqre(5)}
                </div>
                <div className="board-row">
                    {this.renderSuqre(6)}
                    {this.renderSuqre(7)}
                    {this.renderSuqre(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component{
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-ifo">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);