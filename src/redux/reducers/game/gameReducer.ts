import {RESET_GAME, DECREASE_LIFE, INCREASE_LIFE, UPDATE_SCORE} from "../../types/game.typings";


const defaultState = {
    live: 5,
    score: 0
}

 const game = (state= defaultState, action : any) => {
    switch (action.type) {
        case DECREASE_LIFE:
            return {
                ...state,
                live : state.live  - 1
            }
        case INCREASE_LIFE:
            return {
                ...state,
                live : state.live + 1
            }
            case UPDATE_SCORE:
            return {
                ...state,
             score: action.payload
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

