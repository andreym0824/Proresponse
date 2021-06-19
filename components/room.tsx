import { Button, Container, TextField } from '@material-ui/core'
import styles from  '../styles/lodging.module.css'
import  FormControl  from "../components/select"
import React from 'react'

const room = ({number, employeeNumber}) =>{
   
    const handleSave = (e) =>{
        e.preventDefault();
        console.log('You clicked submit.');
      }
    
    return (
          <div className={styles.roomDiv}>
      
                <h3 className={styles.h3}>Room&nbsp;{number}</h3>
                <input className={styles.filled} required placeholder="Room Number" />
                <input className={styles.filled} required placeholder="Nightly Rate"  />
                  <label style={{color: 'grey', fontSize:'0.60rem', marginLeft:'10px'}}>Check-in Date</label>
                    <input
                        style={{color: 'grey', fontSize:'0.95rem', height:'46px'}}
                        className={styles.filled}
                        id="date"
                        type="date"
                        color="secondary"                     
                 />  
                    <label style={{color: 'grey', fontSize:'0.60rem', marginLeft:'10px'}}>Check-out Date</label>
                    <input
                        style={{color: 'grey', fontSize:'0.95rem', height:'46px'}}
                        className={styles.filled}
                        id="date"
                        type="date"
                        color="secondary"
                 />
              <h3 className={styles.h3}>Employee&nbsp;{employeeNumber}</h3>
              <FormControl/>
              <FormControl/>
              <FormControl/>
              <FormControl/>
         </div>    
    )
}
export default room;
