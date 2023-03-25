import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Depression=()=> {
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#673366" }}>
        <div><h2>Depression Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCulqKw0otOlYoPd0W53vM_pwapWPRRNRk1yjfllzCA&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for individuals living with the daily challenge of depression or bipolar disorder.</h5>
          <p>Social support is critical to depression recovery. Depression and bipolar disorder, by their nature, are isolating illnesses. Connecting with individuals who understand firsthand can be an important step toward cultivating a new healthier life.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT DEPRESSION.</h5>
          <p>On occasion everyone feels sad or blue, but these feelings are usually temporary –lasting only a few days. If feelings of depression last for an extended period of time, interfere with daily life and normal functioning you may be suffering from a depressive disorder. Depression is a common but serious illness, and most who experience it need some form of help or treatment to get better.

            Depression affects close to 10% of the population. Women experience depression at roughly twice the rate of men. However, intensive research into the illness has resulted in the development of medications, psychotherapies, as well as a variety of self-help techniques that have proven to be very effective in the treatment of depression.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2015/07/Depression-Full.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
    </div>
  )
}

export default Depression;