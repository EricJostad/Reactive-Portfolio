import React from 'react';
import '../About/about.css';
import { Jumbotron, } from 'react-bootstrap';

function About() {
    return (
        <Jumbotron className='bio-jumbo'>
            <p>
                Hello, my name is Eric Jostad and this is placeholder text!
        </p>
        </Jumbotron>
    );
}

export default About;