import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import M from "materialize-css"

const Home = () => {

    return (
        <div>
            <div className="container">
                <div className="box">

                    <Link to="/addiction"><img src="https://img.freepik.com/free-photo/addiction-pills-cigarettes_23-2148585918.jpg" /></Link>
                    <h6 className="txt">Addiction</h6>
                </div>
                <div className="box">
                    <Link to="/anxiety"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3IIdfQf8ibIeRWtjDdZPj9WHFSG65VQvyfUUYov1pQ&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">Anxiety</h6>
                </div>
                <div className="box">
                    <Link to="/depression"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCulqKw0otOlYoPd0W53vM_pwapWPRRNRk1yjfllzCA&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">Depression</h6>
                </div>
                <div className="box">
                    <Link to="/hiv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGxSdFPNHyl1ArXF6hkhbyww3gt6sIYo8kEv1nSjcng&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">HIV/AIDS</h6>
                </div>

            </div>
            <div className="container">
                <div className="box">
                    <Link to="/family"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTu2bDRMD51VFTnNQU6MXdfZ4kpfkcbcx4Z4i4eDqg&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">Marriage/Family</h6>
                </div>
                <div className="box">
                    <Link to="/ocd"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23hyiTlPLyZsgvBOTfB-nKEoMmbV3nLLs_m3wcgZWpA&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">OCD</h6>
                </div>
                <div className="box">
                    <Link to="/teen"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hf6YzlD2klnCxIE60DUOZBhgymD3qW9q3f_nQscABw&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">Teen</h6>
                </div>
                <div className="box">
                    <Link to="/lgbtq"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHDQbTHMEbCxLlsBoeaNIRQTVa56HM12MCLfi8Ha0Uw&usqp=CAU&ec=48665698" /></Link>
                    <h6 className="txt">LGBTQ</h6>
                </div>

            </div>
        </div>
    )
}
export default Home;