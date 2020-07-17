import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Gobarber" />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="button">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="go">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
