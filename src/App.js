import './App.css';
import React from 'react';
import Select from 'react-select'
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
import looks from './category_icons/Looks.png';
import labiales from './category_icons/Labiales.png';
import mascaras from './category_icons/Máscaras.png';
import bases from './category_icons/Bases.png';
import polvos from './category_icons/Polvos.png';
import delinear from './category_icons/Delinear.png';
import rubores from './category_icons/Rubores.png';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'Labiales',
      subcategory: 'Rojos',
      product: 0,
      move: 0,
      color: 0,
      tonos: '',
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubcategory = this.handleSubcategory.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.scollLeft = this.scollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  handleCategory(key) {
    console.log(this.state.move);
    this.setState({
      category: key,
      product: 0,
      subcategory: data[key][0].subcategory,
      color: 0,
      move: 0,
    });
    this.scrollInit();
  }

  handleSubcategory(event) {
    // console.log(event.value);
    this.setState({
      subcategory: event.value,
      color: 0,
      product: 0,
      move: 0,
    });
  }

  handleProduct(id) {
    // console.log('product', id);
    this.setState({
      product: id,
      color: 0,
    });
  }

  handleColor(col) {
    console.log(col);
    this.setState({
      color: col,
      tonos: '',
    });
  }

  handleRight() {
    const subcategoryIndex = data[this.state.category].indexOf(data[this.state.category].find(x => x.subcategory === this.state.subcategory));
    // console.log(data[this.state.category][subcategoryIndex].product.length);
    // console.log(data[this.state.category][1].product.length);
    if (this.state.move < data[this.state.category][subcategoryIndex].product.length - 1) {
      this.setState({
        move: this.state.move + 1,
      });
      this.scollLeft();
    }
  }

  handleLeft() {
    if (this.state.move > 0) {
      this.setState({
        move: this.state.move - 1,
      });
      this.scrollRight();
    }
  }

  scrollInit() {
    const element = document.getElementById('scroll');
    element.scrollLeft = 0;
  }

  scollLeft() {
    const element = document.getElementById('scroll');
    // console.log(element.scrollLeft);
    element.scrollLeft += 182;
  }

  scrollRight() {
    const element = document.getElementById('scroll');
    // console.log(element.scrollLeft);
    element.scrollLeft -= 182;
  }

  render() {
    const { category, subcategory, product, color } = this.state;
    const categoryImage = [labiales, mascaras, bases, polvos, delinear, rubores];
    const options = data[category].map((labial) => (
      { value: labial.subcategory, label: labial.subcategory }
    ));
    const selectStyles = {
      control: (styles) => ({ ...styles, padding: '0px 4px', backgroundColor: 'white', width: '100%', height: 46, borderRadius: 0, border: '1px solid rgb(239, 239, 239)', boxShadow: 'none', }),
      option: (styles) => ({ options, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          borderBottom: '1px solid rgb(239, 239, 239)',
          backgroundColor: 'white',
          fontSize: 14,
          padding: 16,
          ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled ? isSelected ? 'white' : 'white' : undefined,
            color: !isDisabled ? isSelected ? 'rgb(0, 0, 0)' : 'rgb(97, 75, 121)' : undefined,
            fontWeight: !isDisabled ? isSelected ? 'normal' : 'bold' : undefined,
          },
        };
      },
      placeholder: (styles) => ({ ...styles, color: 'black', fontSize: 14, padding: 0, }),
      dropdownIndicator: (styles) => ({ ...styles, color: 'black', }),
      indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
    }

    return (
      <div className="App" style={{ width: '1400px', height: '820px', minWidth: '1160px', minheight: '820px' }}>
        <div style={{ position: 'absolute', left: '10%', top: 'calc(24%)', width: '546px', height: '550px', backgroundColor: 'rgb(246, 246, 246)' }}></div>
        <div style={{ padding: '0px 10%', boxSizing: 'border-box', width: '100%', height: '12%', backgroundColor: 'rgb(246, 246, 246)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          <div className='Nav-title'>
            <div>Maquillador virtual</div>
          </div>
          <img src={lbel} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '90px', height: '40px', objectFit: 'contain' }}></img>
          <img src={cross} style={{ width: '15px', height: '15px', margin: '0px', border: '0px', padding: '0px' }}></img>
        </div>
        {/* category */}
        <div style={{ padding: '0px 10%', width: '100%', height: '8%', boxSizing: 'border-box', backgroundColor: 'rgb(246, 246, 246)' }}>
          <div style={{ boxSizing: 'border-box', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <a style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', boxSizing: 'border-box', position: 'relative', textDecoration: 'none', maxWidth: '150px' }}>
              <div style={{ position: 'absolute', left: '8%', top: '6%', width: 'calc(84%)', height: 'calc(94%)', lineHeight: 1 }}>
                <img src={looks} style={{ position: 'absolute', left: '50%', top: '30%', width: '24px', height: '24px', transform: 'translate(-50%, -50%)', objectFit: 'contain' }}></img>
              </div>
              <div style={{ position: 'absolute', left: '0px', top: '49%', width: '100%', height: '51%', lineHeight: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '12px', color: 'rgb(150, 150, 150)' }}>Looks</div>
            </a>
            {Object.entries(data).map(([key, value], index) => {
              return (
                <a onClick={() => this.handleCategory(key)} style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', boxSizing: 'border-box', position: 'relative', textDecoration: 'none', maxWidth: '150px' }}>
                  <div style={{ position: 'absolute', left: '8%', top: '6%', width: 'calc(84%)', height: 'calc(94%)', lineHeight: 1 }}>
                    <img src={categoryImage[index]} style={{ position: 'absolute', left: '50%', top: '30%', width: '24px', height: '24px', transform: 'translate(-50%, -50%)', objectFit: 'contain' }}></img>
                  </div>
                  {key === category ? <div style={{ position: 'absolute', left: '0px', bottom: '0px', width: '100%', height: '2px', backgroundColor: 'rgb(97, 75, 121)' }}></div> : null}
                  <div style={{ position: 'absolute', left: '0px', top: '49%', width: '100%', height: '51%', lineHeight: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '12px', color: key === category ? 'rgb(97, 75, 121)' : 'rgb(150, 150, 150)' }}>{key}</div>
                </a>
              )
            })}
          </div>
        </div>

        <div style={{ position: 'absolute', right: 'calc(10% + 0px)', top: 'calc(24%)', width: '546px', height: '550px' }}>
          {/* subcategory */}
          <div className='Custom-Select'>
            {/* <select className='Select' style={{ width: '100%', height: '100%', fontSize: '14px', height: '48px', padding: '0 14px', boxShadow: 'none', visibility: subcategory !== '-' ? 'initial' : 'hidden' }} value={subcategory} onChange={this.handleSubcategory}>
              {data[category].map((labial) => (
                <option key={labial.id} value={labial.subcategory}>
                  {labial.subcategory}
                </option>
              ))}
            </select> */}

            {subcategory !== '-' ?
            <Select styles={selectStyles} placeholder={subcategory} isSearchable={false} value={subcategory} onChange={this.handleSubcategory} options={options} />
            : null}

            {/* product */}
            <div>
              {data[category].map((labial) => (
                <div key={labial.id}>
                  {labial.subcategory === subcategory && (
                    <div style={{ width: '100%', height: '50%', padding: '28px 0px' }}>
                      <div style={{ width: '100%', height: '100%', position: 'relative', boxSizing: 'border-box', padding: '0px 32px' }}>
                        <div id='scroll' style={{ width: 'calc(100%-24px)', height: '100%', margin: '0px 12px', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', overflow: 'hidden' }}>
                          <button onClick={this.handleRight} style={{ position: 'absolute', width: '32px', height: '32px', top: 'calc((100% - 32px) / 2)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundColor: 'transparent', margin: '0px', padding: '0px', border: '0px', cursor: 'pointer', right: '0px', backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgB7ZqxUUJBFEUPWoCUsCVYAqGhHWhqpB1AB9oBdGAJagUamlGCUgG85S/D/8uQwQfm3jNzgyV7j9k9yz7AGGOMMcYcnHHkHVFy8cuSVwSZsW1AzgtiDCPfdJtwjxgpMmfbgL/ILWIkmsI3TZiXz6TI33p7K+StMUSMR7pNmHImXNMPP5FBZFTWm7PgCzFmiOsx80G3CSPEyAdgrceEGIluE2T12L4jWI+cQI99aXAf1mPhDevRerQesR7XWI80r0e96PHUGtzHb2QRuSvro+nxivPlploPEKLeAlLzhcTuO6LMIZgQ1qD8Rai+CksNUvL8sF38BCHGCBf/gLDu6omRdYcICXHdSf9vwLpDtPhnrDvrzrpD7KettO6mCJ/4mQkXUvyxnsU/aV5x/yNPCCM30THGGGPM5bAC4IqpoJUhvBcAAAAASUVORK5CYII=")' }}></button>
                          <button onClick={this.handleLeft} style={{ position: 'absolute', width: '32px', height: '32px', top: 'calc((100% - 32px) / 2)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundColor: 'transparent', margin: '0px', padding: '0px', border: '0px', cursor: 'pointer', left: '0px', backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgB7dqxTcNQFIXhH1iAEW5JyQgeIRuwAhvYG8AGuKOkpkJ0dIyQETJC4ivbih2njJMnnfNJr3C6a72835EDZmZmZuV6ZEUPlO+zW0/d+kVQ3a39sGrETIfP1SJkw3z4f1Y+C0oS3dpxHH47fCYh6Aceh98hNHxu8enwuSqEfDEf/hUhpyd+gxDnDufOuXPuEOLc4dw5d84dIgLnzrlz7ig4d/es4+7keo+gFuGvQMpDMHsvewimQDiDo0D4QWhUIfwoPMpDcHoTPhDUML8JbwhqcR4XedwgJljm8RkxgfO4yGPeBPk8/nBFJfxJ6o/+12M1XAf9LvhGTMt8J9SIOZfHF8QEzqPzmCqcx9vmsRTviL5Incr3Cw1mZmZmdlkHID2vxVBNXbkAAAAASUVORK5CYII=")' }}></button>
                          <div style={{ height: '100%', flexShrink: 0, width: 'calc((100% - 150px) / 2)' }}></div>
                          {labial.product.map((products, id) => (
                            <a onClick={() => this.handleProduct(id)} style={{ padding: '0px', margin: '0px', position: 'relative', textDecoration: 'none', flexShrink: 0, color: 'black', height: '275px', width: '182px' }}>
                              <div key={products.id} style={{ width: '100%', height: '100%', boxSizing: 'border-box', padding: '12px', display: 'flex', flexDirection: 'column', border: id === product ? '1px solid black' : null }}>
                                <div style={{ width: '100%', height: '100%', paddingBottom: '8px', boxSizing: 'border-box', overflow: 'hidden' }}>
                                  <img src={image} style={{ width: '100%', height: '100%', objectFit: 'contain' }}></img>
                                </div>
                                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                  {product === id ? (
                                    <div style={{ fontSize: '10px', lineHeight: '14px' }}>{color !== -1 ? products.tonos[color] : products.tonos[0]}</div>
                                  ) : (
                                    <div style={{ fontSize: '10px', lineHeight: '14px' }}>{products.tonos[0]}</div>
                                  )}
                                  <div style={{ height: '8px' }}></div>
                                  <div style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '26px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', fontFamily: 'FreightBigPro' }}>{products.name}</div>
                                  <div style={{ height: '8px' }}></div>
                                  <div style={{ fontSize: '12px', fontWeight: 300, lineHeight: '16px' }}>{products.desc}</div>
                                  <div style={{ height: '8px' }}></div>
                                  <div style={{ fontSize: '14px', fontWeight: 'bold', lineHeihgt: '20px' }}>$ {products.price}</div>
                                </div>
                              </div>
                            </a>
                          ))}
                          <div style={{ height: '100%', flexShrink: 0, width: 'calc((100% - 150px) / 2)' }}></div>
                        </div>
                      </div>
                      <div style={{ height: '28px' }}></div>
                      <div style={{ width: '100%', padding: '0px 15px 0px 43px', boxSizing: 'border-box', marginTop: '-6px', maxHeight: 'calc((((100%-48px)-50%)-56px)-40px)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative', boxSizing: 'border-box' }}>
                          <div style={{ width: 'calc(100%-0px)', height: '100%', margin: '0px', display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', overflow: 'hidden' }}>
                            <a onClick={() => this.handleColor(-1)} style={{ padding: '0px', margin: '0px', position: 'relative', textDecoration: 'none', flexShrink: 0, color: 'black', width: '52px', height: '52px' }}>
                              <div style={{ width: 'calc(100% - 12px)', height: 'calc(100% - 12px)', padding: '2px', boxSizing: 'border-box', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundClip: 'content-box', backgroundOrigin: 'content-box', margin: '6px', borderRadius: '2px', backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHsSURBVHgB7dzLbcJAFIXhG5QC6CRJB5RCOqADSAdpJRWQDkgHSQdJB2SO5IU12DBj5nFfv3QWWF5Yn2zhDRB5nud549Zh+7DfsLOPTmFbyuhERL0vmuN2lNCWqPuFch2eyHUMtoo+b8ibC3ib+OCKvJxu3oFeZqmAr2EPivcS9kcL8juQ6DnsSBOPZ0rWAefwku9Gy4BzeG9hH5SYVcBreAfKyCJgMTxkDbAoHrIEWBwPWQGsgocsAFbDQ9oBq+IhzYDV8ZBWwCZ4SCNgMzykDbApHtIE2BwPaQHsgoc0AHbDQ9IBu+IhyYDd8ZBUQBZ4SCIgGzwkDZAVHpIEyA4PSQFkiYckALLFQ9wBWeMhzoDs8RBXQBF4iCOgGDzEDVAUHuIEKA4PcQEUiYc4AIrFQ70BReOhnoDi8VAvQBV4qAegGjzUGlAVHmoJqA4PtQJUiYdaAKrFQ7UBVeOhmoDq8VAtQBN4qAagGTxUGtAUHioJaA4PlQI0iYdKAJrFQ/cCmsZD9wCax0NLAR1vaAmg443KBXS8qBxAx5soFfCJHG+yx8TzdhPHzOOhpd/Cjje0BNDxRqU+wuP2wzzS93PX5jlgXj/xgRjwk7xrfaWchPe9s+9iB0oML8vvYd9E3S+aw46U+TfInud5VvoH3sHSyIJk2roAAAAASUVORK5CYII=")' }}></div>
                            </a>
                            {labial.product[product].color.map((col, id) => (
                              <a onClick={() => this.handleColor(id)} style={{ padding: '0px', margin: '0px', position: 'relative', textDecoration: 'none', flexShrink: 0, color: 'black', width: '52px', height: '52px' }}>
                                <div key={col.id} style={{ width: 'calc(100% - 12px)', height: 'calc(100% - 12px)', padding: '2px', boxSizing: 'border-box', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundClip: 'content-box', backgroundOrigin: 'content-box', margin: '6px', borderRadius: '2px', backgroundColor: col, border: id === color ? '2px solid black' : null }}></div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {/* <div style={{ height: '100%', flexShrink: 0, width: 'calc((100% - 150px) / 2)' }}></div> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
