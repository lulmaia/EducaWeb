import React from 'react';
import styled from 'styled-components';

interface TitleProps {
    children: React.ReactNode;
}

const StyledTitle = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Title: React.FC<TitleProps> = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
