import './App.css';
import React from 'react';
import data from './data/product.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'labiales',
      subcat: '',
      product: 0,
      color: 0,
      tonos: '',
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleCategory(event) {
    console.log(event.target.value);
    this.setState({ category: event.target.value, product: 0 });
  }

  handleSelect(event) {
    this.setState({ subcat: event.target.value });
  }

  handleProduct(id) {
    console.log('product', id);
    this.setState({ product: id });
  }

  handleColor(col) {
    console.log(col);
    this.setState({ color: col, tonos: '' });
  }

  render() {
    const { category, subcat, product, color } = this.state;
    return (
      <div className="App" style={{ textAlign: 'center', width: '100%' }}>
        {/* category */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {Object.entries(data).map(([key, value]) => {
            return (
              <button style={{ width: '10vh', height: '3vh', marginRight: '2vh' }} value={key} onClick={this.handleCategory}>
                {key}
              </button>
            )
          })}
        </div>

        {/* subcategory */}
        <div style={{ marginTop: '2vh' }}>
          <select style={{ width: '10vh', height: '3vh' }} value={this.state.subcat} onChange={this.handleSelect}>
            {data[category].map((labial) => (
              <option key={labial.id} value={labial.subcat}>
                {labial.subcat}
              </option>
            ))}
          </select>

          <div>
            {data[category].map((labial) => (
              <div key={labial.id}>
                {labial.subcat === subcat && (
                  <div style={{ textAlign: 'center' }}>
                    <h1>{labial.subcat}</h1>
                    {labial.product.map((products, id) => (
                      <div>
                        <a onClick={() => this.handleProduct(id)}>
                          <div key={products.id} style={{ border: '1px #999999 solid', margin: '2vh auto', width: '60vh' }}>
                            <h5>{products.tonos[color]}</h5>
                            <h3>{products.name}</h3>
                            <h5>{products.desc}</h5>
                            <h5>{products.price}</h5>
                          </div>
                        </a>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {labial.product[product].color.map((col, id) => (
                        <a onClick={() => this.handleColor(id)}>
                          <div key={col.id} style={{ backgroundColor: col, width: '3vh', height: '3vh', marginRight: '.5vh' }}></div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
