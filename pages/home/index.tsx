import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Navbar, Row } from 'react-bootstrap'

const Home: NextPage = () => {
  const [isSliderbar, setisSlidebar] = useState<boolean>(false);
  const [isSliderbar1, setisSlidebar1] = useState<boolean>(false);
  const openSlidebar = () => {
    if (!isSliderbar) {
      setisSlidebar(!isSliderbar);
      setTimeout(()=>{
        setisSlidebar1(!isSliderbar1);
      }, 300);
    } else {
      setisSlidebar1(!isSliderbar1);
      setTimeout(()=>{
        setisSlidebar(!isSliderbar);
      }, 300);
    }
  }
  return (
    <Container fluid className='home'>
      <div className='clogin d-flex'>
        <div className={`bg-primary clogin slidebar ${ isSliderbar1 ? "active" : ""} ${isSliderbar ? "finally" : ""}`}>
          <Row className='pt-3 g-0'>
            <h3 className='text-center text-white fw-bold'>Bootstrap</h3>
            <h6 className='text-center text-white fw-bold'>di NextJs</h6>
            <ul className='list-unstyled slidebar'>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
                    <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
                  </svg>
                  <span>Home</span>
                </li>
              </Link>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
                  </svg>
                  <span>Email</span>
                </li>
              </Link>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-text-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                  </svg>
                  <span>Message</span>
                </li>
              </Link>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                  <span>Profile</span>
                </li>
              </Link>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                  </svg>
                  <span>Setting</span>
                </li>
              </Link>
              <Link href={'/'}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                  </svg>
                  <span>Bootstrap</span>
                </li>
              </Link>
            </ul>
          </Row>
          <Row className='g-0'>
            <div className='btn-backslidebar' onClick={openSlidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg>
            </div>
          </Row>
        </div>
        <div className='body navcs'>
          <Row className='g-0'>
            <Col className='p-0'>
              <Navbar className='bg-primary'>
                <Container>
                  <h4 className='fw-bold text-white m-0' onClick={openSlidebar}>Home</h4>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Row className="g-0 p-4 justify-content-center">
          {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
      ].map((variant) => (
        <Col md={4} className="px-2" sm={6} key={variant}>
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            className="my-3"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cardt.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default Home
