import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "react-html5video/dist/styles.css"
import M from "materialize-css"

const Addiction = () => {
    const [data, setData] = useState([])
    const [commentValue, setcommentValue] = useState("")
    const { state, dispatch } = useContext(UserContext)
    const [doc, setDoc] = useState([])
    
    useEffect(() => {
        fetch('/getaddiction', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                setData(result.stories)
            })
    }, [])

    const likePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result;
                    }
                    else {
                        return item;
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="add">
                <div><h2>Addiction Community Members</h2>
                    <p>Meet your<br />new Community!!</p></div>
                <div><img src="https://img.freepik.com/free-photo/addiction-pills-cigarettes_23-2148585918.jpg" /></div>
            </div>
            <div className="add1">
                <div style={{ width: "500px", paddingLeft: "20px" }}><h4>HELLO.<br />NICE TO<br />MEET YOU</h4></div>
                <div><h5>Peer-to-peer support group for individuals and loved ones in the process of on-going addiction recovery.</h5>
                    <p>For many, recovery from addiction is a daily struggle. Traditional treatment methods are only a part of the recovery process. Daily choices and continued support from friends, family and others like themselves are a critical part of the road to recovery.</p></div>
            </div>
            <div className="add2">
                <div style={{ paddingLeft: "20px" }}><h5>ABOUT ADDICTION.</h5>
                    <p>Addiction is often misunderstood. Many people believe that addicts can stop if they are simply willing to change their behavior. The fact is, addiction is a disease that impacts the brain. Stopping drug or alcohol abuse is not simply a matter of willpower. Drugs and alcohol can change the brain to foster compulsive use and abuse.

                        Addiction treatment usually requires a combination of medication and addiction counseling or substance abuse therapy. In addition, many drug or alcohol dependent individuals suffer from an underlying mental disorders. Addiction counseling and treatment methods must go beyond the addictive behavior and address any co-occurring medical, psychiatric and social problems.

                        Today much more is understood about how drugs and alcohol work in the brain, and we know that drug and alcohol addiction can be successfully treated.</p></div>
                <div><img style={{ width: "300px", height: "200px", paddingRight: "20px" }} src="https://support.therapytribe.com/wp-content/uploads/2015/07/Addiction-Substance-Abuse.jpg" />
                    <br />
        
                </div>
            </div>
        </div>
    )
}

export default Addiction;
