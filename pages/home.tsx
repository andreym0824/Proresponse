import { Box, Button, Dialog, DialogActions, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Switch, TextField, Typography } from '@material-ui/core'
import { ChatTwoTone } from '@material-ui/icons'
import { format } from 'date-fns';
import React, { Fragment, useState ,useEffect} from 'react'
import { Layout } from '../components/layout';
import styles from '../styles/Home.module.css'
import { connect } from "react-redux";
import { useRouter } from 'next/router'
import instance from '../axios';

const Home = ():any=> { // daily tracking
  const user = "maria@proresponseusa.com"
  const password = "maria@proresponseusa.com"
  const router = useRouter()
  const [employees, setEmployees] = useState([]);
  const token = Buffer.from(`${user}:${password}`, 'utf8').toString('base64')
  const retrieveData = async () => {
    const response = await instance.get("/rest/users", {
      headers: {
        'Cookie': 'ARRAffinity=c3cea541a79e79d9b830bd0962230a90a73c7e966a667c7e488559acce1b68d5; ARRAffinitySameSite=c3cea541a79e79d9b830bd0962230a90a73c7e966a667c7e488559acce1b68d5',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Authorization': `Basic ${token}`  
      }})
      return response.data;
  }
    
  useEffect(() => {
   const getAllData = async () => {
     const allEmployees = await retrieveData();
     if(allEmployees) setEmployees(allEmployees);
   }
   getAllData();
  }, [] );
  
//   useEffect(()=>{
//     console.log('user Auth:',user);
//     if(user && user.authenticated) {
//         router.push('/home');
//     }

//       if (!user  && !user.authenticated && !isLoading) {
//         router.push('/login');
//       }
// },[])
useEffect(()=>{},[JSON.stringify(user)]);

  const [tracking, setTracking] = useState(employees.map(e => ({...e, working: true, note: ''})));
  const [bool, refresh] = useState(false);
  const [writingNote, setWritingNote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleWorking = (event: React.ChangeEvent<HTMLInputElement>, employee: any) => {
    let copy = tracking;
    copy.find(e => e.id === employee.id).working = event.target.checked ? true : false;
    setTracking(copy);
    refresh(!bool);
    !event.target.checked && setWritingNote(employee.id);
  };
  const handleNote = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, employee: any) => {
    if(writingNote) {
      let copy = tracking;
      copy.find(e => e.id === writingNote).note = event.target.value;
      setTracking(copy);
      refresh(!bool);
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

return <>
    <Layout title="" isLogin="" isLoading="">   
        <Typography style={{fontWeight: 'bold' , fontSize:'14px'}}color='primary' variant='overline'>Daily Tracking</Typography>
        <List dense>
        <div className={styles.nameWorking}>
        <Typography variant='overline'>Name</Typography>
        <Typography variant='overline'>Working?</Typography>
        </div>
        {employees.map((employee) => <Fragment key={`employees_${employee.id}`}>
            <ListItem style={{marginLeft:'-15px'}}>
            <ListItemText>
                <Typography component='label' htmlFor={`employees_${employee.id}`}>
                  {/* {employee.DataValues.map((value) =><p>Name:&nbsp;{value.DataValue}</p>)} */}
                  {employee.FirstName} {employee.LastName}
                </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton color={employee.note ? 'primary' : 'default'} size='small' name="description" onClick={() => setWritingNote(employee.id)}>
                <ChatTwoTone />
                </IconButton>
                <ListItemIcon style={{marginRight:'-25px'}}>
                    <Switch id={`employees_${employee.id}`} name='working' color='primary' checked={employee.working} onChange={(event) => handleWorking(event, employee)} />
                </ListItemIcon>
            </ListItemSecondaryAction>
            </ListItem>
            <Dialog maxWidth='xs' fullWidth open={writingNote === employee.id} onClose={() => setWritingNote(0)}>
            <Box padding={2}>
                <Typography variant='overline'>Reason for absence</Typography>
                <Typography variant='subtitle1'>{employee.name} – {format(new Date(), 'MMMM dd')}</Typography>
                <br />
                <TextField
                label='Details for absence'
                variant='outlined' 
                multiline 
                fullWidth 
                rows={3}
                onChange={(event) => handleNote(event, employee)}
                value={employee.note}
                />
            </Box>
            <DialogActions>
                <Button size='small' color='primary' onClick={() => setWritingNote(0)}>
                Save
                </Button>
            </DialogActions>
            </Dialog>
        </Fragment>)}
        </List>
        <br />
        <Grid container  justify='flex-end' spacing={1} style={{marginTop: '.75rem'}}>
        <Grid item>
        <span>Status: Working</span>
        </Grid>
        <Grid item>
            <Button style={{marginLeft:'1rem'}} variant='contained' color='primary' size='small' disableElevation>
            Submit
            </Button>
        </Grid>
        </Grid>
    </Layout>

</>
}


const mapStateToProps = (state) => {
  return {
      user: state.auth.user,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
