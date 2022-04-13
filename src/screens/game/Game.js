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
         playerIcon: '',
         computerIcon: ''
      }

      this.foodObject = {
         pancakes: '',
         hamburger: '',
         croissant: '',
         paella: ''
      }

      this.game = {
         options: ['pancakes', 'hamburger', 'croissant', 'paella'],
         player: '',
         computer: 0,
         moves: 0,
         playerScore: 0,
         computerScore: 0
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

   // ['pancakes', 'hamburger', 'croissant', 'paella'],
   // ['sasso', 'carta', 'forbici', 'acqua'],

   /* 

   pancakes batte hamburger e croissant
   hamburger batte croissant e paella
   croissant batte paella e pancakes
   paella batte pancakes e hamburger

    */


   actionGame() {

      this.randomAction()

      // player = myValue
      console.log('player', this.game.player);

      if (this.game.computer === this.game.player) {
         alert('Pari');
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
         alert(`pancakes batte hamburger e croissant
         hamburger batte croissant e paella
         croissant batte paella e pancakes
         paella batte pancakes e hamburger.

         Il tuo valore é ${this.game.player} e il valore del pc é ${this.game.computer}, piu un punto per te, adesso il conto é Player ${this.game.playerScore} : computer ${this.game.computerScore}`)
      } else {
         ++this.game.computerScore;
         alert(`pancakes batte hamburger e croissant
         hamburger batte croissant e paella
         croissant batte paella e pancakes
         paella batte pancakes e hamburger.

         Il tuo valore é ${this.game.player} e il valore del pc é ${this.game.computer}, piu un punto per PC, adesso il conto é Player ${this.game.playerScore} : computer ${this.game.computerScore}`)
      }

      if (this.game.playerScore == 2 || this.game.playerScore == 3) {
         alert('Hai vinto')
         this.game.playerScore = 0
         this.game.computerScore = 0
      } else if (this.game.computerScore == 2 || this.game.computerScore == 3) {
         alert('Hai perso')
         this.game.computerScore = 0
         this.game.playerScore = 0
      }
   }


   clickHandler = (value) => {
      console.log('value:', value);

      this.game.player = value; //pancakes
      this.actionGame();

      this.setState({
         playerCount: this.game.playerScore,
         computerCount: this.game.computerScore,
         playerIcon: '',
         computerIcon: ''
      })
   }

   componentWillUnmount() {

   }


   render() {

      return (
         <>
            <UserBar />
            <MatchBoard />
            <IconBar getIcon={this.clickHandler} />


            <UiModal
               title={'Name'}>
               <UiInput placeholder={'Name...'} />
               <UiButton label={'Start'} />
               {/* callback={startGame} */}
            </UiModal>

            <UiModal title={'Rules'}>
               {/* regole */}
            </UiModal>

            <UiModal title={'Ranking'}>
               {/* .map() dei dati che arrivano dallo storage */}
            </UiModal>
         </>
      )
   }
}

export default Game