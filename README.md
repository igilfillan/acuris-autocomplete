

## About


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

IMPORTANT Requirement:  **Node v6+**

### Installation instructions: 
* You’ll need to have **Node >= 6** on your machine. You can use nvm to easily switch Node versions between different projects.
* clone repo from: https://github.com/igilfillan/acuris-autocomplete.git
* go to the project root and run `npm install`
* to start the app run `npm start` 
* the app will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

From the root of the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

To run the tests, type 'npm test'. This launches the test runner in the interactive watch mode.


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
* The search input should be matched to the 'name' prop in company.json. Implied by AC 1
* Character and case of the search input should match with the start of the company name. This is implied by AC2 and the design. In a work environment I would query if case was relevant and if the input could match at any part of the company name, not just the start of it

## Notes
* "Clean, maintainable, code backed by tests" 
     * Tests can be found in the /test directory. Jest was used as a test runner as it came bundled with create-react-app
* "Pragmatism - i.e. no over-engineering" 
 As it was stipulated that it was my React capabilities that were being and not for example my CSS preprocessor knowledge or app building knowledge I made certain decisions:
    * App setup - I decided to use create-react-app as it came with webpack bundling and Jest testing framework.  
    * CSS - I would normally use SASS but for the purposes of this app I have used CSS
    * Unit tests - I decided to create a few tests for demonstrative purposes. For live code, my approach would be more exhaustive. 
    * No Redux as this would have been over-engineering 
    
 
 


