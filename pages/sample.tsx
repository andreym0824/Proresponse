import React from 'react'
import axios from 'axios'

function sample(){  
const username = 'maria@proresponseusa.com'
const password = 'maria@proresponseusa.com'

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const url = 'https://proresponse.docmgt.cloud/rest/records/lastsearch'
const data = JSON.stringify({
  "Dataaa" : {
    "RecordID": 6666,
    "Status": 1,
    "DataName": "TimesheetID",
    "DataValue": "687",
    "LineNumber": 0,
    "ID": 32073,
 }
})

axios.put(url, data, {
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
    <div>
    </div>
)
}
export default sample;
