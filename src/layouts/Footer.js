import React from 'react';

class Footer extends React.Component {
    render() {
        return(
              <footer id="main-footer" className="py-5 bg-primary text-white">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-6 ml-auto">
                      <p className="lead">
                        Create By Chakatpon Khunthong Copyright &copy;{" "}
                        <span id="year">{new Date().getFullYear()}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
        );
    }
}

export default Footer;