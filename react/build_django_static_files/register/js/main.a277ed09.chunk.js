(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),l=(n(9),n(3)),i=n.n(l);n(10);function s(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var a=n[o].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return console.log("Cookie value: "+t),t}var u=new FormData;u.append("username","foo@gmail.com"),u.append("password","bar");var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.tsx")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),a.a.createElement("button",{onClick:function(){fetch("http://localhost:8000/api/v1/threads/",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Fetch threads"),a.a.createElement("button",{onClick:function(){fetch("http://localhost:8000/auth/login/",{method:"POST",credentials:"include",headers:{Accept:"*/*","X-CSRFToken":s("csrftoken")},body:u}).then((function(e){return e.text()})).then((function(e){console.log(e)}))}},"login"),a.a.createElement("button",{onClick:function(){fetch("http://localhost:8000/poop/",{credentials:"include"}).then((function(e){return e.text()})).then((function(e){console.log(e)}))}},"get csrf token"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a277ed09.chunk.js.map