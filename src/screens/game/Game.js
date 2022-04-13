import React, { Component } from 'react'

import UiModal from '../../components/hookComponents/uiModal/UiModal'
import UiButton from '../../components/hookComponents/uiButton/UiButton'
import UiInput from '../../components/hookComponents/uiInput/UiInput'
import UserBar from '../../components/hookComponents/userBar/UserBar'
import MatchBoard from '../../components/hookComponents/matchBoard/MatchBoard'
import IconBar from '../../components/hookComponents/iconBar/IconBar'

class Game extends Component {

   constructor(props) {
      super(props);

      this.state = {
         playerCount: 0,
         computerCount: 0,
         winLose: false,
         isOver: false,
         playerIcon: 'player',
         computerIcon: 'computer'
      }

      this.players = [
         { name: '', win: 0, lose: 0, }
      ]
      this.game = {
         options: ['pancakes', 'hamburger', 'croissant', 'paella'],
         player: '',
         computer: '',
         moves: 0,
         playerScore: 0,
         computerScore: 0,
         playerIcon: '',
         computerIcon: ''
      }
   }

   componentDidMount() {

   }

   componentDidUpdate() {

   }

   randomAction() {

      this.game.computer = Math.floor(Math.random() * this.game.options.length);

      var lastRandom;
      var random;
      if (lastRandom === undefined) {
         random = Math.floor(Math.random() * (this.game.options.length - 1 + 1));
      }
      else {
         random = Math.floor(Math.random() * (this.game.options.length - 1));
         if (random >= lastRandom) random += 1;
      }
      lastRandom = random;

      this.game.computer = this.game.options[lastRandom];
      console.log('pc', this.game.computer);
   }

   actionGame() {

      let youWinLose;
      let finallyGame;

      this.randomAction()

      console.log('player', this.game.player);

      if (this.game.computer === this.game.player) {
      } else if (
         (this.game.player === 'pancakes' && this.game.computer === 'hamburger') ||
         (this.game.player === 'pancakes' && this.game.computer === 'croissant') ||
         (this.game.player === 'hamburger' && this.game.computer === 'croissant') ||
         (this.game.player === 'hamburger' && this.game.computer === 'paella') ||
         (this.game.player === 'croissant' && this.game.computer === 'paella') ||
         (this.game.player === 'croissant' && this.game.computer === 'pancakes') ||
         (this.game.player === 'paella' && this.game.computer === 'pancakes') ||
         (this.game.player === 'paella' && this.game.computer === 'hamburger') ||
         (this.game.player === 'pancakes' && this.game.computer === 'hamburger') ||
         (this.game.player === 'pancakes' && this.game.computer === 'croissant')) {
         ++this.game.playerScore;
      } else {
         ++this.game.computerScore;
      }

      if (this.game.playerScore === 2 || this.game.playerScore === 3) {

         youWinLose = true
         finallyGame = true
         // this.game.playerScore = 0
         // this.game.computerScore = 0

      } else if (this.game.computerScore === 2 || this.game.computerScore === 3) {

         finallyGame = true
         // this.game.computerScore = 0
         // this.game.playerScore = 0

      }

      this.setState({
         ...this.state,
         playerCount: this.game.playerScore,
         computerCount: this.game.computerScore,
         winLose: youWinLose,
         isOver: finallyGame,
         playerIcon: this.game.playerIcon,
         computerIcon: this.game.computer
      })
   }


   clickHandler = (value) => {
      this.game.playerIcon = value
      
      this.game.player = value;
      this.actionGame();
   }

   componentWillUnmount() {

   }


   render() {

      console.log(this.state.isOver)

      return (
         <>
            <UserBar />
            <MatchBoard
               playerIcon={this.state.playerIcon}
               computerIcon={this.state.computerIcon}
               playerScore={this.game.playerScore}
               computerScore={this.game.computerScore}
            />
            <IconBar getIcon={this.clickHandler} />


            {
               this.state.isOver ? <UiModal title={''}>
                  {
                     this.state.winLose ? <p className={'result_label'} style={{color: 'green'}}>You won!</p> : <p className={'result_label'} style={{color: 'red'}}>You lost :(</p>
                  }
                  <p className={'bg_label'} style={this.state.winLose ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>Player: {this.state.playerCount} - Computer: {this.state.computerCount}</p>
                  <p>Vuoi fare parte della clasifica? </p>
                  <UiButton label={'Close'} callback={this.closeModal} />
               </UiModal> : ''
            }

         </>
      )
   }

   closeModal = () => {

      this.game.playerScore = 0
      this.game.computerScore = 0

      this.setState({
         ...this.state,
         isOver: false,
         playerCount: 0,
         computerCount: 0,
         playerIcon: 'player',
         computerIcon: 'computer'
      })
   }

}

export default Game