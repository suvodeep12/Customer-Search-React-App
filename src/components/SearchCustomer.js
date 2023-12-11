// src/components/SearchCustomer.js
import React, { useState } from "react";
import CustomerList from "./CustomerList";
import customersData from "../customersData";

function SearchCustomer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredCustomers = customersData.filter((customer) =>
      Object.values(customer).some((value) =>
        value.toString().startsWith(searchTerm)
      )
    );

    return <CustomerList customers={filteredCustomers} />;
  };

  return (
    <div className="search-customer-container">
      <div className="search-input-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          placeholder="Enter search term (Eg: Phil)"
        />
      </div>
      {searchTerm ? handleSearch() : <CustomerList customers={customersData} />}
    </div>
  );
}

export default SearchCustomer;
