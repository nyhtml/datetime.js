/**
 * datetime.js — v1.1.3
 * Description: Live clock using Intl.DateTimeFormat
 * Author: Stephan Pringle
 * Updated: 2026-06-27
 */

const clockElement = document.getElementById("clock");

const dateOptions = {
    timeZone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const timeOptions = {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

function getthedate() {
    if (!clockElement) return;

    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

    const now = new Date();
    const formattedDate = dateFormatter.format(now);
    const formattedTime = timeFormatter.format(now);

    clockElement.textContent = `${formattedDate}, at ${formattedTime}.`;
}

function goforit() {
    getthedate();
    setInterval(getthedate, 1000);
}

document.addEventListener("DOMContentLoaded", goforit);
