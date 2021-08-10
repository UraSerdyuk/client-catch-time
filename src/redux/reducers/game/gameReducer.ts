import {RESET_GAME} from "../../types/game.typings";


const defaultState = {
    live: 5,
    score: 0
}

 const game = (state= defaultState, action : any) => {
    switch (action.type) {
        case "DECREASE_LIFE":
            return {
                ...state,
                live : action.payload
            }
        case "INCREASE_LIFE":
            return {
                ...state,
                live : action.payload
            }
        case RESET_GAME:
            return {
                live : 5,
                score: 0
            }
        default: return  state
    }
}

export default game;

