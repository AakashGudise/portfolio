import './portfolio.component.css'
import portfolio_1 from '../../assets/images/portfolio/portfolio-1.jpg';
import portfolio_2 from '../../assets/images/portfolio/portfolio-2.jpg';
import portfolio_3 from '../../assets/images/portfolio/portfolio-3.jpg';
import portfolio_4 from '../../assets/images/portfolio/portfolio-4.jpg';
import portfolio_5 from '../../assets/images/portfolio/portfolio-5.jpg';
import portfolio_6 from '../../assets/images/portfolio/portfolio-6.jpg';
import portfolio_7 from '../../assets/images/portfolio/portfolio-7.jpg';
import portfolio_8 from '../../assets/images/portfolio/portfolio-8.jpg';
import portfolio_9 from '../../assets/images/portfolio/portfolio-9.jpg';
// import portfoliodetails_1 from '../../assets/images/portfolio/portfolio-details-1.jpg';
// import portfoliodetails_2 from '../../assets/images/portfolio/portfolio-details-2.jpg';
// import portfoliodetails_3 from '../../assets/images/portfolio/portfolio-details-3.jpg';
import { Link, Plus } from 'react-bootstrap-icons';

export function PortfolioComponent() {
    return (
        <div>
            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                    <br></br>

                        <h2>Portfolio</h2>
                        <p>  I am a dedicated MERN Stack Developer with 1 year of experience in 
                            building responsive web applications using React.js, Node.js, Express.js, 
                            and MongoDB(Database). I specialize in creating seamless user experiences and 
                            scalable solutions to meet diverse client needs</p>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src={portfolio_1} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><Plus></Plus> </a>
                                        <a href='' title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src={portfolio_2} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src={portfolio_3} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_3} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src={portfolio_4} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_4} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src={portfolio_5} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_5} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src={portfolio_6} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_6} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src={portfolio_7} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_7} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src={portfolio_8} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_8} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src={portfolio_9} class="img-fluid" alt=""/>
                                    <div class="portfolio-links">
                                        <a href={portfolio_9} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><Plus></Plus></a>
                                        <a href="portfolio-details.html" title="More Details"><Link></Link></a>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

