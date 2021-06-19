import React from 'react';
import { Button, Container } from '@material-ui/core';
import  styles  from  '../styles/timesheet.module.css'

export default function BasicTable() {

  return (
     <Container>
        <div className={styles.addtimeInput}>
           <label>Ryan Smith</label>
           <input placeholder="Start"></input>    
           <input placeholder="End Time"></input>
           <input placeholder="Break"></input>
           <input placeholder="Total"></input>
        </div> 
     </Container>
  );
}
