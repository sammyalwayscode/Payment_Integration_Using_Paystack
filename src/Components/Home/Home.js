import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ height: "50px", width: "100vw", backgroundColor: "#123456" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around"
      }}>
        <p>Home Page</p>
        <Link to="/paynow" ><Button>Click Hear</Button></Link>
      </div>
    </div>
  )
}

export default Home
