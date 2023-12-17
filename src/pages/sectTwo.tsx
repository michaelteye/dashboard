import React from "react";
import RevenueChart from "../components/RevenueChart";
import GrowthChart from "../components/GrowthChart";
import SmallCards from "../components/Cards/SmallCards";
import BigCards from "../components/Cards/BigCards";

const SectionTwo: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 mt-4">
      <div className="col-span-12 lg:col-span-8 order-2 lg:order-1 mb-4 bg-white">
        <div className="card">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-8">
              <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
              <RevenueChart />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="card-body">
                <div className="text-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-sm btn-outline-primary dropdown-toggle"
                      type="button"
                      id="growthReportId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      2022
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="growthReportId"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        2021
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        2020
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        2019
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <GrowthChart />
              <div className="text-center fw-medium pt-3 mb-2">
                62% Company Growth
              </div>
              <div className="flex px-6 md:px-2 py-4 md:py-2 gap-3 justify-between">
                <div className="flex">
                  <div className="me-2">
                    <span className="badge bg-label-primary p-2">
                      <i className="bx bx-dollar text-primary"></i>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <small>2022</small>
                    <h6 className="mb-0">$32.5k</h6>
                  </div>
                </div>
                <div className="flex">
                  <div className="me-2">
                    <span className="badge bg-label-info p-2">
                      <i className="bx bx-wallet text-info"></i>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <small>2021</small>
                    <h6 className="mb-0">$41.2k</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>    
      <div className="col-span-4 flex gap-x-2 mt-4">       
          <SmallCards price='$2,456' percent='-14.82%' title='Payment' />
          <BigCards price='$14,857' percent='+28.14%' title='Transaction'/>        
      </div>
    </div>
  );
};

export default SectionTwo;
