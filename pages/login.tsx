import React, { useState, useEffect } from 'react';
// Modules
import { NextPage } from 'next/types';
// MUI Core
import { Container, Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Layout } from '../components/layout';
import { useRouter } from 'next/router'
import Snackbar from '@material-ui/core/Snackbar';
import AuthActions  from '../src/action';
import { connect } from "react-redux";
import Alert from '@material-ui/lab/Alert';
import instance from '../axios';


interface FormData {
  email: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const alertMessage = (severity:any, msg: string) => {
  <Alert severity={severity}>{msg}</Alert>
}
const setToken= (userToken) => {
  localStorage.setItem('token', JSON.stringify(userToken));
}

const getToken= () => {
}

const LoginPage: NextPage = ({loginUser,user}:any) => {
  const router = useRouter()
  const classes = useStyles();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);
  useEffect(()=>{
      if(user && user.authenticated) {
          router.push('/home');
      }
  },[])
  useEffect(()=>{},[JSON.stringify(user)]);
  const onSubmit = () => {
    setLoading(true);
    <Snackbar open={true} autoHideDuration={6000} >
        <Alert severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

     instance.get('/rest/login', {
      headers: {
        'Cookie': 'ARRAffinity=c3cea541a79e79d9b830bd0962230a90a73c7e966a667c7e488559acce1b68d5; ARRAffinitySameSite=c3cea541a79e79d9b830bd0962230a90a73c7e966a667c7e488559acce1b68d5',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Authorization': `Basic ${token}`,
      }
    })
      .then(res => {
        if (res.data) {
          loginUser(res.data);
          setLoading(false);
          setToken(res.data);
          alertMessage('success', "Successfully Login !")
          router.push('/home');
        }
      })
      .catch((err) => {
        alertMessage('error', "Username and password is incorrect");
      });
  }

  return (
    <Layout title="" isLogin={true} isLoading="">
      <Container className={classes.container} maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  onChange={(e) => { setUsername(e.target.value) }}
                //   variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  onChange={(e) => { setPassword(e.target.value) }}

                //   variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" onClick={onSubmit} fullWidth type="submit" variant="contained">
            {loading ? "Loading..." : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>

  );
};

const mapStateToProps = (state) => {
  return {
      user: state.auth.user,
  };
};

const mapDispatchToProps = {
  loginUser : AuthActions.loginUser
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
