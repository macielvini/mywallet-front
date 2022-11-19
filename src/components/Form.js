import styled from "styled-components";

export default function Form({ onSubmit, children }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  input {
    width: 100%;
    height: 58px;
    left: 25px;
    top: 233px;

    font-size: 20px;

    background: #ffffff;
    border-radius: 5px;
    border: none;

    padding-left: 15px;

    &::placeholder {
      font-family: "Raleway";
      font-weight: 400;

      opacity: 0.6;
      color: #000000;
    }

    &:focus {
      outline: 2px solid pink;
    }
  }

  button {
    width: 100%;
    height: 46px;

    font-weight: 700;
    font-size: 20px;

    color: #ffffff;

    background: #a328d6;
    border-radius: 5px;

    border: none;
  }
`;
