# Weather Forecast Web App

This project is a web application built using Node.js and Express that integrates
a public Weather API to determine whether it will rain tomorrow for a user-selected city.
The application retrieves live data using Axios and presents it in a clean,
user-friendly interface inspired by the iPhone Weather app.

## Objectives
- Integrate a public API into a web application
- Use Express and Node.js for server-side development
- Implement client-server communication using Axios
- Retrieve, manipulate, and present API data effectively

## Technologies Used
- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript Templates)
- HTML & CSS

## API Used
- Open-Meteo Weather API
- Open-Meteo Geocoding API

## Features
- User can enter a city name
- Application checks rain probability for the next day
- Displays a clear weather message based on forecast
- Handles errors gracefully when city or API data is unavailable

## Project Setup

### Install Dependencies
```bash
npm install
