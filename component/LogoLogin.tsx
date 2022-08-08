import Image from 'next/image';
import logoLogin from '../assets/logo-login.jpeg';
import { Col } from 'react-bootstrap';

const LogoLogin = ({data} : {data: any}) => {
  return (
    <Col className='d-none d-md-flex flex-column justify-content-center align-items-center'>
      <Image className='mb-4' src={logoLogin} alt="logo login"></Image>
      <h4>Email: {data?.email ? data.email : 'xxxxxxxxxxx'}</h4>
      <h4>Password: {data?.password ? data.password.split('').map(() => ('x')) : 'xxxxxxxxxxx'} </h4>
    </Col>
  );
}

export default LogoLogin
