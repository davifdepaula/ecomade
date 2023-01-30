import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 15px;
  width: 300px;

  > span {
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
  }

  > label {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: start;
    font-family: montserrat,sans-serif;
    text-transform: uppercase;
    font-size: .85rem;
    font-weight: 500;

    > input {
      margin-top: 5px;
      height: 44px;
      box-shadow: none;
      width: 100%;
      padding: 7px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #dbdbdb;
    }
  }
`;

export default Form;
