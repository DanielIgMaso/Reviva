import React from 'react';

// Recebe os valores e as funções 'onChange' do App.js
function Filtros({ filtroTipo, filtroDificuldade, onTipoChange, onDificuldadeChange }) {
  return (
    <nav className="p-3 mb-4 bg-light rounded shadow-sm">
      <div className="row g-2 justify-content-center">
        
        <div className="col-md-4">
          <label htmlFor="filtro-tipo" className="form-label fw-bold">
            <i className="bi bi-recycle me-1"></i> Tipo de Reutilização
          </label>
          <select 
            id="filtro-tipo" 
            className="form-select" 
            value={filtroTipo} // O valor é controlado pelo React
            onChange={(e) => onTipoChange(e.target.value)} // Chama a função do App
          >
            <option value="todos">Todos os Tipos</option>
            <option value="agua">Água</option>
            <option value="tecido">Tecido</option>
            <option value="plastico">Plástico</option>
            <option value="geral">Geral</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="filtro-dificuldade" className="form-label fw-bold">
            <i className="bi bi-tools me-1"></i> Nível de Dificuldade
          </label>
          <select 
            id="filtro-dificuldade" 
            className="form-select"
            value={filtroDificuldade} // O valor é controlado pelo React
            onChange={(e) => onDificuldadeChange(e.target.value)} // Chama a função do App
          >
            <option value="todos">Todas as Dificuldades</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>
        
      </div>
    </nav>
  );
}

export default Filtros;