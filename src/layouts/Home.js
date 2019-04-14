import React from 'react';

import dreamBig from '../assets/img/dreamBig.jpg';


class Home extends React.Component {
    render() {
        return(
            <div id="home">
                  
              <section id="showcase" className="py-5">
                <div className="primary-overlay text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 text-center">
                        <h1 className="display-2 mt-5 pt-5">
                          Do What You Dream Of...
                        </h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora!</p>
                        <a href="#" className="btn btn-outline-secondary btn-lg text-white">
                          <i className="fas fa-arrow-right"></i> Read More
                        </a>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-center row-hl">
                        <img src={dreamBig} alt="" className="img-fluid d-none d-lg-block my-4 item-hl"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="newsletter" className="bg-dark text-white py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <input type="text" className="form-control form-control-lg mb-resp" placeholder="Enter Name"/>
                    </div>
                    <div className="col-md-4">
                      <input type="email" className="form-control form-control-lg mb-resp" placeholder="Enter Email"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-lg btn-block">
                        <i className="fas fa-envelope-open-o"></i> Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section id="boxes" className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card text-center border-primary mb-resp">
                        <div className="card-body">
                          <h3 className="text-primary">Be Better</h3>
                          <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card text-center bg-primary text-white mb-resp">
                        <div className="card-body">
                          <h3>Be Smarter</h3>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card text-center border-primary mb-resp">
                        <div className="card-body">
                          <h3 className="text-primary">Be Faster</h3>
                          <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card text-center bg-primary text-white">
                        <div className="card-body">
                          <h3>Be Stronger</h3>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        );
    }
}

export default Home; 