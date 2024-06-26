type HangmanWordProps = {
    wordToGuess: string
    guessedLetters: string[]
    reveal?: boolean
}

export function HangmanWord({wordToGuess, guessedLetters, reveal=false}: HangmanWordProps){

    return (
        <div style={{display: "flex", gap: "0.25em", fontSize: "6rem", fontWeight: "bold", fontFamily: "monospace", textTransform: "uppercase"}}>

            {wordToGuess.split("").map((letter, index) => (
                <span style={{borderBottom: "0.1em solid black"}} key={index}>
                    <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}}>{letter}</span>
                </span>
            ))}
        </div>
    )
} 