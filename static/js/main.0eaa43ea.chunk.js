(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var c=n(7),r={name:"dark",success:"#FDA215",inactive:"#BCCED9",active:"#31485A",bgOptions:"#333",bgGame:"#EEF1EF",fontColor:"#fff"},i={name:"light",success:"#D0FCB3",inactive:"#EAC5D8",active:"#E78F8E",bgOptions:"#E7EBC5",bgGame:"#FEFBF3",fontColor:"#41393E"},a=n(0),o=n.n(a);var s,u,d,b,l,m,j,h,x,f,O,p,g,v,C,y,w,S,$=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),r=Object(c.a)(n,2),i=r[0],o=r[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]},k=n(1),G=Object(a.createContext)(),E=function(e){var t=e.children,n=$("theme"),o=Object(c.a)(n,1)[0],s=Object(a.useState)(r),u=Object(c.a)(s,2),d=u[0],b=u[1];Object(a.useEffect)((function(){b(o||r)}),[]);return Object(k.jsx)(G.Provider,{value:{theme:d,changeTheme:function(){"light"===d.name?b(r):b(i)}},children:t})},z=n(5),T=n(6),M=n(34),F=n(153),N=Object(T.c)(F.a.div)(s||(s=Object(z.a)(["\n  background: white;\n  padding: 2rem;\n  border-radius: 15px;\n  overflow:hidden;\n  @media (min-width: 576px) {\n    padding: 4rem;\n  }\n\n  @media(min-width:768px){\n    padding: 5rem;\n  }\n"]))),L=Object(T.c)(F.a.h2)(u||(u=Object(z.a)(["\nmargin: 2rem 0;\nfont-weight:600;\n"]))),D=Object(T.c)(Object(F.a)(M.b))(d||(d=Object(z.a)(["\n  display: block;\n  margin: 2rem 0;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border-radius: 25px;\n  font-weight:bold;\n  cursor: pointer;\n  text-decoration: none;\n  background: ",";\n  color: ",";\n  transition:box-shadow .3s;\n    :hover,:focus{\n      box-shadow: "," 0px 10px 36px 0px, "," 0px 0px 0px 1px;\n    }\n  @media(min-width:768px){\n    padding:1rem 2rem;\n  }\n"])),(function(e){return e.$theme.success}),(function(e){return e.$theme.fontColor}),(function(e){return e.$theme.success}),(function(e){return e.$theme.success})),V=T.c.div(b||(b=Object(z.a)(["\nposition:absolute;\ntop:10%;\nright:10%;\n"]))),B=Object(T.c)(F.a.div)(l||(l=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n\n  label {\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n   gap:4rem;\n  }\n"]))),A=Object(T.c)(F.a.div)(m||(m=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: ",";\n  min-height: 100vh;\n  transition: background-image 1s;\n\n  ","\n"])),(function(e){return e.$justify||"center"}),(function(e){return e.$SVG?Object(T.b)(j||(j=Object(z.a)(["\n          background: #333;\n          background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23","'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n          /* background by SVGBackgrounds.com */\n        "])),(function(e){return e.fillSVG})):Object(T.b)(h||(h=Object(z.a)(["\n          background: ",";\n        "])),(function(e){return e.$themeContext.bgGame}))})),I=function(e){var t=e.$justify,n=e.$SVG,c=e.children,r=e.variants,i=e.initial,o=e.animate,s=Object(a.useContext)(G),u=s.theme.success.slice(1);return Object(k.jsx)(A,{$SVG:n,variants:r,initial:i,animate:o,$justify:t,$themeContext:s.theme,fillSVG:u,children:c})},J=T.c.button(x||(x=Object(z.a)(["\ncursor:pointer;\nborder:none;\nbackground:none;\nfont-size:2rem;\n"]))),Y=n(14),H=n(159),P=function(){var e=Object(a.useContext)(G),t=$("theme"),n=Object(c.a)(t,2)[1],o={hidden:{opacity:0,y:"3vh"},visible:{opacity:1,y:"0"},exit:{opacity:0,y:"-3vh"}};return Object(k.jsx)(J,{onClick:function(){"dark"===e.theme.name?n(i):n(r),e.changeTheme()},"aria-label":"toogle color theme",children:Object(k.jsx)(H.a,{exitBeforeEnter:!0,children:"dark"===e.theme.name?Object(k.jsx)(F.a.div,{variants:o,whileHover:{scale:1.2},animate:"visible",initial:"hidden",exit:"exit",children:Object(k.jsx)(Y.u,{color:"#FFD700"})},"sun"):Object(k.jsx)(F.a.div,{variants:o,whileHover:{scale:1.2},animate:"visible",initial:"hidden",exit:"exit",children:Object(k.jsx)(Y.r,{color:"#000"})},"moon")})})},R=T.c.input(f||(f=Object(z.a)(["\n  display: none;\n\n  :not(:checked):hover + span {\n    box-shadow: "," 0px 10px 36px 0px;\n    color: ",";\n  }\n  :checked + span {\n    background-color: ",";\n  }\n  + span {\n    display: inline-block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n    font-weight: bold;\n    cursor: pointer;\n    border-radius: 25px;\n    color: ",";\n    background-color: ",";\n    transition: box-shadow .3s, color .3s;\n\n    @media (min-width: 768px) {\n      padding: 1rem 2rem;\n    }\n  }\n"])),(function(e){return e.$themeContext.active}),(function(e){return e.$themeContext.active}),(function(e){return e.$themeContext.active}),(function(e){return e.$themeContext.fontColor}),(function(e){return e.$themeContext.inactive})),_=n(42),q=n(20),U=Object(_.c)({name:"gameSettings",initialState:{gameTheme:"Numbers",gridSize:4,arrayOfNumbers:[]},reducers:{setGameTheme:function(e,t){e.gameTheme=t.payload},setGameGridSize:function(e,t){e.gridSize=t.payload},setArrayOfNumbers:function(e,t){e.arrayOfNumbers=t.payload},showSettings:function(e){console.log(Object(q.a)(e))},setNewGame:function(e,t){for(var n=[],c=t.payload*t.payload/2,r=0;r<c;r++)n.push(r),n.push(r);var i=function(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t}(n);e.arrayOfNumbers=i}}}),W=U.actions,K=W.setGameTheme,Q=W.setNewGame,X=W.setGameGridSize,Z=(W.setArrayOfNumbers,W.showSettings,U.reducer),ee=n(21),te=function(e){var t=e.option,n=e.name,c=e.checked,r=e.value,i=Object(a.useContext)(G),o=Object(ee.b)();return Object(k.jsxs)("label",{style:{display:"flex",justifyContent:"space-around"},children:[Object(k.jsx)(R,{role:"radiogroup",defaultChecked:c,type:"radio",value:r,onClick:function(){"theme"===n&&o(K(r)),"size"===n&&o(X(r))},name:n,$themeContext:i.theme}),Object(k.jsx)("span",{children:t})]})},ne=Object(_.c)({name:"userGuesses",initialState:{arrayOfGuesses:[],successGuesses:[]},reducers:{addElementToGuesses:function(e,t){e.arrayOfGuesses.push(t.payload)},clearArrayOfGuesses:function(e){e.arrayOfGuesses=[]},addToSuccessGuesses:function(e,t){e.successGuesses.push(t.payload)},prepareNewGame:function(e){e.successGuesses=[],e.arrayOfGuesses=[]}}}),ce=ne.actions,re=ce.addElementToGuesses,ie=ce.clearArrayOfGuesses,ae=ce.addToSuccessGuesses,oe=ce.prepareNewGame,se=ne.reducer,ue=function(){var e=Object(ee.c)((function(e){return e.gameSettings})),t=e.gridSize,n=e.gameTheme,c=Object(a.useContext)(G),r=Object(ee.b)(),i={hidden:{x:"-100vw"},visible:{x:0},start:{opacity:0},button:{opacity:1,transition:{delay:2}}};return Object(k.jsx)(I,{$SVG:!0,children:Object(k.jsxs)(N,{variants:{hidden:{y:"-100vh",transition:{when:"afterChildren"}},visible:{y:0,transition:{when:"beforeChildren",staggerChildren:.3}},exit:{x:"-100vw"}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(k.jsx)(V,{children:Object(k.jsx)(P,{})}),Object(k.jsx)(L,{variants:i,children:"Select Theme"}),Object(k.jsxs)(B,{variants:i,children:[Object(k.jsx)(te,{option:"Numbers",value:"Numbers",name:"theme",checked:!("Numbers"!==n)}),Object(k.jsx)(te,{option:"Icons",value:"Icons",name:"theme",checked:!("Icons"!==n)})]}),Object(k.jsx)(L,{variants:i,children:"Grid Size"}),Object(k.jsxs)(B,{variants:i,children:[Object(k.jsx)(te,{option:"4 x 4",value:4,name:"size",checked:!(4!==t)}),Object(k.jsx)(te,{option:"6 x 6",value:6,name:"size",checked:!(6!==t)})]}),Object(k.jsx)(D,{variants:i,initial:"start",animate:"button",to:"/game",onClick:function(){r(oe()),r(Q(t))},$theme:c.theme,children:"Start Game"})]})})},de=n(16),be=T.c.div(O||(O=Object(z.a)(["\n  margin-top: 4rem;\n  padding-bottom:2rem;\n  background: white;\n  text-align: center;\n  border-radius: 5px;\n"]))),le=T.c.div(p||(p=Object(z.a)(["\n  padding: 1rem 2rem;\n  & > fieldset {\n    margin: 0 1rem;\n  }\n"]))),me=T.c.h1(g||(g=Object(z.a)(["\n  padding: 2rem 0;\n  text-shadow: 2px 4px 2px rgba(150, 150, 150, 0.8);\n"]))),je=T.c.div(v||(v=Object(z.a)(["\n  position: relative;\n  padding: 2rem;\n  margin: 0 1rem;\n  min-height: 48vh;\n  background: #fafafa;\n  border-top: 3px solid ",";\n  & div:nth-of-type(2n) {\n    background: ",";\n  }\n  & div:first-of-type {\n    margin-bottom: 1rem;\n  }\n"])),(function(e){return e.$themeContext.success}),(function(e){return e.$themeContext.inactive})),he=T.c.div(C||(C=Object(z.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  font-size: 1.5rem;\n  & :first-child {\n    grid-column: 2/3;\n  }\n  & :nth-child(2) {\n    grid-column: 4/5;\n  }\n  & :nth-child(3) {\n    color:green;\n    grid-column: 5/6;\n    place-self: center;\n    background-color: white;\n    border-radius: 50%;\n  }\n  & > p {\n    font-family: monospace;\n  }\n"]))),xe=T.c.p(y||(y=Object(z.a)(["\n  transform: scale(0.7);\n"]))),fe=T.c.span(w||(w=Object(z.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.3rem;\n  text-align: right;\n  font-size: 1.2rem;\n  font-weight: 600;\n"]))),Oe=function(e){return("0"+e).slice(-2)},pe=function(e){var t=e.value,n=e.rank,r=e.sortedGridSize,i=t.minutes,a=t.seconds,o=Oe(a),s=$("4GridScore"),u=Object(c.a)(s,1)[0],d=$("6GridScore"),b=Object(c.a)(d,1)[0],l=4==r?u:b,m="object"===typeof t?"".concat(i,":").concat(o):t;return Object(k.jsxs)(he,{children:[Object(k.jsx)(xe,{children:"#".concat(n)}),Object(k.jsx)("p",{children:m}),l&&l.map((function(e,n){if(e.movesCounter===t||e.minutes===t.minutes&&e.seconds===t.seconds)return Object(k.jsx)(Y.f,{},n)}))]})},ge=function(e){var t,n=e.sortedGridSize,c=e.sortedScore,r=Object(ee.c)((function(e){return e.leadboardData})),i=r.grid4Moves,o=r.grid6Moves,s=r.grid4Time,u=r.grid6Time,d=Object(a.useContext)(G);switch("grid".concat(n).concat(c)){case"grid4Time":t=s;break;case"grid6Time":t=u;break;case"grid4Moves":t=i;break;case"grid6Moves":t=o}return t=t.slice(0,10),Object(k.jsxs)(je,{$themeContext:d.theme,children:[Object(k.jsxs)(he,{children:[Object(k.jsx)("p",{children:"Rank"}),Object(k.jsx)("p",{children:"Score"})]}),t.map((function(e,t){return Object(k.jsx)(pe,{value:e,rank:t+1,sortedGridSize:n},t)})),Object(k.jsxs)(fe,{children:[Object(k.jsx)(Y.f,{style:{color:"green"}}),Object(k.jsx)("p",{children:"- Your score"})]})]})},ve=n(157),Ce=n(155),ye=n(156),we=n(160),Se=n(154),$e=function(e){var t=e.label,n=e.option1,c=e.option2,r=e.setValue,i=e.value,o=Object(a.useContext)(G),s={color:"".concat(o.theme.success)};return Object(k.jsxs)(Ce.a,{component:"fieldset",children:[Object(k.jsx)(we.a,{component:"legend",style:{fontSize:"1.5rem",color:"black",fontFamily:"Gruppo",fontWeight:"bold"},children:t}),Object(k.jsxs)(ye.a,{row:!0,"aria-label":t,name:"controlled-radio-buttons-group-".concat(t),value:i,onChange:function(e){r(e.target.value)},children:[Object(k.jsx)(ve.a,{value:n,control:Object(k.jsx)(Se.a,{style:s}),label:"Grid Size"===t?"".concat(n,"x").concat(n):n}),Object(k.jsx)(ve.a,{value:c,control:Object(k.jsx)(Se.a,{style:s}),label:"Grid Size"===t?"".concat(c,"x").concat(c):c})]})]})},ke=n(95),Ge=n(10),Ee=n(48),ze=n.n(Ee),Te=n(28),Me=n(61),Fe=n(96),Ne=n.n(Fe).a.create({baseURL:"https://memory-game-5514b-default-rtdb.europe-west1.firebasedatabase.app/"}),Le=Object(_.b)("leadboardData/fetchMovesScore",function(){var e=Object(Me.a)(ze.a.mark((function e(t){var n,c,r;return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.get("/".concat(t,"/moves/.json"));case 3:return(n=e.sent).data=n.data?n.data:[],c=Object.values(n.data).sort((function(e,t){return e-t})),r=Object(Te.a)(new Set(c)),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),De=Object(_.b)("leadboardData/fetchTimeScore",function(){var e=Object(Me.a)(ze.a.mark((function e(t){var n,c,r,i;return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.get("/".concat(t,"/time/.json"));case 3:return(n=e.sent).data=n.data?n.data:[],c=Object.values(n.data),r=c.sort((function(e,t){return e.minutes-t.minutes||e.seconds-t.seconds})),i=Array.from(new Set(r.map(JSON.stringify))).map(JSON.parse),e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),Ve=Object(_.c)({name:"leadboardData",initialState:{grid4Moves:[],grid4Time:[],grid6Moves:[],grid6Time:[]},reducers:{},extraReducers:(S={},Object(Ge.a)(S,Le.fulfilled,(function(e,t){4===t.meta.arg?e.grid4Moves=t.payload:e.grid6Moves=t.payload})),Object(Ge.a)(S,Le.rejected,(function(e){console.log(e.payload)})),Object(Ge.a)(S,De.fulfilled,(function(e,t){4===t.meta.arg?e.grid4Time=t.payload:e.grid6Time=t.payload})),S)});Object(ke.a)(Ve.actions);var Be,Ae,Ie,Je,Ye,He,Pe,Re,_e,qe,Ue,We,Ke,Qe,Xe,Ze,et,tt,nt,ct,rt,it,at,ot,st,ut,dt,bt=Ve.reducer,lt=Object(T.c)(M.b)(Be||(Be=Object(z.a)(["\n  display: inline-block;\n  width: 80%;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  margin: 0 3rem;\n  border-radius: 15px;\n  font-size: ",";\n  font-weight: 900;\n  color: ",";\n  background: ",";\n  transition: transform 0.5s;\n  :hover, :focus {\n    transform: scale(1.1);\n  }\n"])),(function(e){return e.$bigFont?" 1.5rem":"1rem"}),(function(e){return e.$themeContext.active}),(function(e){return e.$themeContext.success})),mt=function(e){var t=e.$bigFont,n=Object(a.useContext)(G);return Object(k.jsx)(lt,{to:"/",$themeContext:n.theme,$bigFont:t,children:"New Game"})},jt=function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.gameSettings.gridSize})),n=Object(a.useState)(t),r=Object(c.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)("Time"),u=Object(c.a)(s,2),d=u[0],b=u[1];return Object(a.useEffect)((function(){e(Le(4)),e(Le(6)),e(De(4)),e(De(6))}),[]),Object(k.jsx)(I,{$SVG:!0,$justify:"flex-start",children:Object(k.jsxs)(be,{children:[Object(k.jsxs)(le,{children:[Object(k.jsx)($e,{value:i,setValue:o,label:"Grid Size",option1:4,option2:6}),Object(k.jsx)($e,{value:d,setValue:b,label:"Score",option1:"Time",option2:"Moves"})]}),Object(k.jsx)(me,{children:"Time"===d?"Fastest Guesees":"Most Accurate Guesses"}),Object(k.jsx)(ge,{sortedGridSize:i,sortedScore:d}),Object(k.jsx)(mt,{$bigFont:!0})]})})},ht=T.c.div(Ae||(Ae=Object(z.a)(["\ndisplay:grid;\ngrid-template-columns:repeat(",",1fr);\ngap:",";\nmargin-bottom:",";\n\n@media(min-width:576px){\ngap:",";\nmargin-bottom:1.5rem;\n}\n@media(min-width:768px){\nmargin-bottom:3rem;\n}\n\n"])),(function(e){return e.$gridSize}),(function(e){return 4===e.$gridSize?"1rem":".4rem"}),(function(e){return 4===e.$gridSize?"3rem":".5rem"}),(function(e){return 4===e.$gridSize?"1.5rem":".5rem"})),xt=(T.c.nav(Ie||(Ie=Object(z.a)(["\ndisplay:flex;\njustify-content:space-between;\n"]))),Object(T.b)(Je||(Je=Object(z.a)(["\ndisplay:inline-block;\npadding:1rem 2rem;\nmargin-bottom:.5rem;\nwidth:100%;\nfont-weight:bold;\nborder-radius:15px;\ntransition:transform .5s;\n:hover,:focus{\ntransform:scale(1.1);   \n}\n"])))),ft=Object(T.c)(F.a.div)(Ye||(Ye=Object(z.a)(["\nposition:absolute;\ntop:0;\nleft:0;\nbottom:0;\nright:0;\nbackground-color:black;\nz-index:2;\n"]))),Ot=Object(T.c)(F.a.div)(He||(He=Object(z.a)(["\nposition:absolute;\ntop:20%;\nmargin:0 auto;\npadding:1rem 2rem;\noverflow:hidden;\nbackground:white;\nborder-radius:15px;\ntext-align: center;\nz-index:3;\n"]))),pt=T.c.h3(Pe||(Pe=Object(z.a)(["\nfont-size:2rem; \nmargin-bottom:1rem;\n"]))),gt=T.c.p(Re||(Re=Object(z.a)(["\nmargin-bottom:2rem;\n"]))),vt=T.c.div(_e||(_e=Object(z.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:space-between;\npadding:1rem;\nmargin-bottom:1rem;\nborder-radius:15px;\nbackground:",";\n"])),(function(e){return e.$themeContext.bgGame})),Ct=T.c.p(qe||(qe=Object(z.a)(["\ntransform:scale(0.9);\nfont-weight:900;\n"]))),yt=T.c.p(Ue||(Ue=Object(z.a)(["\nfont-size:1.3rem;\nfont-weight:bold;\ncolor:",";\n"])),(function(e){return e.$themeContext.active})),wt=Object(T.c)(M.b)(We||(We=Object(z.a)(["\n",";\nmargin-top:1rem;\ncolor:",";\nbackground:",";\n"])),xt,(function(e){return e.$themeContext.fontColor}),(function(e){return e.$themeContext.success})),St=Object(T.c)(M.b)(Ke||(Ke=Object(z.a)(["\n",";\ncolor:",";\nbackground:",";\n"])),xt,(function(e){return e.$themeContext.fontColor}),(function(e){return e.$themeContext.active})),$t=function(e){var t=e.title,n=e.value,c=e.$themeContext,r=n.minutes,i=n.seconds,a=Oe(i);return Object(k.jsxs)(vt,{$themeContext:c,children:[Object(k.jsx)(Ct,{children:t}),Object(k.jsx)(yt,{$themeContext:c,children:"object"===typeof n?"".concat(r,":").concat(a):"".concat(n," Moves")})]})},kt=n(97),Gt=n.n(kt),Et=function(e){var t=e.movesCounter,n=e.time,c=Object(a.useContext)(G);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ft,{variants:{hidden:{opacity:0},visible:{opacity:.5,transition:{duration:1}}},animate:"visible",initial:"hidden"}),Object(k.jsx)(Gt.a,{focusTrapOptions:{initialFocus:!1},children:Object(k.jsxs)(Ot,{variants:{hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{delay:1,duration:2}}},animate:"visible",initial:"hidden",children:[Object(k.jsx)(pt,{children:"You did it!"}),Object(k.jsx)(gt,{children:"Game over! Here's how you got on... "}),Object(k.jsx)($t,{title:"Time Elapsed",value:n,$themeContext:c.theme}),Object(k.jsx)($t,{title:"Moves Taken",value:t,$themeContext:c.theme}),Object(k.jsx)(wt,{to:"/",$themeContext:c.theme,children:"Setup New Game"}),Object(k.jsx)(St,{to:"leaderboard",$themeContext:c.theme,children:"Leaderboard"})]})})]})},zt=Object(T.c)(M.b)(Qe||(Qe=Object(z.a)(["\nposition:relative;\nfont-weight:900;\nfont-size:2rem;\ncolor:black;\n&:after{\n    position: absolute;\n    content:\"\";\n    bottom: -.5rem;\n    left:-5%;\n    right:5%;\n    height: 1rem;\n    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');\n    z-index: -1;\n    background-repeat: no-repeat;\n}\n"]))),Tt=T.c.nav(Xe||(Xe=Object(z.a)(["\ndisplay:flex;\nposition:relative;\njustify-content:space-between;\ngap:2.5rem;\nmargin:2rem;\n\n@media(min-width:567px){\n    gap:12rem;\n    margin:3rem;\n}\n@media(min-width:768px){\n    gap:20rem;\n  \n}\n"]))),Mt=T.c.div(Ze||(Ze=Object(z.a)(["\nposition: absolute;\nright:0;\n"]))),Ft=function(){var e=Object(a.useContext)(G);return Object(k.jsxs)(Tt,{$themeContext:e.theme,children:[Object(k.jsx)(zt,{to:"/",$themeContext:e.theme,children:"Memory"}),Object(k.jsx)(mt,{}),Object(k.jsx)(Mt,{children:Object(k.jsx)(P,{})})]})},Nt=T.c.div(et||(et=Object(z.a)(["\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\ngap:1rem;\n\n@media(min-width:576px){\n   flex-direction:row;\n}\n"]))),Lt=T.c.div(tt||(tt=Object(z.a)(["\ndisplay:flex;\njustify-content:space-between;\ngap:4rem;\npadding:1rem;\nborder-radius:15px;\nfont-weight:bold;\noverflow:hidden;\ncolor:",";\nbackground:",";\nbox-shadow: "," 0px 20px 30px -10px;\n"])),(function(e){return e.$themeContext.inactive}),(function(e){return e.$themeContext.active}),(function(e){return e.$themeContext.active})),Dt=T.c.div(nt||(nt=Object(z.a)(["\nfont-size:1rem;\nfont-family:monospace;\ncolor:",";\n"])),(function(e){return e.$themeContext.success})),Vt=function(e){var t=e.title,n=e.value,c=e.$themeContext,r=n.minutes,i=n.seconds,a=Oe(i);return Object(k.jsxs)(Lt,{$themeContext:c,children:[Object(k.jsx)("p",{children:t}),Object(k.jsx)(Dt,{$themeContext:c,children:"Time"===t?"".concat(r,":").concat(a):n})]})},Bt=function(e){var t=e.movesCounter,n=e.time,c=e.$themeContext;return Object(k.jsxs)(Nt,{children:[Object(k.jsx)(Vt,{title:"Time",value:n,$themeContext:c}),Object(k.jsx)(Vt,{title:"Moves",value:t,$themeContext:c})]})},At=Object(T.d)(ct||(ct=Object(z.a)(["\n    0%{ transform:rotateY(180deg);}\n    100%{ transform:rotateY(0);}\n    "]))),It=Object(T.d)(rt||(rt=Object(z.a)(["\n    0%{transform:rotateY(0);}\n    100%{ transform:rotateY(-180deg);}\n    "]))),Jt=Object(T.d)(it||(it=Object(z.a)(["\n    0%{ transform: scale(1);}\n    50%{ transform:scale(1.5);}\n    100%{ transform: scale(1);}\n    "]))),Yt=Object(T.b)(at||(at=Object(z.a)(["\n  display: grid;\n  place-items: center;\n  padding: 0.5rem;\n  font-size: 2rem;\n  border: none;\n  font-weight: bold;\n  border-radius: 50%;\n  cursor: pointer;\n  color:black;\n  user-select: none;\n  box-shadow:  "," 0px 0px 0px 2px;\n\n  @media (min-width: 576px) {\n    padding: 1.5rem;\n  }\n"])),(function(e){return e.$themeContext.inactive})),Ht=T.c.button(ot||(ot=Object(z.a)(["\n  ","\n  animation: "," .2s linear forwards;\n  background: ",";\n  color: ",";\n"])),Yt,It,(function(e){return e.$themeContext.inactive}),(function(e){return e.$themeContext.inactive})),Pt=T.c.button(st||(st=Object(z.a)(["\n  ","\n  cursor:default;\n  animation:"," .2s linear forwards;\n  background: ",";\n  color: ",";\n"])),Yt,At,(function(e){return e.$themeContext.success}),(function(e){return e.$themeContext.bg})),Rt=T.c.button(ut||(ut=Object(z.a)(["\n  ","\n  animation:"," .2s linear forwards;\n  background: ",";\n  color: white;\n  pointer-events: none;\n  z-index:1;\n"])),Yt,Jt,(function(e){return e.$themeContext.active})),_t=function(e){var t=e.value,n=e.gameTheme,r=e.$themeContext,i=e.movesHandler,s=e.isGameStarted,u=e.startGame,d=Object(ee.c)((function(e){return e.userGuesses})),b=d.arrayOfGuesses,l=d.successGuesses,m=Object(a.useState)(!1),j=Object(c.a)(m,2),h=j[0],x=j[1],f=Object(a.useState)(!1),O=Object(c.a)(f,2),p=O[0],g=O[1],v=[Object(k.jsx)(Y.p,{}),Object(k.jsx)(Y.e,{}),Object(k.jsx)(Y.a,{}),Object(k.jsx)(Y.q,{}),Object(k.jsx)(Y.d,{}),Object(k.jsx)(Y.b,{}),Object(k.jsx)(Y.g,{}),Object(k.jsx)(Y.h,{}),Object(k.jsx)(Y.m,{}),Object(k.jsx)(Y.n,{}),Object(k.jsx)(Y.l,{}),Object(k.jsx)(Y.j,{}),Object(k.jsx)(Y.t,{}),Object(k.jsx)(Y.i,{}),Object(k.jsx)(Y.c,{}),Object(k.jsx)(Y.k,{}),Object(k.jsx)(Y.s,{}),Object(k.jsx)(Y.o,{})],C=Object(ee.b)(),y=function(){s||u(),p||(C(re(t)),g(!0))};Object(a.useEffect)((function(){2===b.length&&(x(!0),i(),b[0]===b[1]?x(!1):setTimeout((function(){g(!1),setTimeout((function(){x(!1)}),50)}),1e3))}),[b]),Object(a.useEffect)((function(){return function(){g(!1),x(!1)}}),[]);var w=function(){var e=Ht;return b.includes(t)&&p&&(e=Pt),l.includes(t)&&(e=Rt),o.a.createElement(e,{disabled:h,$themeContext:r,onClick:y},"Numbers"===n?t:v[t])}();return Object(k.jsx)(k.Fragment,{children:w})},qt=n(98),Ut=function(){var e=Object(qt.useStopwatch)({autoStart:!1}),t=e.seconds,n=e.minutes,r=e.start,i=e.pause,o=Object(ee.c)((function(e){return e.gameSettings})),s=o.gameTheme,u=o.gridSize,d=o.arrayOfNumbers,b=Object(ee.c)((function(e){return e.userGuesses})),l=b.arrayOfGuesses,m=b.successGuesses,j=$("4GridScore"),h=Object(c.a)(j,2),x=h[0],f=h[1],O=$("6GridScore"),p=Object(c.a)(O,2),g=p[0],v=p[1],C=Object(a.useState)(!1),y=Object(c.a)(C,2),w=y[0],S=y[1],E=Object(a.useState)(!1),z=Object(c.a)(E,2),T=z[0],M=z[1],F=Object(a.useState)(0),N=Object(c.a)(F,2),L=N[0],D=N[1],V=Object(a.useContext)(G),B=Object(ee.b)(),A=function(){var e=Object(Me.a)(ze.a.mark((function e(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.post("".concat(u,"/moves.json"),L);case 3:return e.next=5,Ne.post("".concat(u,"/time.json"),{minutes:n,seconds:t});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){M(!0),r()},Y=function(){return D(L+1)};return Object(a.useEffect)((function(){2===l.length&&(l[0]===l[1]?(B(ae(l[0])),B(ie())):setTimeout((function(){B(ie())}),1e3))}),[l]),Object(a.useEffect)((function(){w&&(!function(e){var c=4===e?x:g;(4===e?f:v)(c?[].concat(Object(Te.a)(c),[{movesCounter:L,minutes:n,seconds:t}]):[{movesCounter:L,minutes:n,seconds:t}])}(u),A())}),[w]),Object(a.useEffect)((function(){m.length===u*u/2&&(i(),S(!0))}),[m]),Object(k.jsxs)(I,{variants:{hidden:{x:"100vw"},visible:{x:0}},initial:"hidden",animate:"visible",$justify:"flex-start",children:[Object(k.jsx)(Ft,{}),0!==d.length?Object(k.jsx)(ht,{$gridSize:u,children:d.map((function(e,t){return Object(k.jsx)(_t,{value:e,gameTheme:s,movesHandler:Y,isGameStarted:T,startGame:J,$themeContext:V.theme},t)}))}):Object(k.jsx)(de.a,{to:"/"}),Object(k.jsx)(Bt,{movesCounter:L,time:{seconds:t,minutes:n},$themeContext:V.theme}),w&&Object(k.jsx)(Et,{movesCounter:L,time:{seconds:t,minutes:n}})]})},Wt=T.c.div(dt||(dt=Object(z.a)(["\nmax-width:100vw;\noverflow:hidden;\n"])));var Kt,Qt=function(){var e=Object(de.g)();return Object(k.jsx)(Wt,{children:Object(k.jsx)(H.a,{exitBeforeEnter:!0,children:Object(k.jsxs)(de.d,{location:e,children:[Object(k.jsx)(de.b,{path:"/leaderboard",component:jt}),Object(k.jsx)(de.b,{path:"/game",component:Ut}),Object(k.jsx)(de.b,{path:"/",component:ue})]},e.pathname)})})},Xt=Object(T.a)(Kt||(Kt=Object(z.a)(["\n*{\n    padding:0;\n    margin:0;\n    box-sizing:border-box;\n    text-decoration:none;\n    \n    /* font-family:'Inconsolata', monospace; */\n    font-family: 'Gruppo', cursive;\n    \n}\n"]))),Zt=Object(_.a)({reducer:{gameSettings:Z,userGuesses:se,leadboardData:bt},middleware:function(e){return e({serializableCheck:!1})}}),en=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},tn=n(57);n.n(tn).a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(ee.a,{store:Zt,children:Object(k.jsxs)(E,{children:[Object(k.jsx)(Xt,{}),Object(k.jsx)(M.a,{children:Object(k.jsx)(Qt,{})})]})})}),document.getElementById("root")),en()}},[[132,1,2]]]);
//# sourceMappingURL=main.0eaa43ea.chunk.js.map