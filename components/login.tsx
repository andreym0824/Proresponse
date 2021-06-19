import { Container, Paper } from "@material-ui/core"
import Image from 'next/image'
import styles from '../styles/Login.module.css'

const LoginPage = () => (
  <Container maxWidth='xs'>
    <Paper style={{height: 767, maxHeight: '100vh'}}>
    <Image
        src="/proresponse-logo.png"
        alt="Proresponse"
        width={200}
        height={150}
      />
      <p>Login form</p>
    </Paper>
  </Container>
)

export default LoginPage