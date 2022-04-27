/*!
   JW Player version 8.25.0
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.25.0/notice.txt
*/
"use strict";(self.webpackChunkjwplayer=self.webpackChunkjwplayer||[]).push([[977],{3328:function(e,t,i){i.d(t,{Z:function(){return S}});var a=i(6103),s=i(8377),r={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function n(e,t){for(var i,a,s,r=e.length,n="",d=t||0;d<r;)if(0!==(i=e[d++])&&3!==i)switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(i);break;case 12:case 13:a=e[d++],n+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=e[d++],s=e[d++],n+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&s)<<0)}return n}function d(e){var t=function(e){for(var t="0x",i=0;i<e.length;i++)e[i]<16&&(t+="0"),t+=e[i].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function o(e){return void 0===e&&(e=[]),e.reduce((function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var i=new Uint8Array(t.data),a=i.length;t={value:{key:"",data:""}};for(var s=10;s<14&&s<i.length&&0!==i[s];)t.value.key+=String.fromCharCode(i[s]),s++;var o=19,c=i[o];3!==c&&0!==c||(c=i[++o],a--);var u=0;if(1!==c&&2!==c)for(var h=o+1;h<a;h++)if(0===i[h]){u=h-o;break}if(u>0){var l=n(i.subarray(o,o+=u),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===l){var m=1&d(i.subarray(o,o+=4)),v=d(i.subarray(o,o+=4))+(m?4294967296:0);t.value.data=v}else t.value.data=n(i,o+1);t.value.info=l}else t.value.info=l,t.value.data=n(i,o+1)}else{var f=i[o];t.value.data=1===f||2===f?function(e,t){for(var i=e.length-1,a="",s=t||0;s<i;)254===e[s]&&255===e[s+1]||(a+=String.fromCharCode((e[s]<<8)+e[s+1])),s+=2;return a}(i,o+1):n(i,o+1)}}if(Object.prototype.hasOwnProperty.call(r,t.value.key)&&(e[r[t.value.key]]=t.value.data),t.value.info){var T=e[t.value.key];T!==Object(T)&&(T={},e[t.value.key]=T),T[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e}),{})}var c=i(8348),u=i(1643),h=i(6042);function l(){var e=this.video.textTracks,t=(0,h.hX)(e,(function(e){return(e.inuse||!e._id)&&k(e.kind)}));if(this._textTracks&&!m.call(this,t)){for(var i=-1,a=0;a<this._textTracks.length;a++)if("showing"===this._textTracks[a].mode){i=a;break}i!==this._currentTextTrackIndex&&this.setSubtitlesTrack(i+1)}else this.setTextTracks(e)}function m(e){var t=this._textTracks,i=this._tracksById;if(e.length>t.length)return!0;for(var a=0;a<e.length;a++){var s=e[a];if(!s._id||!i[s._id])return!0}return!1}function v(e){var t=e.track;t&&t._id||this.setTextTracks(this.video.textTracks)}function f(e){var t=e.target,i=t.activeCues,a=t.cues,s=t._id,r=this._cues,n=this._activeCues;if(a&&a.length){var d=r[s];r[s]=Array.prototype.slice.call(a),this.parseNativeID3Cues(a,d)}else delete r[s];if(i&&i.length){var o=n[s],c=n[s]=Array.prototype.slice.call(i);this.triggerActiveCues(c,o)}else delete n[s]}function T(e,t,i){if(c.Browser.ie){var a=i;(e||"metadata"===t.kind)&&(a=new window.TextTrackCue(i.startTime,i.endTime,i.text),i.value&&(a.value=i.value)),function(e,t){var i=[],a=e.mode;e.mode="hidden";var s=e.cues;if(s)for(var r=s.length-1;r>=0&&s[r].startTime>t.startTime;r--)i.unshift(s[r]),e.removeCue(s[r]);try{e.addCue(t),i.forEach((function(t){return e.addCue(t)}))}catch(e){console.error(e)}e.mode=a}(t,a)}else try{t.addCue(i)}catch(e){console.error(e)}}function g(e,t,i){t&&t.length&&(0,h.S6)(t,(function(t){var a=t._id||"";if(i&&(t._id=void 0),!c.Browser.ie&&!c.Browser.safari||!e||!/^(native|subtitle|cc)/.test(a)){if(c.Browser.ie&&"disabled"===t.mode||(t.mode="disabled",t.mode="hidden"),t.cues)for(var s=t.cues.length;s--;)t.removeCue(t.cues[s]);t.embedded||(t.mode="disabled"),t.inuse=!1}}))}function k(e){return"captions"===e||"subtitles"===e}function p(e){return/^native(?:captions|subtitles)/.test(e)}function y(e){var t=o(e);return{metadataType:"id3",metadataTime:e[0].startTime,metadata:t}}function C(e,t){return e.startTime===t.startTime&&e.endTime===t.endTime&&e.text===t.text&&e.data===t.data&&JSON.stringify(e.value)===JSON.stringify(t.value)}var S={_itemTracks:null,_textTracks:null,_currentTextTrackIndex:-1,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_unknownCount:0,_activeCues:null,_cues:null,textTrackChangeHandler:null,addTrackHandler:null,cueChangeHandler:null,renderNatively:!1,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._cues={},this._activeCues={},this._unknownCount=0},addTracksListener:function(e,t,i){e&&(this.removeTracksListener(e,t,i),this.instreamMode||(e.addEventListener?e.addEventListener(t,i):e["on"+t]=i))},removeTracksListener:function(e,t,i){e&&(e.removeEventListener&&i?e.removeEventListener(t,i):e["on"+t]=null)},clearTracks:function(){var e=this;(0,a.V)(this._itemTracks);var t=this._tracksById;if(t&&Object.keys(t).forEach((function(i){if(0===i.indexOf("nativemetadata")){var a=t[i];e.cueChangeHandler&&a.removeEventListener("cuechange",e.cueChangeHandler),g(e.renderNatively,[a],!0)}})),this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCues={},this._cues={},this.renderNatively){var i=this.video.textTracks;this.textTrackChangeHandler&&this.removeTracksListener(i,"change",this.textTrackChangeHandler),g(this.renderNatively,i,!0)}},clearMetaCues:function(){var e=this,t=this._tracksById,i=this._cachedVTTCues;t&&i&&Object.keys(t).forEach((function(a){if(0===a.indexOf("nativemetadata")){var s=t[a];g(e.renderNatively,[s],!1),s.mode="hidden",s.inuse=!0,s._id&&(i[s._id]={})}}))},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){var e=this.getCurrentTextTrack();if(e){e.mode="disabled";var t=e._id;(t&&p(t)||this.renderNatively&&c.OS.iOS)&&(e.mode="hidden")}},enableTextTrack:function(){var e=this.getCurrentTextTrack();e&&(e.mode="showing")},getCurrentTextTrack:function(){if(this._textTracks)return this._textTracks[this._currentTextTrackIndex]},getSubtitlesTrack:function(){return this._currentTextTrackIndex},addTextTracks:function(e){var t=this,i=[];return e?(this._textTracks||this._initTextTracks(),e.forEach((function(e){if(!(e.includedInManifest||e.kind&&!k(e.kind))){var s=t._createTrack(e);t._addTrackToList(s),i.push(s),e.file&&(e.data=[],(0,a.x)(e,(function(e){s.sideloaded=!0,t.addVTTCuesToTrack(s,e)}),(function(e){t.trigger(u.cM,e)})))}})),this._textTracks&&this._textTracks.length&&this.trigger(u.jt,{tracks:this._textTracks}),i):i},setTextTracks:function(e){var t=this;if(this._currentTextTrackIndex=-1,e){if(this._textTracks){var i=this._tracksById;this._activeCues={},this._cues={},this._unknownCount=0,this._textTracks=this._textTracks.filter((function(e){var a=e._id;return t.renderNatively&&a&&p(a)?(delete i[a],!1):(e.name&&0===e.name.indexOf("Unknown")&&t._unknownCount++,0===a.indexOf("nativemetadata")&&"com.apple.streaming"===e.inBandMetadataTrackDispatchType&&delete i[a],!0)}),this)}else this._initTextTracks();if(e.length)for(var a=0,r=e.length,n=this._tracksById,d=this._cuesByTrackId;a<r;a++){var o=e[a],c=o._id||"";if(!c){if(!1===o.inuse&&k(o.kind)&&this.renderNatively){o._id="native"+o.kind+a;continue}if(k(o.kind)||"metadata"===o.kind){if(c=o._id="native"+o.kind+a,!o.label&&"captions"===o.kind){var h=(0,s._)(o,this._unknownCount);o.name=h.label,this._unknownCount=h.unknownCount}}else c=o._id=(0,s.M)(o,this._textTracks?this._textTracks.length:0);if(n[c])continue;o.inuse=!0}if(o.inuse&&!n[c])if("metadata"===o.kind){o.mode="hidden";var l=this.cueChangeHandler=this.cueChangeHandler||f.bind(this);o.removeEventListener("cuechange",l),o.addEventListener("cuechange",l),n[c]=o}else if(k(o.kind)){var m=o.mode,v=void 0;if(o.mode="hidden",(!o.cues||!o.cues.length)&&o.embedded)continue;if(("disabled"!==m||p(c))&&(o.mode=m),d[c]&&!d[c].loaded){for(var g=d[c].cues;v=g.shift();)T(this.renderNatively,o,v);o.mode=m,d[c].loaded=!0}this._addTrackToList(o)}}this.renderNatively&&this.addTrackListeners(e),this._textTracks&&this._textTracks.length&&this.trigger(u.jt,{tracks:this._textTracks})}},addTrackListeners:function(e){var t=this.textTrackChangeHandler=this.textTrackChangeHandler||l.bind(this);this.removeTracksListener(e,"change",t),this.addTracksListener(e,"change",t),(c.Browser.edge&&c.Browser.ie||c.Browser.firefox)&&(t=this.addTrackHandler=this.addTrackHandler||v.bind(this),this.removeTracksListener(e,"addtrack",t),this.addTracksListener(e,"addtrack",t))},setupSideloadedTracks:function(e){if(this.renderNatively){var t=(e=e||null)===this._itemTracks;t||(0,a.V)(this._itemTracks),this._itemTracks=e,e&&(t||(this.disableTextTrack(),this._clearSideloadedTextTracks(),this.addTextTracks(e)))}},setSubtitlesTrack:function(e){if(this.renderNatively){if(this._textTracks&&(0===e&&this._textTracks.forEach((function(e){e.mode=e.embedded?"hidden":"disabled"})),this._currentTextTrackIndex!==e-1)){this.disableTextTrack(),this._currentTextTrackIndex=e-1;var t=this.getCurrentTextTrack();t&&(t.mode="showing"),this.trigger(u.UF,{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})}}else this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1)},createCue:function(e,t,i){return new(window.VTTCue||window.TextTrackCue)(e,Math.max(t||0,e+.25),i)},addVTTCue:function(e,t){this._tracksById||this._initTextTracks();var i=e.track?e.track:"native"+e.type,a=this._tracksById[i],s="captions"===e.type?"Unknown CC":"ID3 Metadata",r=e.cue;if(!a){var n={kind:e.type,_id:i,label:s,default:!1};this.renderNatively||"metadata"===n.kind?((a=this._createTrack(n)).embedded=!0,this.setTextTracks(this.video.textTracks)):a=this.addTextTracks([n])[0]}if(this._cacheVTTCue(a,r,t)){var d=this.renderNatively||"metadata"===a.kind;return d?T(d,a,r):a.data.push(r),r}return null},addVTTCuesToTrack:function(e,t){if(this.renderNatively){var i,a=e._id,s=this._tracksById,r=this._cuesByTrackId,n=s[a];if(!n)return r||(r=this._cuesByTrackId={}),void(r[a]={cues:t,loaded:!1});if(!r[a]||!r[a].loaded)for(r[a]={cues:t,loaded:!0};i=t.shift();)T(this.renderNatively,n,i)}},parseNativeID3Cues:function(e,t){var i=e[e.length-1];if(!t||t.length!==e.length||!i._parsed&&!C(t[t.length-1],i)){for(var a=[],s=[],r=-1,n=-1,d=-1,o=0;o<e.length;o++){var c=e[o];if(!c._extended&&(c.data||c.value)){if(c.startTime!==n||null===c.endTime){d=n,n=c.startTime;var h=a[r];if(a[++r]=[],s[r]=[],h&&n-d>0)for(var l=0;l<h.length;l++){var m=h[l];m.endTime=n,m._extended=!0}}a[r].push(c),c._parsed||(s[r].push(c),c.endTime-n<.25&&(c.endTime=n+.25),c._parsed=!0)}}for(var v=0;v<s.length;v++)if(s[v].length){var f=y(s[v]);this.trigger(u.O1,f)}}},triggerActiveCues:function(e,t){var i=this,a=e.filter((function(e){if(t&&t.some((function(t){return C(e,t)})))return!1;if(e.data)return!0;var a=e.text?function(e){var t;try{t=JSON.parse(e.text)}catch(e){return null}var i={metadataType:t.metadataType,metadataTime:e.startTime,metadata:t};t.programDateTime&&(i.programDateTime=t.programDateTime);return i}(e):null;if(a)"emsg"===a.metadataType&&(a.metadata=a.metadata||{},a.metadata.messageData=e.value),i.trigger(u.rx,a);else if(e.value)return!0;return!1}));if(a.length){var s=y(a);this.trigger(u.rx,s)}},ensureMetaTracksActive:function(){for(var e=this.video.textTracks,t=e.length,i=0;i<t;i++){var a=e[i];"metadata"===a.kind&&"disabled"===a.mode&&(a.mode="hidden")}},_cacheVTTCue:function(e,t,i){var a=e.kind,s=e._id,r=this._cachedVTTCues;r[s]||(r[s]={});var n,d=r[s];switch(a){case"captions":case"subtitles":n=i||Math.floor(20*t.startTime);var o="_"+(t.line||"auto"),c=Math.floor(20*t.endTime),u=d[n+o]||d[n+1+o]||d[n-1+o];return!(u&&Math.abs(u-c)<=1)&&(d[n+o]=c,!0);case"metadata":var h=t.data?new Uint8Array(t.data).join(""):t.text;return!d[n=i||t.startTime+h]&&(d[n]=t.endTime,!0);default:return!1}},_addTrackToList:function(e){this._textTracks.push(e),this._tracksById[e._id]=e},_createTrack:function(e){var t,i=(0,s._)(e,this._unknownCount),a=i.label;if(this._unknownCount=i.unknownCount,this.renderNatively||"metadata"===e.kind){var r=this.video.textTracks;(t=(0,h._e)(r,{label:a}))||(t=this.video.addTextTrack(e.kind,a,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=(0,s.M)(e,this._textTracks?this._textTracks.length:0)),t},_clearSideloadedTextTracks:function(){if(this._textTracks){var e=this._textTracks.filter((function(e){return e.embedded||"subs"===e.groupid}));this._initTextTracks();var t=this._tracksById;e.forEach((function(e){t[e._id]=e})),this._textTracks=e}}}},5016:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var a=i(1643),s=i(6042),r=i(328),n=i(4446),d=function(){function e(e,t){this.chrome=t?t.chrome:window.chrome,this.cast=t?t.chrome.cast:this.chrome.cast,this.Media=t?t.chrome.cast.media:this.cast.media,this.framework=t?t.cast.framework:window.cast.framework,this.context=t?t.cast.framework.context:this.framework.CastContext.getInstance(),this.castSession=t?t.cast.framework.castSession:null,this.CAST_STATE_CHANGED=this.framework.CastContextEventType.CAST_STATE_CHANGED||null,this.appId=e||this.Media.DEFAULT_MEDIA_RECEIVER_APP_ID,this.updateCastState=this.updateCastState.bind(this),this.queueLoaded=this.queueLoaded.bind(this),this.mediaUpdate=this.mediaUpdate.bind(this)}var t=e.prototype;return t.init=function(){(0,s.l7)(this,r.ZP),this.context.removeEventListener(this.CAST_STATE_CHANGED,this.updateCastState),this.context.addEventListener(this.CAST_STATE_CHANGED,this.updateCastState),this.context.setOptions({receiverApplicationId:this.appId,autoJoinPolicy:this.cast.AutoJoinPolicy.ORIGIN_SCOPED})},t.setPlaylist=function(e){var t=e.get("playlist"),i=e.get("item"),s=e.mediaModel.get("currentTime"),r=e.get("repeat"),d=e.get("captions"),o=this.castSession?this.castSession.getSessionObj():null;if("complete"===e.get("state")&&(i=0,s=0),1!==t.length||e.get("related")){var c=[],u=1,h=0;1===t.length&&e.get("related")&&e.get("recItems")&&e.get("recItems").length&&t.push.apply(t,e.get("recItems"));for(var l=i;l<t.length;l++){var m=t[l],v=this.getMediaInfo(m,l,d),f=void 0;if(v){f=new this.Media.QueueItem(v),v.metadata.index===i&&(f.startTime=s,h=c.length);var T=JSON.stringify(f).length+1;if(!(u+T<32e3))break;c.push(f),u+=T}}if(c.length){var g=new this.Media.QueueLoadRequest(c);g.startIndex=h,r&&(g.repeatMode=this.Media.RepeatMode.ALL),o.queueLoad(g,this.queueLoaded,this.queueErrored)}else this.trigger(a.cM,new n.rG(null,35e4,{info:"media not supported by Chromecast"}))}else{var k=this.getMediaInfo(t[i],i,d),p=new this.Media.LoadRequest(k);p.autoplay=!0,p.currentTime=s,o.loadMedia(p,this.loaded,this.error)}},t.queueLoaded=function(e){this.loaded(e)},t.queueErrored=function(e){this.error(e)},t.getPlayerId=function(){var e=this.getMedia();return e&&e.media?e.media.metadata.playerId:this.castSession?this.castSession.getSessionObj().playerId:null},t.setPlayerId=function(e){this.castSession&&(this.castSession.getSessionObj().playerId=e)},t.loaded=function(e){this.trigger("mediaUpdate",{field:"volume",value:{volume:this.castSession.getVolume(),isMute:this.castSession.isMute()}}),this.mediaAdded(e),this.play()},t.addListeners=function(){var e=this;if(!this.castSession)return null;var t=this.castSession.getSessionObj();t.removeUpdateListener(this.updateCastState),t.addUpdateListener(this.updateCastState),t.removeMediaListener(this.mediaAdded),t.addMediaListener(this.mediaAdded),this.castSession.addEventListener(this.framework.SessionEventType.VOLUME_CHANGED,(function(t){e.trigger("mediaUpdate",{field:"volume",value:t})}))},t.reset=function(){this.removeListeners(),this.context&&this.context.removeEventListener(this.CAST_STATE_CHANGED,this.updateCastState)},t.removeListeners=function(){var e=this;if(this.castSession){var t=this.castSession.getSessionObj();t.removeUpdateListener(this.updateCastState),t.media.forEach((function(t){t.removeUpdateListener(e.mediaUpdate)})),this.castSession.removeEventListener(this.framework.SessionEventType.VOLUME_CHANGED)}},t.getMedia=function(){if(this.castSession){var e=this.castSession.getSessionObj().media;if(e&&e.length)return e[0]}return null},t.error=function(e){this.trigger(a.cM,new n.rG(null,35e4,{errorCode:e})),this.disconnect()},t.item=function(e){var t=this.getMedia();if(t){var i=this.getMediaInfo(e),a=(0,s.sE)(t.items,(function(e){return e.media.contentId===i.contentId&&e.media.index===i.index}));a?t.queueJumpToItem(a.itemId):this.trigger("setPlaylist")}else this.trigger("setPlaylist")},t.play=function(){var e=this.getMedia();e&&e.play()},t.pause=function(){var e=this.getMedia();e&&e.pause()},t.next=function(){var e=this.getMedia();e&&e.queueNext()},t.disconnect=function(){this.castSession&&this.castSession.endSession(!0)},t.seek=function(e,t){var i=this.getMedia();if(i){var a=new this.Media.SeekRequest;a.currentTime=e,a.resumeState=this.Media.ResumeState.PLAYBACK_START,i.seek(a,t)}},t.mute=function(e){this.castSession&&this.castSession.setMute(e)},t.volume=function(e){this.castSession&&!this.castSession.isMute()&&this.castSession.setVolume(e/100)},t.editTracksInfo=function(e,t){var i=this.getMedia();if(i){var a=new this.Media.EditTracksInfoRequest(e,t);i.editTracksInfo(a)}},t.extractEmbeddedCaptions=function(){var e=this.getMedia();if(e&&e.media.tracks){var t=/\.dfxp/,i=e.media.tracks.filter((function(e){return"TEXT"===e.type&&"side-loaded captions"!==e.customData&&!t.test(e.trackContentId)})).map((function(e,t){return e.mapId=t,e.kind="subtitles",e.cues=[],e}));i.length&&this.trigger("mediaUpdate",{field:"captions",value:{tracks:i}})}},t.getMediaInfo=function(e,t,i){var a=e.sources;e.allSources&&(a=e.allSources.slice(0).sort((function(e,t){return!e.default&&t.default?1:0})));var r=(0,s.sE)(a,(function(e){var t=!(0,s.dp)(e.mediaTypes)||!(0,s.r3)(e.mediaTypes,'video/webm; codecs="vp9"'),i=!(0,s.dp)(e.drm)||(0,s.Yj)(e.drm,(function(e,t){return"fairplay"!==t}));return t&&i}));if(r){var n,d,o=this.getMimeType(r.type),c=this.getAbsolutePathWithProtocol(r.file),u=e.image?this.getAbsolutePathWithProtocol(e.image):null,h=r.drm,l=e.duration?e.duration:null,m=new this.Media.MediaInfo(c,o);return m.streamType=!l||l<0||l===1/0?"LIVE":"BUFFERED",m.metadata=new this.Media.GenericMediaMetadata,m.metadata.title=e.title,m.metadata.subtitle=e.description,m.metadata.index=t||0,m.metadata.playerId=this.getPlayerId(),e.tracks&&e.tracks.length&&(m.tracks=(n=e.tracks,d=this.Media,n.filter((function(e){return e.kind&&Boolean(d.TextTrackType[e.kind.toUpperCase()])})).map((function(e,t){var i=t+1,a=new d.Track(i,d.TrackType.TEXT);a.trackContentId=e.file,a.trackContentType="text/vtt",a.name=e.label||i;var s=a.subtype=d.TextTrackType[e.kind.toUpperCase()];return s!==d.TextTrackType.CAPTIONS&&s!==d.TextTrackType.SUBTITLES&&s!==d.TextTrackType.DESCRIPTION||(a.customData="side-loaded captions",a.language="en-US"),a})))),i&&(m.textTrackStyle=this.obtainTrackStyles(i)),u&&(m.metadata.images=[{url:u}]),h&&(m.customData={drm:h}),m}},t.obtainTrackStyles=function(e){var t=function(e){return Math.round(e/100*255).toString(16)},i=new this.Media.TextTrackStyle,a=function(e,t){return e&&e+t||void 0};return i.foregroundColor=a(e.color,t(e.fontOpacity)),i.backgroundColor=a(e.backgroundColor,t(e.backgroundOpacity)),i.windowColor=a(e.windowColor,t(e.windowOpacity)),i.fontFamily=e.fontFamily,i.fontStyle=this.Media.TextTrackFontStyle.NORMAL,i.fontScale=e.fontSize/14,i.edgeType=function(e,t){var i=t.TextTrackEdgeType;switch(e){case"dropShadow":return i.DROP_SHADOW;case"raised":return i.RAISED;case"depressed":return i.DEPRESSED;case"uniform":return i.OUTLINE;default:return i.NONE}}(e.edgeStyle,this.Media),i.windowType=this.Media.TextTrackWindowType.NORMAL,i},t.getAbsolutePathWithProtocol=function(e){var t=document.createElement("a");return t.href=e,t.href},t.getMimeType=function(e){switch(e){case"mp4":case"webm":return"video/"+e;case"mpd":case"dash":return"application/dash+xml";case"m3u8":case"hls":return"application/x-mpegURL";case"aac":return"audio/x-aac";case"mp3":return"audio/mpeg";default:return e}},t.updateCastState=function(){var e=this.context.getCastState()!==this.framework.CastState.NO_DEVICES_AVAILABLE,t="";this.castSession=this.context.getCurrentSession(),this.castSession&&(t=this.castSession.getCastDevice().friendlyName||t),this.trigger("castState",{available:e,active:Boolean(this.castSession),deviceName:t})},t.mediaUpdate=function(){var e=this.getMedia();e&&this.trigger("mediaUpdate",{field:"media",value:e})},t.mediaAdded=function(e){e.removeUpdateListener(this.mediaUpdate),e.addUpdateListener(this.mediaUpdate)},e}(),o=i(2799),c=i(686),u=i(6528),h=i(3328),l=function(){};function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}(0,s.l7)(l.prototype,u.Z,r.ZP,h.Z,{getName:function(){return{name:"chromecast"}},getQualityLevels:(0,s.a9)(["Auto"])});var v,f=function(e){var t,i;function r(t,i){var a;return(a=e.call(this)||this).playerId=t,a.playerConfig=i,a.minDvrWindow=i.minDvrWindow,a}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,m(t,i);var d=r.prototype;return d.castEventHandlers=function(e){var t=this,i={media:function(e){var s=t.getRemote("items"),r="IDLE"===e.playerState&&"FINISHED"===e.idleReason,d="IDLE"===e.playerState&&"ERROR"===e.idleReason,o=r&&!s;i.playerState(o?"complete":e.playerState),i.currentTime(),clearInterval(t.timeInterval),"PLAYING"===e.playerState?t.timeInterval=setInterval(i.currentTime,100):o?t.setState("complete"):d&&(t.setState("error"),t.trigger(a.cM,new n.rG(null,35e4,e)),s||t.castService.disconnect())},volume:function(e){t.trigger("volume",{volume:Math.round(100*e.volume)}),t.trigger("mute",{mute:e.isMute})},captions:function(e){t.clearTracks(),t.setTextTracks(e.tracks),t.trigger("subtitlesTracks",{tracks:e.tracks})},playerState:function(e){var i=[a.Kb,a.bc,a.r0,a._5,a.nQ,a.ik,a.xQ,a.Vy];if(e&&-1!==i.indexOf(e.toLowerCase())){var r=e.toLowerCase();if(r===a.bc||r===a.Kb){var n=t.getRemote("currentTime");(0,s.hj)(n)&&t.trigger(a.uT,{bufferPercent:0,position:t.getPosition(),duration:t.getDuration(),currentTime:n,seekRange:t.getSeekRange()})}t.setState(r)}},currentTime:this.triggerTime.bind(this),duration:this.triggerTime.bind(this),isPaused:function(e){e?t.setState(a._5):t.setState(a.r0)},supports:function(){return!0}};return i[e]?i[e]:null},d.destroy=function(){clearInterval(this.timeInterval)},d.setService=function(e){this.castService=e,this.updateScreen()},d.setup=function(e){this.setState(a.Kb),this.sendCommand("setup",e)},d.init=function(e){this.currentItem!==e&&(this.currentItem=e,this.sendCommand("item",e))},d.load=function(e){this.init(e),this.play()},d.play=function(){this.sendCommand("play")},d.pause=function(){this.sendCommand("pause")},d.seek=function(e){var t=this,i=this.getRemote("currentTime");(this.trigger(a.NZ,{position:this.getPosition(),offset:e,duration:this.getDuration(),currentTime:i,seekRange:this.getSeekRange(),metadata:{currentTime:i}}),e<0)&&(e+=this.getSeekRange().end);this.sendCommand("seek",e,(function(){t.trigger(a.aQ)}))},d.next=function(e){this.sendCommand("next",e)},d.volume=function(e){this.sendCommand("volume",e)},d.mute=function(e){this.sendCommand("mute",e)},d.setSubtitlesTrack=function(e){var t=e>0?[e+this.minimumEmbeddedTrackId()]:[];this.castService.editTracksInfo(t)},d.minimumEmbeddedTrackId=function(){var e=window.chrome.cast.media.TextTrackType;e.CAPTION="CAPTION",e.SUBTITLE="SUBTITLE";var t=this.castService.getMedia(),i=0;if(!t)return i;var a=t.media.tracks;if(!a)return i;for(var s=0;s<a.length;s++){var r=a[s],n=r.subtype;if("TEXT"===r.type&&(n===e.CAPTIONS||n===e.SUBTITLES||n===e.DESCRIPTIONS||n===e.CAPTION||n===e.SUBTITLE||"text/vtt"===r.trackContentType)){i=s;break}}return i},d.sendCommand=function(e){if(this.castService&&this.castService[e]){for(var t,i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];(t=this.castService)[e].apply(t,a)}},d.getRemote=function(e){if(this.castService){var t=this.castService.getMedia();return t?"currentTime"!==e||t.liveSeekableRange?t[e]||(t.media?t.media[e]:null):t.getEstimatedTime():null}},d.updateScreen=function(e,t){this.statusMessage=e,(0,o.nh)(this.container,function(e,t){return'<div class="jw-cast jw-reset jw-preview" style="'+(t?"background-image:url('"+t+"')":"")+'">\n      <div class="jw-cast-container">\n        <div class="jw-cast-text jw-reset">\n          '+(e||"")+"\n        </div>\n      </div>\n    </div>"}(e,t))},d.getContainer=function(){return this.container},d.setContainer=function(e){this.container=e},d.remove=function(){this.statusMessage=null,clearInterval(this.timeInterval)},d.getPosition=function(){var e=this.getRemote("currentTime")||0,t=this.getDuration();if(this.getRemote("liveSeekableRange")&&t<0){var i=this.getSeekRange(),a=i.end,s=a-i.start;if((0,c.s)(s,this.minDvrWindow))return e-a}return e},d.getDuration=function(){var e=this.getRemote("duration")||0;if(this.getRemote("liveSeekableRange")&&e<0){var t=this.getSeekRange(),i=t.end-t.start;return(0,c.s)(i,this.minDvrWindow)?-i:1/0}return e},d.getSeekRange=function(){var e=this.getRemote("liveSeekableRange")||{start:0,end:Math.max(this.getRemote("duration")||0,0)};return{start:e.start,end:e.end}},d.triggerTime=function(){var e=this.getRemote("currentTime");(0,s.hj)(e)&&this.trigger(a.R2,{position:this.getPosition(),duration:this.getDuration(),currentTime:e,seekRange:this.getSeekRange(),metadata:{currentTime:e}})},d.stop=function(){this.clearTracks()},r}(l),T=f,g=i(676);var k=i(4429),p={},y=function(){function e(e,t,i){this.localController=e,this.model=t,this.service=p[this.model.get("id")]||null,this.castProvider=null,this.castToggle=k.Z.noop,this.setup=this.setup.bind(this),this.options=i||{},this.loadingApi=v||(v=new Promise((function(e,t){window.__onGCastApiAvailable=function(i){i?e(i):t(),delete window.__onGCastApiAvailable},new g.ZP("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1").load().catch(t)})))}var t=e.prototype;return t.init=function(){return this.loadingApi.then(this.setup)},t.setup=function(){var e=this,t=this.model.get("cast")||{};this.model.set("castState",{available:!1,active:!1,deviceName:""}),this.service&&(this.service.off(),this.service.reset());var i=this.options&&(this.options.CastService||d);this.service=new i(t.customAppId),this.service.init(),this.service.on("castState",this.updateCastState,this),this.service.on("mediaUpdate",this.onMediaUpdate,this),this.service.on("mediaUpdate",this.onFirstMediaUpdate,this),this.service.on("setPlaylist",this.setPlaylist,this),this.service.on(a.cM,(function(t){e.localController.trigger(a.cM,t)})),this.service.updateCastState(),p[this.model.get("id")]=this.service},t.switchProviders=function(){var e=this.options&&(this.options.CastProvider||T);this.castProvider=new e(this.model.get("id"),this.model.getConfiguration()),this.localController.castVideo(this.castProvider,this.model.get("playlistItem")),this.castProvider.setService(this.service)},t.setPlaylist=function(){this.model.set("state",a.Kb),this.castProvider.updateScreen("Connecting",this.model.get("playlistItem").image),this.service.setPlaylist(this.model)},t.onConnect=function(){var e=this.model.get("castClicked");if((e||!this.service.getPlayerId())&&this.service.setPlayerId(this.model.get("id")),e&&this.isActivePlayer()){this.localController.setFullscreen(!1),this.switchProviders(),this.service.addListeners();var t=this.service.getMedia();t?this.service.loaded(t):(this.service.on("mediaUpdate",this.seekToEdgeIfDvr,this),this.setPlaylist()),this.model.on("change:playlist",this.setPlaylist,this),this.model.on("change:itemReady",this.checkForEmbeddedCaptions,this),this.model.change("captions",this.updateCaptionStyles,this)}},t.onDisconnect=function(){var e=this.model.get("state"),t=e===a.xQ,i=e===a.bc,s=e===a.Vy,r=this.model.get("item"),n=this.model.get("playlist"),d=this.model.get("playlistItem");if(this.service.removeListeners(),this.castProvider&&this.castProvider.remove(),d&&s&&(void 0===(d=n[r+1])?t=!0:(this.model.set("item",r+1),this.model.set("playlistItem",d))),this.model.set("castActive",!1),this.model.set("castClicked",!1),this.localController.stopCast(),this.model.off(null,null,this),d)if(t)this.localController.trigger(a.V$,{});else if(!i){var o=this.model.mediaModel,c=this.castProvider;this.localController.playVideo("interaction").catch((function(e){c&&o&&c.trigger("error",{message:e.message})}))}},t.toggleConnection=function(e){e?this.onConnect():this.castProvider&&this.onDisconnect()},t.checkForEmbeddedCaptions=function(){this.service.extractEmbeddedCaptions(),this.castProvider.setSubtitlesTrack(this.model.get("captionsIndex"))},t.updateCaptionStyles=function(e,t){var i=this.service.getMedia();if(i){var a=this.service.obtainTrackStyles(t);this.service.editTracksInfo(i.activeTrackIds,a)}},t.onMediaUpdate=function(e){var t=e.field,i=e.value;if(this.castProvider){"media"===t&&this.updatePlaylistItem(i);var a=this.castProvider.castEventHandlers(t);a&&a(i)}},t.onFirstMediaUpdate=function(e){"media"===e.field&&(this.checkForEmbeddedCaptions(),this.service.off("mediaUpdate",this.onFirstMediaUpdate,this))},t.seekToEdgeIfDvr=function(e){if("media"===e.field){this.service.off("mediaUpdate",this.seekToEdgeIfDvr,this);var t=e.value,i=t.currentTime,a=t.liveSeekableRange;if(!i&&a){var s=a.start,r=a.end;if(!this.model.mediaModel.get("currentTime")&&(0,c.s)(r-s,this.model.get("minDvrWindow"))){var n=r-this.model.get("dvrSeekLimit");this.service.seek(n)}}}},t.updatePlaylistItem=function(e){var t=this.model.get("playlist");if(e.media){var i=e.media.metadata,a=t[i.index];(0,s.hj)(i.index)&&i.index!==this.model.get("item")&&(this.model.attributes.itemReady=!1,this.model.set("item",i.index),this.model.set("itemReady",!0),e.idleReason||this.model.set("playlistItem",a));var r=this.model.get("castState").deviceName,n=r?"Casting to "+r:"";this.castProvider.statusMessage&&this.castProvider.statusMessage!==n&&this.castProvider.updateScreen(n,a.image)}},t.updateCastState=function(e){var t=this.model.get("castActive"),i=e.active;t!==i&&this.toggleConnection(i),i=i&&this.isActivePlayer(),this.model.set("castAvailable",e.available),this.model.set("castActive",i),this.model.set("castState",{available:e.available,active:i,deviceName:e.deviceName})},t.isActivePlayer=function(){return this.service.getPlayerId()===this.model.get("id")},t.stopCasting=function(){return this.service&&this.service.disconnect()||k.Z.noop},e}()}}]);