import ProfileReportChart from '../ProfileReportChart';

const ProfileReport = () => {
  return (
    <div className="col-12 mb-4 bg-white rounded-lg mt-[-14px]">
      <div className="card">
        <div className="card-body">
          <div className="flex justify-between sm:flex-row flex-col gap-3">
            <div className="flex sm:flex-col flex-row items-start justify-between pl-4 py-2">
              <div className="card-title">
                <h5 className="text-nowrap mb-2 font-publicSans">Profile Report</h5>
                <span className="inline-block px-2 py-1 text-xs font-semibold leading-none font-publicSans text-[#bd9b59] bg-[#fff1d6] rounded-full">Year 2021</span>
              </div>
              <div className="mt-sm-auto">
                <small className="text-success text-nowrap fw-medium">
                  <i className="bx bx-chevron-up font-publicSans"></i> 68.2%
                </small>
                <h3 className="mb-0 font-publicSans">$84,686k</h3>
              </div>
            </div>
            {/* include chart here */}
            <div >
             <ProfileReportChart />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReport;
