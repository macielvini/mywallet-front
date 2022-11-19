import styled from "styled-components";

export default function PageTitle({ text }) {
  return (
    <>
      <StyledTitle>{text}</StyledTitle>
    </>
  );
}

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 26px;

  color: #ffffff;
`;
