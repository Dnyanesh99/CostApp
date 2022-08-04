import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  border-color: white;
  margin: 5px 5px;
  height: 20px;
  color: aqua;
  @hover {
    border-color: red;
  }
`;
export const FormConatiner = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled.button`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.w};
  border-radius: 10px;
  box-shadow: 20px;
`;
