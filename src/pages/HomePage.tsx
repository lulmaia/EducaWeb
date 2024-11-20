import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

const HomePage: React.FC = () => {
    const handleClick = () => {
        alert('Cadastro Realizado');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
            <Title>Bem-vindo a EducaWeb</Title>
            <Button onClick={handleClick} label="Faça o seu cadastro" />
        </div>
    );
};

export default HomePage;
