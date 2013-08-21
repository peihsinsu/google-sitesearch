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

