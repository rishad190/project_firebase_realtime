import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import firebaseConfig from "../../firebase.Config";
import "firebase/database";
import ChartData from "../ChartData/ChartData";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Info = () => {
  const [dataValue, setDataValue] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("FirebaseIOT/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        setDataValue(data);
        let d = new Date();
        let hour = d.getHours();
        if (hour > 16 && hour < 23) {
          if (dataValue.power1 > dataValue.power2) {
            alert("Please  Turn OFF Load 1 ");
          } else {
            alert("Please  Turn OFF Load 2");
          }
        }
      });
  }, []);

  const handldeON = () => {
    firebase.database().ref("/").update({
      led: 1,
    });
  };
  const handldeOFF = () => {
    firebase.database().ref("/").update({
      led: 0,
    });
  };
  // const handleRead = () => {
  //   firebase
  //     .database()
  //     .ref("FirebaseIOT/")
  //     .on("value", (snapshot) => {
  //       const data = snapshot.val();
  //       setDataValue(data);
  //       if (dataValue.power1 > 60) {
  //         alert("You can off load 2");
  //       }
  //     });
  // };
  return (
    <div className="container">
      <div className="row">
        <button className="btn btn-outline-warning w-100  mt-5 mb-5 ms-5">
          ON SERVER
        </button>
        <div className="col-md-12">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-1</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Voltage</h5>
                  <p class="card-text">{dataValue.Voltage}V</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-1</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Current</h5>
                  <p class="card-text">{dataValue.Current1} A</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-1</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Power</h5>
                  <p class="card-text">{dataValue.power1}W</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-1</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Daily</h5>
                  <p class="card-text">{dataValue.taka}TK</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center mt-5">
                <div
                  class="card border-primary mb-3"
                  style={{ width: "200px" }}
                >
                  <div class="card-header text-center">Control Load-1</div>
                  <div class="card-body text-primary">
                    <p class="card-text text-center">
                      <button
                        onClick={handldeON}
                        type="button"
                        class="btn btn-outline-success me-2"
                      >
                        ON
                      </button>
                      <button
                        onClick={handldeOFF}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        OFF
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd load  start here */}
          <div className="row">
            <div className="d-flex justify-content-center">
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-2</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Voltage</h5>
                  <p class="card-text">{dataValue.Voltage}V</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-2</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Current</h5>
                  <p class="card-text">{dataValue.Current2} A</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-2</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Power</h5>
                  <p class="card-text">{dataValue.power2}W</p>
                </div>
              </div>
              <div
                class="card border-primary mb-3 m-5"
                style={{ width: "300px" }}
              >
                <div class="card-header text-center">Load-2</div>
                <div class="card-body text-primary text-center">
                  <h5 class="card-title">Daily</h5>
                  <p class="card-text">{dataValue.taka2}TK</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center mt-5">
                <div
                  class="card border-primary mb-3"
                  style={{ width: "200px" }}
                >
                  <div class="card-header text-center">Control Load-2</div>
                  <div class="card-body text-primary">
                    <p class="card-text text-center">
                      <button
                        onClick={handldeON}
                        type="button"
                        class="btn btn-outline-success me-2"
                      >
                        ON
                      </button>
                      <button
                        onClick={handldeOFF}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        OFF
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center">
            <ChartData
              key={dataValue.Current1}
              dataValue={dataValue}
            ></ChartData>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
