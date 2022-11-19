import styled from "styled-components";
import logoutIcon from "../../assets/images/logout.svg";
import PageTitle from "../../components/PageTitle";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Item from "./StatementItem";

const statements = [
  {
    _id: "6376ec49266d69e48c50b689",
    timestamp: 1668738121973,
    date: "08/10",
    description: "donnut",
    amount: 10,
    type: "out",
  },
  {
    _id: "6376ea64ec6212b427f05e05",
    timestamp: 1668737636588,
    date: "10/09",
    description: "ice cream",
    amount: 1.9,
    type: "out",
  },
  {
    _id: "6376ea64ec6212b427f5e05",
    timestamp: 166873763688,
    date: "10/09",
    description: "payment",
    amount: 1000,
    type: "in",
  },
];

export default function Home() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    statements.forEach((s) =>
      s.type === "in"
        ? setBalance(balance + s.amount)
        : setBalance(balance - s.amount)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <header>
        <PageTitle text={`Ola ${"Fulano"}`} />
        <img src={logoutIcon} alt="" />
      </header>

      <StatementContainer>
        <Statement>
          {statements.map((item) => (
            <Item
              key={item._id}
              date={item.date}
              description={item.description}
              amount={item.amount}
              type={item.type}
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
  overflow: scroll;
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
