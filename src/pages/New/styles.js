import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
    border-radius: 8px;
  }
`

export const Form = styled.form`
  padding: 0 80px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-bottom: 36px;
  }

  .inputs {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    gap: 40px;
    
    a{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    a:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`