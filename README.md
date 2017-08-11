

## About


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

IMPORTANT Requirement:  **Node v6+**

### Installation instructions: 
* You need to have **Node >= 6** installed on your machine. You can use nvm to easily switch Node versions between different projects
* Clone the repo from: https://github.com/igilfillan/acuris-autocomplete.git
* Go to the project root and run `npm install`
* To start the app run `npm start` 
* The app will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

From the root of the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

To start the test runner, type 'npm test'. After the test runner starts **press 'a'** to run all tests.


## Folder structure 

The files I've worked on are in the following locations:  

```
acuris-autocomplete/
  README.md
  public
    company.json
  src/
    components/
      DataTable.js
      SearchBox.js
    css/
      App.css
    images/
      magnifyGlass.svg
    tests/
      App.test.js
      DataTable.test.js
      SearchBox.test.js
    App.js
    index.js
```


## Assumptions
* The search input should be matched to only the 'name' prop in company.json. Implied by AC 1
* Character and case of the search input should match with the start of the company name. This is implied by AC2 and the design. In a work environment I would query if case was relevant and if the input could match at any part of the company name, not just the start of it

## Notes
* "Clean, maintainable, code backed by tests" 
     * Tests can be found in the /tests directory
* "Pragmatism - i.e. no over-engineering".  
 It was stipulated that my React capabilities were being tested with no mention of my CSS preprocessor or app building knowledge. I therefore made certain decisions:
    * App setup - I decided to use create-react-app as it comes bundled with webpack and Jest testing framework.  
    * CSS - I would normally use a CSS preprocessor such as SASS on a project but for the purposes of this app I have used CSS
    * Unit tests - I decided to create a few tests for demonstrative purposes. For live code, my approach would be more exhaustive. 
    * No Redux as this would have been over-engineering 
    
 
 


