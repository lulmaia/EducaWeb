import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
