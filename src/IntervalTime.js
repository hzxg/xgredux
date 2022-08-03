import './index.css';
import { useState, useEffect } from 'react';
function IntervalTime() {
  const [nowTime, setNowtime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setNowtime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <h1 className="IntervalTime">{nowTime}</h1>;
}
export default IntervalTime;
