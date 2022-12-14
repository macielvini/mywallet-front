import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { getUserStatement, deleteStatement } from "../../api/api";
import Footer from "./Footer";
import Item from "./StatementItem";

import PageTitle from "../../components/PageTitle";
import logoutIcon from "../../assets/images/logout.svg";

export default function Home() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [statement, setStatement] = useState([]);
  const firstName = localStorage.getItem("name").split(" ")[0];

  useEffect(() => {
    getStatement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getStatement() {
    getUserStatement()
      .then((res) => {
        setStatement(res.data);
        setBalance(sumStatement(res.data));
      })
      .catch((error) => console.log(error));
  }

  function sumStatement(arr) {
    let sum = 0;
    arr.forEach(({ type, amount }) =>
      type === "in" ? (sum += parseFloat(amount)) : (sum -= parseFloat(amount))
    );
    return sum;
  }

  function logOut() {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    navigate("/");
  }

  function delItem(id) {
    deleteStatement(id)
      .then((res) => getStatement())
      .catch((err) => console.log(err.response.data));
  }

  return (
    <Container>
      <header>
        <PageTitle text={`Olá, ${firstName}`} />
        <img src={logoutIcon} alt="" onClick={logOut} />
      </header>

      <StatementContainer>
        <Statement>
          {statement.length === 0
            ? "Nenhum registro ainda"
            : statement.map((item) => (
                <Item
                  key={item._id}
                  id={item._id}
                  date={item.date}
                  description={item.description}
                  amount={item.amount}
                  type={item.type}
                  delItem={delItem}
                  onClick={() => navigate("/register/edit")}
                />
              ))}
        </Statement>
        <Balance balance={balance}>
          <p className="saldo">SALDO</p>
          <p className="total">
            {balance.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Balance>
      </StatementContainer>
      <Footer />
    </Container>
  );
}

const StatementContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  border-radius: 5px;
  padding: 23px 12px 12px;

  position: relative;
  overflow-y: scroll;
`;

const Statement = styled.ul`
  overflow: scroll;

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const Balance = styled.ul`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;

  font-size: 17px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  padding: 0 15px;
  font-weight: 700;
  .total {
    color: ${(props) => (props.balance < 0 ? "#C70000" : "#03ac00")};
  }
`;

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

  header {
    display: flex;
    justify-content: space-between;
    img {
      /* width: 100%; */
      height: 24px;
    }
  }
`;
