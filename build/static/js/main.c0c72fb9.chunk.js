(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{24:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r,o,c=t(0),i=t(15),l=t.n(i),d=t(9),a=(t(24),t(2)),b=t(3),s=t(4),j=Object(s.a)(r||(r=Object(b.a)(['\n  body {\n    font-family: "Pretendard", "Helvetica", "Arial", sans-serif;\n  }\n']))),u="#F68B7D",h="#FFFFFF",x="#AEAEAE",f="#696969",O="#000000",g={filterModalVisible:!1,addModalVisible:!1,bgColor:h,handleFilterModalVisible:function(){},handleAddModalVisible:function(){},handleBgColor:function(){}},m=Object(c.createContext)(g),p=t(5),v=s.b.div(o||(o=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  p {\n    font-size: 3rem;\n    font-weight: 900;\n    margin-right: 0.25rem;\n  }\n  div {\n    margin-top: 0.25rem;\n    margin-right: 0.225rem;\n    margin-bottom: 0.375rem;\n    position: relative;\n    display: inline-block;\n    button {\n      width: 2.25rem;\n      height: 2.25rem;\n      border: none;\n      border-radius: 50%;\n      background: \n        linear-gradient(217deg, rgba(247,201,120,.8), rgba(247,201,120,0) 70.71%),\n        linear-gradient(127deg, rgba(166,192,254,.8), rgba(166,192,254,0) 70.71%),\n        linear-gradient(336deg, rgba(246,139,125,.8), rgba(246,139,125,0) 70.71%);\n      cursor: pointer;\n    }\n    input {\n      position: absolute;\n      left: 0;\n      top: 25%;\n      width: 2.25rem;\n      height: 2.25rem;\n      width: 100%;\n      opacity: 0;\n    }\n  }\n"]))),C=t(19),w=t(1);var F,y,k,M,z,A=function(){var e=Object(c.useContext)(m),n=e.bgColor,t=e.handleBgColor,r=Object(c.useState)(n),o=Object(p.a)(r,2),i=o[0],l=o[1],d=Object(c.useMemo)((function(){return Object(C.debounce)((function(e){t(e),localStorage.setItem("bgColor",e)}),400)}),[t]);return Object(c.useEffect)((function(){d(i)}),[d,i]),Object(c.useEffect)((function(){var e=localStorage.getItem("bgColor");e&&l(e)}),[]),Object(w.jsxs)(v,{children:[Object(w.jsx)("p",{children:"T"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{}),Object(w.jsx)("input",{type:"color",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(w.jsx)("p",{children:"D"}),Object(w.jsx)("p",{children:"Y"})]})},V=s.b.svg(F||(F=Object(b.a)(["\n  margin-right: 1rem;\n"]))),S=s.b.svg(y||(y=Object(b.a)(["\n"]))),B=s.b.svg(k||(k=Object(b.a)(["\n"]))),E=s.b.svg(M||(M=Object(b.a)(["\n"]))),T=s.b.svg(z||(z=Object(b.a)(["\n"]))),H="32px";var D=function(){var e=Object(c.useContext)(m).filterModalVisible;return Object(w.jsx)(V,{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:H,viewBox:"0 0 24 24",width:H,fill:e?u:O,children:Object(w.jsxs)("g",{children:[Object(w.jsx)("path",{d:"M0,0h24 M24,24H0",fill:"none"}),Object(w.jsx)("path",{d:"M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"}),Object(w.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})]})})},Y="32px";var N,I=function(){var e=Object(c.useContext)(m).addModalVisible;return Object(w.jsxs)(S,{xmlns:"http://www.w3.org/2000/svg",height:Y,viewBox:"0 0 24 24",width:Y,fill:e?u:O,children:[Object(w.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(w.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})},L=s.b.header(N||(N=Object(b.a)(["\n  height: 4rem;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  div {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    .modalButton {\n      padding: 0;\n      border: none;\n      background: none;\n      cursor: pointer;\n    }\n  }\n"])));var J,P,K,R,W=function(){var e=Object(c.useContext)(m),n=e.handleFilterModalVisible,t=e.handleAddModalVisible;return Object(w.jsxs)(L,{children:[Object(w.jsx)(A,{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{className:"modalButton",onClick:function(){t(!1),n(!0)},children:Object(w.jsx)(D,{})}),Object(w.jsx)("button",{className:"modalButton",onClick:function(){n(!1),t(!0)},children:Object(w.jsx)(I,{})})]})]})},q=s.b.ol(J||(J=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),G=s.b.li(P||(P=Object(b.a)(["\n  width: 5rem;\n  height: 1.75rem;\n  margin-right: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  background-color: ",";\n  opacity: 0.5;\n  font-size: 1rem;\n  color: ",";\n"])),(function(e){return e.color}),"#232323"),Q=s.b.ol(K||(K=Object(b.a)(["\n  width: 100%;\n"]))),U=s.b.li(R||(R=Object(b.a)(["\n  margin-bottom: 1.75rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  div {\n    display: flex;\n    flex-direction: row;\n    button {\n      padding: 0;\n    }\n    div {\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      h3 {\n        width: 60vw;\n        font-size: 1.125rem;\n        color: ",";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        text-decoration: ","\n      }\n      p {\n        font-size: 0.875rem;\n        color: ",";\n      }\n    }\n  }\n  button {\n    border: none;\n    background-color: ",";\n  }\n"])),"#444444",(function(e){return e.completed?"line-through":"none"}),f,(function(e){return e.bgColor}));var X=function(e){e.id;var n=e.title,t=e.color;return Object(w.jsx)(G,{color:t,children:n})};var Z=function(){return Object(w.jsxs)(q,{children:[Object(w.jsx)(X,{id:1,title:"Need",color:"#F7C978"}),Object(w.jsx)(X,{id:2,title:"Want",color:u}),Object(w.jsx)(X,{id:3,title:"Routine",color:"#A6C0FE"})]})},$={filter:"all",handleFilter:function(){}},_=Object(c.createContext)($),ee={todos:[{id:0,label:1,text:"",completed:!1,createdAt:""}],addTodo:function(){},deleteTodo:function(){},updateStatus:function(){}},ne=Object(c.createContext)(ee);function te(e){switch(e){case 1:return"#F7C978";case 2:return"#F68B7D";case 3:return"#A6C0FE";default:return"#000000"}}var re="48px";var oe=function(e){var n=e.label;return Object(w.jsxs)(B,{xmlns:"http://www.w3.org/2000/svg",height:re,viewBox:"0 0 24 24",width:re,fill:te(n),children:[Object(w.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(w.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"})]})},ce="48px";var ie=function(e){var n=e.label;return Object(w.jsxs)(E,{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:ce,viewBox:"0 0 24 24",width:ce,fill:te(n),children:[Object(w.jsx)("g",{children:Object(w.jsx)("rect",{fill:"none",height:"24",width:"24"})}),Object(w.jsx)("g",{children:Object(w.jsx)("path",{d:"M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"})})]})},le="24px";var de=function(){return Object(w.jsxs)(T,{xmlns:"http://www.w3.org/2000/svg",height:le,viewBox:"0 0 24 24",width:le,fill:x,children:[Object(w.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(w.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})]})};var ae=function(e){var n=e.id,t=e.label,r=e.text,o=e.completed,i=e.createdAt,l=Object(c.useContext)(ne),d=l.deleteTodo,a=l.updateStatus,b=Object(c.useContext)(m).bgColor;return Object(w.jsxs)(U,{completed:o,bgColor:b,children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:function(){return a(n)},children:o?Object(w.jsx)(oe,{label:t}):Object(w.jsx)(ie,{label:t})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:r}),Object(w.jsx)("p",{children:i})]})]}),Object(w.jsx)("button",{onClick:function(){return d(n)},children:Object(w.jsx)(de,{})})]},n)};var be,se=function(){var e=Object(c.useContext)(_).filter,n=Object(c.useContext)(ne),t=n.todos,r=n.addTodo;return Object(c.useLayoutEffect)((function(){if(0===t.length){var e=localStorage.getItem("localTodos");e&&JSON.parse(e).map((function(e){return r({id:e.id,label:e.label,text:e.text,completed:e.completed,createdAt:e.createdAt})}))}}),[]),Object(c.useEffect)((function(){localStorage.setItem("localTodos",JSON.stringify(t))}),[t]),Object(w.jsx)(Q,{children:"all"===e?t.sort((function(e,n){return e.id-n.id})).sort((function(e,n){return e.label-n.label})).map((function(e){return Object(w.jsx)(ae,{id:e.id,label:e.label,text:e.text,completed:e.completed,createdAt:e.createdAt},e.id)})):t.filter((function(n){return"active"===e?!n.completed:n.completed})).sort((function(e,n){return e.id-n.id})).sort((function(e,n){return e.label-n.label})).map((function(e){return Object(w.jsx)(ae,{id:e.id,label:e.label,text:e.text,completed:e.completed,createdAt:e.createdAt},e.id)}))})},je=s.b.footer(be||(be=Object(b.a)(["\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  a {\n    font-size: 1rem;\n    color: ",";\n    text-decoration: none;\n  }\n"])),f);var ue,he,xe=function(){return Object(w.jsx)(je,{children:Object(w.jsx)("a",{href:"https://github.com/donghoonKang-dev",children:"\xa9 2022 donghoonKang-dev"})})},fe=s.b.dialog(ue||(ue=Object(b.a)(["\n  top: 4rem;\n  width: 100%;\n  padding: 1rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  background-color: ",";\n  box-shadow: 0px 8px 4px 2px rgba(0, 0, 0, 0.2);\n  button:not(:last-child) {\n    width: 100%;\n    margin-bottom: 0.75rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: none;\n    border: none;\n    p {\n      margin-left: 0.5rem;\n      font-size: 1.125rem;\n    }\n  }\n  button:last-child {\n    margin: 1rem;\n    font-size: 1.5rem;\n    color: ",";\n    background: none;\n    border: none;\n  }\n"])),(function(e){return e.bgColor}),u),Oe=s.b.dialog(he||(he=Object(b.a)(["\n  top: 4rem;\n  width: 100%;\n  padding: 1rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  background-color: ",";\n  box-shadow: 0px 8px 4px 2px rgba(0, 0, 0, 0.2);\n  input {\n    padding-bottom: 0.5rem;\n    width: 80%;\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: ",";\n    font-size: 1rem;\n  }\n  input::placeholder {\n    color: ",";\n  }\n  input:focus {\n    outline: none;\n  }\n  ol {\n    margin-top: 1rem;\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    li {\n      button {\n        width: 5rem;\n        height: 2rem;\n        background-color: ",";\n        border: 2px solid;\n        border-radius: 0.75rem;\n        font-size: 1rem;\n        color: ",";\n      }\n    }\n  }\n  button {\n    margin: 1rem 0;\n    background-color: ",";\n    border: none;\n    font-size: 1.5rem;\n    color: ",";\n  }\n"])),(function(e){return e.bgColor}),(function(e){return e.bgColor}),x,(function(e){return e.bgColor}),f,(function(e){return e.bgColor}),u);var ge=function(){var e=Object(c.useContext)(_),n=e.filter,t=e.handleFilter,r=Object(c.useContext)(m),o=r.bgColor,i=r.handleFilterModalVisible;return Object(w.jsxs)(fe,{bgColor:o,children:[Object(w.jsxs)("button",{onClick:function(){return t("all")},children:["all"===n?Object(w.jsx)(oe,{}):Object(w.jsx)(ie,{}),Object(w.jsx)("p",{children:"Show All"})]}),Object(w.jsxs)("button",{onClick:function(){return t("active")},children:["active"===n?Object(w.jsx)(oe,{}):Object(w.jsx)(ie,{}),Object(w.jsx)("p",{children:"Show Active"})]}),Object(w.jsxs)("button",{onClick:function(){return t("completed")},children:["completed"===n?Object(w.jsx)(oe,{}):Object(w.jsx)(ie,{}),Object(w.jsx)("p",{children:"Show Completed"})]}),Object(w.jsx)("button",{onClick:function(){return i(!1)},children:"Apply"})]})},me=t(12),pe=t.n(me);var ve,Ce,we=function(){var e=Object(c.useState)(""),n=Object(p.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(0),i=Object(p.a)(o,2),l=i[0],d=i[1],a=Object(c.useContext)(ne).addTodo,b=Object(c.useContext)(m),s=b.bgColor,j=b.handleAddModalVisible;return Object(w.jsxs)(Oe,{label:l,bgColor:s,children:[Object(w.jsx)("input",{type:"text",placeholder:"Enter new TODY",value:t,onChange:function(e){return r(e.target.value)}}),Object(w.jsxs)("ol",{children:[Object(w.jsx)("li",{children:Object(w.jsx)("button",{style:{borderColor:"#F7C978",backgroundColor:1===l?"#F7C978":s,color:1===l?"#FFFFFF":"#696969"},onClick:function(){return d(1)},children:"Need"})}),Object(w.jsx)("li",{children:Object(w.jsx)("button",{style:{borderColor:"#F68B7D",backgroundColor:2===l?"#F68B7D":s,color:2===l?"#FFFFFF":"#696969"},onClick:function(){return d(2)},children:"Want"})}),Object(w.jsx)("li",{children:Object(w.jsx)("button",{style:{borderColor:"#A6C0FE",backgroundColor:3===l?"#A6C0FE":s,color:3===l?"#FFFFFF":"#696969"},onClick:function(){return d(3)},children:"Routine"})})]}),Object(w.jsx)("button",{onClick:function(){0===t.length?alert("Enter your Tody!"):0===l?alert("Select label!"):(a({id:pe()().valueOf(),label:l,text:t,completed:!1,createdAt:pe()().format("YYYY.MM.DD HH:mm:ss")}),j(!1))},children:"Add TODY!"})]})},Fe=s.b.div(ve||(ve=Object(b.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n"])),(function(e){return e.bgColor})),ye=s.b.main(Ce||(Ce=Object(b.a)(["\n  padding: 0 1rem;\n  margin-bottom: auto;\n  section {\n    margin-top: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    h2 {\n      margin-bottom: 1.25rem;\n      font-size: 1.125rem;\n      color: #696969;\n    }\n  }\n"])));var ke=function(){var e=Object(c.useContext)(m),n=e.bgColor,t=e.filterModalVisible,r=e.addModalVisible;return Object(w.jsxs)(Fe,{bgColor:n,children:[Object(w.jsx)(W,{}),Object(w.jsxs)(ye,{children:[Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"Labels"}),Object(w.jsx)(Z,{})]}),Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"TODYs"}),Object(w.jsx)(se,{})]})]}),Object(w.jsx)(xe,{}),t&&Object(w.jsx)(ge,{}),r&&Object(w.jsx)(we,{})]})};var Me=function(e){var n=e.children,t=Object(c.useState)("all"),r=Object(p.a)(t,2),o=r[0],i=r[1];return Object(w.jsx)(_.Provider,{value:{filter:o,handleFilter:function(e){i(e)}},children:n})},ze=t(13);var Ae=function(e){var n=e.children,t=Object(c.useState)([]),r=Object(p.a)(t,2),o=r[0],i=r[1];return Object(w.jsx)(ne.Provider,{value:{todos:o,addTodo:function(e){i((function(n){return n.concat(e)}))},deleteTodo:function(e){i((function(n){return n.filter((function(n){return n.id!==e}))}))},updateStatus:function(e){var n=o.filter((function(n){return n.id===e}))[0],t=n.completed,r=Object(ze.a)(Object(ze.a)({},n),{},{completed:!t});i((function(n){return n.filter((function(n){return n.id!==e})).concat(r)}))}},children:n})};var Ve=function(e){var n=e.children,t=Object(c.useState)(!1),r=Object(p.a)(t,2),o=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(p.a)(l,2),a=d[0],b=d[1],s=Object(c.useState)(h),j=Object(p.a)(s,2),u=j[0],x=j[1];return Object(w.jsx)(m.Provider,{value:{filterModalVisible:o,addModalVisible:a,bgColor:u,handleFilterModalVisible:function(e){i(e)},handleAddModalVisible:function(e){b(e)},handleBgColor:function(e){x(e)}},children:n})};t(32);var Se=function(){return Object(w.jsx)(Me,{children:Object(w.jsx)(Ae,{children:Object(w.jsxs)(Ve,{children:[Object(w.jsx)(j,{}),Object(w.jsx)(a.c,{children:Object(w.jsx)(a.a,{path:"/",element:Object(w.jsx)(ke,{})})})]})})})};l.a.render(Object(w.jsx)(d.a,{children:Object(w.jsx)(Se,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c0c72fb9.chunk.js.map