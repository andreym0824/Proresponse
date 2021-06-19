import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Layout } from '../components/sublayout';
import { useRouter } from 'next/router'
import instance from '../axios';
  
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export default function CollapsibleTable() {
  const user = "maria@proresponseusa.com"
  const password = "maria@proresponseusa.com"
  const router = useRouter()
  const [clientName, setClientName] = useState([]); 
  const token = Buffer.from(`${user}:${password}`, 'utf8').toString('base64') 

  const retrieveData = async () => {
    const response = await instance.get("/rest/records/recentlyViewed", {
      params:{
         limit: 4
      },
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
      if(allEmployees) setClientName(allEmployees);
    }
    getAllData();
   }, [] );
  
   function createData(
    name: string, 
    date: string,
  ) 
  
  {
    return {
      name,
      date,
      history: [
        { date: '2020-01-05', customerId: '11091700'},
        { date: '2020-01-02', customerId: 'Anonymous'},
      ],
    };
  }
  
  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.date}</TableCell>
  
        </TableRow>
        
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
        const rows = [   
            createData("16/06/21", "Client Name"),
            createData("16/06/21", "Client Name"),
            createData("16/06/21", "Client Name"),
            createData("16/06/21", "Client Name")
        ]
        
  return ( 
    <Layout>
      <h3>Daily Timesheets</h3>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Customer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <h3>Daily Tracking Log</h3>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Customer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
          
}