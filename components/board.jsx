var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.board.grid.map(function(row, rowIndex){
            return <div className="row" key={rowIndex}>{row.map(function(tile, tileIndex){
              return <Tile tile={tile}
                            update={this.props.update}
                            key={tileIndex}/>
            }.bind(this))}</div>
        }.bind(this))
        }
      </div>
    );
  }
});

module.exports = Board;
