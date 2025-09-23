'use client';

import { useEffect, useState } from 'react';
import DotGrid from './DotGrid';

const ClientDotGrid = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <DotGrid {...props} />;
};

export default ClientDotGrid;
