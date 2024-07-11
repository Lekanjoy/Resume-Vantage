
const ArrowIcon = ({stroke}: {stroke:string;}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector 4130"
          d="M12 2L1 13"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector 6909"
          d="M6 1H12C12.4714 1 12.7071 1 12.8536 1.14645C13 1.29289 13 1.5286 13 2V8"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
