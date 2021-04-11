import { Fragment } from 'react';
import Wrapper from '../Wrapper/wrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './body.css';

const Body = () => {
    return (
        <Fragment>
            <Wrapper title='General Info'>
                <Container>
                    <Row>
                        <Col lg={2}><p><em>Name:</em></p></Col>
                        <Col className='text-left'><p>Eric Jostad</p></Col></Row>
                    <Row>
                        <Col lg={2}><p><em>Email:</em></p></Col>
                        <Col className='text-left'><p>eric.jostad@outlook.com</p></Col></Row>
                    <Row>
                        <Col lg={2}><p><em>Github:</em></p></Col>
                        <Col className='text-left'><p><a href='https://github.com/EricJostad'>https://github.com/EricJostad</a></p></Col>
                    </Row>
                    <Row>
                        <Col lg={2}><p><em>LinkedIn:</em></p></Col>
                        <Col className='text-left'><a href='https://www.linkedin.com/in/ejostad'>https://www.linkedin.com/in/ejostad</a></Col>
                    </Row>
                </Container>
            </Wrapper>
            <Wrapper title='Resume'>
                <iframe title='resume' src='Portfolio\reactive-portfolio\src\assets\downloads\Eric Jostad Resume 2021.pdf' width='100%' height='500px'></iframe>
                <a href='Portfolio\reactive-portfolio\src\assets\downloads\Eric Jostad Resume 2021.pdf' download='Eric Jostad Resume 2021.pdf'>Download</a>
            </Wrapper>
            <Wrapper title='Projects'>
                <p className='pt-5'>Mad Libz</p>
                <Row>
                    <Col lg={6}>
                        <img
                            src='.../assets/images/MadLibz.PNG'
                            alt='Mad-Libz' />
                    </Col>
                    <Col lg={2}>
                        <a
                            className='align-self-center'
                            href='https://teammadlibz.github.io/MadLibz/'
                        >Deployed Link</a>
                    </Col>
                    <Col lg={4}>
                        <a
                            className='align-self-center'
                            href='https://github.com/EricJostad/MadLibz-1'
                        >Repository</a>
                    </Col>
                </Row>
                <p className='pt-5'>Better Books</p>
                <Row>
                    <Col lg={6}>
                        <img
                            src='.../assets/images/betterbooks.PNG'
                            alt='Better-Books' />
                    </Col>
                    <Col lg={2}>
                        <a
                            className='align-self-center'
                            href='https://fathomless-taiga-07873.herokuapp.com/'
                        >Deployed Link</a>
                    </Col>
                    <Col lg={4}>
                        <a
                            className='align-self-center'
                            href='https://github.com/EricJostad/Better-Books'
                        >Repository</a>
                    </Col>
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Body;