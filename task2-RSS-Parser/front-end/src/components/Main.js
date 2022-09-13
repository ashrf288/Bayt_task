import React, { useEffect } from 'react'
import Header from './Header' 
import Footer from './Footer'
import axios from 'axios'
import JobsTble from './JobsTble'
import LoadingScreen from './LoadingScreen'
import { Container } from 'react-bootstrap'
export default function Main() {
    const [jobs,setJobs]=React.useState([])

    const getData=()=>{
        axios.get(process.env.REACT_APP_JOBS_API_URL).then(res=>{
        console.log(res.data)
        setJobs(res.data)
    })
    }
    useEffect(()=>{getData()},[])
  return (
    <>
      <Header/>
    <Container>
        {jobs.data?<JobsTble jobs={jobs}/>:<LoadingScreen/>}
    </Container>
        <Footer/>
        </>
  )
}
