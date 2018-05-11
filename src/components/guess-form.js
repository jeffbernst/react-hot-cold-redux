import React from 'react'
import { connect } from 'react-redux'
import {makeGuess} from '../actions'

import './guess-form.css'

class GuessForm extends React.Component {
  makeGuessFn (guess) {
    guess = parseInt(guess, 10)
    if (isNaN(guess)) {
      this.props.dispatch(makeGuess({feedback: 'Please enter a valid number'}))
      return
    }

    const difference = Math.abs(guess - this.state.correctAnswer)

    let feedback
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...'
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...'
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.'
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!'
    } else {
      feedback = 'You got it!'
    }

    this.props.dispatch(makeGuess(feedback, guess))

    // this.setState({
    //   feedback,
    //   guesses: [...this.state.guesses, guess]
    // });

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold'
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.makeGuessFn) {
      const value = this.input.value
      this.makeGuessFn(value)
    }
    this.input.value = ''
    this.input.focus()
  }

  render () {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    )
  }
}

export const ConnectedGuessForm = connect()(GuessForm)