import React from 'react';
import Chaman from '../assets/Chaman.jpeg'


const About = () => {

    const imgStyle = {
        width: 150,
        height: 150,
        borderRadius: 75
    }

    return (
        <div>

            <img src={Chaman} style={imgStyle} alt="Chaman Gurjar" />

            <h1>About Me</h1>
            <h6> Hi, my name is Chaman Singh and I’m a Backend Developer.
            Also having experience in iOS and Android Development from scratch to make app live (in play store or app store).
            </h6>

            <hr />
            <div>
                <h6>I am most skilled in:</h6>
                <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                    <li>Backend = Java, Spring, Spring-Boot </li>
                    <li>iOS App Development = iOS (Swift) </li>
                    <li>Android App Developement = Android (Java And Kotlin)</li>
                </ul>

                <hr />

                <h6>Sometimes also writing code in:</h6>
                <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                    <li>Angular</li>
                    <li>React </li>
                </ul>
            </div>

        </div >
    )
}

export default About;
