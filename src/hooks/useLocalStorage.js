import { useState, useEffect } from 'react';
const useLocalStorage = (key, defaultValue) => {
  const [state, setstate] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setstate];
};
export default useLocalStorage;
