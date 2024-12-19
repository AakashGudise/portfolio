import './skills.component.css'



export function SkillsComponent() {
    return (
        <div>
            {/* <!-- ======= Skills Section ======= --> */}
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-4" data-aos="fade-up">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar html" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>HTML</h3> */}
                                    <span className='bar'><span className='html'></span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar css" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>CSS</h3> */}
                                    <span className='bar'><span className='css'></span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar javascript" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>Java Script</h3> */}
                                    <span className='bar'><span className='javascript'></span></span>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">

                            <div className="progress">
                                <span className="skill">React JS <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar reactjs" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>React JS</h3> */}
                                    <span className='bar'><span className='reactjs'></span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Bootstrap <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar bootstrap" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>Bootstrap</h3> */}
                                    <span className='bar'><span className='bootstrap'></span></span>
                                </div>
                            </div>
                            

                            <div className="progress">  
                                <span className="skill">Mongo DB <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar mysql" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>My Sql</h3> */}
                                    <span className='bar'><span className='mysql'></span></span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">

                            <div className="progress">
                                <span className="skill">Node JS <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar reactjs" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>React JS</h3> */}
                                    <span className='bar'><span className='NodeJS'></span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Express JS <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar bootstrap" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>Bootstrap</h3> */}
                                    <span className='bar'><span className='Express'></span></span>
                                </div>
                            </div>
                            

                            <div className="progress">  
                                <span className="skill">Mongo DB<i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar mysql" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    {/* <h3>My Sql</h3> */}
                                    <span className='bar'><span className='MongoDB'></span></span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}