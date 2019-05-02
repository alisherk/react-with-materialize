import React, { Component, Fragment } from 'react';
import Stars from '../assets/stars.jpg';
import M from 'materialize-css';

class Parallax extends Component {
  componentDidMount() {
    const parallaxes = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxes);
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
    const datepickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickers, {
      disableWeekends: true, 
      autoClose: true
    });
  }

  render() {
    return (
      <Fragment>
     
        <div className='container section scrollspy' id='services'>
          <div className='row'>
            <div className='col s12 l5'>
              <h3 className='indigo-text text-darken-4'>
               Services for you
              </h3>
              <p>
              Cizzle socizzle mah nizzle penatibizzle et magnizzle fizzle parturient
              shiz, nascetur ridiculus mus. Yo man my shizzle boyakasha dizzzle perizzle
              </p>
            </div>
            <div className='col s12 l6 offset-l1'>
              <ul className='tabs'>
                <li className='tab col s6'>
                  <a href='#hiphop' className='indigo-text text-darken-4'>
                    Dance
                  </a>
                </li>
                <li className='tab col s6'>
                  <a href='#tattoos' className='indigo-text text-darken-4'>
                    Tattoos
                  </a>
                </li>
              </ul>
              <div className='col s12' id='hiphop'>
                <p className='flow-text indigo-text text-darken-4'> HIP HOP</p>
                <p>
                  Lorizzle ipsizzle dolor uhuh ... yih! amizzle, shizznit ma
                  nizzle elit. Nullizzle sapien velizzle, shizzle my nizzle
                  crocodizzle volutpizzle, suscipizzle fizzle, shizzle my nizzle
                  crocodizzle vizzle, go to hizzle.
                </p>
              </div>
              <div className='col s12' id='tattoos'>
                <p className='flow-text indigo-text text-darken-4'> TATTOOS</p>
                <p>
                  Etiam crunk you son of a bizzle fo shizzle nisl. Gizzle
                  quizzle arcu. Izzle fo shizzle, ipsizzle shizzlin dizzle
                  malesuada pimpin', izzle we gonna chung euismizzle dope, izzle
                  my shizz metus own yo' fizzle cool. Vivamizzle ullamcorpizzle,
                  mofo brizzle tellivizzle crazy, nibh its fo rizzle ultricies
                  bow wow wow, izzle da bomb leo elit in dolizzle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img src={Stars} alt='' className='responsive-img' />
          </div>
        </div>
        <section className='container section scrollspy' id='contacts'>
          <div className='row'>
            <div className='col s12 l5'>
              <h2 className='indigo-text text-darken-4'> Contact me </h2>
              <p>
                Sed my shizz. Aliquizzle shizzlin dizzle massa dizzle funky
                fresh. Boom shackalack ante ipsum primis in dang its fo rizzle
                luctus izzle ultricizzle daahng dawg cubilia Curae; Aenean
                vestibulum. Pellentesque pot morbi bow wow wow away dope
                netizzle et malesuada fo shizzle izzle the bizzle shiznit.
                Donizzle tempizzle break yo neck, yall velizzle. Da bomb erat
                volutpat.
              </p>
            </div>
            <div className='col s12 l5 offset-l2'> 
               <form> 
                 <div className='input-field'>
                 <i className='material-icons prefix'> email </i>
                 <input type='email' id='email'/>
                 <label htmlFor='email'>Email</label> 
                </div>
                <div className='input-field'>
                 <i className='material-icons prefix'> message </i>
                 <input type='text' id='message'/>
                 <label htmlFor='message'>Message</label> 
                </div>
                 <div className='input-field'> 
                    <input type='text' className='datepicker' id='date' />
                    <label htmlFor='date'> Choose the date </label>
                 </div>
                 <div className='input-field'>
                    <p> Services available </p>
                    <p> 
                      <label>
                        <input type='checkbox'/>
                         <span>Art</span>
                      </label>
                    </p>
                    <p> 
                      <label>
                        <input type='checkbox'/>
                         <span>Tattoos</span>
                      </label>
                    </p>
                 </div>
                 <div className='input-field center'>
                 <button className='btn indigo'> Submit </button> 
                 </div>
                </form>
            </div>
          </div> 
        </section>
      </Fragment>
    );
  }
}

export default Parallax;
