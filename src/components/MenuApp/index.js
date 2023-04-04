import './style.css';
import minibreak from '../../../src/assets/images/minibreak.png';
import { Link } from 'react-router-dom';

const MenuApp = (props) => {
  return (
    <section className='py-8 py-md-11 border-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 aos-init aos-animate p-3 rounded position-relative lift' data-aos='fade-up'>
            <Link to='https://minibreak.vn/' className='menu-app-link'>
              <div className='icon text-primary mb-3'></div>
              <div
                className='position-absolute w-100 h-100 rounded'
                style={{ backgroundImage: `url(${minibreak})`, backgroundSize: 'cover', filter: 'blur(2px)', top: 0, left: 0, opacity: 0.5, zIndex: 1 }}></div>
              <div className='menu-overlay bg-black position-absolute w-100 h-100 rounded' style={{ top: 0, left: 0, opacity: 0.5, zIndex: 2 }}></div>

              <div className='position-relative' style={{ zIndex: 3 }}>
                <h2 className='text-white'>MiniBreak</h2>

                <p className='text-white mb-6 mb-md-0'>Chào mừng hội “Đam mê dịch chuyển” đến với thế giới homestay, villa ngoại ô của miniBreak!</p>
              </div>
            </Link>
          </div>
          <div className='col-12 col-md-4 aos-init aos-animate' data-aos='fade-up' data-aos-delay='50'>
            <div className='icon text-primary mb-3'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fill-rule='evenodd'>
                  <path d='M0 0h24v24H0z'></path>
                  <path
                    d='M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z'
                    fill='#335EEA'></path>
                  <path
                    d='M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z'
                    fill='#335EEA'
                    opacity='.3'></path>
                </g>
              </svg>{' '}
            </div>

            <h3>Designed to be modern</h3>

            <p className='text-muted mb-6 mb-md-0'>Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.</p>
          </div>
          <div className='col-12 col-md-4 aos-init aos-animate' data-aos='fade-up' data-aos-delay='100'>
            <Link to='tools-ccvc' className='menu-app-link'>
              <div className='icon text-primary mb-3'>
                <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fill-rule='evenodd'>
                    <path d='M0 0h24v24H0z'></path>
                    <path
                      d='M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z'
                      fill='#335EEA'></path>
                    <rect fill='#335EEA' opacity='.3' transform='rotate(15 12 12)' x='11' y='4' width='2' height='16' rx='1'></rect>
                  </g>
                </svg>{' '}
              </div>

              <h3>CCVC Tools</h3>

              <p className='text-muted mb-0'>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

MenuApp.propTypes = {};

export default MenuApp;
