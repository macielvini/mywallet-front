import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addRecordToStatement } from "../../api/api";
import Form from "../../components/Form";
import PageTitle from "../../components/PageTitle";

export default function Transaction() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    amount: "",
    description: "",
  });

  useEffect(() => {
    if (!typeIsValid()) navigate("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function typeIsValid() {
    return ["in", "out"].includes(type);
  }

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addItem(e) {
    e.preventDefault();

    const body = {
      ...form,
      type: type,
    };
    addRecordToStatement(body)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err?.response.data));
  }

  return (
    <>
      <Container>
        <PageTitle text={type === "in" ? "Nova entrada" : "Nova saída"} />
        <Form onSubmit={addItem}>
          <input
            type="number"
            placeholder="Valor"
            name="amount"
            value={form.amount}
            onChange={(e) => formHandler(e)}
            required
          />
          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Descrição"
            onChange={(e) => formHandler(e)}
            required
          />
          <button type="submit">
            {type === "in" ? "Salvar entrada" : "Salvar saída"}
          </button>
        </Form>
        <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 30px;

  padding: 25px;

  & > div {
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
  }

  header {
    display: flex;
    justify-content: space-between;
    img {
      /* width: 100%; */
      height: 24px;
    }
  }
`;

const BackButton = styled.button`
  /* text-decoration: underline; */
  background: none;
  border: none;
  /* font-weight: 700; */
  font-size: 18px;

  color: #ffffff;
`;
