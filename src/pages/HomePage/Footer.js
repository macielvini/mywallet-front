import plusIcon from "../../assets/images/plus.svg";
import minusIcon from "../../assets/images/minus.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooter>
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
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
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

  a {
    width: 100%;
    text-decoration: none;
  }
`;
