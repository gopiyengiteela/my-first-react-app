import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    render(){
        return(
        <button className="square">
            {/*TODO*/}
        </button>);
    }
}

class Board extends React.Component{
    renderSuqre(i){
        return <Square />;
    }

    render(){
        const status= "Next player: X";

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