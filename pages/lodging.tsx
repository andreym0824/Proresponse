import React, { useState } from "react"
import {Button, Container, TextField} from '@material-ui/core'
import styles from  '../styles/lodging.module.css'
import { Layout } from '../components/sublayout'
import Room from '../components/room'
import { useRouter } from 'next/router'
import instance from "../axios"

const LodgingPage = ({ number, employeeNumber } ) => {
   const  [trackingID, setTrackingID] = useState<string>('');
   const [createdDate, setCreatedDate] = useState<string>('');
   const [hotelName, setHotelName] = useState<string>('');
   const [hotelAddress, setHotelAddress] = useState<string>('');
  //  const [roomNumber, setRoomNumber] = useState<string>('');
  //  const [nightlyRate, setNightlyRate] = useState<string>('');
  //  const [checkInDate, setCheckInDate] = useState<string>('');
  //  const [checkOunDate, setCheckOutDate] = useState<string>('');

// const router = useRouter()   
  const user = "maria@proresponseusa.com"
  const password = "maria@proresponseusa.com"
  const token = Buffer.from(`${user}:${password}`, 'utf8').toString('base64')

  const handleSubmit = async (data) =>{
  data.preventDefault();
  }

  const request = {
    trackingID,
    createdDate,
    hotelName,
    hotelAddress,
    // roomNumber,
    // nightlyRate,
    // checkInDate,
    // checkOutDate
  }

  instance.post('/rest/records', request, {
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
  

 return (

  <Layout>
    <Container className={styles.lodging}>
      <h2 className={styles.h2}>Lodging Form</h2>
     <form onSubmit={handleSubmit} className={styles.form} noValidate autoComplete="off">
      <input className={styles.filled}  name="RecordID" onChange={(event) => setTrackingID(event.target.value)} required placeholder="Crew Tracking ID" />
      <label style={{color: 'grey', fontSize:'0.60rem', marginLeft:'10px'}}>Date</label>
                    <input
                        style={{color: 'grey', fontSize:'0.95rem', height:'46px'}}
                        className={styles.filled}
                        id="date"
                        type="date"
                        color="secondary" 
                        name="Date"
                        required
                        onChange={(event) => setCreatedDate(event.target.value)}
                    />
                <input className={styles.filled} onChange={(event) => setHotelName(event.target.value)} required name="hotelName" placeholder="Hotel Name"/>
                <input className={styles.filled} onChange={(event) => setHotelAddress(event.target.value)} required name="hotelAddress" placeholder="Hotel Address" />  
           
                 <Room number={1} employeeNumber={1}/>  
            <div className={styles.btnDivSubmit}>
               <div className={styles.btn1}></div>
               <Button className={styles.LodgingSubmit} variant="contained" color="primary" type="submit" >Submit</Button>
           </div>
         </form>
    </Container>
  </Layout>
)
} 
export default LodgingPage