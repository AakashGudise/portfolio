import './resume.component.css'

export function ResumeComponent() {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>G Aakash</h4>
                                <p><em>Innovative and deadline-driven Developer with 1+ year of experience 
                                    creating user-focused digital solutions, transforming initial 
                                    concepts into functional, efficient, and polished deliverables.</em></p>
                                <ul>
                                    {/* <li>Portland par 127,Orlando, FL</li> */}
                                    <li>(+92) 7989023063</li>
                                    <li>gudisheakash@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>B Tech In Mechanical engineering</h4>
                                <h5>2019 - 2022</h5>
                                <p><em>Brilliant Institute of Technology,</em></p>
                                <p>Jawaharlal Nehru Technological University Hyderabad</p>
                            </div>
                            <div className="resume-item">
                                <h4>Diploma in Mechanical Engineering</h4>
                                <h5>2016 - 2019</h5>
                                <p><em>Sri Indu Istitute of Egineering and Technology</em></p>
                                {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                            </div>
                            <div className="resume-item">
                                <h4>SSC</h4>
                                <h5>2016</h5>
                                <p><em>Indra Vidya Nikethan High School</em></p>
                                {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Associate Software Developer</h4>
                                <h5>2022 - 2023</h5>
                                <p><em>Synergy Universal PVT LTD</em></p>
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>IT Recruiter</h4>
                                <h5>2021 - 2021</h5>
                                <p><em>IDC Technologies PVT LTD</em></p>
                                <ul>
                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
