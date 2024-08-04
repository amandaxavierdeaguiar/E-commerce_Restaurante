import React, { useState, useRef } from 'react';
import * as Icon from 'react-bootstrap-icons';
//import './login2.css';

function Login() {
  const [active, setActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const wrapperRef = useRef(null);
  const loginLinkRef = useRef(null);
  const registerLinkRef = useRef(null);
  const btnPopupRef = useRef(null);
  const iconCloseRef = useRef(null);

  const handleBtnPopupClick = () => {
    setShowLogin(true);
  };

  const handleIconCloseClick = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div>
      <div className="btnLogin-popup" ref={btnPopupRef} onClick={handleBtnPopupClick}>
        <span className="btnLogin-popup">
          <Icon.PersonCircle />
        </span>
      </div>

      {showLogin && (
        <div className="wrapper" ref={wrapperRef}>
          <span className="icon-close" ref={iconCloseRef} onClick={handleIconCloseClick}>
            <Icon.X />
          </span>

          <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <Icon.Envelope />
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <Icon.Lock />
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Relembre
                </label>
                <a href="#">Esqueceu sua senha?</a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="login-register">
                <p>
                  Não tem conta?{' '}
                  <a href="#" className="register-link" ref={registerLinkRef} onClick={handleRegisterClick}>
                    Crie uma conta
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="wrapper" ref={wrapperRef}>
          <span className="icon-close" ref={iconCloseRef} onClick={handleIconCloseClick}>
            <Icon.X />
          </span>

          <div className="form-box register">
            <h2>Registre</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <Icon.Lock />
                </span>
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <Icon.Lock />
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <Icon.Lock />
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Eu aceito os termos e as condições
                </label>
              </div>
              <button type="submit" className="btn">
                Crie sua conta
              </button>
              <div className="login-register">
                <p>
                  Já tem conta?{' '}
                  <a href="#" className="login-link" ref={loginLinkRef} onClick={handleLoginClick}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;