import { useState } from "react";
import validator from "validator";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    age: "",
    ipAddress: "",
    domain: "",
  });

  const [validationState, setValidationState] = useState({
    email: { isValid: false, errorMessage: "" },
    phoneNumber: { isValid: false, errorMessage: "" },
    age: { isValid: false, errorMessage: "" },
    ipAddress: { isValid: false, errorMessage: "" },
    domain: { isValid: false, errorMessage: "" },
  });

  const [showAllFieldsValidMessage, setShowAllFieldsValidMessage] =
    useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    updateValidationState(name, true, "");
  };

  const isEmailValid = (value) => validator.isEmail(value);
  const isPhoneValid = (value) => validator.isMobilePhone(value);
  const isAgeValid = (value) =>
    validator.isInt(value, { allow_leading_zeroes: false, min: 1, max: 120 });
  const isIpAddressValid = (value) => validator.isIP(value);
  const isDomainValid = (value) => validator.isFQDN(value);

  const updateValidationState = (name, isValid, errorMessage) => {
    setValidationState((prevState) => ({
      ...prevState,
      [name]: {
        isValid,
        errorMessage: isValid ? "" : errorMessage,
      },
    }));
  };

  // SUBMIT FORM
  const submitForm = (e) => {
    e.preventDefault();
    const isValidEmail = isEmailValid(formData.email);
    updateValidationState("email", isValidEmail, "Email is not valid");

    const isValidPhone = isPhoneValid(formData.phoneNumber);
    updateValidationState("phoneNumber", isValidPhone, "Phone is not valid");

    const isValidAge = isAgeValid(formData.age);
    updateValidationState("age", isValidAge, "Age is not valid");

    const isValidIp = isIpAddressValid(formData.ipAddress);
    updateValidationState("ipAddress", isValidIp, "Ip Address is not valid");

    const isValidDomain = isDomainValid(formData.domain);
    updateValidationState("domain", isValidDomain, "Domain is not valid");

    if (
      isValidEmail &&
      isValidPhone &&
      isValidAge &&
      isValidIp &&
      isValidDomain
    ) {
      setShowAllFieldsValidMessage("Form valid!");
    } else {
      setShowAllFieldsValidMessage("");
    }
  };

  return (
    <div className="wrapper">
      <h2 className="wrapper-title">Form</h2>
      <form className="form" onSubmit={submitForm}>
        <label className="form-label" htmlFor="email">
          Email
        </label>

        <input
          className={`form-input ${
            validationState.email.isValid ? "" : "form-input-error"
          }`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
        ></input>

        {validationState.email.isValid ? null : (
          <div className="error-message">
            {validationState.email.errorMessage}
          </div>
        )}
        <label className="form-label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="form-input"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        ></input>
        {validationState.phoneNumber.isValid ? null : (
          <div className="error-message">
            {validationState.phoneNumber.errorMessage}
          </div>
        )}
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          className="form-input"
          type="number"
          id="age"
          value={formData.age}
          name="age"
          onChange={handleInputChange}
          placeholder="Enter your age"
        ></input>
        {validationState.age.isValid ? null : (
          <div className="error-message">
            {validationState.age.errorMessage}
          </div>
        )}
        <label className="form-label" htmlFor="ip-address">
          Ip Address
        </label>
        <input
          className="form-input"
          type="text"
          id="ip-address"
          value={formData.ipAddress}
          name="ipAddress"
          onChange={handleInputChange}
          placeholder="Enter IP"
        ></input>
        {validationState.ipAddress.isValid ? null : (
          <div className="error-message">
            {validationState.ipAddress.errorMessage}
          </div>
        )}
        <label className="form-label" htmlFor="domain">
          Domain
        </label>
        <input
          className="form-input"
          type="text"
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleInputChange}
          placeholder="Enter your domain address"
        ></input>
        {validationState.domain.isValid ? null : (
          <div className="error-message">
            {validationState.domain.errorMessage}
          </div>
        )}
        <div className="success-message">{showAllFieldsValidMessage}</div>

        <button className="form-btn">Send</button>
      </form>
    </div>
  );
}

export default App;
