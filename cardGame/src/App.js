import { useState, useEffect, useCallback } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "./img/blue.webp", matched: false },
  { "src": "./img/dark.webp", matched: false },
  { "src": "./img/exodia.webp", matched: false },
  { "src": "./img/obelisk.webp", matched: false },
  { "src": "./img/ra.webp", matched: false },
  { "src": "./img/slifer.webp", matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(5)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [score, setScore] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(5)
    setScore(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const checkTurn = useCallback(() => {
    if(turns === 0) {
      shuffleCards()
    }
  },[turns])



  const handleChoice = (card) => {
    
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setScore(prevScore => prevScore + 1)
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })   
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
        setTimeout(() => checkTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo, checkTurn])


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns - 1)
    setDisabled(false)
  }


  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    checkTurn()
  })

  return (
    <div className="App">
      <h1>Flippin Cards</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled = {disabled}
          />
        ))}
      </div>
      <div className='turnScore'>
        <p>Turns : {turns}</p>
        <p>Score: {score}</p>
      </div> 
    </div>
  );
}

export default App