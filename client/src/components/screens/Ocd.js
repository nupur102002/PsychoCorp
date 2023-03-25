import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Ocd = () => {
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#8cc63f" }}>
        <div><h2>OCD Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23hyiTlPLyZsgvBOTfB-nKEoMmbV3nLLs_m3wcgZWpA&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for those facing daily thoughts and compulsions from an obsessive compulsive disorder.</h5>
          <p>Obsessive Compulsive Disorder (OCD) can be a life consuming disorder. Many don’t know there are millions of others that struggle with daily obsessions and compulsions. While medication and/or therapy are an important part of managing OCD, many find sharing with others can make daily challenges a little more manageable.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT OCD.</h5>
          <p>Obsessive-compulsive disorder is a brain disorder that affects more than 2% of the population (1 out of 40 people). Individuals with OCD perform excessive and repetitive behaviors (compulsions) in order to provide temporarily relief from the stress brought on by an unwanted thought or feeling (obsession). Often the person recognizes their behaviors as irrational, but still feels unable to resist. A few examples of compulsions include excessive hand washing, recounting, straightening, and checking. Symptoms usually begin gradually and vary throughout life.

            OCD has been shown to respond well to psychotherapy as well as medication. Specifically, cognitive-behavioral therapy (CBT) and exposure therapy have the most research supporting their effectiveness. It’s normal, on occasion to double-check if the stove is off, or to be concerned about the well-being of others. But if these thoughts or behaviors become excessive and begin to interfere with your ability to lead a normal life, it may be time to get help.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2016/06/Obsessive-Compulsive-Disorder-Full-1038x693.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
    </div>
  )
}

export default Ocd