import styled from "styled-components";

export default function Item({ key, date, description, amount, type }) {
  return (
    <BalanceItem key={key} type={type}>
      <p>
        <span className="date">{date}</span>
        {description}
      </p>
      <p className="value">
        {amount.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </BalanceItem>
  );
}

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
