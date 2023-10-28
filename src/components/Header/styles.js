import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 105px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LINE_BOTTOM};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  > div:nth-child(2){
    max-width: 630px;    
    margin-bottom: 0px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  
  > img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  } 

  > div{
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Title = styled.div`
    color: ${({ theme }) => theme.COLORS.PINK};

    > h1 {
      font-size: 24px;
      font-weight: 700;
    }
`