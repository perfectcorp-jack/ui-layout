import './App.css';
import React from 'react';
import data from './data/product.json';

class App extends React.Component {

  render() {
    console.log(data.labiales);
    return (
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <h1>Labiales</h1>
          <select>
            {data.labiales.map((labial) => (
              <option key={labial.id}>{labial.subcat}</option>
            ))}
          </select>
          <div>
            {data.labiales.map((labial) => (
              <div key={labial.id}>
                <h2>{labial.subcat}</h2>
                {labial.product.map((products) => (
                  <div key={products.id}>
                    <h4>{products.name}</h4>
                    <p>{products.desc}</p>
                    <p>{products.price}</p>
                    {products.tonos.map((tonos) => (
                      <div key={tonos.id}>
                        <span>{tonos}</span>
                      </div>
                    ))}
                    {products.color.map((colors) => (
                      <div key={colors.id}>
                        <span>{colors}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <h1>Máscaras</h1>
          <select>
            {data.Máscaras.map((mascara) => (
              <option key={mascara.id}>{mascara.subcat}</option>
            ))}
          </select>
          <div>
            {data.Máscaras.map((mascara) => (
              <div key={mascara.id}>
                <h2>{mascara.subcat}</h2>
                {mascara.product.map((products) => (
                  <div key={products.id}>
                    <h4>{products.name}</h4>
                    <p>{products.desc}</p>
                    <p>{products.price}</p>
                    {products.tonos.map((tonos) => (
                      <div key={tonos.id}>
                        <span>{tonos}</span>
                      </div>
                    ))}
                    {products.color.map((colors) => (
                      <div key={colors.id}>
                        <span>{colors}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
