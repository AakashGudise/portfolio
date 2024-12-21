import { BarChart, Binoculars, Briefcase, BrightnessAltHigh, Calendar4Week, CardChecklist, Quote } from 'react-bootstrap-icons'
import './services.component.css'
import testimonials_1 from '../../assets/images/testimonials/testimonials-1.jpg';
import testimonials_2 from '../../assets/images/testimonials/testimonials-2.jpg';
import testimonials_3 from '../../assets/images/testimonials/testimonials-3.jpg';
import testimonials_4 from '../../assets/images/testimonials/testimonials-4.jpg';
import testimonials_5 from '../../assets/images/testimonials/testimonials-5.jpg';



export function ServicesCompnent() {
    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>
                        MERN Stack Developer specializes in building dynamic, 
                        full-stack web applications using MongoDB, Express.js, React.js, 
                        and Node.js, ensuring seamless performance, robust security, and 
                        scalable solutions.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><Briefcase classNameName='serviceicon'></Briefcase></div>
                            <h4 className="title"><a href="">Front-End Development
                            </a></h4>
                            <p className="description">Building dynamic, responsive, and interactive 
                                user interfaces using React.js.Optimizing user experiences with seamless 
                                navigation and design.Implementing reusable components and managing state 
                                with React hooks, context, or Redux.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><CardChecklist classNameName='serviceicon'></CardChecklist></div>
                            <h4 className="title"><a href="">Back-End Development</a></h4>
                            <p className="description">Developing RESTful APIs with Express.js.
                                Handling server-side logic, middleware, and integration with databases.
                                Ensuring secure and efficient back-end operations.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><BarChart classNameName='serviceicon'></BarChart></div>
                            <h4 className="title"><a href="">Database Management
                            </a></h4>
                            <p className="description">Designing and managing NoSQL databases with MongoDB.
                                Writing efficient queries and managing database relationships.
                                Ensuring data consistency, scalability, and security.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><Binoculars classNameName='serviceicon'></Binoculars></div>
                            <h4 className="title"><a href="">Full-Stack Integration</a></h4>
                            <p className="description">Combining front-end, back-end, 
                                and database layers seamlessly.
                                Debugging and resolving integration issues.
                                Deploying and managing full-stack applications.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><BrightnessAltHigh classNameName='serviceicon'></BrightnessAltHigh></div>
                            <h4 className="title"><a href="">API Development & Integration</a></h4>
                            <p className="description">
                                Creating custom APIs for application features.
                                Integrating third-party APIs for services like payments, 
                                maps, or authentication.
                                Ensuring API security and performance.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon"><Calendar4Week classNameName='serviceicon'></Calendar4Week></div>
                            <h4 className="title"><a href="">Security Implementation</a></h4>
                            <p className="description">Implementing user authentication and 
                                authorization with JWT or OAuth.
                                Encrypting sensitive data and maintaining secure communication channels.</p>
                        </div>
                    </div>

                </div>
            </section>
            

{/* 
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p className='testmonialparagraph'>
                                                <Quote className='quote-icon-left'></Quote>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                <Quote className='quote-icon-right'></Quote>

                                            </p>
                                            <img src={testimonials_1} className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p className='testmonialparagraph'>
                                                <Quote className='quote-icon-left'></Quote>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                <Quote className='quote-icon-right'></Quote>

                                            </p>
                                            <img src={testimonials_2} className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p className='testmonialparagraph'>
                                                <Quote className='quote-icon-left'></Quote>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                <Quote className='quote-icon-right'></Quote>

                                            </p >
                                            <img src={testimonials_3} className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p className='testmonialparagraph'>
                                                <Quote className='quote-icon-left'></Quote>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                <Quote className='quote-icon-right'></Quote>

                                            </p>
                                            <img src={testimonials_4} className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p className='testmonialparagraph'>
                                                <Quote className='quote-icon-left'></Quote>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                                <Quote className='quote-icon-right'></Quote>

                                            </p>
                                            <img src={testimonials_5} className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
 */}


            {/* <!-- End Testimonials Section --> */}
        </div>
    )
}