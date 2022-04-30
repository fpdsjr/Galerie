import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import { Redirect } from './components/Redirect';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthProvider';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <AuthProvider>
      <AnimatePresence exitBeforeEnter initial={false}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Main />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <Redirect>
                  <Home />
                </Redirect>
              }
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
