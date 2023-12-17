import React from "react";
import RevenueChart from "../components/RevenueChart";
import GrowthChart from "../components/GrowthChart";
import SmallCards2 from "../components/Cards/SmallCards2";
import BigCards2 from "../components/Cards/BigCards2";
import ProfileReport from "../components/Cards/ProfileReport";
import sales from "../components/images/icons/wallet-info.png";
import paypal from "../components/images/icons/paypal.png";
import DollarSvg from "../components/images/svgs/dollar";

const images = [sales, paypal];
const SectionTwo: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 mt-4">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1 mb-4 bg-white">
          <div className="card">
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-12 md:col-span-8 ml-4 mt-4">
                <h5 className="card-header m-0 me-2 pb-3 font-Opensans">Total Revenue</h5>
                <RevenueChart />
              </div>
              <div className="col-span-12 md:col-span-4 border-l-2">
                <div className="card-body">
                  <div className="text-center">
                    <div className="dropdown">
                      <button
                        className=" font-Opensans inline-flex my-4 items-center border border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white font-semibold py-1 px-3 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
                        type="button"
                      >
                        2022
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      
                    </div>
                  </div>
                </div>
                <GrowthChart />
                <div className="text-center fw-medium pt-3 mb-2 font-publicSans">
                  62% Company Growth
                </div>
                <div className="flex px-6 md:px-2 py-4 md:py-2 gap-3 justify-between">
                  <div className="flex">
                    <div className="me-2">
                      <span className="badge bg-label-primary">
                        {/* <i className="bx bx-dollar text-primary"></i> */}
                        <DollarSvg className="text-blue-500 bg-[#e7e7ff] p- py-3 rounded" />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <small className=" font-publicSans">2022</small>
                      <h6 className="mb-0 font-publicSans">$32.5k</h6>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="me-2 mt-[-22px]">
                      <span className="badge bg-label-info p-2 ">
                        <img src={sales} className="w-10 font-publicSans " alt="" />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <small className=" font-publicSans">2021</small>
                      <h6 className="mb-0 font-publicSans">$41.2k</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col gap-4 mt-4">
        <div className="col-span-4 flex gap-x-2">
          <SmallCards2 price="$2,456" percent="-14.82%" title="Payment" />
          <BigCards2 price="$14,857" percent="+28.14%" title="Transaction" />
        </div>
        <ProfileReport />
      </div>
    </div>
  );
};

export default SectionTwo;
