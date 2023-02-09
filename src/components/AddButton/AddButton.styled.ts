import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #ff3e00;
  height: 120px;
  width: 350px;
  margin-bottom: 50px;
  border: none;
  font-family: 'Sulphur Point';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 41px;
  transition: background-color 0.25s ease;
  cursor: pointer;



  &:hover {
    background-color: rgba(255, 62, 0, 0.85);
  }

  &:active {
    background-color: #ff3e00;
    transform: translateY(4px);
  }
`;
