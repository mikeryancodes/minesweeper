var React = require('react');
var Minesweeper = require('../minesweeper.js');

// this.board = board;
// this.pos = pos;
// this.bombed = false;
// this.explored = false;
// this.flagged = false;
// }
//
// Tile.DELTAS = [[-1, -1], [-1,  0], [-1,  1], [ 0, -1],
//              [ 0,  1], [ 1, -1], [ 1,  0], [ 1,  1]]
//
// Tile.prototype.adjacentBombCount = function() {
// var bombCount = 0;
// this.neighbors().forEach(function(neighbor) {


var Tile = React.createClass({
  handleClick: function () {
    this.props.update(this.props.tile, false);
  },

  handleRightClick: function (e) {
    e.preventDefault();
    this.props.update(this.props.tile, true);
    return false;
  },

  render: function() {
    var tile = this.props.tile;
    var content = " ";
    if (tile.flagged) {
      content = "🚩";
    } else if (tile.explored) {
      if (tile.bombed) {
        content = "💣";
      } else {
        var bombCount = tile.adjacentBombCount();
        if (bombCount > 0) {
          content = bombCount.toString();
        } else {
          content = "";
        }
      }
    }

    return <span onClick={this.handleClick}
                  className={this.props.tile.explored ? "tile revealed" : "tile"}
                  onContextMenu={this.handleRightClick}>{content}</span>;
  }
});


module.exports = Tile;
