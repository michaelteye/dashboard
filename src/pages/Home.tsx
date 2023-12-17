import BigCards from "../components/Cards/BigCards";
import SmallCards from "../components/Cards/SmallCards";
import Demo2 from "../components/demo2";
import SectionTwo from "./sectTwo";
import man from '../components/images/man.png'
import profile from '../components/images/avators/1.png'
import Profit from '../components/images/icons/chart-success.png'
import sales from '../components/images/icons/wallet-info.png'

const images = [Profit, sales]
const Home = () => {
  return (
    <>
    <div className="flex">
      <div
        className={`  relative  lg:w-[17.5%]   navbarShadow duration-300 bg-white max-h-screen h-[100vh] pl-3  md:block`}
      >
        <aside id="layout-menu" className="flex flex-col gap-y-1">
          <div className="app-brand mt-5">
            <a href="#" className="flex  px-4 items-center justify-start">
              <span className="">
                <svg
                  width="22"
                  viewBox="0 0 25 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                      id="path-1"
                    ></path>
                    <path
                      d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                      id="path-3"
                    ></path>
                    <path
                      d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                      id="path-4"
                    ></path>
                    <path
                      d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                      id="path-5"
                    ></path>
                  </defs>
                  <g
                    id="g-app-brand"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Brand-Logo"
                      transform="translate(-27.000000, -15.000000)"
                    >
                      <g id="Icon" transform="translate(27.000000, 15.000000)">
                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <use fill="#696cff" xlinkHref="#path-1"></use>
                          <g id="Path-3" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-3"></use>
                            <use
                              fill-opacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-3"
                            ></use>
                          </g>
                          <g id="Path-4" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-4"></use>
                            <use
                              fill-opacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-4"
                            ></use>
                          </g>
                        </g>
                        <g
                          id="Triangle"
                          transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                        >
                          <use fill="#696cff" xlinkHref="#path-5"></use>
                          <use
                            fill-opacity="0.2"
                            fill="#FFFFFF"
                            xlinkHref="#path-5"
                          ></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="  tracking-normal text-[1.7rem] font-bold ms-2">
                sneat
              </span>
            </a>
          </div>

          <ul className="menu-inner py-1 flex flex-col gap-y-1  text-lg text-gray-500 ">
            <li className="menu-link active h-[2.7rem]">
              <a className=" active   pt-5 pb-5 pl-[15px] flex items-center justify-start gap-x-3 flex-grow-0 flex-shrink-1 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 25, height: 25 }}
                >
                  <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z" />
                  <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
                </svg>
                <div data-i18n="Dashboards">Dashboards</div>
              </a>
            </li>

            <li className="menu-link  h-[3rem]">
              <a className="   pt-5 pb-5 pl-[15px] flex items-center justify-start gap-x-3 flex-grow-0 flex-shrink-1 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 25, height: 25 }}
                >
                  <path d="M10 4a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4m0 2a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m7 6c-.16 0-.24.08-.24.24l-.26 1.26c-.22.18-.54.34-.78.5l-1.28-.5c-.08 0-.24 0-.32.1l-.96 1.76c-.08.08-.08.24.08.32l1.04.82v1l-1.04.82c-.08.08-.16.24-.08.32l.96 1.76c.08.1.24.1.32.1l1.28-.5c.24.16.56.32.78.5l.26 1.26c0 .16.08.24.24.24h2c.08 0 .24-.08.24-.24l.16-1.26c.32-.18.64-.34.88-.5l1.22.5c.14 0 .3 0 .3-.1l1.04-1.76c.08-.08 0-.24-.08-.32l-1.04-.82v-1l1.04-.82c.08-.08.16-.24.08-.32L21.8 13.6c0-.1-.16-.1-.3-.1l-1.22.5c-.24-.16-.56-.32-.88-.5l-.16-1.26c0-.16-.16-.24-.24-.24h-2m-7 1c-2.67 0-8 1.33-8 4v3h9.67c-.28-.59-.48-1.23-.58-1.9H3.9V17c0-.64 3.13-2.1 6.1-2.1.43 0 .87.04 1.3.1.2-.64.47-1.24.82-1.79-.78-.13-1.52-.21-2.12-.21m8.04 2.5c.8 0 1.46.66 1.46 1.54 0 .8-.66 1.46-1.46 1.46-.88 0-1.54-.66-1.54-1.46 0-.88.66-1.54 1.54-1.54z" />
                </svg>
                <div data-i18n="Dashboards">Account Settings</div>
              </a>
            </li>

            <li className="menu-link  h-[3rem] text-gray-400">
              <a className=" menuHeader  pt-5 pb-5 pl-[15px] flex items-center justify-start gap-x-3 flex-grow-0 flex-shrink-1 ">
                <div
                  data-i18n="Dashboards"
                  className="text-[16px] font-semibold"
                >
                  PAGES
                </div>
              </a>
            </li>

            <li className="menu-link  h-[3rem]">
              <a className="   pt-5 pb-5 pl-[15px] flex items-center justify-start gap-x-3 flex-grow-0 flex-shrink-1 ">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  style={{ width: 22, height: 22 }}
                >
                  <path d="M800 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H350c-26.667 0-49.667-10-69-30s-29-43.333-29-70V750h98v100h450V150H350v150h-98V150c0-28 9.667-51.667 29-71s42.333-29 69-29h450M450 720V600H0V450h450V330l200 194-200 196" />
                </svg>
                <div data-i18n="Dashboards">Login</div>
              </a>
            </li>

            <li className="menu-link  h-[3rem]">
              <a className="   pt-5 pb-5 pl-[15px] flex items-center justify-start gap-x-3 flex-grow-0 flex-shrink-1 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 25, height: 25 }}
                >
                  <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4 3.91 3.91 0 00-4 4zm6 0a1.91 1.91 0 01-2 2 1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2zM4 18a3 3 0 013-3h2a3 3 0 013 3v1h2v-1a5 5 0 00-5-5H7a5 5 0 00-5 5v1h2z" />
                </svg>
                <div data-i18n="Dashboards">Register</div>
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div className="lg:w-[83.5%] flex-1 bg-[#edeef3] h-auto pt-5 px-5">
        <nav className="max-w-7xl text-gray-600 navbarShadow  rounded-md  max-h-40 h-16 flex my-auto bg-white px-4 py-2 relative ">
          <div className="flex-1 flex items-center" id="navbar-collapse">
            <div className=" absolute whitespace-nowrap items-center">
              <div className="whitespace-nowrap static float-left flex gap-0   items-center">
                {/* Search Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 25, height: 25 }}
                >
                  <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                </svg>
                <input
                  type="text"
                  className=" placeholder: text-lg appearance-none border-0 w-[5rem] outline-none shadow-none px-1 sm:px-2"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="flex gap-x-1 border border-gray-200 px-[6px] rounded-md items-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: 10, height: 10 }}
                  >
                    <path d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 003.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0018 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 006 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z" />
                  </svg>
                  <span>K</span>
                </span>
              </div>
            </div>

            <ul className="navbar-nav flex items-center ms-auto ">
              <li className="flex items-center gap-5">
                <a>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    style={{ width: 25, height: 25 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: 25, height: 25 }}
                  >
                    <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a.996.996 0 00-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 007 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 002.818-2H9.182A2.98 2.98 0 0012 22z" />
                  </svg>
                </a>

                <a>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: 25, height: 25 }}
                  >
                    <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759L4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605l-1.414 1.414-2.122-2.122 1.414-1.414z" />
                  </svg>
                </a>

                <a>
                  <div className="flex items-center justify-center">
                    <img
                      src={profile}
                      alt="Avatar"
                      className="rounded-full h-10 w-10"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* BigCard */}

        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-8">
            <div className="bg-white   navbarShadow rounded-md flex justify-between flex-wrap">
              <div className="mb-4 w-[55%] p-5">
                <h2 className="text-xl  text-[#696cff] mb-2 font-Opensans">
                  Congratulations John! 🎉{" "}
                </h2>
                <p className="text-gray-700 mb-4 font-Opensans">
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </p>
                <button className="bg-white text-[#696cff] font-publicSans border border-[#696cff] hover:bg-[#696cff] hover:text-white py-1 px-3 rounded-sm text-sm">
                  View Badges
                </button>
              </div>

              <div className="pb-0  flex flex-1 justify-center ml-4  items-end">
                <img
                  src={man}
                  alt="Image"
                  className="h-36"
                />
              </div>
            </div>
          </div>
          
          <div className="col-span-4 flex gap-x-2">
            {/* Small Card */}
            <SmallCards price='$12,628' percent='-72.80%' title='Profit'/>

            {/* Big Card (Chart)*/}

            <BigCards price='$4,679' percent='+28.42%' title='Sales'/>
          </div>
        </div>
      <SectionTwo />

      </div>

    </div>
    {/* <Demo2/> */}

    </>

  );
};

export default Home;
