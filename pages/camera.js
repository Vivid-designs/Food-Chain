import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Camera() {
  const videoRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    }
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-3">
      <h1>Camera Screen</h1>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '600px', display: imageSrc ? 'none' : 'block' }}></video>
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ width: '100%', maxWidth: '600px' }} />}
      <div className="mt-3">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="form-control mb-2" />
        <Link href="/process-image">
          <button className="btn btn-secondary">Use Image</button>
        </Link>
      </div>
    </div>
  );
}