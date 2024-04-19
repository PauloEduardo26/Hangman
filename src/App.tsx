import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { Div } from "./DivStyled";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { KeyBoard } from "./components/Keyboard";

function App() {
  const [ wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [ guessedLetters, setGuessedLetters ] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );
  
  const isLoser = incorrectLetters.length>=6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) =>{
    if(guessedLetters.includes(letter) || isWinner || isLoser) return 

    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isLoser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler)

    return () =>{
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  console.log(wordToGuess, guessedLetters);
  
  return (
      <Div>
        <div style={{fontSize: "2rem", textAlign: "center"}}>
          {isWinner && "Venceu Viado - Refresh to start again"}
          {isLoser && "Perdeu Jegue - Refresh to start again"}
        </div>
        
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div style={{alignSelf: "stretch"}}>
          <KeyBoard disabled={isLoser || isWinner} addGuessedLetter={addGuessedLetter} inactiveLetters={incorrectLetters} activeLetters={guessedLetters.filter(l => wordToGuess.includes(l))}/>
        </div>
      </Div>
  )
}

export default App
