"use client";
import React from 'react';
import Link from 'next/link';

export default function Completion () {
    return (
        <div className="completion-container">
            <h1>Completion Screen</h1>
            <Link href="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    )
}