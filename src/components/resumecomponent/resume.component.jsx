import './resume.component.css'

export function ResumeComponent() {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                    <br></br>

                        <h2>Resume</h2>
                        <p>MERN Stack developer skilled in MongoDB, Express.js, React.js and Node.js. 
                            Proven success in crafting and deploying web applications for optimal 
                            user experiences. Actively seeking opportunities for contribution and 
                            professional growth.</p>
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
                                    <li>(+91) 7989023063</li>
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
                                    <li><h4>Projects</h4></li>
                                    <li><h6><u>Multi Vendor Service Provider</u></h6></li>
                                    <li>Developed a web-based multi-vendor service provider platform using the MERN stack,
                                        allowing multiple vendors to register, offer their services,
                                        and customers to search, book, and rate services seamlessly.</li>
                                    <li>Technologies: MongoDB, Express.js, React.js, Node.js, Redux,
                                        JWT Authentication, Cloudinary (for image uploads), Rest API’s
                                        (for CRUD quick response).</li>
                                    <li>
                                        Designed and Developed RESTful APIs in Node.js/Express for vendor
                                        and service management, authentication, and order processing. Built Front-End using React.js
                                        with Redux for state management to handle user authentication, service listings,
                                        and booking flows.
                                    </li>
                                    <li>Integrated MongoDB to store vendor details, customer information,
                                        services, and booking records. Used Mongoose for database modeling
                                        and querying. Implemented JWT Authentication for secure login and
                                        access control for vendors and customers.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>IT Recruiter</h4>
                                <h5>2021 - 2021</h5>
                                <p><em>IDC Technologies PVT LTD</em></p>
                                <ul>
                                    <li>Screening and Sourcing Profile in various 
                                        pourtals as per client requirement.</li>
                                    <li>Commuicating with cliet’s and candidates ,Scheduling interview.</li>
                                    <li>Collecting Documents for backgrount verification and maintaining candidates records</li>
                                    {/* <li>Created 4+ design presentations and proposals a month for clients and account managers</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
