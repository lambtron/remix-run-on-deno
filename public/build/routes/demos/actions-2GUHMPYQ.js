import{h as r,j as a}from"/build/_shared/chunk-JUBAN2DI.js";import{c as i,d as c,e as s}from"/build/_shared/chunk-JWP4XJYM.js";var o=i(c()),t=i(s()),m=()=>({title:"Actions Demo"});function u(){let e=a(),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{e&&n.current&&n.current.select()},[e]),(0,t.jsxs)("div",{className:"remix__page",children:[(0,t.jsxs)("main",{children:[(0,t.jsx)("h2",{children:"Actions!"}),(0,t.jsx)("p",{children:"This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."}),(0,t.jsxs)(r,{method:"post",className:"remix__form",children:[(0,t.jsx)("h3",{children:"Post an Action"}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"What is more useful when it is broken?"})}),(0,t.jsxs)("label",{children:[(0,t.jsx)("div",{children:"Answer:"}),(0,t.jsx)("input",{ref:n,name:"answer",type:"text"})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{children:"Answer!"})}),e?(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:e})}):null]})]}),(0,t.jsxs)("aside",{children:[(0,t.jsx)("h3",{children:"Additional Resources"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Guide:"," ",(0,t.jsx)("a",{href:"https://remix.run/guides/data-writes",children:"Data Writes"})]}),(0,t.jsxs)("li",{children:["API:"," ",(0,t.jsx)("a",{href:"https://remix.run/api/conventions#action",children:"Route Action Export"})]}),(0,t.jsxs)("li",{children:["API:"," ",(0,t.jsx)("a",{href:"https://remix.run/api/remix#useactiondata",children:(0,t.jsx)("code",{children:"useActionData"})})]})]})]})]})}export{u as default,m as meta};