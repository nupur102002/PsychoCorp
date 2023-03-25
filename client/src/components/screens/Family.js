import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Family = () => {
  
  return (
    <div>
      <div className="add" style={{ backgroundColor: "#fcee21" }}>
        <div><h2>Marriage/Family Community Members</h2>
          <p>Meet your<br />new Community!!</p></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTu2bDRMD51VFTnNQU6MXdfZ4kpfkcbcx4Z4i4eDqg&usqp=CAU&ec=48665698" /></div>
      </div>
      <div className="add1">
        <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
        <div><h5>Peer-to-peer support group for those managing the joys and challenges of marriage and raising a family.</h5>
          <p>Marriage and raising a family can be hard and tiring and frustrating. It takes a lot of work to live happily ever after. However, the more we understand ourselves, the better we can communicate, and foster successful relationships with the people we care about.

            Swap stories and life experiences with others from our marriage family support group. Many have found that in addition to marriage & family therapy, sharing stories and meeting others with similar challenges can be helpful.</p></div>
      </div>
      <div className="add2">
        <div style={{ paddingLeft: "20px" }}><h5>ABOUT</h5>
          <p>Many couples do not anticipate the challenges that can occur in dealing with in-laws, finances, family traditions, parenting styles, careers choices and more. Marriage and raising a family takes work, and all couples from time to time hit bumps in the road. Sometimes upsetting situations can lead to more serious marital problems. However, if you actively work on the communication skills required to steer life’s challenges, you can have a successful life long relationship.

            Couples who have the skills to talk calmly about their issues are able to sort out the many challenges life can bring. Those that don’t, find that minor issues develop into major problems and can lead to distrust or resentment. It’s no secret that nearly 50% of all marriages in developed nations end in divorce.

            Sometimes the best of intentions simply don’t workout. Talking to others or seeking professional help can be a helpful next step. Marriage counseling or couples and family therapy, is a type of psychotherapy that emphasizes improved relationship skills and conflict resolution.</p></div>
        <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2016/06/Relationship-Counseling-Full-1038x692.jpg" />
          <br />
          <button className='btn'>Find a therapist</button></div>
      </div>
    </div>
  )
}

export default Family