import React, { Component } from 'react';
import Portrait from '../assets/portrait.jpg';
import City from '../assets/city.jpg';
import House from '../assets/house.jpg';
import M from 'materialize-css';

class PhotoGrid extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
  }

  render() {
    return (
      <div
        className='container section scrollspy'
        id='photos'
        style={{ paddingTop: '4vw', paddingBottom: '4vw' }}
      >
        <div className='row'>
          <div className='col s12 l4'>
            <img
              src={Portrait}
              alt=''
              className='responsive-img materialboxed'
            />
          </div>
          <div className='col s12 l6'>
            <h3 className='indigo-text text-darken'> Dancing </h3>
            <p>
              Nunc tellizzle lorem, yo fizzle, crunk eget, vehicula id, gizzle.
              Etiam pizzle leo a sizzle break it down mattizzle. Pellentesque
              interdizzle magna in dope commodo fo shizzle mah nizzle fo rizzle,
              mah home g-dizzle.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 l4 push-l7'>
            <img src={City} alt='' className='responsive-img materialboxed' />
          </div>
          <div className='col s12 l6 pull-l3 right-align'>
            <h3 className='indigo-text text-darken'> City Lites </h3>
            <p>
              Boyakasha Etiam lobortis boom shackalack ligula. Morbi odio.
              That's the shizzle shizzlin dizzle ma nizzle mah nizzle dolizzle
              fo auctizzle. Integer shizznit viverra urna. Black sollicitudizzle
              massa quizzle purizzle.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 l4'>
            <img src={House} alt='' className='responsive-img materialboxed' style={{width: '300px', height:'200px'}} />
          </div>
          <div className='col s12 l6'>
            <h3 className='indigo-text text-darken'> Nature </h3>
            <p>
              Boyakasha hipsters all right all Morbi venenatis ligula sheezy bow
              wow wow tellus. Nizzle tellivizzle enim owned arcu. Cizzle
              socizzle mah nizzle penatibizzle et magnizzle fizzle parturient
              shiz, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
