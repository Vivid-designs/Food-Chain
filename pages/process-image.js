"use client";
import React from 'react';
import Link from 'next/link';

export default function ProcessImage () {
    return (
        <div className="process-image-container">
            <h1>Process Image</h1>
            <Link href="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    )
}