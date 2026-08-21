import React from 'react';
import TutorialCard from './TutorialCard';

function TutorialGrid({ tutoriais }) {
  return (
    <section className="row g-4">
      {/* Verifica se a lista de tutoriais filtrados está vazia.
        Se estiver, mostra uma mensagem.
      */}
      {tutoriais.length === 0 ? (
        <div className="col-12 text-center text-muted">
          <p className="fs-4">
            <i className="bi bi-emoji-frown me-2"></i>
            Nenhum tutorial encontrado com esses filtros.
          </p>
        </div>
      ) : (
        // Se não estiver vazia, mapeia (faz um loop) e cria um Card para cada item
        tutoriais.map(tutorial => (
          <div className="col-12 col-md-6 col-lg-4" key={tutorial.id}>
            <TutorialCard tutorial={tutorial} />
          </div>
        ))
      )}
    </section>
  );
}

export default TutorialGrid;