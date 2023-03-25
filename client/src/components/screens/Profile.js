import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {

    
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>

            <div style={{  //for upper div(dp and name)
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0px",

            }}>

                {/* dp part */}
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px", margin: "0px 0px" }}
                        src={state ? state.pic : "loading.."}
                    />

                    {/* name part */}
                </div>
                <div>
                    {/* <h4>{state ? state.name : "loading"}</h4> */}
                    <div>
                        {/* <h6>Following {state ? state.following.length : "0"} Doctor</h6> */}

                    </div>
                </div>
            </div>

            <div className="file-field input-field" style={{ margin: "10px" }}>
                <div className="btn #64b5f6 blue darken-1">
                    <span>Update pic</span>
                    {/* <input type="file" onChange={(e) => updatePhoto(e.target.files[0])} /> */}
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            {/* for pic uploaded part */}
            {/* <div className="gallery">
                {
                    mypics.map(item => {
                        return (
                            <img src={item.photo} alt={item.title} />
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default Profile;