# Budget Tracker 
    
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
    <img src="https://img.shields.io/badge/-morgan-orange"/>
    <img src="https://img.shields.io/badge/-compression-lightgreen"/>
    <img src="https://img.shields.io/badge/-mongoDBAtlas-pink"/>

</p>
   
  ## Description
   A mobile-first PWA to update an existing budget tracker application.The app has a server and uses MongoDB as its database.<br>
   It provides the following functionality:<br>
    * The ability to enter deposits offline.<br>
    * The ability to enter expenses offline.<br>
    * Offline entries will be added to the tracker when the application is brought back online.
 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [MockUp](#mockup)
  * [Testing](#testing)
  * [HerokuApp](#herokuapp)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install express mongoose morgan compression

  ##  Usage
  #### Start the app
      node server.js
  #### On Heroku 
    Visit the heroku app link provided below and wait for the application to start.  
  #### Download App
  Click on <img src="https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/download%20icon.png" alt="InstallApp" width="50" height ="50"/>
  in your browser's in the URL address bar.
  
  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
   ## Process
   Inorder to update an existing budget tracker application to allow for offline access and functionality so that the users will be able to add expenses and  deposits to their budget with or without a connection, The following process is followed : 
  * First an Indexed database(idb.js) file is created, to implement the offline functionality.
      * A db variable is created to hold db connection that will store the connected database object when the connection is complete.
      * A 'request' variable is acreated that acts as an eventlistener to the db.
      * An 'ObjectStore' is created to hold the data.
      * When db is successfully created with its object store,its ready to store data.
      * Whenver the user adds or remove funds when the network is OFFLINE, a temp connection to the db is opened and the corresponding  
        transaction is saved in the ObjectStore.
      * An eventlistener is added to window object  to check the network status changes. 
      * When the app is online, a function is called to send all the data stored in the ObjectStore to server using api fetch request.The deposits 
      or expenses added while they were offline are added to their transaction history and their totals are updated when they're brought back online. 
      * Upon successful, transmission the ObjectStore is cleared.
      
  *  Adding Service Workers(service-workers.js) to cache the neccesary files
      * Check if the navigator object(the object contains information about which browser a visitor is using), has service worker.
      * If a service worker exists, In index.html file regsiter the service worker . 
      * If a service worker  does not exist, throw an error. 
      * In service-workers.js, create an array of files to be cached. 
      * Create a global constant ,CACHE_NAME that keep track of which cache to use.
      * Install the service worker, that adds all the files from the array to cache, so that the application can use the cache.
      * Actitvate service worker, to keep the data in cache(CACHE_NAME) current removing older versions.
      * Add an event listener to tell the browser to check the cache when there's no network connection and retreive information from the cache.
      * The function checks if data is already in the cache, if so it returns the data else the resource to be retrieved from the online using fetch.
  
  * A Web Manifest for a mobile-based app
      * Create manifest.json file that will holdthe metadata such as a title, a description, and an icon that tells the user's device what it is installing and how         it should look on the home screen.
      * The metadata include : 
          * name : the name that will show up next to the app's icon on desktop devices. 
          * short_name :The name that will appear on a user's home screen when the application has been downloaded.
          * description :  a brief description about the app.
          * background_color :The background color of the application.
          * theme_color :sets the color of the tool bar. This color may also show up if the user is switching tasks, either on mobile or or a desktop device.
          * icons : The icon identifies the app and distinguishes it from other icons.An array of multiple siszed icons for varying screensizes.
          * start_url:URL that should be loaded when the user launches the web application.
          * display:When set to 'standalone', the application will look and feel like a standalone application. This can include the application having a different                     window, its own icon in the application launcher
          
   * Deploying the app on Heroku 
      * The steps are found below:
         * Create a mongoDb Atlas account.
         * Create Production Database in Atlas.
         * Add a Database and network access 
         * Copy the connection URL
         * Set Up the Environment Variable in Heroku.
         * Connect Production Database to App
    
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
  ![Image](https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/mockup.png)
   #### IndexedDB
  ![Image](https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/Indexed%20Db%20-%20netwwork%20offline.png)
   #### Manifest.json
  ![Image](https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/manifest.json.png)
   #### Service-worker 
  ![Image](https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/service%20workers.png)
   #### Files Cached 
  ![Image](https://github.com/Deeparkrish/budget-tracker/blob/main/assets/images/serviceworker-cache%20files%20.png)

  ## Testing
   App can be tested on your browser/ deployed heroku site
    browser : http://localhost:3001
  

  ## HerokuApp
  Heroku: https://deepa-budget-tracker.herokuapp.com/

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
  Credits : PWA Module 





