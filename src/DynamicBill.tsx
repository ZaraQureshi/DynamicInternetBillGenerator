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
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt-data.json";
    link.click();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Receipt Upload and Form Generator</h1>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Upload Receipt</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="border p-2 w-full"
        />
      </div>

      {/* Display Extracted Text */}
      {uploadText && (
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h2 className="text-lg font-semibold">Extracted Text:</h2>
          <pre className="whitespace-pre-wrap">{uploadText}</pre>
        </div>
      )}

      {/* Dynamic Form */}
      {fields.length > 0 && (
        <form className="space-y-4">
          {fields.map((field) => (
            <div key={field} className="field">
              <label className="block text-sm font-medium mb-2" htmlFor={field}>
                {field}
              </label>
              <input
                type="text"
                id={field}
                value={formData[field]}
                onChange={(e) => handleFieldChange(field, e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={downloadFormData}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Download Data
          </button>
        </form>
      )}
    </div>
  );
};

export default DynamicBill;
