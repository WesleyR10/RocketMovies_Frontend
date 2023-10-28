import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK};
color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

height: 56px;
border: 0;
padding: 0 16px;
margin-top: 16px;
border-radius: 10px;
font-weight: 500;

&:disabled {
  opacity: 0.5;
}
`;