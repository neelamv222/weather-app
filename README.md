This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a weather app developed using react (few react hooks concepts) and redux, fetches data from the OpenWeatherMap at: https://openweathermap.org/.
Currently, it uses api call http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c92
0aa6a85ad57&cnt=40 to obtain weather data for specific location (Munich in this case). The URL provided above returns weather info for a total of 5 days
and each day contains a maximum of 8 weather segments (3 hours).
This app is repsonsive and supports desktop, tablet and mobile view.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br />


### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


### Live Preview Url:

App deployed to Firebase. 
Url: https://weather-app-4e678.web.app
Video: App video attached in the root directory (https://github.com/neelamv222/weather-app/blob/master/weather-app.mov).
Mobile View Screenshot: https://github.com/neelamv222/weather-app/blob/master/weather-app-mobile.jpg
