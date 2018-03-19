A Project to make a Super Galactic Age Calculator

An application where you can calculate your age on different planets based on your Earth age, includes, Mercury, Venus, Mars and Jupiter. This project is served with Webpack, and has testing written in Jasmine and run by Karma to support JS ES6 features.

To Test Locally

git clone to your desktop, then in terminal $ cd super_galactic_age_calculator then $ npm install -y to install all required packages. To run tests type $ npm run test and to run the server and see the UI type $npm run start

Specifications:
Note to see specs visit project root directory /spec/age-spec.js runs logic at /src/age_logic.js
Take a person’s age in years and convert it into seconds.
Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

Technologies Used

Node, JS ES6, Jasmine, Karma, Webpack

Support and contact details

Dan Kiss email me as needed at flowfast47@gmail.com

Copyright (c) 2018 Dan Kiss
