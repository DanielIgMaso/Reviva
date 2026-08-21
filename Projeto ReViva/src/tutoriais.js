// src/tutoriais.js

// Usamos 'placeholder.com' para imagens genéricas
const IMAGENS = {
  agua: "https://via.placeholder.com/400x250/4682B4/FFFFFF?text=Água",
  tecido: "https://via.placeholder.com/400x250/8B4513/FFFFFF?text=Tecido",
  plastico: "https://via.placeholder.com/400x250/E67E22/FFFFFF?text=Plástico",
  geral: "https://via.placeholder.com/400x250/777777/FFFFFF?text=Geral"
};

export const dadosTutoriais = [
  {
    id: 1,
    titulo: "Reuso de Água da Máquina de Lavar",
    descricao: "Aprenda a captar e filtrar a água do enxágue para lavar calçadas e o quintal.",
    tipo: "agua",
    dificuldade: "facil",
    imagem: IMAGENS.agua
  },
  {
    id: 2,
    titulo: "Bolsa Ecológica de Retalhos",
    descricao: "Transforme pedaços de tecido e roupas velhas em uma bolsa de compras estilosa.",
    tipo: "tecido",
    dificuldade: "medio",
    imagem: IMAGENS.tecido
  },
  {
    id: 3,
    titulo: "Cisterna Caseira para Água da Chuva",
    descricao: "Um projeto mais avançado para captar água da chuva com tambores e filtros.",
    tipo: "agua",
    dificuldade: "dificil",
    imagem: IMAGENS.agua
  },
  {
    id: 4,
    titulo: "Horta Vertical com Garrafas PET",
    descricao: "Crie uma horta compacta para temperos usando garrafas plásticas na parede.",
    tipo: "plastico",
    dificuldade: "facil",
    imagem: IMAGENS.plastico
  },
  {
    id: 5,
    titulo: "Composteira Doméstica (Minhocário)",
    descricao: "Transforme seus resíduos orgânicos de cozinha em adubo rico para suas plantas.",
    tipo: "geral",
    dificuldade: "medio",
    imagem: IMAGENS.geral
  },
  {
    id: 6,
    titulo: "Panos de Limpeza com Camisetas Velhas",
    descricao: "A forma mais simples de reutilizar camisetas de algodão que não servem mais.",
    tipo: "tecido",
    dificuldade: "facil",
    imagem: IMAGENS.tecido
  }
];