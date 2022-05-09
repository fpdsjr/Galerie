import React from 'react';

import studioPhotographer from '../../assets/studio-photographer-animate.svg';
import FirstStepsTutorial from '../FirstStepsTutorial';
import { Container } from './styles';

function FirstSteps() {
  return (
    <Container>
      <FirstStepsTutorial />
      <img src={studioPhotographer} alt="upload" />
    </Container>
  );
}

export default FirstSteps;
