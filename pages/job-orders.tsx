import React, { useState } from "react";
import { Layout } from "../components/layout";
import {Button, Container, TextField} from '@material-ui/core';
import styles from  '../styles/lodging.module.css'
import styles1 from  '../styles/joborder.module.css'
import instance from "../axios";
  
const JobOrdersPage = () => {
  const  [PoNumber, setPoNumber] = useState<string>('');
  const  [CustomerName, setCustomerName] = useState<string>('');
  const  [JobSiteName, setJobSiteName] = useState<string>('');
  const  [Event, setEvent] = useState<string>('');
  const  [JobAddress, setJobAddress] = useState<string>('');
  const  [PRSreference, setPRSreference] = useState<string>('');
  const  [Supervisor, setSupervisor] = useState<string>('');

  const user = "maria@proresponseusa.com"
  const password = "maria@proresponseusa.com"
  const token = Buffer.from(`${user}:${password}`, 'utf8').toString('base64')

  const handleSubmit = async (data) =>{
    data.preventDefault();

    const request = {
      PoNumber,
      CustomerName,
      JobSiteName,
      Event,
      JobAddress,
      PRSreference,
      Supervisor,
    }
  
   await instance.post('/rest/records', request, {
      headers: { 
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        withCredentials: true
      } 
    })
    .then(function (response) {
       return console.log(response.data);
      })  
    }

 return (
 
    <Layout isLoading isLogin  title="ProResponse">
    <Container className={styles.lodging}>
      <h2 className={styles.h2}>New Job Order</h2>
     <form onSubmit={handleSubmit} className={styles.form} noValidate autoComplete="off">
      <input className={styles.filled} onChange={(event) => setPoNumber(event.target.value)}  required placeholder="PO/Job Number" />
                <input className={styles.filled} onChange={(event) => setCustomerName(event.target.value)} required placeholder="Customer Name"  />
                <input className={styles.filled} onChange={(event) => setJobSiteName(event.target.value)} required placeholder="Jobsite Name" />  
                <input className={styles.filled} onChange={(event) => setEvent(event.target.value)} required placeholder="Event" />
                <input className={styles.filled} onChange={(event) => setJobAddress(event.target.value)} required placeholder="Job Address"  /> 
                <input className={styles.filled} onChange={(event) => setPRSreference(event.target.value)} required placeholder="PRS Reference Number"  /> 
                <input className={styles.filled} onChange={(event) => setSupervisor(event.target.value)} required placeholder="PM/Supervisor"  /> 
                <div className={styles1.btnDiv}>
                  <div className={styles1.btnDiv1}></div>
                  <div className={styles1.btns}>
                    <Button className={styles.LodgingSubmit} variant="contained" color="primary" type="submit" >Submit</Button>
                    <Button className={styles1.LodgingSubmit} variant="contained">Cancel</Button>
                  </div>
                </div>
            
    </form>
    </Container>
  </Layout>
)
 }
export default JobOrdersPage