import React from 'react'
import { AppBar, Avatar, Backdrop, Box, Button, Collapse, Container, Fab, Grid, IconButton, Paper, Toolbar, Typography } from "@material-ui/core"
import styles from '../styles/Layout.module.css'
import Navbar from '../components/navbar'

export const Layout = ({children}) => {
  return <>
  <Container maxWidth='xs' style={{height: 'auto', minHeight: '100vh', position: 'relative'}}>
    <Paper style={{height: '100%', width: '100%'}}>
      <AppBar color='primary' variant='outlined' position='sticky'>  
        <Toolbar variant='dense'>
          <Navbar/>
          <Typography variant='subtitle1'>ProResponse</Typography>
          {/* For login/logout actions */}
          <Avatar component='button' onClick={() => alert('show login/logout')} style={{marginLeft: 'auto', height: 32, width: 32, fontSize: 12, appearance: 'none', border: 'none', cursor: 'pointer'}}>
            CK
          </Avatar> 
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        {children}
      </main>

    </Paper>
  </Container>
  </>
}