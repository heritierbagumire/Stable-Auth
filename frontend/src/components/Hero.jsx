import  { Container, Card, Button } from 'react-bootstrap'
import {
    LinkContainer
} from 'react-router-bootstrap'


const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN authontication</h1>
                    <p className='text-center mb-4'>this is mern auth text paragraph that is 
                        simply showing how authentication works and its role</p>
                    <div className='d-flex'>
                        <LinkContainer to='/login'>
                        <Button variant='primary' className='me-3'>
                            Sign in
                        </Button>

                        </LinkContainer>
                        <LinkContainer to='/register'>
                        
                        <Button variant='secondary' className='me-3'>
                            Sign up
                        </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
}
 
export default Hero;