import React, { useState } from "react";
import Tesseract from "tesseract.js";

const DynamicBill: React.FC = () => {
  const [uploadText, setUploadText] = useState<string | null>(null);
  const [fields, setFields] = useState<string[]>([]);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          processOCR(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const processOCR = (file: File) => {
    Tesseract.recognize(file, "eng").then(({ data: { text } }) => {
      setUploadText(text);

      // Extract placeholder fields (e.g., dummy implementation)
      const extractedFields = ["Date", "Amount", "Vendor", "Description"];
      setFields(extractedFields);

      // Initialize empty data for fields
      const initialData = extractedFields.reduce((acc, field) => {
        acc[field] = "";
        return acc;
      }, {} as { [key: string]: string });
      setFormData(initialData);
    });
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const downloadFormData = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt-data.json";
    link.click();
  };

  return (
    <div class="bill">
       <h1>MAHALAXMI NETWORK</h1>\n{" "}
      <p>
        <strong>No.</strong> 2207
      </p>
      \n{" "}
      <p>
        <strong>Date:</strong> 21/12/25
      </p>
      \n{" "}
      <p>
        <strong>Received with thanks from:</strong> Pranay Arun Jadhav
      </p>
      \n{" "}
      <p>
        <strong>The sum of rupees:</strong> 500
      </p>
      \n{" "}
      <p>
        <strong>In Full/Part/Advance payment on A/C of:</strong>{" "}
      </p>
      \n{" "}
      <p>
        <strong>by cheque/cash/draft:</strong>{" "}
      </p>
      \n{" "}
      <p>
        <strong>For MAHALAXMI NETWORK</strong>
      </p>
      \n{" "}
      <p>
        <strong>Proprietor Signature:</strong>{" "}
      </p>
      \n{" "}
      <p>
        <strong>Address:</strong> Mahalaxmi General Store, Near Acharya College,
        Opp. Dhanvantri Hospital, Chembur Govandi Road, Mumbai - 400 071. Cell.
        98195 15629/80800 07086
      </p>
      \n
    </div>
  );
};

export default DynamicBill;
