import React, { useState, useEffect } from "react";
import "./App.css";
import { useData } from "./DataContext.tsx";
import AdUnit from './AdUnit.tsx';
const Form = () => {
  const { data, setData } = useData();
  const [fileUrl, setFileUrl] = useState({});
  useEffect(() => {
    if (!data.geminiData?.html || !data.geminiData?.css) return;

    // ✅ Combine HTML & CSS into a full document
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Page</title>
        <style>${data.geminiData.css}</style>
      </head>
      <body>
        ${data.geminiData.html}
      </body>
      </html>
    `;

    // ✅ Convert to a Blob URL
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setFileUrl(url);

    return () => URL.revokeObjectURL(url); // Clean up URL when component unmounts
  }, [data.geminiData]);

  const [formValues, setFormValues] = useState({
    recievedFrom: "",
    phone: "",
    email: "",
    address: "",
    color: "",
  });

  const deserializeJson = (jsonString) => {
    console.log(typeof jsonString);

    let formattedJson = jsonString
      .toString()
      .replace(/^```json\n/, "")
      .replace(/\n```$/, "");
    const jsonData = JSON.parse(formattedJson);
    return jsonData;
  };
  const convertToBase64 = (file) => {
    console.log(typeof file);

    return new Promise((resolve, reject) => {
      if (!(file instanceof Blob)) {
        reject("Invalid file type");
        return;
      }

      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.toString().split(",")[1]); // Extract Base64 without prefix
      reader.onerror = (error) => reject(error); // Read the file as a Base64 URL
      console.log(reader);
    });
  };
  const geminiCall = async (image: React.ChangeEvent<HTMLInputElement>) => {
    let base64Image = await convertToBase64(image);

    const prompt_template_extract = `
this is a bill: ${base64Image}

You are an expert in extracting structured data from images and generating professional HTML documents.

## Task:
I have provided an **image of a cash memo (invoice receipt)**. Your job is to:
1. **Extract all key details** (invoice number, date, customer name, items, price, etc.).
2. **Generate a complete HTML page** for the invoice, using a **table format** to display the data.
3. **Provide clean, professional CSS styling along with colors to the header of the table** for the invoice.
4. **Return a structured JSON response** with:
   - "html" → HTML content of the invoice.
   - "css" → CSS styles.
   - "details" → Extracted invoice data as JSON.
   - "index" → A full **index.html** file combining HTML & CSS.

## Input:
A **cash memo (invoice receipt) image**.

## Expected JSON Response:

{
  "html": "<html>\n<head>\n<title>Invoice</title>\n<link rel='stylesheet' href='style.css'>\n</head>\n<body>\n  <div class='invoice-container'>\n    <h1>Invoice Receipt</h1>\n    <p><strong>Invoice No:</strong> 12345</p>\n    <p><strong>Date:</strong> 2025-02-09</p>\n    <p><strong>Customer Name:</strong> John Doe</p>\n    <table>\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>Quantity</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Product A</td>\n          <td>2</td>\n          <td>$50</td>\n        </tr>\n        <tr>\n          <td>Product B</td>\n          <td>1</td>\n          <td>$100</td>\n        </tr>\n      </tbody>\n    </table>\n    <p><strong>Total Amount:</strong> $200</p>\n  </div>\n</body>\n</html>",
  
  "css": ".invoice-container { width: 80%; margin: auto; padding: 20px; border: 1px solid #ddd; }\n table { width: 100%; border-collapse: collapse; }\n th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }\n th { background-color: #f2f2f2; }",
  
  "details": {
    "invoice_number": "12345",
    "date": "2025-02-09",
    "customer_name": "John Doe",
    "items": [
      { "name": "Product A", "quantity": 2, "price": 50 },
      { "name": "Product B", "quantity": 1, "price": 100 }
    ],
    "total_amount": "200"
  },
  
  "index": "<html>\n<head>\n<title>Invoice</title>\n<style>\n.invoice-container { width: 80%; margin: auto; padding: 20px; border: 1px solid #ddd; }\n table { width: 100%; border-collapse: collapse; }\n th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }\n th { background-color: #f2f2f2; }\n</style>\n</head>\n<body>\n  <div class='invoice-container'>\n    <h1>Invoice Receipt</h1>\n    <p><strong>Invoice No:</strong> 12345</p>\n    <p><strong>Date:</strong> 2025-02-09</p>\n    <p><strong>Customer Name:</strong> John Doe</p>\n    <table>\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>Quantity</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Product A</td>\n          <td>2</td>\n          <td>$50</td>\n        </tr>\n        <tr>\n          <td>Product B</td>\n          <td>1</td>\n          <td>$100</td>\n        </tr>\n      </tbody>\n    </table>\n    <p><strong>Total Amount:</strong> $200</p>\n  </div>\n</body>\n</html>"
}

`;

    const requestBody = {
      contents: [
        {
          parts: [
            { text: prompt_template_extract }, // The text instruction
            { inlineData: { mimeType: "image/png", data: base64Image } }, // Encoded Image
          ],
        },
      ],
    };
    console.log(requestBody);

    try {
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent" +
        "?key=" +
        "";
      console.log(url);

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          return response.json();
        })
        .then((geminiData) => {
          console.log("data: ", geminiData);
          setData((prev) => ({
            ...prev,

            geminiData: deserializeJson(
              geminiData.candidates[0].content.parts[0].text
            ),
          }));
        });
    } catch (error) {
      console.log(error);
    }
  };
  const setAllFormValues = (e) => {};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getColorPicker = (e) => {
    setData((...prev) => ({
      ...prev,
      color: e.target.value,
    }));
    console.log(e.target.value);
  };

  const uploadImageCallGemini = (e) => {
    console.log(e.target.files[0]);
    geminiCall(e.target.files[0]);
  };
  return (
    <div class="form-container container">
      <div className="upload-img">
        <input className="" type="file" />
      </div>
      <div className="bgColor-and-logo mb-3">
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={data.color}
          onChange={getColorPicker}
        />
        <p>
          Selected Color: <span id="colorValue">{data.color}</span>
        </p>
      </div>
      <div className="provider-details-form">
        <h5>Provider Details: </h5>
        <div class="mb-3">
          <label class="form-label">Provider name:</label>
          <input
            type="text"
            class="form-control"
            name="providerName"
            value={data.providerName}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Provider Address:</label>
          <input
            type="text"
            class="form-control"
            name="providerAddress"
            value={data.providerAddress}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Provider Contact no.:</label>
          <input
            type="text"
            class="form-control"
            name="providerPhone"
            value={data.providerPhone}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Provider Email:</label>
          <input
            type="text"
            class="form-control"
            name="providerEmail"
            value={data.providerEmail}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="user-details-form">
        <h5>User details: </h5>
        <div class="mb-3">
          <label class="form-label">User Id:</label>
          <input
            type="text"
            class="form-control"
            name="userId"
            value={data.userId}
            onChange={handleInputChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">User name:</label>
          <input
            type="text"
            class="form-control"
            id="receiver-name"
            name="recievedFrom"
            value={data.recievedFrom}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Phone no.:</label>
          <input
            type="text"
            class="form-control"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Address:</label>
          <input
            type="text"
            class="form-control"
            name="address"
            value={data.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="internet-details-form">
        <h5>Internet plan details:</h5>
        <select
          class="form-select"
          name="subscriptionType"
          onChange={handleInputChange}
        >
          <option selected>SubscriptionType</option>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
        </select>

        <div class="mb-3">
          <label class="form-label">Renewal Date:</label>
          <input
            type="date"
            class="form-control"
            name="renewalDate"
            value={data.renewalDate}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Speed:</label>
          <input
            type="text"
            class="form-control"
            name="speed"
            value={data.speed}
            onChange={handleInputChange}
          />
        </div>
        <AdUnit/>
        <div class="mb-3">
          <label class="form-label">Total Amount:</label>
          <input
            type="text"
            class="form-control"
            name="totalAmount"
            value={data.totalAmount}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {fileUrl && (
        <iframe src={fileUrl} download="generated_page.html">
          <button
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              background: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download HTML File
          </button>
        </iframe>
      )}
      {/* </fo rm> */}
    </div>
  );
};

export default Form;
