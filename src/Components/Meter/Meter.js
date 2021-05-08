import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

const Meter = () => {
  const [meterValue, setMeterValue] = useState({});
  const [costValue, setCost] = useState(0);

  const valueCalculation = () => {
    let cost = 0;
    let meter = meterValue.meter - 9340.55;
    if (meter < 50) {
      cost = meter * 3.75;
      setCost(cost);
    } else if (meter >= 50 && meter <= 75) {
      cost = meter * 4.19;
      setCost(cost);
    } else if (meter >= 76 && meter <= 200) {
      cost = meter * 5.72;
      setCost(cost);
    } else if (meter >= 201 && meter <= 300) {
      cost = meter * 6;
      setCost(cost);
    } else if (meter >= 301 && meter <= 400) {
      cost = meter * 6.34;
      setCost(cost);
    } else if (meter >= 401 && meter <= 600) {
      cost = meter * 9.98;
      setCost(cost);
    } else {
      cost = meter * 11.46;
      setCost(cost);
    }
  };

  useEffect(() => {
    firebase
      .database()
      .ref("FirebaseIOT/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        setMeterValue(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div
              class="card text-white bg-primary mb-3 text-center"
              style={{ width: "300px" }}
            >
              <div class="card-header">Meter</div>
              <div class="card-body">
                <h5 class="card-title">{meterValue.meter}KWh</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table class="table table-danger" style={{ fontSize: "20px" }}>
              <tbody>
                <tr>
                  <td>Total Used</td>
                  <td></td>
                  <td>{meterValue.meter - 9340.55} KWh</td>
                </tr>
                <tr>
                  <td>Minimum Charge</td>
                  <td></td>
                  <td>{costValue} tk</td>
                </tr>
                <tr>
                  <td>Service Charge</td>
                  <td></td>
                  <td>90 tk</td>
                </tr>
                <tr>
                  <td>Meter Service</td>
                  <td></td>
                  <td>10 tk</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>{costValue + 10 + 90} tk </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-outline-danger" onClick={valueCalculation}>
            {" "}
            click
          </button>
        </div>
      </div>
    </section>
  );
};

export default Meter;
