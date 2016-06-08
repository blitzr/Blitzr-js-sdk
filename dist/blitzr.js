(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Blitzr=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _player=require("./player.js");var _player2=_interopRequireDefault(_player);var _xhr=require("./xhr.js");var _xhr2=_interopRequireDefault(_xhr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Blitzr=function(){function Blitzr(keyAPI){_classCallCheck(this,Blitzr);if(!keyAPI){throw new Error("API Key is required for use Blitzr")}var self=this;this._key=keyAPI;this.search={all:function all(data){return self._sendToAPI("/search/",data)},artist:function artist(data){return self._sendToAPI("/search/artist/",data)},label:function label(data){return self._sendToAPI("/search/label/",data)},release:function release(data){return self._sendToAPI("/search/release/",data)},track:function track(data){return self._sendToAPI("/search/track/",data)}};this.radio={artist:function artist(data){return self._sendToAPI("/radio/artist/",data)},artistSimilar:function artistSimilar(data){return self._sendToAPI("/radio/artist/similar/",data)},event:function event(data){return self._sendToAPI("/radio/event/",data)},label:function label(data){return self._sendToAPI("/radio/label/",data)},tag:function tag(data){return self._sendToAPI("/radio/tag/",data)}};this.track={get:function get(data){return self._sendToAPI("/track/",data)},sources:function sources(data){return self._sendToAPI("/track/sources/",data)}};this.artist={get:function get(data){return self._sendToAPI("/artist/",data)},aliases:function aliases(data){return self._sendToAPI("/artist/aliases/",data)},bands:function bands(data){return self._sendToAPI("/artist/bands/",data)},biography:function biography(data){return self._sendToAPI("/artist/biography/",data)},events:function events(data){return self._sendToAPI("/artist/events/",data)},harmonia:function harmonia(data){return self._sendToAPI("/artist/harmonia/",data)},members:function members(data){return self._sendToAPI("/artist/members/",data)},related:function related(data){return self._sendToAPI("/artist/related/",data)},releases:function releases(data){return self._sendToAPI("/artist/releases/",data)},similar:function similar(data){return self._sendToAPI("/artist/similar/",data)},summary:function summary(data){return self._sendToAPI("/artist/summary/",data)},websites:function websites(data){return self._sendToAPI("/artist/websites/",data)}};this.harmonia={artist:function artist(data){return self._sendToAPI("/harmonia/artist/",data)},label:function label(data){return self._sendToAPI("/harmonia/label/",data)},release:function release(data){return self._sendToAPI("/harmonia/release/",data)},searchBySource:function searchBySource(data){return self._sendToAPI("/harmonia/searchbysource/",data)}};this.label={get:function get(data){return self._sendToAPI("/label/",data)},artists:function artists(data){return self._sendToAPI("/label/artists/",data)},biography:function biography(data){return self._sendToAPI("/label/biography/",data)},harmonia:function harmonia(data){return self._sendToAPI("/label/harmonia/",data)},releases:function releases(data){return self._sendToAPI("/label/releases/",data)},similar:function similar(data){return self._sendToAPI("/label/similar/",data)},websites:function websites(data){return self._sendToAPI("/label/websites",data)}};this.release={get:function get(data){return self._sendToAPI("/release/",data)},sources:function sources(data){return self._sendToAPI("/release/sources/",data)}};this.shop={artist:function artist(product,data){return self._sendToAPI("/buy/artist/"+product+"/",data)},label:function label(product,data){return self._sendToAPI("/buy/label/"+product+"/",data)},release:function release(product,data){return self._sendToAPI("/buy/release/"+product+"/",data)},track:function track(data){return self._sendToAPI("/buy/track/",data)}};this.tag={get:function get(data){return self._sendToAPI("/tag/",data)},artists:function artists(data){return self._sendToAPI("/tag/artists/",data)},releases:function releases(data){return self._sendToAPI("/tag/releases/",data)}};this.event={get:function get(data){return self._sendToAPI("/event/",data)}};this.events={get:function get(data){return self._sendToAPI("/events/",data)}}}_createClass(Blitzr,[{key:"_isEmpty",value:function _isEmpty(object){switch(typeof object==="undefined"?"undefined":_typeof(object)){case"string":case"array":return!object.length;case"object":for(var key in object){if(object.hasOwnProperty(key)){return false}}return true;default:return false}}},{key:"_sendToAPI",value:function _sendToAPI(path,data){var location="https://api.blitzr.com";var query=this._toQueryString(data);var key="?key="+this._key+"&";var url=location+path+key+query;return new Promise(function(resolve,reject){var req=new _xhr2.default;req.open("GET",url,true);req.setRequestHeader("Content-Type","application/json");req.onreadystatechange=function(){if(req.readyState===4){if(req.status===200){resolve(JSON.parse(req.responseText))}else{reject(JSON.parse(req.responseText))}}};req.send(null)})}},{key:"_toQueryString",value:function _toQueryString(object,base){var _this=this;var queryString=[];Object.keys(object).forEach(function(key){var result=void 0;var value=object[key];if(base){key=base+"["+key+"]"}switch(typeof value==="undefined"?"undefined":_typeof(value)){case"object":result=_this._toQueryString(value,key);break;case"array":var qs={};value.forEach(function(val,i){qs[i]=val});result=_this._toQueryString(qs,key);break;default:result=key+"="+encodeURIComponent(value)}if(!_this._isEmpty(value)){queryString.push(result)}});return queryString.join("&")}},{key:"key",set:function set(keyAPI){this._key=keyAPI},get:function get(){return this._key}}],[{key:"player",value:function player(target){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return new _player2.default(target,options)}}]);return Blitzr}();exports.default=Blitzr},{"./player.js":4,"./xhr.js":5}],3:[function(require,module,exports){"use strict";module.exports=require("./blitzr.js").default},{"./blitzr.js":2}],4:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var defaultOptions={width:200,height:200,initVolume:100,onPlay:function onPlay(){},onPlaying:function onPlaying(){},onPause:function onPause(){},onLoad:function onLoad(){},onSeekTo:function onSeekTo(){},onSetVolume:function onSetVolume(){},onStop:function onStop(){},onEnd:function onEnd(){}};var Player=function(){function Player(target){var _this=this;var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];_classCallCheck(this,Player);this._el=document.getElementById(target);if(!this._el){throw new Error("target not found")}this._id=(new Date).getTime();this._src="";this._options=Object.assign({},defaultOptions,options);this._el.innerHTML='<iframe src="'+this._src+'" width="'+this._options.width+'" height="'+this._options.height+'" scrolling="no" frameborder="no"></iframe>';this._volume=this._options.initVolume;this._loaded=false;this._isPaused=true;this._iframe=this._el.firstElementChild;this._iframe.onload=function(){if(_this._iframe.getAttribute("src")){_this._postToIframe({command:"blitzr_connect",extra:_this._id});_this._loaded=true}else{_this._loaded=false}};window.addEventListener("message",function(e){try{var data=JSON.parse(e.data);if(data.identifier===_this._id){switch(data.status){case"blitzr_playing":if(_this._isPaused){_this._isPaused=false;_this._options.onPlay.call(_this,JSON.parse(e.data));_this._setVolume(_this._volume);_this._duration=data.duration}_this._currentTime=data.time;_this._options.onPlaying.call(_this,JSON.parse(e.data));break;case"blitzr_paused":_this._options.onPause.call(_this,JSON.parse(e.data));_this._isPaused=true;break;case"blitzr_ended":_this._isPaused=true;_this._options.onEnd.call(_this,JSON.parse(e.data));break}}}catch(err){return false}})}_createClass(Player,[{key:"_postToIframe",value:function _postToIframe(message){this._iframe.contentWindow.postMessage(JSON.stringify(message),"*")}},{key:"_setVolume",value:function _setVolume(volume){if(volume<0){volume=0}else if(volume>100){volume=100}this._postToIframe({command:"blitzr_volume",extra:volume});this._volume=volume}},{key:"load",value:function load(track){this._isPaused=true;this._src="http://player.blitzr.com/"+track+"?t="+this._id;this._iframe.setAttribute("src",this._src);this._options.onLoad.call(this)}},{key:"pause",value:function pause(){this._postToIframe({command:"blitzr_pause"})}},{key:"play",value:function play(){this._postToIframe({command:"blitzr_play"})}},{key:"seekTo",value:function seekTo(time){if(time<0){time=0}else if(time>this._duration){time=this._duration}this._postToIframe({command:"blitzr_seek",extra:time});this._options.onSeekTo.call(this,time)}},{key:"stop",value:function stop(){this._currentTime=0;this._duration=0;this._src="";this._iframe.setAttribute("src","");this._options.onStop.call(this)}},{key:"volume",set:function set(volume){this._setVolume(volume);this._options.onSetVolume.call(this,volume)},get:function get(){return this._volume}},{key:"currentTime",get:function get(){return this._currentTime||0}},{key:"duration",get:function get(){return this._duration||0}}]);return Player}();exports.default=Player},{}],5:[function(require,module,exports){"use strict";module.exports=typeof window!=="undefined"&&window.XMLHttpRequest||require("xmlhttprequest").XMLHttpRequest},{xmlhttprequest:1}]},{},[3])(3)});