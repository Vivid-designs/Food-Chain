"use client";
import React from 'react';
import Link from 'next/link';

export default function Camera () {
    return ( 
        <div className="camera-container">
            <h1>Camera Screen</h1>
            <Link href="/process-image">
                <button className="btn btn-primary">Process Bill</button>
            </Link>
        </div>
    )
}