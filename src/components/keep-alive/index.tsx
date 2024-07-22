import React from 'react';
import { useLocation } from 'react-router';

type KeepAliveProps = {};

const KeepAlive: React.FC<React.PropsWithChildren<KeepAliveProps>> = (
  props
) => {
  const { children } = props;
  const location = useLocation();
  const cachePage = React.useRef(new Map<string, React.ReactNode>());

  if (!cachePage.current.has(location.pathname)) {
    cachePage.current.set(location.pathname, children);
  }

  const pages = [...cachePage.current].map(([pathname, children]) => {
    if (location.pathname === pathname) {
      return (
        <div className='h-full' key={pathname}>
          {children}
        </div>
      );
    } else {
      return (
        <div key={pathname} style={{ display: 'none' }}>
          {children}
        </div>
      );
    }
  });

  return <>{pages}</>;
};

export default KeepAlive;
