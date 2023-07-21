import React from 'react';
import Loader from './Loader';
export default function LoadingButton({ children, isLoading, ...props }) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef(null);
    console.log(ref)
  React.useEffect(
    () => {
      if (ref.current && ref.current.getBoundingClientRect().width) {
        setWidth(ref.current.getBoundingClientRect().width);
      }
      if (ref.current && ref.current.getBoundingClientRect().height) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    },
    [children]
  );

  return (
    <button
        className={props.classname}
      ref={ref}
      style={
        width && height
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
      {...props}
    >
      {isLoading ? <Loader color='black' w={100} h={15}/> : children}
    </button>
  );
}