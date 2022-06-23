# adres technical test

in this project i create a react app that fetch data from a mock api, then this data is paginated from frontend side,
this data is also filtred by multiple query params (i add those query to the api so there is no filters in the screen because its a bad practise doing it form frontend,please check network tab to see the result) 



## Available Scripts

In the project directory, you can run:
### `npm i`

to get all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm  run test`
use this command to test our unit test using react testing 
library (i try to cover a small part of the partials component)
those test are very helpful, it limit components bug, also it help QA team in scenario testing


### Project structure

.
└── adres technical test app/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── styles/
    │   │       └── main-design-system.css
    │   ├── components/
    │   │   └── partials/
    │   │       ├── base-pagination/
    │   │       │   ├── index.css
    │   │       │   ├── index.js
    │   │       │   ├── index.test.js
    │   │       │   └── page.js
    │   │       ├── data-table/
    │   │       │   ├── test/
    │   │       │   │   └── index.test.js
    │   │       │   ├── collapse.js
    │   │       │   ├── header.js
    │   │       │   ├── index.js
    │   │       │   └── row.js
    │   │       ├── inputs/
    │   │       │   ├── test/
    │   │       │   ├── datePicker.js
    │   │       │   ├── dropDown.js
    │   │       │   ├── input.js 
    │   │       │   └── input.css
    │   │       └── loader/
    │   │           ├── index.css
    │   │           ├── index.js
    │   │           └── loader.js
    │   ├── screens/
    │   │   └── reports/
    │   │       ├── filters/
    │   │       │   ├── index.css
    │   │       │   └── index.js
    │   │       ├── test/
    │   │       │   └── index.test.js
    │   │       ├── data.js
    │   │       └── index.js
    │   ├── utils/
    │   │   └── API.js
    │   ├── App.js
    │   ├── App.css
    │   ├── App.test
    │   ├── index.js
    │   ├── reportWebVitals.js
    │   └── setupTest.js
    ├── .gitignore
    ├── package.lock.json
    └── README.md

