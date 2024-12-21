// import { useEffect, useRef } from 'react'
// import'./home.component.css'
// // import { init } from 'ityped';
// import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';


// export function HomeComponent() {
//     // const textRef = useRef()

//     // creating variables for useTypewritter

//     const {text} = useTypewriter({
//         words:['Developer','Designer','A MERN STACK Developer', 'FREELANCER'],
//         loop: {}
//     });
    


//     // useEffect
// // useEffect(() => {
// //     init(textRef.current,{
// //         backDelay:1500,
// //         showCursor:true,
// //         strings : [
// //             'developer',
// //             'designer',
// //             'a MERN Stack Developer',
// //             'a Freelancer'
// //         ]
// //     })
// // },[])


//     return (
        

//         <div>
//             <section id="hero" className="d-flex flex-column justify-content-around align-items-center">
//             <div className="hero-container">
//                     <h1>Gudise Aakash...........</h1>
//                     <p>I'm  <span > 
//                         {text}
//                     </span> <Cursor></Cursor> </p>
//                 </div>

//                 {/* <div className="hero-container">
//                     <h1>Gudise Aakash</h1>
//                     <p>I'm  <span ref={textRef}></span> </p>
//                 </div> */}

//             </section>
//         </div>
//     )
// }


import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './home.component.css';

export function HomeComponent() {
    // Initialize typewriter effect
    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'A MERN STACK Developer', 'Freelancer'],
        loop: 0, // Set to 0 for infinite loop or specify a number of iterations
        delaySpeed: 1500, // Delay between changing words
        deleteSpeed: 50, // Speed of deleting characters
        typeSpeed: 100, // Speed of typing characters
    });

    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-around align-items-center">
                <div className="hero-container">
                    <h1>Gudise Aakash</h1>
                    <p>
                        I'm <span>{text}</span>
                        <Cursor cursorStyle="|" />
                    </p>
                </div>
            </section>
        </div>
    );
}
