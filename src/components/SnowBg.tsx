'use client';

import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

function useSnowflakeCount() {
  const getCount = () => {
    if (typeof window === 'undefined') return 50;
    const w = window.innerWidth;

    if (w >= 1024) return 150; // lg+
    if (w >= 768) return 100;  // md+
    return 50;                 // mobile
  };

  const [count, setCount] = useState<number>(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());
    onResize(); // set on mount
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return count;
}

export default function SnowBg() {
  const snowflakeCount = useSnowflakeCount();

  return (
    <Snowfall snowflakeCount={snowflakeCount} />
  );
}
