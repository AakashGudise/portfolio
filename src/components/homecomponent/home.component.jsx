import { useEffect, useRef } from 'react'
import'./home.component.css'
// import { init } from 'ityped';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


export function HomeComponent() {
    // const textRef = useRef()

    // creating variables for useTypewritter

    const {text} = useTypewriter({
        words:['Developer','Designer','A MERN STACK Developer', 'FREELANCER'],
        loop: {}
    });
    


    // useEffect
// useEffect(() => {
//     init(textRef.current,{
//         backDelay:1500,
//         showCursor:true,
//         strings : [
//             'developer',
//             'designer',
//             'a MERN Stack Developer',
//             'a Freelancer'
//         ]
//     })
// },[])


    return (
        

        <div>
            <section id="hero" className="d-flex flex-column justify-content-around align-items-center">
            <div className="hero-container">
                    <h1>Gudise Aakash</h1>
                    <p>I'm  <span > 
                        {text}
                    </span> <Cursor></Cursor> </p>
                </div>

                {/* <div className="hero-container">
                    <h1>Gudise Aakash</h1>
                    <p>I'm  <span ref={textRef}></span> </p>
                </div> */}

            </section>
        </div>
    )
}
