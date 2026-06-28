/**
 * datetime.js — v1.2.0
 * Description: Live clock using Intl.DateTimeFormat
 * Author: Stephan Pringle
 * Updated: 2026-06-27
 */

const clockElement = document.getElementById("clock");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});

function updateClock() {
    if (!clockElement) return;

    const now = new Date();

    clockElement.textContent =
        `${dateFormatter.format(now)}, at ${timeFormatter.format(now)}.`;
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", startClock);
