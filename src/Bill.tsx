// import React, { useEffect } from "react";
// import { useData } from "./DataContext";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import './App.css';
// const Bill = () => {
//   const { data } = useData();
//   console.log("data in bill", data);
//   useEffect(()=>{
//     let elements=document.getElementsByClassName("dynamic-bg");
//     for(let i=0;i<elements.length;i++){
//       (elements[i] as HTMLElement).style.backgroundColor=data.color
//     }
//   },[data])
//   const downloadPDF = () => {
//     console.log("inside download");

//     const element = document.getElementById("main-container"); // ID of the HTML element you want to convert to PDF

//     if (!element || !(element instanceof HTMLElement)) {
//         console.error("Element with the specified ID is not a valid HTMLElement.");
//         return;
//       }
//     html2canvas(element).then((canvas: HTMLCanvasElement) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("download.pdf"); // Save the PDF file
//     });
//   };
//   const generateRandomNumber=()=>{
//     return Math.floor(Math.random()*10000000000)
//   }
//   const getEndOfMonth = (date) => {
//     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Get the last day of the current month
//     console.log(lastDay);

//     return lastDay;
//   };


//   const formatDate = (date) => {
//     console.log(new Date(date));

//     const day = String(new Date(date).getDate()).padStart(2, "0");
//     const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
//     const year = new Date(date).getFullYear();
//     return day + "/" + month + "/" + year;
//   };
//   const calcExpiryDate = () => {
//     // var expiry ;
//     if (!data.subscriptionType || !data.renewalDate) {
//       return "N/A"; // Return "N/A" if either value is missing
//     }
//     console.log(formatDate(data.renewalDate));

//     var renewalDate = new Date(data.renewalDate); // Ensure it's a Date object
//     if (data.subscriptionType == "Yearly") {

//       renewalDate.setFullYear(renewalDate.getFullYear() + 1); // Add 1 year to the current renewal date


//     }
//     if(data.subscriptionType == "Quarterly"){
//         renewalDate.setMonth(renewalDate.getMonth()+4); 
//         // return 
//     }
//     if(data.subscriptionType == "Monthly"){
//         renewalDate.setMonth(renewalDate.getMonth()+1)
//         // return 
//     }
//     console.log("expiry1");
//     return renewalDate.toDateString();

//     // return expiry;
//   };

//   return (
//     <div>


//    <div className="bg-gray-100 min-h-screen p-10">
//   <div
//     id="main-container"
//     className="mx-auto w-[794px] bg-white text-gray-900 shadow-xl"
//   >
//     {/* Header */}
//     <div className="dynamic-bg flex justify-between p-6 text-white">
//       <div>
//         <h2 className="text-xl font-semibold text-app">{data.providerName}</h2>
//         <p className="text-sm text-app">{data.providerAddress}</p>
//         <p className="text-sm text-app">
//           {data.providerPhone} • {data.providerEmail}
//         </p>
//       </div>

//       <div className="text-right text-sm text-app">
//         <p>
//           <span className="font-medium">Invoice No:</span> C{generateRandomNumber()}
//         </p>
//         <p>
//           <span className="font-medium">Date:</span>{" "}
//           {formatDate(new Date())}
//         </p>
//       </div>
//     </div>

//     {/* Customer & Subscription */}
//     <div className="grid grid-cols-2 gap-8 p-6 border-b text-app">
//       <div>
//         <h4 className="mb-2 text-sm font-semibold uppercase text-gray-600">
//           Billed To
//         </h4>
//         <p className="text-sm">{data.recievedFrom}</p>
//         <p className="text-sm">{data.address}</p>
//         <p className="text-sm">{data.phone}</p>
//         <p className="text-sm">{data.email}</p>
//       </div>

//       <div>
//         <h4 className="mb-2 text-sm font-semibold uppercase text-gray-600">
//           Subscription Details
//         </h4>
//         <p className="text-sm">Type: {data.subscriptionType}</p>
//         <p className="text-sm">
//           Renewal: {data.renewalDate ? formatDate(data.renewalDate) : "—"}
//         </p>
//         <p className="text-sm">
//           Expiry:{" "}
//           {data.subscriptionType && data.renewalDate
//             ? formatDate(calcExpiryDate())
//             : "—"}
//         </p>
//         <p className="text-sm">Speed: {data.speed} Mbps</p>
//         <p className="text-sm">User ID: {data.userId}</p>
//       </div>
//     </div>

//     {/* Table */}
//     <table className="w-full text-sm">
//       <thead className="dynamic-bg text-white">
//         <tr>
//           <th className="p-3 text-left">#</th>
//           <th className="p-3 text-left">Service</th>
//           <th className="p-3 text-left">Qty</th>
//           <th className="p-3 text-left">Remarks</th>
//           <th className="p-3 text-right">Amount</th>
//         </tr>
//       </thead>

//       <tbody>
//         <tr className="border-b">
//           <td className="p-3">1</td>
//           <td className="p-3">Internet Bandwidth Charges</td>
//           <td className="p-3">1</td>
//           <td className="p-3">Online Payment</td>
//           <td className="p-3 text-right">₹ {data.totalAmount}</td>
//         </tr>
//       </tbody>

//       <tfoot>
//         <tr className="font-semibold">
//           <td colSpan={4} className="p-3 text-right">
//             Total (Incl. Tax)
//           </td>
//           <td className="p-3 text-right">₹ {data.totalAmount}</td>
//         </tr>
//       </tfoot>
//     </table>

//     {/* Footer */}
//     <div className="p-4 text-center text-xs text-gray-500">
//       This is a computer-generated invoice and does not require a signature.
//     </div>
//   </div>

//   {/* Download Button */}
//   <div className="mt-6 text-center">
//     <button
//       onClick={downloadPDF}
//       className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
//     >
//       Download PDF
//     </button>
//   </div>
// </div>
// </div>
//   );
// };
// export default Bill;
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import { InvoicePDF } from "./InvoicePDF"
import { useData } from "./DataContext"
import { Button } from "./components/ui/button"

export default function Bill() {
  const { data } = useData()

  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">

        <PDFViewer width="100%" height="100%" className="flex-1" >
          <InvoicePDF data={data} />
        </PDFViewer>

        <Button className="mt-4 w-full">
          <PDFDownloadLink
            document={<InvoicePDF data={data} />}
            fileName="invoice.pdf"
          >
            {({ loading }) =>
              loading ? "Preparing PDF..." : "Download PDF"
            }
          </PDFDownloadLink>
        </Button>
      </div>

    </div>
  )
}
