const HEAD = (
    <div style={{
        width: "50px", 
        height: "50px", 
        borderRadius: "100%", 
        border: "10px solid black", 
        position: "absolute", 
        top:"50px", right: "-30px"
    }}/>
)
const BODY = (
    <div style={{
        width: "10px", 
        height: "100px", 
        background: "black",
        position: "absolute", 
        top:"120px", right: "0"
    }}/>
)
const RIGHT_ARM = (
    <div style={{
        width: "100px", 
        height: "10px", 
        background: "black",
        position: "absolute", 
        rotate: "-30deg",
        transformOrigin: "left bottom",
        top:"150px", right: "-100px"
    }}/>
)
const LEFT_ARM = (
    <div style={{
        width: "100px", 
        height: "10px", 
        background: "black",
        position: "absolute", 
        rotate: "30deg",
        transformOrigin: "right bottom",
        top:"150px", right: "10px"
    }}/>
)
const RIGHT_LEG = (
    <div style={{
        width: "100px", 
        height: "10px", 
        background: "black",
        position: "absolute", 
        rotate: "60deg",
        transformOrigin: "left bottom",
        top:"210px", right: "-90px"
    }}/>
)
const LEFT_LEG = (
    <div style={{
        width: "100px", 
        height: "10px", 
        background: "black",
        position: "absolute", 
        rotate: "-60deg",
        transformOrigin: "right bottom",
        top:"210px", right: "0"
    }}/>
)

type HangmanDrawingProps = { 
    numberOfGuess: number 
}

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]

export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    return (
        <div style={{position: "relative"}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
           
            <div style={{width: "10px", height: "50px", background:"black", position:"absolute", top: "0", right: "0"}}></div>
            <div style={{width: "200px", height: "10px", background:"black", marginLeft: "120px"}}></div>
            <div style={{width: "10px", height: "400px", background:"black", marginLeft: "120px"}}></div>
            <div style={{width: "250px", height: "10px", background:"black"}}></div>
        </div>
    )
} 