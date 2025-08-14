"use client";
import React from 'react';
import Link from 'next/link';

export default function ProcessImage() {
  return (
    <div className="process-image-container container mt-5 d-flex flex-column align-items-center">
      <h1>Process Image</h1>
      <div
        className="spinner-border text-primary"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="mt-3">
        <Link href="/calculate">
          <button className="btn btn-primary">Calculate Bill</button>
        </Link>
        <Link href="/camera">
          <button className="btn btn-secondary ms-2">Back to Camera</button>
        </Link>
      </div>
    </div>
  );
}