import styled from 'styled-components';

export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 10px;
`;
export const LabelUser = styled.label`
  margin-bottom: 5px;
`;

export const InputUser = styled.input`
  width: 300px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border: none;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const ButtonAdd = styled.button`
  width: 100px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 3px;

  background: linear-gradient(
    95.2deg,
    rgb(173, 252, 234) 26.8%,
    rgb(192, 229, 246) 64%
  );
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background: linear-gradient(
      to right,
      rgb(182, 244, 146),
      rgb(51, 139, 147)
    );
  }
`;
