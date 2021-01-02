import React from 'react'

import { Container } from './styles'

import CollaborateImg from '../../images/collaborate.png'
import LogoHorizontalBranco from '../../images/logo-horizontal-branco.png'

const LoginPage: React.FC = () => {
  return (
    <Container>
      <div className="left-side">
        <img src={CollaborateImg} alt="Excelsium - The Future is Collaborative!"/>
        <h2>
          "The Future is Collaborative." <span>Red Hat</span>
        </h2>
      </div>
      <div className="right-side">
        <div className="box-login">
          <div className="content-logo">
            <img src={LogoHorizontalBranco} alt="Logo Horizontal Branca Excelsium.js"/>
          </div>
          <form>
            <div className="field-input">
              <label>
                E-mail
              </label>
              <input type="text"/>
            </div>
            <div className="field-input">
              <label>
                Password
              </label>
              <input type="password"/>
            </div>
            <div className="field-button">
              <button>Login</button>
            </div>
          </form>
          <p>
            Dont have an account? <a href="/register">Click here!</a>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage