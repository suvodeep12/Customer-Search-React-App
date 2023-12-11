// src/components/CustomerList.js
import React from 'react';

function CustomerList({ customers }) {
  return (
    <div className='customer-list-container'>
      {customers.length === 0 ? (
        <p className='no-results'>No Results Found!</p>
      ) : (
        <div className='card'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody className='searched-customers'>
              {customers.map((customer) => (
                <tr key={customer.name}>
                  <td>{customer.name}</td>
                  <td>{customer.age}</td>
                  <td>{customer.location}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
