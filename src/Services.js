import React, { useState } from 'react';
import "./Services.css";

function Services() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    // Validate form data
    let errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/\d{10}/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number should be 10 digits';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!serviceType) {
      errors.serviceType = 'Service type is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // Submit form data
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Service Type:', serviceType);
    // Reset form data and errors
    setName('');
    setPhoneNumber('');
    setEmail('');
    setServiceType('');
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="serviceType">Service Type:</label>
        <select
          id="serviceType"
          name="serviceType"
          value={serviceType}
          onChange={(event) => setServiceType(event.target.value)}
        >
          <option value="">Select Service Type</option>
          <option value="consultation">Consultation</option>
          <option value="maintenance">Maintenance</option>
          <option value="plumber">plumber</option>
          <option value="Ac mechanist">Ac mechanist</option>
          <option value="Electrition">Electrition</option>
          <option value="Security">Security</option>
          <option value="Driver">Driver</option>
        </select>
        {errors.serviceType && <span>{errors.serviceType}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Services;
