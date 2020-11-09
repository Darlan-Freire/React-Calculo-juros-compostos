import React from 'react';

export default function Entradas({ dados, onMudarDados }) {
  const { valorInicial, jurosMensal, periodoMes } = dados;

  const inputMudarValor = (event) => {
    onMudarDados(+event.target.value, null, null);
  };

  const inputMudarJuros = (event) => {
    onMudarDados(null, +event.target.value, null);
  };

  const inputMudarPeriodo = (event) => {
    onMudarDados(null, null, +event.target.value);
  };
  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <label className="active">Montante Inicial:</label>
        <input
          id="inputMontante"
          type="number"
          value={valorInicial}
          min="100"
          step="100"
          onChange={inputMudarValor}
        />
      </div>

      <div className="col input-field s6 m4 l3">
        <label className="active">Juros:</label>
        <input
          id="inputJuros"
          type="number"
          value={jurosMensal}
          min="-12"
          max="12"
          step="0.1"
          onChange={inputMudarJuros}
        />
      </div>

      <div className="col input-field s6 m4 l3">
        <label className="active">Período em meses:</label>
        <input
          id="inputPeriodo"
          type="number"
          value={periodoMes}
          min="1"
          max="36"
          step="1"
          onChange={inputMudarPeriodo}
        />
      </div>
    </div>
  );
}
