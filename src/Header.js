import React from "react";
import Body from "./Body"

export default function Header() {
 
    return (
    <div className="Header">
        <header>Welcome to <span>Cleveland</span></header>
        <div className="tab-links">
            <ul>
                <li>Eat</li>
                <li>Explore</li>
                <li>Stay</li>
            </ul>
            <Body />
        </div>
    </div>
    ) 
}