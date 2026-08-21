import React from 'react';

// 'style' no React aceita um objeto. 'backgroundColor' em vez de 'background-color'
function Header({ corPrincipal, corSecundaria }) {
  const headerStyle = {
    backgroundColor: corPrincipal,
    borderBottom: `5px solid ${corSecundaria}`
  };

  return (
    <header className="p-4 text-white text-center" style={headerStyle}>
      <h1 className="display-4">ReViva</h1>
    </header>
  );
}

export default Header;