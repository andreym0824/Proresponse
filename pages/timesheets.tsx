import React, { useEffect, useState }from "react";
import { Layout } from "../components/layout"
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import styles from  '../styles/lodging.module.css'
import styles1 from  '../styles/timesheet.module.css'
import TImesheetTable from '../components/timesheet_table'
import instance from "../axios";

const TimesheetsPage = () => {
  const [timesheetNumber, setTimesheetnumber] = useState<string>('');
  const [jobNumber, setJobnumber] = useState<string>('');
  const [customer,   setCustomer] = useState<string>('');
  const [jobsiteNumber, setJobsiteNumber] = useState<string>('');
  const [jobAddress, setJobAddress] = useState<string>('');
  const [supervisor, setSupervisor] = useState<string>('');

  const user = "maria@proresponseusa.com"
  const password = "maria@proresponseusa.com"
  const token = Buffer.from(`${user}:${password}`, 'utf8').toString('base64')

  const handleSubmit = async (data) =>{
    data.preventDefault();

    const request = {
      timesheetNumber,
      jobNumber,
      customer,
      jobsiteNumber,
      jobAddress,
      supervisor
    }
  
    instance.post('/rest/records/searchadv', request, {
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
     <h2 className={styles.h2}>Timesheet</h2>
     <form onSubmit={handleSubmit} className={styles.form} noValidate autoComplete="off">
     <label style={{color: 'grey', fontSize:'0.60rem', marginLeft:'10px'}}>Timesheet Date</label>
                    <input
                        style={{color: 'grey', fontSize:'0.95rem', height:'46px'}}
                        className={styles.filled}
                        id="date"
                        type="date"
                        color="secondary"
                        />
          <input className={styles.filled}  name="timesheetNumber" onChange={(event) => setTimesheetnumber(event.target.value)} required placeholder="Timesheet Number" />     
          <input className={styles.filled}  name="jobNumber" onChange={(event) => setJobnumber(event.target.value)} required placeholder="Job Number" />
          <input className={styles.filled}  name="customer" onChange={(event) => setCustomer(event.target.value)} required placeholder="Customer" /> 
          <input className={styles.filled}  name="jobSiteNumber" onChange={(event) => setJobsiteNumber(event.target.value)} required placeholder="Jobsite Number" />     
          <input className={styles.filled}  name="jobAddress" onChange={(event) => setJobAddress(event.target.value)} required placeholder="Jobsite Address"  />
          <input className={styles.filled}  name="supervisor" onChange={(event) => setSupervisor(event.target.value)} required placeholder="PM/Supervisor" /> 
          <div className={styles1.timesheetTable}>
          <div className={styles1.addtimeLabel}>
            <label className={styles1.employee}>Employee</label>
            <label className={styles1.start}>Start</label>
            <label>End </label>
            <label>Break</label>
            <label>Total</label>
          </div>
            <TImesheetTable/>

          <div className={styles1.btnDiv}>
              <div className={styles1.btnDiv1}></div>
              <div className={styles1.btns}>
              <Button className={styles1.timesheetUpload} variant="contained"   ><FileCopyIcon fontSize='small'/>Upload Backup</Button>
                <Button className={styles1.timesheetSubmit} variant="contained" color='primary'  type="submit" >Submit</Button>
             </div>
          </div>
      </div>
    </form>
  </Layout>
)
}
export default TimesheetsPage