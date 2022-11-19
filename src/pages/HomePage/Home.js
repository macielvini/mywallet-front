import styled from "styled-components";
import logoutIcon from "../../assets/images/logout.svg";
import plusIcon from "../../assets/images/plus.svg";
import minusIcon from "../../assets/images/minus.svg";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

const statements = [
  {
    _id: "6376ec49266d69e48c50b689",
    timestamp: 1668738121973,
    date: "08/10",
    description: "donnut",
    amount: 10,
    transaction: "out",
  },
  {
    _id: "6376ea64ec6212b427f05e05",
    timestamp: 1668737636588,
    date: "10/09",
    description: "ice cream",
    amount: 1.9,
    transaction: "out",
  },
];

export default function Home() {
  return (
    <Container>
      <header>
        <PageTitle text={`Ola ${"Fulano"}`} />
        <img src={logoutIcon} alt="" />
      </header>

      <StatementContainer>
        <Statement>
          {statements.map((item) => (
            <BalanceItem key={item._id}>
              <p>
                <span className="date">{item.date}</span>
                {item.description}
              </p>
              <p className="value">
                {item.amount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </BalanceItem>
          ))}
        </Statement>
        <Balance>
          <p className="saldo">SALDO</p>
          <p className="total">2500.90</p>
        </Balance>
      </StatementContainer>

      <Footer>
        <Link to={"/in"}>
          <div>
            <img src={plusIcon} alt="" />
            <p>Nova entrada</p>
          </div>
        </Link>
        <Link to={"/out"}>
          <div>
            <img src={minusIcon} alt="" />
            <p>Nova saída</p>
          </div>
        </Link>
      </Footer>
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
    color: #03ac00;
  }
`;

const BalanceItem = styled.li`
  display: flex;
  justify-content: space-between;

  .date {
    color: #c6c6c6;
    margin-right: 10px;
  }

  .value {
    color: ${(props) => (props.type === "in" ? "#03AC00" : "#C70000")};
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  div {
    height: 114px;

    background-color: #a328d6;

    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    img {
      height: 24px;
    }
    p {
      font-weight: 700;
      font-size: 17px;

      color: #ffffff;
      width: 32px;
    }
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

  a {
    width: 100%;
    text-decoration: none;
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
