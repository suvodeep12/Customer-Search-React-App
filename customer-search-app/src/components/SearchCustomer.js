// SearchCustomer.js
import React, { useState } from "react";
import CustomerList from "./CustomerList";
import List from "../List";

function SearchCustomer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Filter the list based on the search term
    const filteredCustomers = List.filter((customer) =>
      Object.values(customer).some((value) =>
        value.toString().startsWith(searchTerm)
      )
    );

    // Render the CustomerList with the filtered customers
    return <CustomerList customers={filteredCustomers} />;
  };

  return (
    <>
      <div className="layout-row align-items-center justify-content-center mt-30">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="large mx-20 w-20"
          data-testid="search-input"
          placeholder="Enter search term (Eg: Phil)"
        />
        {/* Trigger search on input change */}
      </div>
      {searchTerm ? handleSearch() : <CustomerList customers={List} />}
    </>
  );
}

export default SearchCustomer;
