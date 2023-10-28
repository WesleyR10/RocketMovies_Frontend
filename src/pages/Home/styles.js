import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  padding: 0 64px;
  margin: 45px auto;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
      font-size: 32px;
      font-weight: normal;
    }
    
    a {
      max-width: 207px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3.5px;
      margin-top: 0px;
    }
  }

  .noteMovies {
    margin-top: 37px;
    max-height: 717px;
    overflow-y: auto;
  }
`;