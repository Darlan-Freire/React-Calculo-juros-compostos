import React from 'react';

const dinheiroFormatado = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatoDinheiroPositivoNegativo(valor) {
  const dinheiro = dinheiroFormatado.format(valor);
  if (valor >= 0) {
    return `+${dinheiro}`;
  }

  return dinheiro;
}

function formatoDinheiro(valor) {
  return dinheiroFormatado.format(valor);
}

function formatoPercentual(valor) {
  return valor.toFixed(2).replace('.', ',') + '%';
}

export default function Resultado({ itens }) {
  const { id, valor, diferenca, porcentagem, lucro } = itens;

  const positivoValor = 'green-text darken-4';
  const positivoPercentual = 'blue-text darken-4';
  const negativoValor = 'red-text darken-4';
  const negativoPercentual = 'orange-text darken-4';

  const class_valores = lucro ? positivoValor : negativoValor;
  const class_porcentagens = lucro ? positivoPercentual : negativoPercentual;

  return (
    <div className="col s6 m3 l2">
      <div style={styles.flexRow}>
        <span style={{ marginRight: '5px' }}>
          <strong>{id}</strong>
        </span>
        <div>
          <div className={class_valores}>
            <strong>{formatoDinheiro(valor)}</strong>
          </div>
          <div className={class_valores}>
            <strong>{formatoDinheiroPositivoNegativo(diferenca)}</strong>
          </div>
          <div className={class_porcentagens}>
            <strong>{formatoPercentual(porcentagem)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    aliegnItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid lightgray',
    borderRadius: '4px',
    padding: '4px',
    margin: '4px',
  },
};
