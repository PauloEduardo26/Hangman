import styles from "./StyledKeyBoard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type HangmanKeyboardProps = {
    activeLetters: string[] 
    disabled?: boolean
    inactiveLetters: string[] 
    addGuessedLetter: (letter: string) => void
}

export function KeyBoard({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: HangmanKeyboardProps){
    return(
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: "0.5rem"}}>
            {KEYS.map(k =>{ 
                const isActive = activeLetters.includes(k);
                const isInactive = inactiveLetters.includes(k);
                return <button disabled={isActive || isInactive || disabled} onClick={() => addGuessedLetter(k)} key={k} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}>{k}</button>         
            })}
        </div>
    )
} 

// return <button key={k} className={`${styles.btn}`}>{k}</button>