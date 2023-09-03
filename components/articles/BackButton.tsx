import React from 'react';

export default function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button onClick={goBack} className="Basile__goBackButton">Retour</button>
  );
}
