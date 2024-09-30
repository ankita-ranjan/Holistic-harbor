import React, { useState } from "react";
import payment from "./payment.png";

const Donation = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receipt) {
      alert("Please upload a receipt.");
      return;
    }
  };

  return (
    <>
      
      <div className="w-full min-h-screen bg-gradient-to-b from-opacity-80 via-white to-opacity-80 bg-cover bg-center flex flex-wrap justify-center items-center">
        <div className="w-full max-w-screen-lg p-8 bg-opacity-35 bg-white border-2 border-black shadow-lg rounded-md flex justify-between">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-orange-500">
              Donate Here
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={fname}
                placeholder="Name"
                onChange={(e) => setFname(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="tel"
                name="Phone"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="number"
                name="amount"
                value={amount}
                placeholder="Donation Amount"
                onChange={(e) => setAmount(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                placeholder="Upload Image/Document (Optional)"
                onChange={(e) => setReceipt(e.target.files[0])}
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                required
              />
              <button
                type="submit"
                className="py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img src={payment} className="w-60 h-auto" alt="Payment" />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Donation;
