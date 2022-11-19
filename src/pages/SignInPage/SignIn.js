import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { useState } from "react";
import { signIn } from "../../api/api";

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function formSignIn(e) {
    e.preventDefault();
    const body = form;
    signIn(body)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <Container>
        <Logo />
        <Form onSubmit={formSignIn}>
          <input
            placeholder="E-mail"
            type="text"
            onChange={(e) => formHandler(e)}
            name="email"
            value={form.email}
          />
          <input
            placeholder="Senha"
            type="password"
            onChange={(e) => formHandler(e)}
            name="password"
            value={form.password}
          />
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
