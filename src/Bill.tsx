import React, { useEffect } from "react";
import { useData } from "./DataContext.tsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './Bill.css';
const Bill = () => {
  const { data } = useData();
  //
  const downloadPDF = () => {
    console.log("inside download");
    
    const element = document.getElementById("main-container"); // ID of the HTML element you want to convert to PDF
    console.log("inside download",element);

    if (!element || !(element instanceof HTMLElement)) {
        console.error("Element with the specified ID is not a valid HTMLElement.");
        return;
      }
    html2canvas(element).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf"); // Save the PDF file
    });
  };
  const generateRandomNumber=()=>{
    return Math.floor(Math.random()*10000000000)
  }
  const getEndOfMonth = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Get the last day of the current month
    console.log(lastDay);
    
    return lastDay;
  };

  
  const formatDate = (date) => {
    console.log(new Date(date));

    const day = String(new Date(date).getDate()).padStart(2, "0");
    const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
    const year = new Date(date).getFullYear();
    return day + "/" + month + "/" + year;
  };
  const calcExpiryDate = () => {
    // var expiry ;
    if (!data.subscriptionType || !data.renewalDate) {
      return "N/A"; // Return "N/A" if either value is missing
    }
    console.log(formatDate(data.renewalDate));

    var renewalDate = new Date(data.renewalDate); // Ensure it's a Date object
    if (data.subscriptionType == "Yearly") {

      renewalDate.setFullYear(renewalDate.getFullYear() + 1); // Add 1 year to the current renewal date
      
      
    }
    if(data.subscriptionType == "Quarterly"){
        renewalDate.setMonth(renewalDate.getMonth()+4); 
        // return 
    }
    if(data.subscriptionType == "Monthly"){
        renewalDate.setMonth(renewalDate.getMonth()+1)
        // return 
    }
    console.log("expiry1");
    return renewalDate.toDateString();

    // return expiry;
  };

  return (
    <div>

    
    <div class="main-container" id="main-container">
      <div class="provider-details">
        <div>
          <h3><img src={"https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-internet-icon-line-iconset-iconsmind-31.png"}/>{data.providerName}</h3>
          <h5>INTERNET & WIFI SERVICES</h5>
          <h5>We Provide You The Best Internet Service</h5>
        </div>
        <div class="provider-address">
          <p>{data.providerAddress} </p>
          <p>
            Office No. • {data.providerPhone} Email : {data.providerEmail}{" "}
          </p>
        </div>
      </div>
      <div class="consumer-container">
        <div class="consumer-info">
          <p>Invoice no: C{generateRandomNumber()}</p>
          <p>Received from:{data.recievedFrom} </p>
          <p>Mobile: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}</p>
        </div>
        <div class="payment-info">
          <p>Installation type: {data.subscriptionType}</p>
          <p>
            Renewal Date: {data.renewalDate ? formatDate(data.renewalDate) : ""}
          </p>
          <p>
            Expiry Date:{" "}
            {data.subscriptionType && data.renewalDate
              ? formatDate(calcExpiryDate())
              : ""}
          </p>
          <p>Scheme: {data.speed ? data.speed+" mbps unlimited":""}</p>
          <p>User Id: {data.userId}</p>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td>Sr</td>
            <td>Services</td>
            <td>Quantity</td>
            <td>Remarks</td>
            <td>GST</td>
            <td>Invoice Value</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Internet bandwidth charges</td>
            <td>1</td>
            <td>Online Payment</td>
            <td>9%</td>
            <td>{data.totalAmount}</td>
          </tr>
          <tr>
            <td>Total value</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{data.price}</td>
          </tr>
        </table>
      </div>
      <div class="total-price">
        {/* <span>Total rupees in words: Six hundred rupees only</span> */}
        <p>
          This is computer generated reciept and therefore does not require any
          signature
        </p>
      </div>
    </div>
    <button type="submit" class="btn btn-primary download-button" onClick={downloadPDF}>
          Download
    </button>
    </div>
  );
};
export default Bill;
