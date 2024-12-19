import './home.component.css'
import { useRef, useEffect } from "react"
import React from "react";
import { init } from "ityped"

export function Home2() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Developer',
                'MERN Stack developer',
            ]
        })
    }, [])
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>G Aakash</h1>
                    <p>Iam</p><span className="typed" ref={textRef}></span>
                </div>

            </section>
        </div>
    )
}