'use client';

import { DeviceViewer } from '../../lib/device-viewer/device-viewer.es.js';
import '../../lib/device-viewer/style.css';

export default function SandboxPage() {
  // Proteger: solo accesible en desarrollo
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <DeviceViewer 
        url="/"
        devices={['pixel7pro', 'iphone15', 'iphoneSE', 'ipadMini']}
        layout="grid"
      />
    </div>
  );
}
