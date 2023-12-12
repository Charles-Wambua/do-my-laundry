import React from "react";
import "./css/Home.css";
import Footer from "./Footer";
// import { Ionicons } from '@expo/vector-icons';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="image">
          <img src="/washing-machine.png" alt="" className="" />
        </div>
        <div>
          <h2>
            The better solution <br />{" "}
            <span style={{ fontWeight: "bolder" }}>for</span> Dry
            <span style={{ color: "#4bded3" }}>Cleaners</span>{" "}
          </h2>
          <div>
            <i class="fa fa-thermometer-full" aria-hidden="true"></i>
            <p>01. So fast Delivery</p>
            <p style={{ fontSize: 24, color: "#c78c20" }}>Within 30 minutes</p>
          </div>
          <div>
            <i class="fa fa-thermometer-full" aria-hidden="true"></i>
            <p>02. So fast Delivery</p>
            <p style={{ fontSize: 24, color: "#c78c20" }}>Within 30 minutes</p>
          </div>{" "}
          <div>
            <i class="fa fa-thermometer-full" aria-hidden="true"></i>
            <p>03. Make your Days</p>
            <p style={{ fontSize: 24, color: "#c78c20" }}>Best offers</p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <div>
          <p>Clean Job Always</p>
          <p style={{ fontSize: 24 }}>
            This is <span style={{ color: "orange", fontWeight:"900" }}>How We Work</span>
          </p>
        </div>
        ,
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          {" "}
          <div
            style={{
              backgroundColor: "aliceblue",
              borderRadius: "5px",
              padding: "10px",
              marginRight: "20px",
            }}
                  > 
                      {/* <Ionicons name="shirt-outline" size={24} color="black" /> */}
            WE PICK YOUR CLOTHES The automated process starts as soon as your
            clothes go into the machine. The outcome is gleaming clothes!
          </div>
          <div
            style={{
              backgroundColor: "#bdc9c9",
              borderRadius: "5px",
              padding: "10px ",
              marginRight: "20px",
            }}
          >
            QUICKER DELIVERY We ensure delivery in the quickest of the
            turnaround time in the industry. Superior quality of service with
            speed!
          </div>
          <div
            style={{
              backgroundColor: "aliceblue",
              borderRadius: "5px",
              padding: "10px 30px",
              marginRight: "20px",
            }}
          >
            DELIVERY AT THE DOORSTEP! We have pioneered the concept of pickup
            and delivery in the shortest possible time. We intend keeping it
            that way!
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
}

export default Home;
