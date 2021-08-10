import {DECREASE_LIFE, INCREASE_LIFE, RESET_GAME, UPDATE_SCORE} from "../types/game.typings";


export const resetGameAction = () =>({
  type:RESET_GAME
})

export const decreaseLifeArction = () =>({
  type:DECREASE_LIFE
})

export const increaseLifeAction = () =>({
  type:INCREASE_LIFE
})

export const updateScoreAction = (score) =>({
  type:UPDATE_SCORE,
  payload:score
})
