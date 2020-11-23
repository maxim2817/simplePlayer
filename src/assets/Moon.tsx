import * as React from "react";

function SvgComponent(props: any) {
  return (
    <svg
      height="1em"
      viewBox="0 0 57.587 57.587"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path
        d="M41.446 32.535a16.647 16.647 0 01-16.283-20.174 16.655 16.655 0 1020.1 19.717 16.7 16.7 0 01-3.817.457z"
        fill={props.backColor}
      />
    </svg>
  );
}
// 7269af
const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
