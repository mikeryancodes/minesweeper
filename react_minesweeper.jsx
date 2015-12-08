var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game.jsx');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Game/>,
    document.getElementById('main')
  );
});
