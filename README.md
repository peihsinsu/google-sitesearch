Google SiteSearch
====

## Installation

```javascript
npm install google-sitesearch
```

## Use

Step 1: initialize use key, cx, site

```
var gs = require('google-sitesearch');
gs.init(key, cx, site);
```

Step2: search you question

```
gs.search('question', function(err,res,body){
  if(err) console.log(err);
  console.log(body);
});
```

## About CX, Key, Site

* Apply the key

Apply the access key from: https://code.google.com/apis/console/

* Apply the CX

You can apply a new CX from: https://www.google.com/cse/all, or finding the site search bar source code to get it. Some other reference: https://developers.google.com/custom-search/v1/using_rest


