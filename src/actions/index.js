import {
  MAKE_GUESS,
  RESTART_GAME
} from './types'

export const makeGuess = (feedback, guess) => ({
  type: MAKE_GUESS,
  feedback,
  guess
})

export const restartGame = () => ({
  type: RESTART_GAME
})

