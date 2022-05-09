import { createGlobalStyle } from 'styled-components';

import blobMainGallery from '../assets/main-gallery-blob.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --baby-blue: #70d6ffff;
    --french-pink: #ff70a6ff;
    --mikado-yellow: #ffc728ff;
    --deep-space-sparkle: #4c5b61ff;
    --dark-slate-gray: #2c423fff;
    --background: #f0f2f5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Encode Sans Expanded', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3 , h4 , h5 , h6 , strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-image-modal {
    margin: 0 auto;
    width: 100%;
    max-width: 88%;
    height: 90%;
    border-radius: 0.25rem;
    background-color: #f0f2f5;
    border: none;
  }

  .react-modal-image-modal-size {
    margin: 0 auto;
    width: 100%;
    max-width: 88%;
    height: 100%;
    border-radius: 0.25rem;
    background-color: #f0f2f5;
    overflow: scroll;
    margin-top: 30px;
    border: none;
  }
  
  .react-modal-image-modal-size:focus {
    outline: none;
  }
  
  .react-modal-image-modal-size::-webkit-scrollbar {
    display: none;
  }

  .react-modal-upload-modal {
    margin: 0 auto;
    margin-top: 50px;
    width: 70%;
    max-width: 88%;
    height: 88%;
    border-radius: 0.25rem;
    background-color: #f0f2f5;
    overflow: auto;
  }

  .react-modal-upload-modal::-webkit-scrollbar {
    display: none;
  }
`;
