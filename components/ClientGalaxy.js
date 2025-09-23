'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Galaxy = dynamic(() => import('./Galaxy'), {
  ssr: false,
  loading: () => null
});

const ClientGalaxy = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Galaxy {...props} />;
};

export default ClientGalaxy;
