import type { NextPage } from 'next'
import { Container, Row} from 'react-bootstrap';
import CardLogin from '../component/CardLogin';
import LogoLogin from '../component/LogoLogin';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();
  const [dataLogin, setdataLogin] = useState({
    email: '',
    password: ''
  });

  const onchangeText = (e: { target: { value: string; id: string; }; }) :void => {
    setdataLogin(()=> {
      return ({ ...dataLogin, [e.target.id]: e.target.value });
    });
    console.log(dataLogin);
  }

  const submit = (e: any) :void => {
    e.preventDefault();
    router.push('/home');
  }

  return (
    <Container>
      <Row className='clogin'>
        <CardLogin action={onchangeText} submit= {submit} />
        <LogoLogin data={dataLogin} />
      </Row>
      <div className='bgLogin'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L12.6,69.3C25.3,75,51,85,76,106.7C101.1,128,126,160,152,176C176.8,192,202,192,227,160C252.6,128,278,64,303,74.7C328.4,85,354,171,379,181.3C404.2,192,429,128,455,85.3C480,43,505,21,531,48C555.8,75,581,149,606,176C631.6,203,657,181,682,181.3C707.4,181,733,203,758,208C783.2,213,808,203,834,213.3C858.9,224,884,256,909,245.3C934.7,235,960,181,985,160C1010.5,139,1036,149,1061,149.3C1086.3,149,1112,139,1137,149.3C1162.1,160,1187,192,1213,208C1237.9,224,1263,224,1288,213.3C1313.7,203,1339,181,1364,149.3C1389.5,117,1415,75,1427,53.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
      </div>
    </Container>
  )
}

export default Login
