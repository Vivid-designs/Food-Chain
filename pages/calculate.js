"use client";
import React from 'react';
import Link from 'next/link';

export default function Calculate () {
    return (
        <div className="calculate-container">
            <h1>Calculate Screen</h1>
            <Link href="/completion">
                <button className="btn btn-primary">Finsih bill</button>
            </Link>
        </div>
    )
}