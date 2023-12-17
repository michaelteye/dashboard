import sales from '../../components/images/icons/cc-primary.png';
import { InfoProps } from "./SmallCards";

const BigCards2 = ({ title, price, percent }: InfoProps) => {
  return (
    <div className="bg-white w-1/2  p-5 mb-4   navbarShadow rounded-md flex flex-col gap-y-1">
      <div className=" flex items-center justify-between mb-4">
      <div className="g-[#ffe8e5] rounded-lg p-2 w-14">
          <img src={sales} alt="" className='w-14 bg-[#ededff] rounded-md' style={{ width: 35, height:35 }} />
        </div>

        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          style={{ width: 20, height: 20 }}
        >
          <path d="M304 256 A48 48 0 0 1 256 304 A48 48 0 0 1 208 256 A48 48 0 0 1 304 256 z" />
          <path d="M304 416 A48 48 0 0 1 256 464 A48 48 0 0 1 208 416 A48 48 0 0 1 304 416 z" />
          <path d="M304 96 A48 48 0 0 1 256 144 A48 48 0 0 1 208 96 A48 48 0 0 1 304 96 z" />
        </svg>
      </div>

      <p className="text-lg font-publicSans">{title}</p>
      <h3 className="text-[#566a7f] text-[1.625rem] font-semibold font-publicSans">{price}</h3>

      <div className="flex space-x-0 text-[#71dd37] items-center">
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ width: 20, height: 20 }}
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
          />
        </svg>
        <span className="font-publicSans">{percent}</span>
      </div>
    </div>
  );
};

export default BigCards2;
