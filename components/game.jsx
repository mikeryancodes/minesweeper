var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Board = require('./board.jsx');
var Tile = require('./tile.jsx');

var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(10, 10)};
  },

  updateGame: function(tile, flagging) {
    if(flagging){
      tile.toggleFlag();
    } else {
      tile.explore();
      if (this.state.board.lost() || this.state.board.won()){
        this.state.board.grid.forEach(function (row) {
            row.forEach(function (currentTile) {
              currentTile.flagged = false;
              currentTile.explored = true;
            });
        });
        window.setTimeout(function () {
          alert(this.state.board.lost() ? "You LOST!" : "You WON!");
        }.bind(this), 200);
        document.getElementById("restart").classList.remove('hidden');
      }
    }

    this.setState({board: this.state.board});
  },

  newGame: function () {
    document.getElementById("restart").classList.add('hidden');
    this.setState({board: new Minesweeper.Board(10, 10)});
  },

  render: function() {
    console.log("rendering");
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame}/>
        <button value="Play Again!"
          onClick={this.newGame}
          className="hidden"
          id="restart">Play Again!</button>
      </div>

    );
  }
});



module.exports = Game;
