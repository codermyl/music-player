(this["webpackJsonprjs-music-app"]=this["webpackJsonprjs-music-app"]||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),r=n.n(c),i=n(9),a=n.n(i),o=(n(15),n(3)),j=n(5),l=n(4);var g=function(e){return Object(s.jsxs)("div",{className:"c-player--controls",children:[Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(s.jsx)(j.a,{icon:l.a})}),Object(s.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(s.jsx)(j.a,{icon:e.isPlaying?l.c:l.d})}),Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(s.jsx)(j.a,{icon:l.b})})]})};var u=function(e){return Object(s.jsxs)("div",{className:"c-player--details",children:[Object(s.jsx)("div",{className:"details-img",children:Object(s.jsx)("img",{src:e.song.img_src,alt:""})}),Object(s.jsx)("h3",{className:"details-title",children:e.song.title}),Object(s.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var b=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){i?t.current.play():t.current.pause()})),Object(s.jsxs)("div",{className:"c-player",children:[Object(s.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t}),Object(s.jsx)("h4",{children:"Playing now"}),Object(s.jsx)(u,{song:e.songs[e.currentSongIndex]}),Object(s.jsx)(g,{isPlaying:i,setIsPlaying:a,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(s.jsxs)("p",{children:["Next up: ",Object(s.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist]})]})]})};var d=function(){var e=Object(c.useState)([{title:"Forget me too ft. Halsey",artist:"Machine Gun Kelly",img_src:"./images/song-1.jpg",src:"./music/on-n-on.mp3"},{title:"Song 2",artist:"Artist 2",img_src:"./images/song-2.jpg",src:"./music/somebody-new.mp3"},{title:"Song 3",artist:"Artist 3",img_src:"./images/song-3.jpg",src:"./music/on-n-on.mp3"},{title:"Song 4",artist:"Artist 4",img_src:"./images/song-4.jpg",src:"./music/somebody-new.mp3"}]),t=Object(o.a)(e,1)[0],n=Object(c.useState)(0),r=Object(o.a)(n,2),i=r[0],a=r[1],j=Object(c.useState)(0),l=Object(o.a)(j,2),g=l[0],u=l[1];return Object(c.useEffect)((function(){u((function(){return i+1>t.length-1?0:i+1}))}),[i]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(b,{currentSongIndex:i,setCurrentSongIndex:a,nextSongIndex:g,songs:t})})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.90f4c5e7.chunk.js.map