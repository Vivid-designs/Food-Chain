"use client";
import Link from 'next/link'

export default function Home() {
    return (
		<div className="centered-container">
			<h1 className="welcome-title">Hello and Welcome to Food Chain</h1>
			<p className="welcome-description">
				Because life is to short to be arguing over bills and food.
			</p>
			<Link href="/camera">
				<button className="btn btn-primary">Take A Picture</button>
			</Link>
            <p>Take a picture of the bill to get started</p>
		</div>
    )
}