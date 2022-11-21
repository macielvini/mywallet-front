import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import trashIcon from "../../assets/images/trash.svg";

export default function Item({ id, date, description, amount, type, delItem }) {
  const navigate = useNavigate();

  return (
    <>
      <BalanceItem type={type} id={id}>
        {/* <Link
        to={{
          pathname: `/edit/${type}`,
          
        }}
      > */}
        <p
          onClick={() =>
            navigate(`/edit/${type}`, {
              state: {
                id: id,
                description: description,
                amount: amount,
              },
            })
          }
        >
          <span className="date">{date}</span>
          {description}
        </p>
        {/* </Link> */}
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
    </>
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

  a {
    text-decoration: none;
  }
`;
