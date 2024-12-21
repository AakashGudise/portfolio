import './about.component.css'
import myiImg from '../../assets/images/myimages/aboutimg.png'
import { ChevronRight } from 'react-bootstrap-icons'

export function AboutComponent() {
    return (
        <div>


<section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>Driven developer skilled at solving complex problems and delivering seamless solutions. 
            Experienced in tackling challenges with precision, ensuring efficient functionality and 
            user-centric results. Committed to crafting high-quality, reliable, and innovative 
            applications.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={myiImg} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Associate Software Developer</h3>
            <p className="fst-italic">
            MERN Stack developer skilled in MongoDB, Express.js, React.js and Node.js. 
            Proven success in crafting and deploying web applications for optimal user experiences. 
            Actively seeking opportunities for contribution and professional growth.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><ChevronRight></ChevronRight> <strong>Birthday:</strong> <span>12 June 1999</span></li>
                  <li><ChevronRight></ChevronRight> <strong>Website:</strong> <span>https://akashportfolio-gold.vercel.app</span></li>
                  <li><ChevronRight></ChevronRight> <strong>Phone:</strong> <span>+91 7989023063</span></li>
                  <li><ChevronRight></ChevronRight> <strong>City:</strong> <span>Falaknuma,Hyderabad</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><ChevronRight></ChevronRight> <strong>Age:</strong> <span>24</span></li>
                  <li><ChevronRight></ChevronRight> <strong>Degree:</strong> <span>B Tech</span></li>
                  <li><ChevronRight></ChevronRight> <strong>EMail ID:</strong> <span>gudisheakash@gmail.com</span></li>
                  <li><ChevronRight></ChevronRight> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            Dedicated to delivering efficient and maintainable solutions with attention to 
            detail and user needs. Skilled at addressing complex challenges, ensuring seamless 
            functionality, and writing clean, optimized code. Adept at collaborating to build 
            scalable systems while maintaining high standards of reliability and performance.
            </p>
          </div>
        </div>

      </div>
    </section>
            {/* <div classNameName="row">
                <div classNameName="col-3">

                </div>
                <div classNameName="col-9">
                    <h2>About</h2>

                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
                        <br></br>cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
               
            </div> */}
        </div>

    )
}