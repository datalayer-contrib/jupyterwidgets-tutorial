(self.webpackChunkipyvolume=self.webpackChunkipyvolume||[]).push([[58],{4319:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1153),n=i(1199),r=function(){function t(){this.textWidth=null,this.textHeight=null,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d")}return Object.defineProperty(t.prototype,"width",{get:function(){return this.canvas.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.canvas.height},enumerable:!0,configurable:!0}),t.prototype.drawText=function(t,e){return this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.font=e.font,this.textWidth=Math.ceil(this.ctx.measureText(t).width),this.textHeight=n.getFontHeight(this.ctx.font),this.canvas.width=s.Math.ceilPowerOfTwo(this.textWidth),this.canvas.height=s.Math.ceilPowerOfTwo(this.textHeight),this.ctx.font=e.font,this.ctx.fillStyle=e.fillStyle,this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.shadowColor=e.shadowColor,this.ctx.shadowBlur=e.shadowBlur,this.ctx.shadowOffsetX=e.shadowOffsetX,this.ctx.shadowOffsetY=e.shadowOffsetY,this.ctx.fillText(t,0,0),this.canvas},t}();e.CanvasText=r},9297:function(t,e,i){"use strict";var s,n=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(1153),o=function(t){function e(e,i){return void 0===e&&(e=""),void 0===i&&(i={}),t.call(this,e,i)||this}return n(e,t),e.prototype.raycast=function(){this.mesh.raycast.apply(this.mesh,arguments)},e.prototype.updateText=function(){this.cleanUp(),this.canvas.drawText(this._text,{font:this._font,fillStyle:this._fillStyle,shadowBlur:this._shadowBlur,shadowColor:this._shadowColor,shadowOffsetX:this._shadowOffsetX,shadowOffsetY:this._shadowOffsetY}),this.texture=new r.Texture(this.canvas.canvas),this.texture.needsUpdate=!0,this.applyAntiAlias(),this.material?this.material.map=this.texture:(this.material=new r.MeshBasicMaterial({map:this.texture,side:this.side}),this.material.transparent=!0),this.mesh||(this.geometry=new r.PlaneGeometry(this.canvas.width,this.canvas.height),this.mesh=new r.Mesh(this.geometry,this.material),this.add(this.mesh)),this.mesh.position.x=this.canvas.width/2-this.canvas.textWidth/2+this.canvas.textWidth/2*this.align.x,this.mesh.position.y=-this.canvas.height/2+this.canvas.textHeight/2*this.align.y,this.geometry.vertices[0].x=this.geometry.vertices[2].x=-this.canvas.width/2,this.geometry.vertices[1].x=this.geometry.vertices[3].x=this.canvas.width/2,this.geometry.vertices[0].y=this.geometry.vertices[1].y=this.canvas.height/2,this.geometry.vertices[2].y=this.geometry.vertices[3].y=-this.canvas.height/2,this.geometry.verticesNeedUpdate=!0},e}(i(7190).Text2D);e.MeshText2D=o},7297:function(t,e,i){"use strict";var s,n=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(1153),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.raycast=function(){return this.sprite.raycast.apply(this.sprite,arguments)},e.prototype.updateText=function(){this.canvas.drawText(this._text,{font:this._font,fillStyle:this._fillStyle}),this.cleanUp(),this.texture=new r.Texture(this.canvas.canvas),this.texture.needsUpdate=!0,this.applyAntiAlias(),this.material?this.material.map=this.texture:this.material=new r.SpriteMaterial({map:this.texture}),this.sprite||(this.sprite=new r.Sprite(this.material),this.geometry=this.sprite.geometry,this.add(this.sprite)),this.sprite.scale.set(this.canvas.width,this.canvas.height,1),this.sprite.position.x=this.canvas.width/2-this.canvas.textWidth/2+this.canvas.textWidth/2*this.align.x,this.sprite.position.y=-this.canvas.height/2+this.canvas.textHeight/2*this.align.y},e}(i(7190).Text2D);e.SpriteText2D=o},7190:function(t,e,i){"use strict";var s,n=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(1153),o=i(1199),a=i(4319),h=function(t){function e(e,i){void 0===e&&(e=""),void 0===i&&(i={});var s=t.call(this)||this;return s._font=i.font||"30px Arial",s._fillStyle=i.fillStyle||"#FFFFFF",s._shadowColor=i.shadowColor||"rgba(0, 0, 0, 0)",s._shadowBlur=i.shadowBlur||0,s._shadowOffsetX=i.shadowOffsetX||0,s._shadowOffsetY=i.shadowOffsetY||0,s.canvas=new a.CanvasText,s.align=i.align||o.textAlign.center,s.side=i.side||r.DoubleSide,s.antialias=void 0===i.antialias||i.antialias,s.text=e,s}return n(e,t),Object.defineProperty(e.prototype,"width",{get:function(){return this.canvas.textWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.canvas.textHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this.updateText())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"font",{get:function(){return this._font},set:function(t){this._font!==t&&(this._font=t,this.updateText())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fillStyle",{get:function(){return this._fillStyle},set:function(t){this._fillStyle!==t&&(this._fillStyle=t,this.updateText())},enumerable:!0,configurable:!0}),e.prototype.cleanUp=function(){this.texture&&this.texture.dispose()},e.prototype.applyAntiAlias=function(){!1===this.antialias&&(this.texture.magFilter=r.NearestFilter,this.texture.minFilter=r.LinearMipMapLinearFilter)},e}(r.Object3D);e.Text2D=h},5058:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(7297);e.SpriteText2D=s.SpriteText2D;var n=i(9297);e.MeshText2D=n.MeshText2D;var r=i(1199);e.textAlign=r.textAlign},1199:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1153);e.textAlign={center:new s.Vector2(0,0),left:new s.Vector2(1,0),topLeft:new s.Vector2(1,-1),topRight:new s.Vector2(-1,-1),right:new s.Vector2(-1,0),bottomLeft:new s.Vector2(1,1),bottomRight:new s.Vector2(-1,1)};var n={};e.getFontHeight=function(t){var e=n[t];if(!e){var i=document.getElementsByTagName("body")[0],s=document.createElement("div"),r=document.createTextNode("MÉq");s.appendChild(r),s.setAttribute("style","font:"+t+";position:absolute;top:0;left:0"),i.appendChild(s),e=s.offsetHeight,n[t]=e,i.removeChild(s)}return e}}}]);