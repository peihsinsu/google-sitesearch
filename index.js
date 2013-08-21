var request = require('request')
  , util = require('util')
  , SearchUrl = 'https://www.googleapis.com/customsearch/v1'
  , url = SearchUrl + '?key=%s&cx=%s&siteSearch=%s&alt=json&q=%s';

var cfg = {}

exports.init = function(key, cx, site) {
  cfg['cx'] = cx;
  cfg['key'] = key;
  cfg['site'] = site;
}

exports.search = function(q, callback){
  if(!cfg.cx || !cfg.key || !cfg.site){
    throw '[ERROR]Parameter error, please use search.init() to configure your cx, key, site informations.';
  }
    
  var URL = util.format(url, cfg.cx, cfg.key, cfg.site, q);
  console.log(URL);
  request.get(URL, callback);
}
