import './fact.component.css'
import React from "react"
import { EmojiSmile, Headphones, Headset, JournalRichtext, People } from 'react-bootstrap-icons'
import CountUp from "react-countup"

// import'./menu.component.css'
// import { Envelope, Facebook, FileEarmark, HddStack, House, HouseDoor, Instagram, LayoutTextWindow, Linkedin, Mailbox2, MenuButton, Person, Phone, Skype, Twitter } from "react-bootstrap-icons"
// import profile from "../../assets/images/profile-img.jpg"
// import myImg_1 from '../../assets/images/my images/myiImg-1.jpeg'



export function FactsComponent() {
    return (
        <div>
            {/* <!-- ======= Header ======= --> */}
            {/* <header id="header" className='header navbarnavbar-expand-lg'>
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={myImg_1} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a><Twitter className='social-icons'></Twitter></a>
                            <a><Facebook className='social-icons'></Facebook></a>
                            <a><Instagram className='social-icons'></Instagram></a>
                            <a><Skype className='social-icons'></Skype></a>
                            <a><Linkedin className='social-icons'></Linkedin></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i><HouseDoor></HouseDoor> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i><Person></Person> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i><FileEarmark></FileEarmark> <span>Resume</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i><LayoutTextWindow></LayoutTextWindow> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i><HddStack></HddStack>  <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i><Envelope></Envelope><span>Contact</span></a></li>
                        </ul>
                    </nav>
                    <button type='button' className='mobile-nav-toggle d-xl-none' ><i className='iconfont-navigation-menu'></i></button>


                </div>
            </header> */}


            {/* --------------------------facts session-------------------- */}
            <section id="facts" class="facts">
                <div class="container">

                    <div class="section-title">
                        <h2>Facts</h2>
                        <p>In the span of 2 year of experience worked with different clients.</p>
                    </div>

                    <div class="row no-gutters">

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                            <div class="count-box">
                                <i class="bi bi-emoji-smile"></i><EmojiSmile className='i'></EmojiSmile>
                                <CountUp start={0} end={4} duration={15} delay={5}></CountUp>
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div class="count-box">
                                <i class="bi bi-journal-richtext"></i><JournalRichtext className='i'></JournalRichtext>
                                <CountUp start={0} end={5} duration={25} delay={5}></CountUp>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div class="count-box">
                                <i class="bi bi-headset"></i><Headset className='i'></Headset>
                                <CountUp start={0} end={1453} duration={25} delay={5}></CountUp>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div class="count-box">
                                <i class="bi bi-people"></i><People className='i'></People>
                                <CountUp start={0} end={32} duration={3} delay={1}></CountUp>
                                <p><strong>On Boardings</strong> as recruiter</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}