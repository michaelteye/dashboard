import React from 'react';
import RevenueChart from './RevenueChart'; // Import your RevenueChart component

const RevenueComponent: React.FC = () => {
  return (
    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
      <div className="card">
        <div className="row row-bordered g-0">
          <div className="col-md-8">
            <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
            {/* Replace the div with RevenueChart component */}
            <RevenueChart />
          </div>
          <div className="col-md-4">
            {/* Rest of your component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueComponent;
