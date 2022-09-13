import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';

export default function JobsTble({jobs}) {
  useEffect(()=>{console.log(jobs)},[jobs])
  return (
    <>
    <h1>jobs </h1>
    {jobs.count>0&&<Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>job name</th>
        <th>location</th>
      </tr>
    </thead>
    <tbody>
        {jobs.data.map((job,idx)=>{
            return (
                <tr key={idx}>
                <td>{idx}</td>
                <td>{job.title}</td>
                <td>{job.location}</td>            
              </tr>
            )

        })}
      
    </tbody>
  </Table>
    }
    </>
  )
}


