# Budget Tracker Starter Code
## Description
A PWA app to update an existing budget tracker application to allow for offline access and functionality.The app has a server and uses MongoDB as its database.
This will be a mobile-first application and will be deployed to Heroku using MongoDB Atlas.

# tech-blog

  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/budget-tracker" />
    <img src="https://img.shields.io/github/issues/deeparkrish/budget-tracker" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/budget-tracker" >       
  </p>
  <p align="left"> 
     <img src="https://img.shields.io/github/languages/top/deeparkrish/budget-tracker"/>
    <img src="https://img.shields.io/badge/mongoose-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-express-red" >
    <img src="https://img.shields.io/badge/-dtoenv-lightgrey" />
    <img src="https://img.shields.io/badge/-morgan-orange"/>
    <img src="https://img.shields.io/badge/-compression-lightgreen"/>
    <img src="https://img.shields.io/badge/-mongodb-pink"/>

</p>

 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [ProjectDemo](#projectdemo)
  * [MockUp](#mockup)
  * [Testing](#testing)
  * [HerokuApp](#herokuapp)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install express mongoose morgan compression

  ##  Usage
  ### Deploying the app :   
    Create a mongoDb Atlas account
    Create Production Database in Atla
    Add a Database and network access 
    Copy the connection URL
    Set Up the Environment Variable in Heroku
    Connect Production Database to App

  ### Start the app
    node server.js

  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
   ## Process
 When an end-user visits a  CMS-style blog site, 
  
    
  ## Technologies 
  * MongoDB: A general purpose, document-based, distributed NoSQL database built for web application developers in the cloud era.Data stored in JSON format.
  * MongoDB Atlas:The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks.
  * IndexedDB :To add offline functionality.
  * Service Workers : PWAs can ensure applications work without an internet connection by using Service Workers.They cache and serve data from the browser cache.
  * Web Manifest file(manifest.json): To hold the app’s metadata, to let users’ devices know what they’re installing and how the app should look on 
    the home-screen.
  * Express :A back end web application framework for Node.js, used to create web app and api routes.
  * CSS for styling
 
 
  ##  Mockup
  ![Webpage](https://github.com/Deeparkrish/tech-blog/blob/master/src/img/hompage.png)
  
  ## Testing
   App can be tested on your browser/ deployed heroku site
    browser : http://localhost:3001
  

  ## HerokuApp
  Heroku: https://deepa-budget-tracker.herokuapp.com/

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
  Credits : PWA Module 





