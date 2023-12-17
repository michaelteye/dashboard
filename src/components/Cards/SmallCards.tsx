

export interface InfoProps {
    title: string | number;
    price: number | string
    percent:number | any
}
const SmallCards = ({title,price,percent}:InfoProps) => {
  return (
    <div className="bg-white p-5 w-1/2 navbarShadow rounded-md mb-4  flex flex-col gap-y-1">
      <div className=" flex items-center justify-between mb-4">
        <div className="bg-[#d5fac2] rounded-md p-2">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            style={{ width: 25, height:25 }}
            className=""
          >
            <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 00-282.5 117 397.47 397.47 0 00-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 00155.6 31.5 398.57 398.57 0 00282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0031.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 00588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z" />
          </svg>
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

      <p className="text-lg">{title}</p>
      <h3 className="text-[#566a7f] text-[1.625rem] font-semibold">{price}</h3>

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
        <span>{percent}</span>
      </div>
    </div>
  );
};

export default SmallCards;
