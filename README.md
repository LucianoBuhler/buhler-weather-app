
# The Buhler Weather Application

This is a **Weather Application built with React** that fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface. The app allows users to search for a location and view current weather conditions, making it easy to stay updated on weather changes.

## Features

- **Real-time Weather Data**: Displays current weather data for the searched location.
- **User-friendly Interface**: A clean and responsive design for easy use on both desktop and mobile devices.
- **Detailed Information**: Shows key details like temperature, humidity, wind speed, and weather descriptions.
  
## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and optimized production builds.
- **OpenWeatherMap API**: Fetches real-time weather data.
- **CSS**: Styles for the application interface.

## Getting Started

### Prerequisites

- **Node.js** and **npm**: Ensure you have Node.js and npm installed.
- **OpenWeatherMap API Key**: Sign up and obtain your API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/LucianoBuhler/buhler-weather-app.git
   cd buhler-weather-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Add API Key**:

   Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```plaintext
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

### Running the Application

To start the development server with Vite, run:

```bash
npm run dev
```

This will open the application on `http://localhost:5173`.

## Project Structure

```
buhler-weather-app/
├── public/                   # Static assets served by Vite
├── src/
│   ├── assets/               # Static assets like images or icons
│   ├── Components/           # React components for various parts of the UI
│   │   ├── WeatherApp.jsx    # Main component displaying weather details for a location
│   │   ├── WeatherApp.css    # WeatherApp styles
│   ├── App.jsx               # Root component of the application
│   ├── main.jsx              # Entry point file where the app is rendered
│   └── index.css             # Main CSS file, imported by components as needed
├── .env                      # Environment variables (e.g., API key)
├── .gitignore                # Files and directories to ignore in Git
├── index.html                # The main HTML file served by Vite, linking to the JavaScript bundle.
├── vite.config.js            # Vite configuration for the project
├── package-lock.json         # Lock file for installed dependencies
├── package.json              # Project dependencies and scripts
└── README.md                 # Documentation for the project
```

## Usage

- **Search for a Location**: Enter the name of a city in the search bar to fetch and display its current weather.
- **View Weather Details**: The weather card will show temperature, humidity, wind speed, and a brief description of the weather.

## License

This project is licensed under the MIT License.
