import React from 'react';

import person1 from '../assets/img/person1.jpg';
import person2 from '../assets/img/person2.jpg';
import person3 from '../assets/img/person3.jpg';
import person4 from '../assets/img/person4.jpg';
import chakatpon from '../assets/img/chakatpon.jpg';

class Profile extends React.Component {
    render() {
        return(
          <section id="authors" className="my-5 text-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="info-header mb-5">
                    <h1 className="text-primary pb-3">
                      Meet The Authors
                    </h1>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!
                    </p>
                  </div>
                </div>
              </div>
                
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={person1} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                      <h3>Susan Williams</h3>
                      <h5 className="text-muted">Lead Writer</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                      <div className="d-flex justify-content-center">
                        <div className="p-4">
                          <a href="http://facebook.com">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://twitter.com">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://instagram.com">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={chakatpon} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                      <h3>Chakatpon Khunthong</h3>
                      <h5 className="text-muted">Co-Writer</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                      <div className="d-flex justify-content-center">
                        <div className="p-4">
                          <a href="http://facebook.com">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://twitter.com">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://instagram.com">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={person3} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                      <h3>John Doe</h3>
                      <h5 className="text-muted">Editor</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                      <div className="d-flex justify-content-center">
                        <div className="p-4">
                          <a href="http://facebook.com">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://twitter.com">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://instagram.com">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={person4} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                      <h3>Kevin Swanson</h3>
                      <h5 className="text-muted">Designer</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                      <div className="d-flex justify-content-center">
                        <div className="p-4">
                          <a href="http://facebook.com">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://twitter.com">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                        <div className="p-4">
                          <a href="http://instagram.com">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        );
    }
}

export default Profile