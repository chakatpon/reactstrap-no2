import React from 'react';
import { Collapse } from 'reactstrap';

class About extends React.Component {
    render() {
        return(
                  <section id="about" className="py-5 text-center bg-light">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="info-header mb-5">
                            <h1 className="text-primary pb-3">
                              Why This Book?
                            </h1>
                            <p className="lead pb-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati alias rerum dolore fugiat debitis?
                            </p>
                          </div>


                          <div id="accordion">
                           
                            <div className="card">
                              <div className="card-header">
                                <h5 className="mb-0">
                                  <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                                    <i className="fas fa-arrow-circle-down"></i> Get Inspired
                                  </div>
                                </h5>
                              </div>

                              <Collapse id="collapse1" className="collapse show" >
                                <div className="card-body">
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                                  facilis consequatur tenetur nam pariatur fuga nisi!
                                </div>
                              </Collapse>
                            </div>

                            <div className="card">
                              <div className="card-header">
                                <h5 className="mb-0">
                                  <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                                    <i className="fas fa-arrow-circle-down"></i> Gain The Knowledge
                                  </div>
                                </h5>
                              </div>

                              <Collapse id="collapse2" className="collapse">
                                <div className="card-body">
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                                  facilis consequatur tenetur nam pariatur fuga nisi!
                                </div>
                              </Collapse>
                            </div>

                            <div className="card">
                              <div className="card-header">
                                <h5 className="mb-0">
                                  <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                                    <i className="fas fa-arrow-circle-down"></i> Open Your Mind
                                  </div>
                                </h5>
                              </div>

                              <Collapse id="collapse3" className="collapse">
                                <div className="card-body">
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                                  facilis consequatur tenetur nam pariatur fuga nisi!
                                </div>
                              </Collapse>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
            
        );
    }
}

export default About;