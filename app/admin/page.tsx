'use client';

import { useEffect } from 'react';

export default function AdminRedirect() {
  useEffect(() => {
    window.location.replace('/admin/index.html');
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to admin panel...</p>
    </div>
  );
}
