import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Lgbtq = () => {
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#000000" }}>
        <div><h2>LGBTQ Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHDQbTHMEbCxLlsBoeaNIRQTVa56HM12MCLfi8Ha0Uw&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for individuals living as LGBT – lesbian, gay, bisexual, transgender, or questioning.</h5>
          <p>Many LGBTQ individuals experience negative mental health issues due to the prejudice and other biases they face. Research suggests that queer people are at higher risk for depression, anxiety, and addiction or substance abuse.

            Without mental health we cannot be healthy. It is our hope that LGBTQ individuals find LGBTribe to be a safe outlet for them to discuss these challenges and find a sense of community online.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT LGBTQ.</h5>
          <p>The lesbian, gay, bisexual, transgender, queer and questioning (LGBTQ) community faces mental health conditions at a rate almost 3 times higher than that of the general population. The fear of coming out and being discriminated against for sexual orientation and gender identities, can lead to depression, post traumatic stress disorder, thoughts of suicide and substance abuse.

            LGBTQ therapy can be extremely helpful for people but only if they feel comfortable enough to get it. It is important to find a provider that is LGBTQ-friendly and knowledgeable about the specific cultural considerations and issues faced by LGBTQ individuals with mental health conditions.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2015/07/LBGT-Therapy-Full.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
    </div>
  )
}

export default Lgbtq
