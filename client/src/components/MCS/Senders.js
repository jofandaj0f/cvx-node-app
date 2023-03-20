import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MCS.css';

const Sender = (props) => (
    <tr className="table">
        <td>{props.sender.trackingID}</td>
        <td>{props.sender.destinationIP}</td>
        <td>{props.sender.senderId + "-" + props.sender.senderPort}</td>
        <td> |
            <button className="btn btn-link"
                onClick={() => {
                    //Copy and Paste Values to Action
                }}
            >
                Delete
            </button>
        </td>
        <td> | 
            <form 
            onClick={() => {

            }}
            className="input-group mb-3"  id="ActionFormsRed">
                <input type="sender" className="form-control" id="RedSenderInfo" placeholder="Modify the Bandwidth"></input>
                <button className="btn btn-outline-danger" id="getRedSenders">Get all Senders</button>
            </form>
        </td>
    </tr>
);

export default function SenderList() {
    const [senders, setSenders] = useState([]);

    //Makes Fetch call out to NodeJS API
    useEffect(() => {
        async function getSenders(){
            const response = await fetch(`http://localhost:3000/mcs/get-senders?ip=10.239.0.39`, {
                "method": "GET",
                "timeout": 0,
                "mode": "no-cors"
            });
            console.log(response);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const senders = await response.json();
            setSenders(senders);
            
            
        }
        getSenders();
        return;
        
    }, [senders.length]);
    
    function senderList() {
        return senders.map((sender) => {
            return (
                <Sender
                  sender={sender}
                />
              );
        });
    }

    return (
        <div className="row mb-3">
            <div className="col">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    //Copy and Paste Values to Action
                    console.log(e.target[0].value);
                }}
                className="input-group mb-3"  id="ActionFormsRed">
                    <input type="sender" className="form-control" id="RedSenderInfo" placeholder="Enter IP Address of Red MCS"></input>
                    <button type="submit" className="btn btn-outline-danger" id="getRedSenders">Get all Senders</button>
                </form>
                <div className="mb-3" id="SelectAction">
                    <select className="form-select" aria-label="Default select example" id="RedOptions">
                        <option defaultValue="hideallRed">Select Action</option>
                        <option value="delRedSenders">Delete Senders</option>
                        <option value="addRedSenders">Add Senders</option>
                        <option value="modRedBw">Modify Bandwidths </option>
                    </select> 
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Tracking ID</th>
                        <th>Multicast Destination IP</th>
                        <th>Incoming Interface ID</th>
                        <th>Bandwidth</th>
                    </tr>
                </thead>
                    <tbody>{senderList()}</tbody>
                </table>
            </div>
            
            <div className="col">
                <form className="input-group mb-3" id="ActionFormsBlue">
                    <input type="sender" className="form-control" id="BlueSenderInfo" placeholder="Enter IP Address of Blue MCS"></input>
                    <button type="submit" className="btn btn-outline-primary" id="getBlueSenders">Get all Senders</button>
                </form>
                <div className="col mb-3" id="SelectAction">
                    <select className="form-select" aria-label="Default select example" name="Options">
                        <option defaultValue="hideallBlue">Select Action</option>
                        <option value="delBlueSenders">Delete Senders</option>
                        <option value="addBlueSenders">Add Senders</option>
                        <option value="modBlueBw">Modify Bandwidths </option>
                    </select> 
                </div>
            </div> 
        </div>
    );
};