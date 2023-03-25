import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Teen = () => {
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#f05928" }}>
        <div><h2>Teen Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hf6YzlD2klnCxIE60DUOZBhgymD3qW9q3f_nQscABw&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for teens faced with mental health challenges and/or difficult family dynamics.</h5>
          <p>During the teenage years striking changes take place in the body as well as the brain. Youth are particularly vulnerable to mental health challenges including – depression, anxiety, ADHD, self-harm, eating disorders and more.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT TEENS.</h5>
          <p>Some adolescent behaviors are completely normal such as: attention seeking, motivation due to peer-pressure and risk-taking behavior. However, it is important to be aware the signs of a mental health disorders.

            Brain maturation does not set in until the early 20’s. The stress and pressure that is placed on today’s youth put them at risk for a variety of mental health disorders including: depression, anxiety, ADHD, self-harm, eating disorders and more. Additionally, drug and alcohol abuse in the teenage years can lead to negative changes in a still developing brain.

            Positive mental health is a key tool today’s youth have to combat the many challenges they face. It is critical they become #mentalhealthliterate and learn to distinguish normal teenage behavior from a more serious mental disorders. If you suspect you, or a friend is facing a mental health challenge seek help. The sooner a problem is addressed, the more effective the treatment can be.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2016/06/LGBT-Teen-Full.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
      
    </div>
  )
}

export default Teen