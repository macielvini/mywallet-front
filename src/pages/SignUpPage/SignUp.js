import Logo from "../../components/Logo";
import Form from "../../components/Form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../api/api";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function formSignUp(e) {
    e.preventDefault();

    const body = form;
    signUp(body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <Container>
        <Logo />
        <Form onSubmit={formSignUp}>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={(e) => formHandler(e)}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={(e) => formHandler(e)}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={(e) => formHandler(e)}
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={(e) => formHandler(e)}
          />
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
