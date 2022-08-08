import { Card, Col, Form, Button } from 'react-bootstrap';

const CardLogin = ({action, submit} : {action: any, submit:any}) => {
  
  return (
    <Col className='d-flex justify-content-center align-items-center'>
      <Card className='p-3'>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={action} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={action} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </Card>
    </Col>
  )
}

export default CardLogin
