import './App.css';
import React from 'react';
import data from './data/product.json';
import './fonts/Freight Big Pro/FreigBigProBla.otf';
import './fonts/Freight Big Pro/FreigBigProBlaIta.otf';
import './fonts/Freight Big Pro/FreigBigProBol.otf';
import './fonts/Freight Big Pro/FreigBigProBolIta.otf';
import './fonts/Freight Big Pro/FreigBigProBoo.otf';
import './fonts/Freight Big Pro/FreigBigProBooIta.otf';
import './fonts/Freight Big Pro/FreigBigProLig.otf';
import './fonts/Freight Big Pro/FreigBigProLigIta.otf';
import './fonts/Freight Big Pro/FreigBigProMed.otf';
import './fonts/Freight Big Pro/FreigBigProMedIta.otf';
import './fonts/Freight Big Pro/FreigBigProSem.otf';
import './fonts/Freight Big Pro/FreigBigProSemIta.otf';
import './fonts/Gotham/Gotham-Black.otf';
import './fonts/Gotham/Gotham-BlackItalic.otf';
import './fonts/Gotham/Gotham-Bold.otf';
import './fonts/Gotham/Gotham-BoldItalic.otf';
import './fonts/Gotham/Gotham-Book.otf';
import './fonts/Gotham/Gotham-BookItalic.otf';
import './fonts/Gotham/Gotham-Light.otf';
import './fonts/Gotham/Gotham-LightItalic.otf';
import './fonts/Gotham/Gotham-Medium.otf';
import './fonts/Gotham/Gotham-MediumItalic.otf';
import './fonts/Gotham/Gotham-Thin.otf';
import './fonts/Gotham/Gotham-ThinItalic.otf';
import './fonts/Gotham/Gotham-Ultra.otf';
import './fonts/Gotham/Gotham-UltraItalic.otf';
import './fonts/Gotham/Gotham-XLight.otf';
import './fonts/Gotham/Gotham-XLightItalic.otf';
import lbel from './icon/lbel.png';
import cross from './icon/cbimage.png';
import image from './icon/image.png';
import looks from './category_icons/LOOKS.png';
import labiales from './category_icons/LABIALES.png';
import mascaras from './category_icons/MASCARAS.png';
import bases from './category_icons/BASES.png';
import polvos from './category_icons/POLVOS.png';
import delinear from './category_icons/DELINEADORES.png';
import rubores from './category_icons/RUBORES.png';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'labiales',
      subcategory: 'Rojos',
      product: 0,
      color: 0,
      tonos: '',
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubcategory = this.handleSubcategory.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleCategory(event) {
    console.log(event.target.value);
    this.setState({
      category: event.target.value,
      product: 0,
      subcategory: data[event.target.value][0].subcategory,
    });
  }

  handleSubcategory(event) {
    this.setState({ subcategory: event.target.value, color: 0, product: 0 });
  }

  handleProduct(id) {
    console.log('product', id);
    this.setState({ product: id, color: 0 });
  }

  handleColor(col) {
    console.log(col);
    console.log(data[this.state.category]);
    this.setState({
      color: col,
      tonos: '',
    });
  }

  render() {
    const { category, subcategory, product, color } = this.state;
    return (
      <div className="App" style={{ textAlign: 'center', width: '1400px', height: '820px', minWidth: '1160px', minheight: '820px' }}>
        <div style={{ position: 'absolute', left: '10%', top: 'calc(24%)', width: '39%', height: '550px', backgroundColor: 'rgb(224, 224, 224)' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10%', alignItems: 'center', backgroundColor: 'rgb(246, 246, 246)', height: '12%', }}>
          <div className='Nav-title'>Maquillador virtual</div>
          <div>
            <img src={lbel} style={{ width: '90px', height: '40px' }}></img>
          </div>
          <img src={cross} style={{ width: '15px', height: '15px' }}></img>
        </div>
        {/* category */}
        <div style={{ justifyContent: 'center', height: '8%', padding: '0px 10%', backgroundColor: 'rgb(246, 246, 246)' }}>
          <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
            {Object.entries(data).map(([key, value]) => {
              return (
                <div style={{ width: '150px' }}>
                  <a href='javascript:;' onClick={this.handleCategory} style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', boxSizing: 'border-box', position: 'relative', textDecoration: 'none', maxWidth: '150px' }}>
                    <div>
                      <img src={lbel} style={{ width: '32px', height: '32px' }}></img>
                      <div>{key}</div>
                    </div>
                  </a>
                  {/* <button style={{ height: '3vh', marginRight: '2vh' }} value={key} onClick={this.handleCategory}></button> */}
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ position: 'absolute', right: 'calc(10% + 0px)', top: 'calc(24%)', width: '39%', height: '550px', backgroundColor: 'rgb(224, 224, 224)' }}>
          {/* subcategory */}
          <div>
            <select className='Select' style={{ width: '100%', height: '3vh', fontSize: '14px' }} value={this.state.subcategory} onChange={this.handleSubcategory}>
              {data[category].map((labial) => (
                <option key={labial.id} value={labial.subcategory}>
                  {labial.subcategory}
                </option>
              ))}
            </select>

            {/* product */}
            <div>
              {data[category].map((labial) => (
                <div key={labial.id}>
                  <div style={{ height: '100%', flexShrink: 0, width: 'calc((100% - 170px) / 2)' }}></div>
                  {labial.subcategory === subcategory && (
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', width: '100%', padding: '28px 0px', height: '50%', overflow: 'hidden', justifyContent: 'flex-start', floxFlow: 'row nowrap' }}>
                      {labial.product.map((products, id) => (
                        <div style={{ width: 'calc(100% - 24px)', height: '100%', margin: '0px 12px', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', overflow: 'hidden' }}>
                          <a onClick={() => this.handleProduct(id)} style={{ width: '170px', height: '275px' }}>
                            <div key={products.id} style={{ border: '1px #999999 solid', padding: '12px', width: '100%', height: '100%' }} >
                              <img src={image} style={{ width: '100px', height: '100px'}}></img>
                              <h5>{products.tonos[color]}</h5>
                              <h3>{products.name}</h3>
                              <h5>{products.desc}</h5>
                              <h5>{products.price}</h5>
                            </div>
                          </a>
                        </div>
                      ))}
                      
                    </div>
                    
                  )}
                </div>
              ))}
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {labial.product[product].color.map((col, id) => (
                          <a onClick={() => this.handleColor(id)}>
                            <div key={col.id} style={{ backgroundColor: col, width: '3vh', height: '3vh', marginRight: '.5vh' }}></div>
                          </a>
                        ))}
                      </div> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
