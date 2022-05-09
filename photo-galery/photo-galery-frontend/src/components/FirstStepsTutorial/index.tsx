import React from 'react';

import { Container, TextContainer } from './styles';

function FirstStepsTutorial() {
  return (
    <Container>
      <TextContainer>
        <div>
          <h2>Welcome</h2>
          <h3>Thanks for choosing Galerie</h3>
          <h4>
            To upload your first Photo you just need to follow the steps below
          </h4>
        </div>
        <div>
          <ol>
            <li>
              1 - Click on the button <strong> Upload </strong> on the top
              right.
            </li>
            <li>2 - Drag and drop your image or click to choose your image.</li>
            <li>3 - After the upload click on done.</li>
            <li>
              {' '}
              4 - Click on your image to preview it, share with your friend or
              download.
            </li>
          </ol>
        </div>
      </TextContainer>
    </Container>
  );
}

export default FirstStepsTutorial;
