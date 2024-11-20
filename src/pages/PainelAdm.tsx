import React, { useState } from 'react';
import '../styles/PainelAdm.css';

// Definição da interface para um curso
interface Course {
  id: number;
  name: string;
  email: string;
  password: string;
  visible: boolean;
}

const AdminPanel: React.FC = () => {
  // Estado inicial com uma lista de cursos
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Curso 1', email: 'example@email.com', password: 'senh@123#', visible: true },
    { id: 2, name: 'Curso 2', email: 'example@email.com', password: 'sen******#', visible: false },
    { id: 3, name: 'Curso 3', email: 'example@email.com', password: 'sen******#', visible: false },
    { id: 4, name: 'Curso 4', email: 'example@email.com', password: 'sen******#', visible: false },
    { id: 5, name: 'Curso 5', email: 'example@email.com', password: 'sen******#', visible: false },
  ]);

  // Alterna a visibilidade da senha de um curso
  const togglePasswordVisibility = (id: number): void => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, visible: !course.visible } : course
    ));
  };

  // Adiciona um novo curso à lista
  const addCourse = (): void => {
    const newCourse: Course = {
      id: courses.length + 1,
      name: `Curso ${courses.length + 1}`,
      email: 'new@example.com',
      password: 'novaSenha#',
      visible: false,
    };
    setCourses([...courses, newCourse]);
  };

  // Remove um curso da lista
  const deleteCourse = (id: number | undefined): void => {
    if (id !== undefined) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <header className="header">
        <div className="logo">EducaWeb</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#materias">Materiais</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <button className="admin-button">ADMIN <span>⬇</span></button>
          <a href="#sair" className="logout">Sair</a>
        </nav>
      </header>

      <h1>Painel do ADMIN</h1>
      <table className="course-table">
        <thead>
          <tr>
            <th>LISTAGEM</th>
            <th>EMAIL</th>
            <th>SENHA</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.email}</td>
              <td>
                {course.visible ? course.password : '*******'}
                <button
                  onClick={() => togglePasswordVisibility(course.id)}
                  className="toggle-visibility"
                >
                  {course.visible ? '👁️' : '🙈'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons-container">
        <button className="add-button" onClick={addCourse}>ADICIONAR</button>
        <button
          className="delete-button"
          onClick={() => deleteCourse(courses[courses.length - 1]?.id)}
        >
          DELETAR
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
