import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Anxiety=()=> {
   
  return (
    <div>
      <div className="add" style={{backgroundColor:" #666698"}}>
        <div><h2>Anxiety Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3IIdfQf8ibIeRWtjDdZPj9WHFSG65VQvyfUUYov1pQ&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for those coping with fear and stress associated with various anxiety disorders.</h5>
          <p>Anxiety disorders affect about 18% of the adult population, causing them to be filled with fearfulness and uncertainty. Members of the our support groups have found that in addition to professional therapy, sharing stories and meeting others with anxiety can be therapeutic.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT ANXIETY.</h5>
          <p>Some anxiety is normal, but if worries and fears are preventing you from living your life the way you’d like, you may be dealing with an anxiety disorder. According to the National Institute of Mental Health, anxiety disorders affect 40 million Americans a year. And if left untreated can lead to serious physical illness as well.

            Fortunately, anxiety disorders typically respond well to treatment. Many individuals who seek treatment go on to lead healthy, productive lives. In general, most anxiety disorders are treated with behavioral therapy or counseling, medication, or some combination of the two. In addition, a compassionate and understanding social support network can be instrumental in the recovery of a person with an anxiety disorder.

            If you think you or a loved one is suffering from an anxiety disorder, consider contacting a mental health professional or anxiety therapist for a complete evaluation.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2015/07/Social-Anxiety-Full.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
            
    </div>
  )
}

export default Anxiety;
