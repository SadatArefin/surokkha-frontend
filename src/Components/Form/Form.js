import React, { Component } from "react";
import { axios } from "axios";
import { saveAs } from "file-saver";

export default class Form extends Component {
  state = {
    CertificateNo: "",
    NIDNo: "",
    PassportNo: "",
    username: "",
    dob: "",
    gender: "",
    dose1date: "",
    vaccine1name: "",
    dose2date: "",
    vaccine2name: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  //   storeData = (event) => {
  //     event.preventDefault();
  //     const vaccineData = {
  // CertificateNo: this.state.CertificateNo,
  // NIDNo: this.state.NIDNo,
  // PassportNo: this.state.PassportNo,
  // username: this.state.username,
  // dob: this.state.dob,
  // gender: this.state.gender,
  // dose1date: this.state.dose1date,
  // vaccine1name: this.state.vaccine1name,
  // dose2date: this.state.dose2date,
  // vaccine2name: this.state.vaccine2name,
  //     };
  //     axios.post("localhost:3000/vaccineData", { vaccineData }).then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       window.location = "/retrieve"; //This line of code will redirect you once the submission is succeed
  //     });
  //   };
  render() {
    return (
      <div>
        <div>
          <h2 className="text-center my-4 mt-6">Beneficiary Details</h2>
          <section className="flex flex-col"></section>
          <section className="flex justify-center">
            <table>
              {/* Certificate No */}
              <tr>
                <td>
                  <label htmlFor="CertificateNo" className="px-3">
                    Certificate No
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Certificate No"
                    name="CertificateNo"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* NID No */}
              <tr>
                <td>
                  <label htmlFor="NIDNo" className="px-3">
                    NID No
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="NID No"
                    name="NIDNo"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Passport No */}
              <tr>
                <td>
                  <label htmlFor="PassportNo" className="px-3">
                    Passport No
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Passport No"
                    name="PassportNo"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Country */}
              <tr>
                <td>
                  <label htmlFor="Country" className="px-3">
                    Country
                  </label>
                </td>
                <td>
                  <p className="text-center border-2 rounded placeholder:text-gray-600">
                    Bangladesh
                  </p>
                </td>
              </tr>
              {/* username */}
              <tr>
                <td>
                  <label htmlFor="username" className="px-3">
                    Name
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Name"
                    name="username"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* dob */}
              <tr>
                <td>
                  <label htmlFor="dob" className="px-3">
                    Date of Birth
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="date"
                    name="dob"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* gender */}
              <tr>
                <td>
                  <label htmlFor="dob" className="px-3">
                    Date of Birth
                  </label>
                </td>
                <td>
                  <select
                    className="text-center border-2"
                    name="gender"
                    onChange={this.handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
              </tr>
            </table>
          </section>
          {/* ############## vACCINE dETAILS #################*/}
          <h2 className="text-center my-4 mt-6">Vaccine Details</h2>
          <section className="flex flex-col"></section>
          <section className="flex justify-center">
            <table>
              {/* Dose 1 date */}
              <tr>
                <td>
                  <label htmlFor="dose1date" className="px-3">
                    Dose 1 Date
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="date"
                    name="dose1date"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Name of Vaccine */}
              <tr>
                <td>
                  <label htmlFor="vaccine1name" className="px-3">
                    Vaccine Name
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Vaccine Name"
                    name="vaccine1name"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Dose 2 date */}
              <tr>
                <td>
                  <label htmlFor="dose2date" className="px-3">
                    Dose 2 Date
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="date"
                    name="dose2date"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Name of Vaccine */}
              <tr>
                <td>
                  <label htmlFor="vaccine2name" className="px-3">
                    Vaccine Name
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Vaccine Name"
                    name="vaccine2name"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Vaccine Center */}
              <tr>
                <td>
                  <label htmlFor="vaccinecenter" className="px-3">
                    Vaccine Center
                  </label>
                </td>
                <td>
                  <input
                    className="text-center border-2 bg-gray-300 rounded placeholder:text-gray-600"
                    type="text"
                    placeholder="Vaccine Center"
                    name="vaccinecenter"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              {/* Total Doses */}
              <tr>
                <td>
                  <label htmlFor="totaldose" className="px-3">
                    Total Doses
                  </label>
                </td>
                <td>
                  <p className="text-center border-2 rounded placeholder:text-gray-600">
                    2
                  </p>
                </td>
              </tr>
            </table>
          </section>
          <button
            onClick={this.createAndDownloadPdf}
            type="submit"
            className="bg-green-500 rounded my-10 py-2 px-7"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
