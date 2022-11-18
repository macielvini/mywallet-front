import { Link } from "react-router-dom";
import styled from "styled-components";
import SignInForm from "./SignInForm";

export default function SignIn() {
  return (
    <>
      <Container>
        <Logo>MyWallet</Logo>
        <SignInForm>
          <input placeholder="E-mail" type="text" />
          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>
        </SignInForm>
        <Link to={"/sign-up"}>Primeira vez? Cadastre-se!</Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  text-align: center;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 30px;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;

    /* width: 100%; */
  }
`;

const Logo = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  input {
    width: 326px;
    height: 58px;
    left: 25px;
    top: 233px;

    font-size: 20px;

    background: #ffffff;
    border-radius: 5px;
    border: none;

    padding-left: 15px;

    &::placeholder {
      font-family: "Raleway";
      font-weight: 400;

      opacity: 0.6;
      color: #000000;
    }

    &:focus {
      outline: 2px solid pink;
    }
  }

  button {
    font-weight: 700;
    font-size: 20px;

    color: #ffffff;

    width: 326px;
    height: 46px;

    background: #a328d6;
    border-radius: 5px;

    border: none;
  }
`;
