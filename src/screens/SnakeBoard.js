import React from 'react';
import './SnakeBoard.css';

export default class SnakeBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { snakeCoordinates: [[1, 1], [1, 2], [1, 3], [2, 3]], foodCoordinate: [4, 4], direction: 'right', headx: 2, heady: 3, score: 0, gameOver: false };
    this.moveSnake = this.moveSnake.bind(this);
    this.getDirection = this.getDirection.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
    this.generateFood = this.generateFood.bind(this);
    this.didSnakeEatFood = this.didSnakeEatFood.bind(this);
    this.initGame = this.initGame.bind(this);

  }

  initGame() {
    this.setState({ snakeCoordinates: [[1, 1], [1, 2], [1, 3], [2, 3]], foodCoordinate: [4, 4], direction: 'right', headx: 2, heady: 3, score: 0, gameOver: false, started: false })
  }

  componentDidMount() {
    this.generateFood();
    setInterval(this.moveSnake, 100);
    document.addEventListener('keydown', this.getDirection);
  }

  generateFood() {
    this.setState({ foodCoordinate: [Math.round(Math.random() * 24), Math.round(Math.random() * 24)] })
  }

  moveSnake() {
    if (!this.isGameOver()) {
      let coordinates = this.state.snakeCoordinates;
      let headx = this.state.headx;
      let heady = this.state.heady;

      if (this.state.direction === 'right') {
        headx = headx + 1;
      } else if (this.state.direction === 'left') {
        headx = headx - 1;
      } else if (this.state.direction === 'up') {
        heady = heady - 1;
      } else if (this.state.direction === 'down') {
        heady = heady + 1;
      }

      if (!this.didSnakeEatFood()) {
        coordinates.shift();
      }
      coordinates.push([headx, heady]);
      this.setState({ snakeCoordinates: coordinates, headx: headx, heady: heady });

    }
  }

  getDirection(event) {
    if (event.key === 'ArrowUp' && this.state.direction !== 'down') {
      this.setState({ direction: 'up' })
    } else if (event.key === 'ArrowDown' && this.state.direction !== 'up') {
      this.setState({ direction: 'down' })
    } else if (event.key === 'ArrowRight' && this.state.direction !== 'left') {
      this.setState({ direction: 'right' })
    } else if (event.key === 'ArrowLeft' && this.state.direction !== 'right') {
      this.setState({ direction: 'left' })
    }
  }

  isGameOver() {
    let gameOver = false;
    if (this.state.headx > 24 || this.state.heady > 24 || this.state.headx < 0 || this.state.heady < 0) { //Boundary condition
      gameOver = true;
    } else {
      for (let i = 0; i < this.state.snakeCoordinates.length - 1; i++) {
        if (this.state.headx === this.state.snakeCoordinates[i][0] && this.state.heady === this.state.snakeCoordinates[i][1]) {
          gameOver = true;
          break;
        }
      }
    }
    return gameOver;
  }

  didSnakeEatFood() {
    let snakeAteFood = false;
    if (this.state.headx === this.state.foodCoordinate[0] && this.state.heady === this.state.foodCoordinate[1]) {
      snakeAteFood = true;
      let score = this.state.score + 1;
      console.log(score % 5);
      if (score % 5 === 0) {
        score += 5;
      }
      this.setState({ score });
      this.generateFood();
    }
    return snakeAteFood;
  }

  render() {
    let gameOver = this.isGameOver();
    if (!gameOver) {
      return (
        <div style={{ backgroundColor: '#282c34', height:'100%' }}>
          <div className="board">
            <Snake coordinates={this.state.snakeCoordinates} />
            <div className="food-cell" style={{ "left": this.state.foodCoordinate[0] * 4 + "%", "top": this.state.foodCoordinate[1] * 4 + "%" }}> </div>
          </div>
          <div>
            <p style={{ "fontFamily": "SnakeFont" }}>Score : {this.state.score}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{backgroundColor:'#282c34', height:'100%'}}>
          <div className="board gameover">
            <p >Game Over! Score : {this.state.score}</p>
            <button onClick={() => this.initGame()} className="button">Play again</button>
          </div>
        </div>
      );
    }
  }
}

/**
 * Component to create snake
 * 
 * @param {*} props - Coordinates of snake should be sent as parameter
 */
function Snake(props) {
  return (
    <div>{
      props.coordinates.map((object, index) => {
        return (
          <div className="snake-cell" key={index} style={{ "left": object[0] * 4 + "%", "top": object[1] * 4 + "%" }}> </div>
        );
      })}
    </div>
  )
}

