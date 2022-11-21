import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editStatement } from "../../api/api";
import Form from "../../components/Form";
import PageTitle from "../../components/PageTitle";

export default function EditTransaction() {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { id, amount, description } = location.state;

  const [form, setForm] = useState({
    amount: amount ? amount : "",
    description: description ? description : "",
  });

  function typeIsValid() {
    return ["in", "out"].includes(type);
  }

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function editItem(e) {
    e.preventDefault();

    const body = {
      ...form,
      type: type,
    };

    editStatement(id, body)
      .then(() => navigate("/home"))
      .catch((err) => console.log(err?.response.data));
  }

  useEffect(() => {
    if (!typeIsValid()) navigate("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <PageTitle text={type === "in" ? "Editar entrada" : "Editar saída"} />
        <Form onSubmit={editItem}>
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
            {type === "in" ? "Atualizar entrada" : "Atualizar saída"}
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
