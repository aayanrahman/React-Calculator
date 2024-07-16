import {ACTIONS} from "./App.js"

export default function DigitButton( { dispatch, digit} ) {
    return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
        { digit }
    </button>
    )
}

// /Users/Aayan/Documents/GitHub/React-Calculator/react-calculator/src/App.js