import styled from "styled-components";
import trashIcon from "../../assets/images/trash.svg";

export default function Item({ id, date, description, amount, type, delItem }) {
  return (
    <BalanceItem type={type} id={id}>
      <p>
        <span className="date">{date}</span>
        {description}
      </p>
      <div>
        <p className="value">
          {parseFloat(amount).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <img src={trashIcon} onClick={() => delItem(id)} alt="trash icon" />
      </div>
    </BalanceItem>
  );
}

const BalanceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 10px;
    color: red;
    font-weight: 700;

    img {
      height: 18px;
    }
  }

  padding-right: 15px;

  .date {
    color: #c6c6c6;
    margin-right: 10px;
  }

  .value {
    color: ${(props) => (props.type === "in" ? "#03AC00" : "#C70000")};
  }
`;
