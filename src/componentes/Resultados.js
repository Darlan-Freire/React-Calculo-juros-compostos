import React from 'react';
import Resultado from './Resultado';

export default function Resultados({ data }) {
  console.log(data);

  return (
    <div>
      <div className="row">
        {data.map((item) => {
          const { id } = item;
          return <Resultado key={id} itens={item} />;
        })}
      </div>
    </div>
  );
}
