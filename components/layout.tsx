import React from 'react'
import { AppBar, Avatar, Backdrop, Box, Button, Collapse, Container, Fab, Grid, IconButton, Paper, Toolbar, Typography } from "@material-ui/core"
import { CloudUploadTwoTone, HomeTwoTone, HotelTwoTone, KeyboardArrowUp, NoteAddTwoTone, PermContactCalendarTwoTone } from "@material-ui/icons"
import { useState } from "react";
import Navbar from '../components/navbar'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

// const AppNav = () => (
//   <Grid container spacing={4} style={{textAlign: 'center', marginBottom: '1rem'}}>
//     <Grid item xs={12} style={{textAlign: 'center'}}>
//       <Link href='/'>
//         <a>
//           <Button color='primary' variant='outlined' disableElevation fullWidth endIcon={<HomeTwoTone />}>
//             Daily Tracking
//           </Button>
//         </a>
//       </Link>
//     </Grid>
//     <Grid item xs={6} style={{textAlign: 'right'}}>
//       <a>
//         <Link href='/lodging'>
//           <Button color='primary' variant='outlined' disableElevation fullWidth endIcon={<HotelTwoTone />}>
//             Lodging
//           </Button>
//         </Link>
//       </a>
//     </Grid>
//     <Grid item xs={6} style={{textAlign: 'left'}}>
//       <Link href='/timesheets'>
//         <a>
//           <Button color='primary' variant='outlined' disableElevation fullWidth endIcon={<PermContactCalendarTwoTone />}>
//             Timesheets
//           </Button>
//         </a>
//       </Link>
//     </Grid>
//     <Grid item xs={6} style={{textAlign: 'right'}}>
//       <Link href='/job-orders'>
//         <a>
//           <Button color='primary' variant='outlined' disableElevation fullWidth endIcon={<NoteAddTwoTone />}>
//             Job Orders
//           </Button>
//         </a>
//       </Link>
//     </Grid>
//     <Grid item xs={6} style={{textAlign: 'left'}}>
//       <Link href='/documents'>
//         <a>
//           <Button color='primary' variant='outlined' disableElevation fullWidth endIcon={<CloudUploadTwoTone />}>
//             Documents
//           </Button>
//         </a>
//       </Link>
//     </Grid>
//   </Grid>
// )

export const Layout = ({children, title, isLogin, isLoading}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
  <Container maxWidth='xs' style={{height: 'auto', minHeight: '100vh', position: 'relative'}}>
    <Paper style={{height: '100%', width: '100%'}}>
      <AppBar className={styles.appBar} color='primary' variant='outlined' position='sticky'>  
        <Toolbar variant='dense'>
          <Navbar/>
          <Typography variant='subtitle1'>{title}</Typography>
          {/* For login/logout actions */}
          {isLoading ? null : <Avatar component='button' onClick={() => alert('show login/logout')} style={{marginLeft: 'auto', height: 32, width: 32, fontSize: 12, appearance: 'none', border: 'none', cursor: 'pointer'}}>
            CK
          </Avatar>}
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        {children}
      </main>

      {/* <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} style={{zIndex: 1200, backgroundColor:'rgba(255,255,255,.4)', backdropFilter: 'blur(1px)'}}/>
      <Box style={{width: 'calc(100% - 96px)', textAlign: 'center', position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1201}}>
        <Collapse in={menuOpen}>
          <AppNav />
        </Collapse>
        <Fab size='small' color='primary' onClick={() => setMenuOpen(!menuOpen)}>
          <KeyboardArrowUp style={{transition: 'all 300ms', transform: `rotate(${menuOpen ? '180deg' : '0deg'})`}}/>
        </Fab>
      </Box> */}
    </Paper>
  </Container>
  </>
}