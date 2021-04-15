import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import BackButton from "./BackButton";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

class GetInspectionForm extends React.Component {
  state = {
    company: "",
    date: "",
    location: "",
    job_num: "",
    equipment: "",
    hour_meter: "",
    mileage: "",
    na_lights: "false",
    ok_lights: "false",
    rr_lights: "false",
    na_steps: "false",
    ok_steps: "false",
    rr_steps: "false",
    na_tires: "false",
    ok_tires: "false",
    rr_tires: "false",
    na_exhaust: "false",
    ok_exhaust: "false",
    rr_exhaust: "false",
    na_fenders: "false",
    ok_fenders: "false",
    rr_fenders: "false",
    na_bucket: "false",
    ok_bucket: "false",
    rr_bucket: "false",
    na_cuttingEdge: "false",
    ok_cuttingEdge: "false",
    rr_cuttingEdge: "false",
    na_lift: "false",
    ok_lift: "false",
    rr_lift: "false",
    na_hoses: "false",
    ok_hoses: "false",
    rr_hoses: "false",
    na_fittingsG: "false",
    ok_fittingsG: "false",
    rr_fittingsG: "false",
    na_hitch: "false",
    ok_hitch: "false",
    rr_hitch: "false",
    na_wipers: "false",
    ok_wipers: "false",
    rr_wipers: "false",
    na_bCable: "false",
    ok_bCable: "false",
    rr_bCable: "false",
    na_fanBelt: "false",
    ok_fanBelt: "false",
    rr_fanBelt: "false",
    na_engineHose: "false",
    ok_engineHose: "false",
    rr_engineHose: "false",
    na_airFilter: "false",
    ok_airFilter: "false",
    rr_airFilter: "false",
    na_guards: "false",
    ok_guards: "false",
    rr_guards: "false",
    na_brakesS: "false",
    ok_brakesS: "false",
    rr_brakesS: "false",
    na_brakesP: "false",
    ok_brakesP: "false",
    rr_brakesP: "false",
    na_backup: "false",
    ok_backup: "false",
    rr_backup: "false",
    na_fire: "false",
    ok_fire: "false",
    rr_fire: "false",
    na_gauges: "false",
    ok_gauges: "false",
    rr_gauges: "false",
    na_horn: "false",
    ok_horn: "false",
    rr_horn: "false",
    na_hydroControls: "false",
    ok_hydroControls: "false",
    rr_hydroControls: "false",
    na_glass: "false",
    ok_glass: "false",
    rr_glass: "false",
    na_mirror: "false",
    ok_mirror: "false",
    rr_mirror: "false",
    na_rollOver: "false",
    ok_rollOver: "false",
    rr_rollOver: "false",
    na_seat: "false",
    ok_seat: "false",
    rr_seat: "false",
    na_steering: "false",
    ok_steering: "false",
    rr_steering: "false",
    na_leaks: "false",
    ok_leaks: "false",
    rr_leaks: "false",
    na_oil: "false",
    ok_oil: "false",
    rr_oil: "false",
    na_coolant: "false",
    ok_coolant: "false",
    rr_coolant: "false",
    na_hydroOil: "false",
    ok_hydroOil: "false",
    rr_hydroOil: "false",
    na_transFluid: "false",
    ok_transFluid: "false",
    rr_transFluid: "false",
    na_fuel: "false",
    ok_fuel: "false",
    rr_fuel: "false",
    defects: "",
    repairsNeeded: "false",
    repairsNotNeeded: "false",
    operatorInitals: "",
    mechanicInitals: "",
    job_numbers: [],
    selectValue: "",
  };

  getInspectionForm = async () => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently({
      audience: "http://localhost:5000/",
      scope: "view:forms",
    });

    axios
      .get("http://localhost:5000/inspection", {
        params: { id: this.state.selectValue },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ GetInspectionForm: response.data }); // the auto-incremented sql id is included in this response.data object

