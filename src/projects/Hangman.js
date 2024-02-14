import { useState, useEffect } from 'react';
import { generate } from 'random-words';
import './Hangman.css';

const keyboard = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m'],
];
const Hangman = () => {
  const [lives, setLives] = useState(10);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [word, setWord] = useState(" ");
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const gameOver = win || lose;

  const generateWord = () => generate({ minLength: 5, maxLength: 9 });

  useEffect(() => setWord(generateWord()), []);

  const clickLetter = letter => {
    if (word.includes(letter)) {
      setCorrectLetters(letters => [...letters, letter]);
      return;
    }
    setLives(count => count - 1);
    setWrongLetters(letters => [...letters, letter]);
  }
  
  const evaluateWord = (word, letters) =>
    word.split("").every(letter => letters.includes(letter))
  
  useEffect(() => {
    if (lives <= 0) {
      setLose(true);
      return;
    }
    setWin(evaluateWord(word, correctLetters));
  }, [word, correctLetters, lives]);
  
  const reset = () => {
    setLives(10);
    setWrongLetters([]);
    setCorrectLetters([]);
    setWin(false);
    setLose(false);
    setWord(generateWord());
  }

  return (
    <div className="game">
      <Gallows lives={lives}/>
      <Word
        word={word}
        correctLetters={correctLetters}
      />
      <Keyboard
        usedLetters={[...correctLetters, ...wrongLetters]}
        clickLetter={clickLetter}
        gameOver={gameOver}
      />
      <GameOver
        gameOver={gameOver}
        win={win}
        reset={reset}
      />
    </div>
  )
}

const Gallows = ({ lives }) => {
  const stage = 10 - lives;
  return (
    <div className="gallows-container">
      {Array.from(Array(stage).keys()).map(i =>
        <div className={`gallows-stage-${i + 1}`}/>
      )}
      {lives === 0 &&
        <>
          <div className="gallows-lose-left">x</div>
          <div className="gallows-lose-right">x</div>
        </>
      }
    </div>
  )
}

const Word = ({ word, correctLetters }) =>
  <div className="letters">
    {word.split("").map(letter =>
      <div className="letter">
        {correctLetters.includes(letter) ? letter : ''}
      </div>
    )}
  </div>

const Keyboard = ({ usedLetters, clickLetter, gameOver }) =>
  <div className="keyboard-container">
    {keyboard.map(row =>
      <div className="row-container" key={`row-${row.map(row => row)}`}>
        {row.map(letter => {
          const isUsed = usedLetters.includes(letter);
          return (
            <div
              key={`letter-${letter}`}
              className={`keyboard-letter ${isUsed ? 'keyboard-letter-used' : ''}`}
              onClick={() => {
                if (!isUsed || gameOver) clickLetter(letter)
              }}
            >
              {letter}
            </div>
          )
        })}
      </div>
    )}
  </div>

const GameOver = ({gameOver, win, reset}) =>
  (gameOver) &&
    <div className="game game-over">
      <div>
        You {win ? 'win' : 'lose'}!
      </div>
      <button onClick={reset}>
        Try again?
      </button>
    </div>

export default Hangman;