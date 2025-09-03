'use client';

import { useEffect } from 'react';

export default function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div role="status" className="toast">
      {message}
    </div>
  );
}
