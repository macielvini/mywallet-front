import styled from "styled-components";

export default function Logo() {
  return (
    <>
      <StyledLogo>MyWallet</StyledLogo>
    </>
  );
}

const StyledLogo = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
`;