        console.log(response.data);
        console.log("successfully retrieved the data");
      });
  };

  getInspectionForm_id = () => {
    axios.get("http://localhost:5000/inspection_id").then((response) => {
      this.setState({ job_numbers: response.data }); // the auto-incremented sql id is included in this response.data object

      console.log(response.data);
      console.log("successfully retrieved the data");
    });
  };

  componentDidMount() {
    window.addEventListener("load", this.getInspectionForm_id());
  }

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  retrieveClick = () => {
    this.getInspectionForm(this.state.GetInspectionForm);
  };

  export = (name) => {
    const HTML_Width = this.divElement.clientWidth;
    const HTML_Height = this.divElement.clientHeight;
    const top_left_margin = 15;
    const PDF_Width = HTML_Width + top_left_margin;
    const PDF_Height = HTML_Height + top_left_margin * 2;
    const canvas_image_width = 500;
    const canvas_image_height = 500;

    const totalPDFPages = Math.ceil(HTML_Height / 1252) - 2;
    console.log(
      "html height: " +
        HTML_Height +
        " HTML_Width width: " +
        HTML_Width +
        "Pages: " +
        totalPDFPages
    );

    html2canvas(document.querySelector(`#capture`)).then((canvas) => {
      canvas.getContext("2d");
      let dataURL = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "p",
        unit: "cm",
        format: [PDF_Height, PDF_Width],
      });

      pdf.addImage(
        dataURL,
        "PNG",
        3,
        0.5,
        canvas_image_width,
        canvas_image_height
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Height, PDF_Width], "p");
        pdf.addImage(
          dataURL,
          "PNG",
          3,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save(`${name}.pdf`);
    });
  };

  render() {
    const renderDrop = () => {
      return (
        <select
          style={{ marginLeft: "10px" }}
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option></option>
          {this.state.job_numbers.map((str) => (
            <option value={str.job_num}>{str.job_num}</option>
          ))}
        </select>
      );
    };
    return (
      <div>
        <div>
          <BackButton path="/viewform" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <b>Select Job Number</b>
            {renderDrop()}
            <button
              style={{
                color: "black",
                backgroundColor: "peachpuff",
                width: "100px",
                margin: "10px",
                marginLeft: "10px",
                border: "2px solid black",
              }}
              onClick={this.getInspectionForm}
              className="ui button"
              type="button"
            >
              Retrieve
            </button>

            <br />
            <br />
            <br />

            <div
              id={`capture`}
              ref={(divElement) => {
                this.divElement = divElement;
              }}
            >
              {this.state.GetInspectionForm &&
                this.state.GetInspectionForm.map((value, index) => {
                  const column1 = value.column1.split("\n");
                  const column2 = value.column2.split("\n");
                  const column3 = value.column3.split("\n");
                  const date = value.proj_date.substring(0, 10);

                  const renderRepairs = () => {
                    if (String(value.repairsNeeded).toLowerCase() === "true")
                      return (
                        <div>
                          {" "}
                          <input type="checkbox" checked={true} /> Repairs or
                          adjustments needed{" "}
                          <input type="checkbox" checked={false} /> Repairs or
                          adjustments NOT needed for safe equipment operation{" "}
                        </div>
                      );
                    return (
                      <div>
                        {" "}
                        <input type="checkbox" checked={false} /> Repairs or
                        adjustments needed{" "}
                        <input type="checkbox" checked={true} /> Repairs or
                        adjustments NOT needed for safe equipment operation{" "}
                      </div>
                    );
                  };

                  return (
                    <div
                      className="retrieve-report border"
                      key={index}
                      style={{ paddingBottom: "20px" }}
                    >
                      <h1>Inspection Form</h1>
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        className="inspection-info sub-border"
                      >
                        <h3>Job Info</h3>
                        <div>
                          <b>Company: </b> {value.company}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Date: </b> {date}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Location: </b> {value.location}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Job Number: </b> {value.job_num}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Equipment: </b> {value.equip_type}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Hour Meter: </b> {value.hour_meter}
                          <hr></hr>
                        </div>
                        <div>
                          <b>Mileage: </b> {value.mileage}
                          <hr></hr>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="info sub-border">
                        <b>N/A = NOT APPLICABLE</b>
                        <b className="info">OK = NO REPAIRS NEEDED</b>
                        <b className="info">RR = REQUIRES REPAIR</b>
                      </div>
                      <br />
                      <br />
                      <div className="columns sub-border">
                        <div classname="column1">
                          <b>Outside</b>
                          <br />
                          <b>NA OK RR</b> <br />
                          {column1.map((str, i) => {
                            if (i % 3 === 0 && i !== 0) {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <fragment>
                                    <br />{" "}
                                    <input type="checkbox" checked={true} />{" "}
                                  </fragment>
                                );
                              return (
                                <fragment>
                                  <br />{" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </fragment>
                              );
                            } else {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <fragment>
                                    {" "}
                                    <input
                                      type="checkbox"
                                      checked={true}
                                    />{" "}
                                  </fragment>
                                );
                              return (
                                <fragment>
                                  {" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </fragment>
                              );
                            }
                          })}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "39px",
                            position: "relative",
                            left: "-10px",
                          }}
                        >
                          <div>Lights</div>
                          <div>Steps/Hand Rail</div>
                          <div>Tires/Tracks</div>
                          <div>Exhaust</div>
                          <div>Fenders</div>
                          <div>Buckets</div>
                          <div>Cutting Edge/Teeth</div>
                          <div>LIfting Mechanism</div>
                          <div>Hoses</div>
                          <div>Fittings Greased</div>
                          <div>Hitch/Coupler</div>
                          <div>Wipers</div>
                        </div>

                        <div>
                          <b>Engine Compartment</b> <br />
                          <b>NA OK RR</b> <br />
                          {column2.map((str, i) => {
                            if (i === 15) {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    <br /> <b>Inside Cab</b>
                                    <br />{" "}
                                    <input
                                      type="checkbox"
                                      checked={true}
                                    />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  <br /> <b>Inside Cab</b> <br />{" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            } else if (i % 3 === 0 && i !== 0) {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    <br />{" "}
                                    <input type="checkbox" checked={true} />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  <br />{" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            } else {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    {" "}
                                    <input
                                      type="checkbox"
                                      checked={true}
                                    />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  {" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            }
                          })}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "39px",
                            position: "relative",
                            left: "-75px",
                          }}
                        >
                          <div>Battery Cable</div>
                          <div>Fan Belt</div>
                          <div>Hoses</div>
                          <div>Air Filter</div>
                          <div>Guards</div>
                          <br />
                          <div>Brakes Service</div>
                          <div>Brakes Parking</div>
                          <div>Backup Alarm</div>
                          <div>Fire Extinguisher</div>
                          <div>Gauges</div>
                          <div>Horn</div>
                          <div>Hydraulic Controls</div>
                        </div>

                        <div style={{ position: "relative", left: "-80px" }}>
                          <b>Inside Cab (cont.)</b> <br />
                          <b>NA OK RR</b> <br />
                          {column3.map((str, i) => {
                            if (i === 15) {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    <br /> <b>Fluids</b>
                                    <br />{" "}
                                    <input
                                      type="checkbox"
                                      checked={true}
                                    />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  <br /> <b>Fluids</b> <br />{" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            } else if (i % 3 === 0 && i !== 0) {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    <br />{" "}
                                    <input type="checkbox" checked={true} />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  <br />{" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            } else {
                              if (String(str).toLowerCase() === "true")
                                return (
                                  <React.Fragment>
                                    {" "}
                                    <input
                                      type="checkbox"
                                      checked={true}
                                    />{" "}
                                  </React.Fragment>
                                );
                              return (
                                <React.Fragment>
                                  {" "}
                                  <input type="checkbox" checked={false} />{" "}
                                </React.Fragment>
                              );
                            }
                          })}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "39px",
                            position: "relative",
                            left: "-130px",
                          }}
                        >
                          <div>Glass (all sides)</div>
                          <div>Mirror</div>
                          <div>Roll Over Protection</div>
                          <div>Seat Belt/Seat</div>
                          <div>Steering</div>
                          <br />
                          <div>Visible Leaks</div>
                          <div>Oil Level/Pressure</div>
                          <div>Coolant Level</div>
                          <div>Hydraulic Oil Level</div>
                          <div>Transmission Fluid Level</div>
                          <div>Fuel Level</div>
                        </div>
                      </div>{" "}
                      {/*******end of columns**********/}
                      <br />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="sub-border"
                      >
                        <b>Explain Defects:</b>
                        <br />
                        {value.explain_defects}
                      </div>
                      <br />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="sub-border"
                      >
                        {renderRepairs()}
                      </div>
                      <br />
                      <br />
                      <div
                        className="initals sub-border"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <div
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <b>Operator's initals: </b> {value.sign_operator}
                          <hr></hr>
                        </div>
                        <div
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <b>Mechanic's initals: </b> {value.sign_mech}
                          <hr></hr>
                        </div>
                      </div>
                      <button
                        style={{
                          color: "black",
                          backgroundColor: "peachpuff",
                          width: "100px",
                          margin: "10px",
                          marginLeft: "10px",
                          border: "2px solid black",
                        }}
                        onClick={() =>
                          this.export("JobNumber" + this.state.selectValue)
                        }
                        className="ui button"
                        type="button"
                      >
                        Download
                      </button>
                    </div> //**************end of return
                  );
                })}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(GetInspectionForm);
