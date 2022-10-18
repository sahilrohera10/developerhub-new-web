import React from 'react'
import './Job.css'
import Button from "@mui/material/Button";
import job from '../assets/job.jpeg'
import { height } from '@mui/system';

export default function Job() {
    return (
        <div id="reverse" className="main">
            <div className="left">
                <div className='main-head'>Connect with <br /> UNconnected...</div>
                <div id='reverse-sub' className="left-sub">
                    <div className="left-subdiv">
                        <h3>For Companies</h3>
                        <p>
                            We are the market-leading technical interview platform to identify and hire developers wherever they are.
                        </p>
                        <Button className="header-btn"
                    variant="contained">Login</Button>
                    </div>
                    <div className="left-subdiv">
                        <h3>For Job Seekers</h3>
                        <p>
                            We are the market-leading technical interview platform to identify and hire developers wherever they are.
                        </p>
                        <Button className="header-btn"
                    variant="contained">Sign Up/Login</Button>
                    </div>
                </div>
            </div>

            <div className="right">
                <img src={job} style={{width:"100%",height:'100%'}} alt="" />
            </div>
        </div>
    )
}
