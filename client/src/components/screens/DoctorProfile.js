import React,{useEffect,useState,useContext}  from "react";
import { UserContext } from "../../App";
import {Params, useParams} from "react-router-dom";
import {DefaultPlayer as Video} from "react-html5video"
import "react-html5video/dist/styles.css"

const Profile=()=>{
    const [docProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {docid} = useParams()
  
    // console.log(docid)
    useEffect(()=>{
        fetch(`/doctorprofile/${docid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
            setRating(result.rating)
            setNum(result.ratingNo)
        })
    },[state])     /// debug here we use to debug loading error without it it not showing proper doctorprofile 

   

    return (
        <>
        {docProfile? 
            <div>
     <div style={{ height:"400px", 
backgroundColor:"rgba(131, 217, 231, 0.1)",

    margin: "0px auto" 
    }}
>

        <div style={{  //for upper div(dp and name)
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0px",
         maxWidth:"55"
        }}>

            {/* dp part */}
            <div>
                <img style={{ width: "200px", height: "200px", borderRadius: "200px", marginLeft:"20p",textAlign:"center" }}
                    src={docProfile?docProfile.pic:"loading.."}
                />

                {/* name part */}
            </div>
            <div style={{marginRight:"400px" }} >
                <h4>Dr {docProfile ? docProfile.name : "loading"}</h4>
                <h4>Psychiatric social workers.</h4>
                <h5>{docProfile ? docProfile.email : "loading"}</h5>
                <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                {/* <h6>{mypics.length} recipes</h6> */}
                       <h6>{docProfile?docProfile.followers.length:"0"} followers</h6>
                      
                      <h6>Current Rating {docProfile.rating}</h6>
                     
                      
                </div>
            </div>
        </div>       
    </div>
    <div style={{ height:"200px", 
backgroundColor:" rgb(252, 191, 226)",
margin:"auto 100px"
   
    }}>
    <div style={{ 
        
    marginLeft:"80px" ,
    maxWidth:"800px",

    }}>
  
    <h5 style={{margin:"20px auto"}}>Bio</h5>
    
     <h6>{docProfile ? docProfile.body : "loading"}</h6>

    </div>
    </div>
   </div>
        
      :<h2>loading</h2>}
       
</>
    )
}

export default Profile;
