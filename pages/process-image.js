"use client";
import React from 'react';
import Link from 'next/link';

export default function ProcessImage () {
    return (
        <div className="process-image-container">
            <h1>Process Image</h1>
            <Link href="/calculate">
                <button className="btn btn-primary">Calculate Bill</button>
            </Link>
        </div>
    )
}