import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin: 20px 0;
  padding-left: 10px;

  h3 {
    color: #f5f5f5f5;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  div {
    display: flex;
    align-items: flex-start;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0px;
    width: 75%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      color: #ffffff;
      background-color: #0f4670;
      border: none;
      border-radius: 5px;
      margin: 5px;
      padding: 0.5rem;

      :hover {
        transition: 1.2s;
      }
    }
  }

  .lista-de-favoritos-and-button {
    display: flex;
    justify-content: space-around;

    margin-bottom: 1rem;

    button {
      align-self: center;
      align-items: center;
    }
  }

  button {
    height: 35px;
    color: #ffffff;
    background-color: #0f4670;
    border: none;
    border-radius: 5px;
    padding: 0 0.5rem;
    cursor: pointer;

    :hover {
      transition: 1.2s;
      background-color: #0f3999;
      transform: scale(1.1);
      border: 1px solid white;
    }
  }
`;

export default Container;
