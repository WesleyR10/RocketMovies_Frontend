import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:  "header" "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  padding: 0 80px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
  .title{
    display: flex;
  }


  .user {
    margin-top: 24px;

    display: flex;
    align-items: center;
    gap: 8px;
    
    img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  }
`