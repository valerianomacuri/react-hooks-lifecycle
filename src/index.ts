//* remover el strict mode para poder apreciar el correcto funcionamiento en React 18
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

//* componentWillMount
export const useBeforeMount = (handler: () => void) => {
  const willMount = useRef<boolean>(true);
  if (willMount.current) handler();
  willMount.current = false;
};

//* componentDidMount
export const useMounted = (effect: () => void) => {
  useEffect(() => {
    effect();
  }, []);
};

//* componentWillUnmount
export const useBeforeUnmount = (effect: () => void) => {
  useEffect(() => {
    return () => {
      effect();
    };
  }, []);
};

//* componentDidUpdate
export const useUpdated = (effect: () => void, deps: DependencyList) => {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    effect();
  }, deps);
};

//* componentWillUpdate
export const useBeforeUpdate = (effect: () => void, deps: DependencyList) => {
  const isLastRender = useRef(false);

  useEffect(() => {
    return () => {
      isLastRender.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (isLastRender.current) return;
      effect();
    };
  }, deps);
};
