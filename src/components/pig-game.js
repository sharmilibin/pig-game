import React, { Component } from 'react';

class Piggy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score_1: '0',
            current_1: '0',
            score_2: '0',
            current_2: '0',
            activePlayer: 'player-1',
            winner: ''

        }
        this.dice = this.dice.bind(this);
        this.hold = this.hold.bind(this);
        this.reset = this.reset.bind(this);



    };

    dice() {
        var random1 = Math.floor(Math.random() * 6) + 1;
        if (random1 === 1) {
            if (this.state.activePlayer === 'player-1') {
                this.setState({ activePlayer: 'player-2' });
                this.setState({ current_1: '0' });

            } else {
                this.setState({ activePlayer: 'player-1' });
                this.setState({ current_2: '0' });
            }

        }

        else {
            if (this.state.activePlayer === 'player-1') {
                var current = +this.state.current_1 + random1;
                this.setState({ current_1: current });

            } else {
                var current = +this.state.current_2 + random1;
                this.setState({ current_2: current });
            }


        }

    }
    hold() {
        if (this.state.activePlayer === 'player-1') {
            var score = +this.state.current_1 + +this.state.score_1;
            this.setState({ score_1: score });
            this.setState({ current_1: 0 });
            this.setState({ activePlayer: 'player-2' });
        }
        else {
            var score = +this.state.current_2 + +this.state.score_2;
            this.setState({ score_2: score });
            this.setState({ current_2: 0 });
            this.setState({ activePlayer: 'player-1' });

        }

        if ((this.state.score_1 || this.state.score_2) >= 100) {
            this.setState({ current_1: 0 });
            this.setState({ current_2: 0 });
            this.setState({ score_1: 0 });
            this.setState({ score_2: 0 });

        }
    }

    reset() {
            this.setState({ current_1: 0 });
            this.setState({ current_2: 0 });
            this.setState({ score_1: 0 });
            this.setState({ score_2: 0 });
    }
    render() {
        return (
            <>
                <div className="flex-grid">
                    <div className="col">

                        <div>
                            <div>
                                <img src="assets/sh1.jpg" height="50" width="50" alt="Player"></img>
                            </div>

                            <div id="player-1"> player-1  </div>
                            <input type="text" id="score-1" value={this.state.score_1} />

                            <div>
                                <input type="text" id="current-1" value={this.state.current_1} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <button id="roll_dice" onClick={this.dice}>Roll Dice</button>

                        <div><button id="hold" onClick={this.hold}>Hold</button></div>
                        {this.state.score_1 >= 100 && <div><h1>Game Over</h1> <h1> Game Over Congratulations!!! The Winner is  Player-1</h1> </div>}
                        {this.state.score_2 >= 100 && <div><h1>Game Over</h1> <h1> Game Over Congratulations!!! The Winner is  Player-2</h1> </div>}

                        <div><button id="hold" onClick={this.reset}>Reset</button></div>
                    </div>
                    <div className="col">
                        <div>
                            <div>
                                <img src="assets/sh1.jpg" height="50" width="50" alt="Player"></img>
                            </div>
                            player-2
                 <div id="player-2"> <div>
                                <input type="text" id="score-2" value={this.state.score_2} />
                            </div>

                                <input type="text" id="current-2 " value={this.state.current_2} />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }

}
export default Piggy;