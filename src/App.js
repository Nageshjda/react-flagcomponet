import React from "react";
import Logo from "./new_flag.png";
import "./App.css";
// import domtoimage from "dom-to-image";
// import { saveAs } from "file-saver";
// import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];
// const csvData = [
//   { name: "Item 1", color: "Green", size: "X-Large" },
//   { name: "Item 2", color: "Green", size: "X-Large" },
//   { name: "Item 3", color: "Green", size: "X-Large" },
// ];
class App extends React.Component {
  onclickDownload(event) {
    var aLink = document.createElement("a");
    aLink.download = "fileName.csv";
    aLink.href =
      "data:text/csv;charset=UTF-8," +
      encodeURIComponent(JSON.stringify(csvData));

    var event = new MouseEvent("click");
    aLink.dispatchEvent(event);

    // window.open(url);
    // event.preventDefault();
    // domtoimage
    //   .toBlob(document.getElementById("download-logo"))
    //   .then(function (blob) {
    //     saveAs("John,Doe,120 jefferson st.,Riverside, NJ, 08075", "sample.csv");
    //   });
  }
  render() {
    return (
      <div className="App">
        <div
          className="download-logo"
          onClick={this.onclickDownload.bind(this)}
        ><div id="download-logo">
            <img src={Logo} alt="download" />
          </div>
        </div>
        {/* <CSVLink data={csvData} className="download-csv">
          Download me
        </CSVLink> */}
      </div>
    );
  }
}

export default App;
