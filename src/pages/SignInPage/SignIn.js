import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";

export default function SignIn() {
  return (
    <>
      <Container>
        <Logo />
        <Form>
          <input placeholder="E-mail" type="text" />
          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>
        </Form>
        <Link to={"/sign-up"}>Primeira vez? Cadastre-se!</Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  text-align: center;

  padding: 25px;

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
