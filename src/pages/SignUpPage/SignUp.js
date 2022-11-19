import Logo from "../../components/Logo";
import Form from "../../components/Form";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <Container>
        <Logo />
        <Form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          <button type="submit">Cadastrar</button>
        </Form>
        <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
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
