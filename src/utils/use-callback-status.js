import { useRef, useLayoutEffect, useReducer } from "react";

const useIsMounted = () => {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return mounted;
};

const useCallbackStatus = () => {
  const isMounted = useIsMounted();
  const [{ status, error }, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    status: "rest",
    error: null,
  });

  const safeSetState = (...args) =>
    isMounted.current ? setState(...args) : null;

  const isPending = status === "pending";
  const isRejected = status === "rejected";

  const run = promise => {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useCallbackStatus().run must be a promise. Maybe a function that's passed isn't returning anything?`
      );
    }
    safeSetState({ status: "pending" });
    return promise.then(
      value => {
        safeSetState({ status: "rest" });
        return value;
      },
      err => {
        safeSetState({ status: "rejected", error: err });
        return Promise.reject(err);
      }
    );
  };

  return {
    isPending,
    isRejected,
    error,
    status,
    run,
  };
};

export default useCallbackStatus;
