import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import ques from "../assets/ques.png";
import Github from "../components/Github";
export default function Experiences() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <div className='experiences'>
    
      <h1  className='heading'>Experience</h1>
      <hr  />
      <div data-aos='fade-right' className='journey'>
      <div className='educard'>
        <h1 className=''>Solar Secure IT Solutions</h1>
        <p>
          Responsible for collaborating the development of a responsive website using React, Node JS, Express and Mongodb, with
                UI/UX fundamentals implementation, API integration, code quality and version control.
           
        </p>
        <hr />
        <p>Web Developer Intern</p>
        <p>Oct/2023 - Dec/2023</p>
    </div> 
    </div>
    <h1 className='heading'>Github Profile</h1>
      <hr />
      <div data-aos='fade-right' className='github'>
      <Github/>
      </div>
      <h1 className='heading'>Achievments</h1>
      <hr />
      <div className="achievement">
      <ul>
        <li>Ranked 53 in Newton School’s Coderush November-2023 with over 15000+ participants</li>
        <li>Ranked 147 in Newton School’s Coderush October-2023 with over 20000+ participants</li>
        <li>Ranked 463 in CodeChef Starter111 with over 10000+ participants</li>
        <li>Solved over 250+ DSA problems on platforms including Leetcode and GeeksforGeeks</li>
        

      </ul>
      </div>
      
     
    </div>
  )
}
