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
         username: 'user',
         currentUsername: '',
         playerCount: 0,
         computerCount: 0,
         winLose: false,
         isOver: false,
         registrationModal: true,
         playerIcon: 'player',
         computerIcon: 'computer'
      }

      this.players = JSON.parse(localStorage.getItem('players')) ? JSON.parse(localStorage.getItem('players')) : [];

      //ARRAY DELLE VARIABILI GLOBALI
      this.game = {
         options: ['pancakes', 'hamburger', 'croissant', 'paella'],
         outcomes: [
            [[0, 0, 'tie', 'tie'], [1, 0, 'win', 'lose'], [0, 0, 'tie', 'tie'], [0, 1, 'lose', 'win']],
            [[0, 1, 'lose', 'win'], [0, 0, 'tie', 'tie'], [1, 0, 'win', 'lose'], [0, 0, 'tie', 'tie']],
            [[0, 0, 'tie', 'tie'], [0, 1, 'lose', 'win'], [0, 0, 'tie', 'tie'], [1, 0, 'win', 'lose']],
            [[1, 0, 'win', 'lose'], [0, 0, 'tie', 'tie'], [0, 1, 'lose', 'win'], [0, 0, 'tie', 'tie']]
         ],
         player: 0,
         computer: 0,
         playerScore: 0,
         computerScore: 0,
         playerMoveScore: 0,
         computerMoveScore: 0,
         playerResult: '',
         computerResult: '',
         playerIcon: '',
         computerIcon: ''
      }
   }


   // GENERA UN NUMERO RANDOM PER POTER ASEGNARE LA SCELTA DI COMPUTER
   randomAction() {

      this.game.computer = Math.floor(Math.random() * this.game.options.length);

      var lastRandom;
      var random;
      if (lastRandom === undefined) {
         random = Math.floor(Math.random() * (this.game.options.length));
      }
      else {
         random = Math.floor(Math.random() * (this.game.options.length));
         if (random >= lastRandom) Math.floor(Math.random() * this.game.options.length);
      }
      lastRandom = random;

      this.game.computer = lastRandom;
      this.game.computerIcon = this.game.options[lastRandom];
   }

   // AZIONE DEL GIOCO, A SECONDA DEL RISULTATO ASSEGNA I PUNTI, AGGIORNAMENTO DELLO STATO DEL GIOCO
   actionGame() {

      let youWinLose;
      let finallyGame;

      this.randomAction()

      let playerIndex = this.game.player;
      let computerIndex = this.game.computer;

      [this.game.playerMoveScore, this.game.computerMoveScore, this.game.playerResult, this.game.computerResult] = this.game.outcomes[playerIndex][computerIndex];
      this.game.playerScore += this.game.playerMoveScore;
      this.game.computerScore += this.game.computerMoveScore;

      let updatedPlayers = this.state.players;

      let filteredArray = updatedPlayers.filter(user => user.name.toLowerCase() === this.state.currentUsername.toLowerCase());
      let currentPlayer = filteredArray[0];
      let currentPlayerIndex = updatedPlayers.indexOf(currentPlayer);

      if (this.game.playerScore === 2 || this.game.playerScore === 3) {
         youWinLose = true
         finallyGame = true
         currentPlayer.score += 1;
      } else if (this.game.computerScore === 2 || this.game.computerScore === 3) {
         finallyGame = true
      }

      updatedPlayers[currentPlayerIndex] = currentPlayer;

      if (this.state.currentUsername !== '') {
         localStorage.setItem('players', JSON.stringify(updatedPlayers));
      }

      this.setState({
         ...this.state,
         players: updatedPlayers,
         playerCount: this.game.playerScore,
         computerCount: this.game.computerScore,
         winLose: youWinLose,
         isOver: finallyGame,
         playerIcon: this.game.playerIcon,
         computerIcon: this.game.computerIcon
      })
   }


   //PRENDE VALORE DEL USER
   clickHandler = (value) => {
      this.game.playerIcon = value
      this.game.player = this.game.options.indexOf(value);
      this.actionGame();
   }

   //SETTA USER NAME
   submitUsername = (value) => {
      this.setState({
         ...this.state,
         currentUsername: value
      })
   }

   render() {

      return (
         <>
            <UserBar username={this.state.username} />
            <MatchBoard
               playerIcon={this.state.playerIcon}
               computerIcon={this.state.computerIcon}
               playerScore={this.game.playerScore}
               computerScore={this.game.computerScore}
               playerResult={this.game.playerResult}
               computerResult={this.game.computerResult}
            />
            <IconBar getIcon={this.clickHandler} />


            {
               this.state.isOver ? <UiModal title={''}>
                  <>
                     {
                        this.state.winLose ?
                           <p className={'result_label'} style={{ color: 'green' }}>You won!</p>
                           :
                           <p className={'result_label'} style={{ color: 'red' }}>You lost!</p>
                     }

                     <p className={'bg_label'}
                        style={this.state.winLose ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
                     >Player: {this.state.playerCount} - Computer: {this.state.computerCount}</p>
                     <UiButton label={'Close'} callback={this.closeRankingModal} />
                  </>
               </UiModal>
                  : ''
            }

            {
               this.state.registrationModal ?
                  <UiModal title={'User'} titleClass={'user_heading'}>
                     <>
                        <p>Insert here a name if you want to get into the leaderboard, or your previous name if you have already played</p>
                        <UiInput
                           placeholder={'Username...'}
                           class={'username_input'}
                           callback={this.submitUsername}
                        />
                        <UiButton
                           label={'Close'}
                           callback={this.closeUsernameModal}
                        />
                     </>
                  </UiModal>
                  : ''
            }

         </>
      )
   }

   //CHIUDE MODALE DELL CLASSIFICA
   closeRankingModal = () => {

      this.game.playerScore = 0
      this.game.computerScore = 0
      this.game.playerResult = '';
      this.game.computerResult = '';

      this.setState({
         ...this.state,
         isOver: false,
         playerCount: 0,
         computerCount: 0,
         playerIcon: 'player',
         computerIcon: 'computer',
         playerResult: '',
         computerResult: ''
      })
   }

   //CHIUDE MODALE INIZIALE CON USERNAME E MANDA I DATI DEL USER SE SONO PRESENTI
   closeUsernameModal = () => {

      let newPlayers = this.players;

      let filteredArray = this.players.filter(user => user.name.toLowerCase() === this.state.currentUsername.toLowerCase());

      if (filteredArray.length === 0) {
         newPlayers = this.players.concat([
            {
               name: this.state.currentUsername,
               score: 0
            }
         ])
      }

      this.players = newPlayers;

      if (this.state.currentUsername !== '') {
         localStorage.setItem('players', JSON.stringify(newPlayers));
      }

      this.setState({
         ...this.state,
         players: newPlayers,
         registrationModal: false,
         username: this.state.currentUsername
      })
   }

}

export default Game