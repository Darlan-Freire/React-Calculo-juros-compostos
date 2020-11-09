import React, { useState, useEffect } from 'react';
import Entradas from './componentes/Entradas';
import Resultados from './componentes/Resultados';

export default function App() {
  const [valorInicial, setValorInicial] = useState(1000);
  const [jurosMensal, setJurosMensal] = useState(1);
  const [periodoMes, setPeriodoMes] = useState(1);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    calculandoJuros(valorInicial, jurosMensal, periodoMes);
  }, [valorInicial, jurosMensal, periodoMes]);

  const calculandoJuros = (valorInicial, jurosMensal, periodoMes) => {
    const novasParcelas = [];
    let id = 1;
    let valorAtual = valorInicial;
    let porcentagem = 0;

    for (let i = 1; i <= periodoMes; i++) {
      const percentualValor = (valorAtual * Math.abs(jurosMensal)) / 100;

      valorAtual =
        jurosMensal >= 0
          ? valorAtual + percentualValor
          : valorAtual - percentualValor;

      porcentagem = (valorAtual / valorInicial - 1) * 100;

      novasParcelas.push({
        id: id++,
        valor: valorAtual,
        diferenca: valorAtual - valorInicial,
        porcentagem,
        lucro: jurosMensal > 0,
      });
    }
    //console.log(novasParcelas);

    setParcelas(novasParcelas);
  };

  const mudarDados = (novoValor, novoJuros, novoPeriodo) => {
    if (novoValor !== null) {
      setValorInicial(novoValor);
      return;
    }
    if (novoJuros !== null) {
      setJurosMensal(novoJuros);
      return;
    }

    setPeriodoMes(novoPeriodo);
  };

  return (
    <div className="container">
      <h1 className="center">Calculo de juros compostos</h1>
      <Entradas
        dados={{ valorInicial, jurosMensal, periodoMes }}
        onMudarDados={mudarDados}
      />
      <Resultados data={parcelas} />
    </div>
  );
}
