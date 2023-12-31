
const Demo2 = () => {
  return (
    <>
      <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
        <div className="card">
          <div className="row row-bordered g-0">
            <div className="col-md-8">
              <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
              <div id="totalRevenueChart" className="px-2"></div>
            </div>
            <div className="col-md-4">
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
              <div id="growthChart"></div>
              <div className="text-center fw-medium pt-3 mb-2">
                62% Company Growth
              </div>

              <div className="flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-between">
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
      <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
        <div className="row">
          <div className="col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title flex justify-between items-start">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../assets/img/icons/unicons/paypal.png"
                      alt="Credit Card"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOpt4"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardOpt4"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        View More
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <span className="d-block mb-1">Payments</span>
                <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                <small className="text-danger font-medium">
                  <i className="bx bx-down-arrow-alt"></i> -14.82%
                </small>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title flex justify-between items-start">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../assets/img/icons/unicons/cc-primary.png"
                      alt="Credit Card"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOpt1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="cardOpt1">
                      <a className="dropdown-item" href="javascript:void(0);">
                        View More
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <span className="font-medium d-block mb-1">Transactions</span>
                <h3 className="card-title mb-2">$14,857</h3>
                <small className="text-success font-medium">
                  <i className="bx bx-up-arrow-alt"></i> +28.14%
                </small>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between flex-col sm:flex-row gap-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="card-title">
                      <h5 className="text-nowrap mb-2">Profile Report</h5>
                      <span className="badge bg-label-warning rounded-pill">
                        Year 2021
                      </span>
                    </div>
                    <div className="mt-auto sm:mt-0">
                      <small className="text-success font-medium">
                        <i className="bx bx-chevron-up"></i> 68.2%
                      </small>
                      <h3 className="mb-0">$84,686k</h3>
                    </div>
                  </div>
                  <div id="profileReportChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo2;
