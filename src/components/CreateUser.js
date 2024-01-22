import React, { useState } from 'react';

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <h1>CreateUser</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label>Mobile:</label>
        <input type="text" name="mobile" onChange={handleChange} />

        <br />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
