import React from 'react';

import Feedback from './feedback';
import { ConnectedGuessForm } from './guess-form';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <ConnectedGuessForm  />
    </section>
  );
}
