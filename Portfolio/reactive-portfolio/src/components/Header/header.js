import React from 'react';
import { Jumbotron, Card } from 'react-bootstrap';
import '../Header/header.css';


function Header() {
    return (
        <>
            <Jumbotron fluid className='header'>
                <div className='row'>
                    <div id='profile-image' className='col-lg-6 col-md-12 col-sm-12'>
                        <p className='circle'></p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 bio-card'>
                        <Card className='bio-content' style={{ width: '18rem' }}>
                        </Card>
                    </div>
                </div>
            </Jumbotron>
        </>
    );
}

export default Header;