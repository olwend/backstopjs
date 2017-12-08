# backstopjs
Test tool for visual regression, to be installed to root of project you are testing. 

## Installation
See https://github.com/garris/BackstopJS

You will also need Casper and Phantom

 ```npm install -g casperjs```
 
 ```npm install -g phantom js```

 ```npm install -g chromy js```
The configuration is controlled by backstop.json.  
## Configuration

  "id": e.g. "backstop_default" _will be applied to bitmap_
  
  "viewports": _add multiple to run against devices_
  
  "onBeforeScript": _onBefore.js - use to set up cookies_
  
  "onReadyScript": _onReady.js -specify user actions_
  
  "scenarios"_set up tests_
  ```  
    {
      "label": "NHM Homepage",
      "onReadyScript": ,
      "onBeforeScript":,
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://staging.nhm.ac.uk",
      "referenceUrl": "http://www.nhm.ac.uk",
      "readyEvent": "" _delay screen capture until selector with id e.g. "readySelector": "#catOfTheDayResult"_
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],_during dev or for dynamic content_
      "removeSelectors": [],
      "hoverSelector": "",_can define action within this scenario or in OnReady.js type of file_
      "clickSelector": "",_can wait for selector to appear_
      "postInteractionWait": "",
      "selectors": ["viewport", "#visit"], _set item which is being reviewed_
      "selectors":_e.g.".aListOfStuff li"_
      "selectorExpansion": true _captures all <li> tags inside .aListOfStuff_
      "selectorExpansion": false _captures first ,li. tag only_
      "misMatchThreshold" : 0.1 _tolerance of difference_
      "requireSameDimensions": true _to mitigate variance in size set to false_
    }
```        
  "paths": _sets out file locations_
  
  "report": ["browser"],
  
  "engine": "chrome",
  
  "engineFlags": [],
  
  "asyncCaptureLimit": 5,
  
  "asyncCompareLimit": 50,
  
  "debug": false,
  
  "debugWindow": false
