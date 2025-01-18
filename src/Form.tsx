import React, { useState } from "react";
import "./App.css";
import { useData } from "./DataContext.tsx";
const Form = () => {
  const { data, setData } = useData();
  const [formValues, setFormValues] = useState({
    recievedFrom: "",
    phone: "",
    email: "",
    address: "",
  });
  const setAllFormValues = (e) => {};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setData(formValues)
    // console.log(data);
  };
  return (
    <div class="form-container container">
      <form style={{ width: "100%" }} onSubmit={setAllFormValues}>
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

        <select class="form-select" name="subscriptionType" onChange={handleInputChange}>
          <option selected >SubscriptionType</option>
          <option value="Yearly" >Yearly</option>
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

        
      </form>
    </div>
  );
};

export default Form;
