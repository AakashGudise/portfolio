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
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><Briefcase classNameName='serviceicon'></Briefcase></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><CardChecklist classNameName='serviceicon'></CardChecklist></div>
                            <h4 className="title"><a href="">Dolor Sitema</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><BarChart classNameName='serviceicon'></BarChart></div>
                            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><Binoculars classNameName='serviceicon'></Binoculars></div>
                            <h4 className="title"><a href="">Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><BrightnessAltHigh classNameName='serviceicon'></BrightnessAltHigh></div>
                            <h4 className="title"><a href="">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon"><Calendar4Week classNameName='serviceicon'></Calendar4Week></div>
                            <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}

            {/* <!-- ======= Testimonials Section ======= --> */}

{/* 
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
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
            </div> */}



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



            {/* <!-- End Testimonials Section --> */}
        </div>
    )
}