/** @jsx jsx */
import { keyframes, jsx } from "@emotion/core";
import { FaSpinner } from "react-icons/fa";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Spinner = props => {
  return (
    <FaSpinner
      aria-label="loading"
      css={{ animation: `${spin} 1s linear infinite` }}
      {...props}
    />
  );
};

export default Spinner;
