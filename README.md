
# COVID-19 Data Visualization Project

This project was built as part of the TopicWorx Assessment. It is a Next.js application (using TypeScript) that visualizes COVID‑19 data with an interactive line chart. The chart displays both the total confirmed cases and daily confirmed cases over time.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies and Libraries](#technologies-and-libraries)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [How It Works](#how-it-works)
  - [Components](#components)
    - [Header](#header)
    - [CovidChart](#covidchart)
    - [Footer](#footer)
- [Development Approach and Steps](#development-approach-and-steps)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview

This web application is designed to programmatically visualize supplied COVID‑19 data using a line chart. It reads data from a JSON file, parses it, and displays both the total and daily confirmed cases over time. The application is built using Next.js (v13.4.4) with TypeScript, ensuring type safety and high code quality. The interactive chart is rendered using `react-chartjs-2` and `chart.js`.

## Features

- **Responsive Design:** Clean, modern UI that adjusts across devices.
- **Interactive Chart:** Visualizes total and daily confirmed COVID‑19 cases.
- **Modular Architecture:** Separated components for header, chart, and footer.
- **Type Safety:** Uses TypeScript with defined interfaces for data.
- **Encapsulated Styling:** All CSS modules are organized in a dedicated folder.

## Technologies and Libraries

- **Next.js 13.4.4**: Framework for building React applications.
- **TypeScript**: Enhances code reliability with static type-checking.
- **React**: Library for building interactive user interfaces.
- **react-chartjs-2 (v5.2.0)**: React wrapper for Chart.js.
- **Chart.js (v4.4.0)**: Library for creating dynamic charts.
- **CSS Modules**: Scoped CSS for each component.

## Project Structure

```
my-covid-visualisation/
├── src/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── CovidChart.tsx
│   ├── data/
│   │   └── covid.json
│   ├── styles/
│   │   ├── page.module.css
│   │   ├── Header.module.css
│   │   ├── Footer.module.css
│   │   └── CovidChart.module.css
│   └── types/
│       └── CovidData.ts
└── package.json
```

## Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Approach and Steps

1. **Project Initialization**
2. **Data Integration**
3. **Component Creation**
4. **Chart Implementation**
5. **Layout and Assembly**
6. **Testing and Refinement**

## Future Enhancements

- Data Filtering
- Additional Chart Types
- UI/UX Improvements

## License

This project is part of the TopicWorx Assessment and is intended for educational purposes only.
