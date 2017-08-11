This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## About

Acuris Coding Test: Search autocomplete

IMPORTANT: 
Requirement **Node v6+**

### Installation instructions: 
* You’ll need to have **Node >= 6** on your machine. You can use nvm to easily switch Node versions between different projects.
* clone repo from: https://github.com/igilfillan/acuris-autocomplete.git
* go to the project root and run `npm install`
* to start the app run `npm start` 
* The app will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

From the root of the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm Test`

Launches the test runner in the interactive watch mode.<br>


## Folder structure 

All the files I've created/modified are in the following locations:  

```
acuris-autocomplte/
  README.md
  public
    index.html
  src/
    components/
      DataTable.js
      SearchBox.js
    css/
      App.css
    images/
      magnify-glass.svg
    tests/
      App.test.js
      DataTable.test.js
      SearchBox.test.js
    App.js
    index.js
```


## Assumptions
AC1: implies that the search input should be matched to the 'name' prop in company.json
AC2: 'match the characters in the user input' . This in conjunction with the design which contained an initial cap in the search string, suggested that the input string should be matched in both character and case.

## Notes
* Clean, maintainable, code backed by tests (using a library of your choice)" - 
     * Test can be found in the /test directory. As this is a test, I have not been as exhaustive as I would be in a work situation. I have provided a range of test to show my approach. 
* Pragmatism - As you stipulated that it was my React capabilities that were being tested I made certain choices:
    * I decide to use create-react-app as it came with webpack bundling and Jest testing framework.  
    * I decided not to use a css-preprocessor
    * I decided to that creating a few tests for demonstrative purposes. For live code I'd normally create many more tests. 
 
 


