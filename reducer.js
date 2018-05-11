import { MAKE_GUESS, RESTART_GAME } from './src/actions/types'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GUESS:
      return {
        ...state,
        feedback: action.feedback,
        guesses: [...state.guesses, action.guess]
      }
    case RESTART_GAME:
      return initialState
    default:
      return state
  }
}