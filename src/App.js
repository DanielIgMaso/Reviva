// src/App.js
import React, { useState, useMemo } from 'react';
import { dadosTutoriais } from './tutoriais';
import Header from './components/Header';
import Filtros from './components/Filtros';
import TutorialGrid from './components/TutorialGrid';
import Footer from './components/Footer';

// Paleta de cores (CSS no JavaScript)
const cores = {
  verdePrincipal: '#2E8B57',
  verdeSecundario: '#8FBC8F',
  fundoClaro: '#F0FFF0',
};

function App() {
  // 1. Estados para os filtros
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroDificuldade, setFiltroDificuldade] = useState('todos');

  // 2. Lógica de filtragem
  // 'useMemo' otimiza o app, só recalculando o filtro quando os dados ou filtros mudarem
  const tutoriaisFiltrados = useMemo(() => {
    return dadosTutoriais.filter(tutorial => {
      const matchTipo = (filtroTipo === 'todos') || (tutorial.tipo === filtroTipo);
      const matchDificuldade = (filtroDificuldade === 'todos') || (tutorial.dificuldade === filtroDificuldade);
      return matchTipo && matchDificuldade;
    });
  }, [filtroTipo, filtroDificuldade]); // Dependências do useMemo

  // 3. Estilo global
  // Em React, aplicamos estilos de fundo assim
  document.body.style.backgroundColor = cores.fundoClaro;

  return (
    <div className="App">
      <Header corPrincipal={cores.verdePrincipal} corSecundaria={cores.verdeSecundario} />
      
      <main className="container my-4">
        <Filtros 
          // Passa os valores atuais dos filtros
          filtroTipo={filtroTipo}
          filtroDificuldade={filtroDificuldade}
          // Passa as funções para ATUALIZAR os filtros
          onTipoChange={setFiltroTipo}
          onDificuldadeChange={setFiltroDificuldade}
        />
        
        <TutorialGrid tutoriais={tutoriaisFiltrados} />
      </main>

      <Footer />
    </div>
  );
}

export default App;