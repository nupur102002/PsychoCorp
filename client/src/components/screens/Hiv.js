import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Hiv = () => {
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#b32542" }}>
        <div><h2>HIV/AIDS Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGxSdFPNHyl1ArXF6hkhbyww3gt6sIYo8kEv1nSjcng&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for individuals or family living with HIV/AIDS, newly diagnosed to long-term survivors.</h5>
          <p>AIDS (acquired immunodeficiency syndrome) has fast become a major worldwide epidemic. Many find that there is a stigma associated with the disease, making them feel alone and afraid. Our HIV/Aids support group helps connect individuals affected by the virus in effort to positively affect their mental health and emotional well-being.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT HIV/AIDS.</h5>
          <p>Advances in HIV/AIDS research have transformed and prolonged the lives of many living with HIV. In addition, we better understand the importance of emotional well-being and mental health for people living with HIV. Living with a long-term illness like HIV can make you vulnerable to mental health problems such as feelings of acute emotional distress, depression and anxiety.

            Experiencing HIV-related stigma can be stressful in itself. But, some anti-HIV drugs can cause psychological problems, and in some cases, advanced HIV infection is known to cause HIV-related cognitive brain disorders.

            Fortunately, there are many things you can do to look after your emotional health, and a lot of help available if you do experience problems. Treatment for depression, anxiety and other mental health problems can be very effective.

            If you are experiencing stresses associated with being marginalized from mainstream society a support network can be a great way to help you cope. If your mental health symptoms are affecting your ability to cope or live a productive life, it’s important to get professional help as well.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2015/07/LBGT-Therapy-Full.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
    </div>
  )
}

export default Hiv