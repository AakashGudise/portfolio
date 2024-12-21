import { useRef } from 'react'
import { saveUser } from '../../services/storage/user.servces'
import './contact.component.css'
import { Envelope, GeoAlt, Phone } from 'react-bootstrap-icons';


export function ContactComponent() {
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    function ClearData() {
        nameRef.current.value = '';
        emailRef.current.value = '';
        subjectRef.current.value = '';
        messageRef.current.value = '';
    }


    function SaveContactData() {
        let data = {
            id: 0,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }
        saveUser(data).then((res) => {
            alert('Message Sent successfully');
            ClearData();
        }).catch(() => {

        })
    }




    return (
        <div>
            <main>
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                        <br></br>

                            <h2>Contact</h2>
                            <p>Building seamless and efficient web applications requires a 
                                strong grasp of modern technologies. As MERN stack developers, 
                                we thrive on solving complex problems and crafting solutions 
                                that enhance user experiences. Leveraging the power of MongoDB 
                                for robust data handling, Express.js for scalable back-end 
                                architecture, React.js for dynamic front-end interfaces, 
                                and Node.js for efficient server-side execution, we transform 
                                challenges into opportunities. Together, we develop innovative 
                                solutions, ensuring every detail contributes to a seamless and 
                                impactful digital experience.</p>
                        </div>

                        <div className="row" data-aos="fade-in">

                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <GeoAlt className='contact-icons'></GeoAlt>
                                        <h4>Location:</h4>
                                        <p>Hyderabad, Telangana, 500053</p>
                                    </div>

                                    <div className="email">
                                        <Envelope className='contact-icons'></Envelope>
                                        <h4>Email:</h4>
                                        <p>aakashgudise@gmail.com /   <br></br> gudisheakash@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <Phone className='contact-icons'></Phone>
                                        <h4>Call:</h4>
                                        <p>+91 7989023063</p>
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.472332567743!2d78.39170797516606!3d17.43709278345863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935b5300edb3%3A0xd7d90723be396126!2sSynergy%20Universal!5e0!3m2!1sen!2sin!4v1702451232328!5m2!1sen!2sin"   height="290" style={{ border: "0;",width:"100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1//m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form className=" contact-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label for="name">Your Name</label>
                                            <input type="text" name="name" className="form-control" id="name" required></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="name">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email" required></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" id="message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" onClick={(() => SaveContactData())}>Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Contact Section --> */}

            </main>
            {/* //   <!-- End #main -- > */}





        </div >
    )
}