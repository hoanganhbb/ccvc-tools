import './App.css';
import './assets/theme.css';

import Header from './components/Header';
import MenuApp from './components/MenuApp';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <section className='pt-4 pt-md-11'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-5 col-lg-6 order-md-2'>
              <img
                alt=''
                src='https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png'
                className='img-fluid mw-md-150 mw-lg-100 mb-6 mb-md-0 aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay='100'
              />
            </div>
            <div className='col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate' data-aos='fade-up'>
              <h1 className='display-4 text-center text-md-start'>
                Welcome to <span className='text-primary'>Fanvist</span>. <br />
                Tất cả về Phan Đức Anh.
              </h1>

              <p className='lead text-center text-md-start text-muted mb-6 mb-lg-8'>
                Build a beautiful, modern website with flexible Bootstrap components built from scratch.
              </p>

              <div className='text-center text-md-start'>
                <a href='overview.html' className='btn btn-primary shadow lift me-2'>
                  Liên hệ facebook <i className='bi bi-arrow-right ms-2'></i>
                </a>
                <a href='docs/index.html' className='btn btn-primary-soft lift'>
                  Nhắn tin cho mình
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <label for="formFile" className="form-label">Default file input example</label> */}
      <MenuApp></MenuApp>
    </div>
  );
}

export default App;
