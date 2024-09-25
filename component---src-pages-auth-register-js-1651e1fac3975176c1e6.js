"use strict";(self.webpackChunke_commerce_website=self.webpackChunke_commerce_website||[]).push([[431],{3268:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(7294),l=a(2734),r=a(1508),o=a(2658),i=a(5007),s=a(8990),m=a(1079),c=a(5949),p=a(5893),d=(0,c.Z)((0,p.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East");var u=e=>{let{setStage:t,tab:a}=e;return n.createElement(r.Z,{height:"100%",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"30px"},n.createElement(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},n.createElement(o.Z,{mt:"10px",fontSize:"clamp(1rem, 5vw, 2rem)",sx:{typography:"secondaryFont",fontWeight:"bold"}},"Register"),n.createElement(o.Z,{fontSize:"1.1rem"},"And get access to all of our services")),n.createElement(s.Z,{size:"large",variant:"contained",endIcon:n.createElement(d,null),onClick:()=>t(1)},"Start"),n.createElement(m.Z,{href:"/auth/login"+(a?"?tab="+a:"")},n.createElement(s.Z,{sx:{mt:"50px",textTransform:"none",":hover":{textDecoration:"underline"}}},"Already have an account?")))},x=(0,c.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=a(9102),g=a(8396),h=a(9834),y=a(6292),E=a(1837),b=a(3850);var Z=e=>{let{setStage:t,setRegisterForm:a,region:i}=e;const m=(0,l.Z)(),c=(0,g.Z)("(min-width:1000px)"),p=new y.Z,{0:d,1:u}=(0,n.useState)({phoneCode:i.country_code,phoneNumber:b[i.country_code].callingCode}),{0:Z,1:v}=(0,n.useState)({}),{0:S,1:C}=(0,n.useState)({firstName:"required",lastName:"required",email:"required",phoneNumber:"required"}),N=e=>{let{target:t}=e;u((e=>"phoneCode"===t.name?{...e,phoneCode:t.value,phoneNumber:b[t.value].callingCode}:"phoneNumber"===t.name?{...e,phoneNumber:p.formatPhoneNumber(e.phoneNumber,t.value,e.phoneCode)}:{...e,[t.name]:t.value})),u((e=>(C(p.getErrors(S,{name:t.name,value:e[t.name]},e)),e)))},w=e=>{let{target:t}=e;v((e=>({...e,[t.name]:!0})))};return n.createElement("form",{onSubmit:e=>{e.preventDefault(),a((e=>({...e,name:{first:d.firstName,last:d.lastName},email:d.email,phone:{code:d.phoneCode,number:d.phoneNumber}}))),u({phoneCode:i.country_code||"US",phoneNumber:b[i.country_code||"US"].callingCode}),t(2)},style:{display:"flex",flexDirection:"column",gap:"20px",width:"100%",height:"100%",justifyContent:"space-evenly"}},n.createElement(r.Z,{display:"flex",flexDirection:"column",gap:"10px"},n.createElement(r.Z,{display:"flex",flexDirection:"column"},n.createElement(r.Z,{display:"flex",gap:"5px",alignItems:"center",color:"text.secondary",padding:"5px"},n.createElement(x,{fontSize:" 0.7rem"}),n.createElement(o.Z,{fontSize:" 0.7rem",sx:{"& > span":{color:"primary.main"}}},"name",n.createElement("span",null,"*"))),n.createElement(r.Z,{border:`1px solid ${m.palette.grey[300]}`,padding:"15px 15px 0px 15px",borderRadius:"10px",display:"flex",flexWrap:"wrap",gap:c?"10px":0},n.createElement(h.Z,{size:!c&&"small",variant:"outlined",type:"name",name:"firstName",value:d.firstName,onChange:N,onBlur:w,error:Boolean(Z.firstName)&&Boolean(S.firstName),helperText:Z.firstName&&S.firstName||" ",label:"First name",sx:{flexBasis:200,flexGrow:1}}),n.createElement(h.Z,{size:!c&&"small",variant:"outlined",type:"name",label:"Last name",name:"lastName",value:d.lastName,onChange:N,onBlur:w,error:Boolean(Z.lastName)&&Boolean(S.lastName),helperText:Z.lastName&&S.lastName||" ",sx:{flexBasis:200,flexGrow:1}}))),n.createElement(r.Z,{display:"flex",flexDirection:"column"},n.createElement(r.Z,{display:"flex",gap:"5px",alignItems:"center",color:"text.secondary",padding:"5px"},n.createElement(f.Z,{fontSize:" 0.7rem"}),n.createElement(o.Z,{fontSize:" 0.7rem",sx:{"& > span":{color:"primary.main"}}},"contact",n.createElement("span",null,"*"))),n.createElement(r.Z,{border:`1px solid ${m.palette.grey[300]}`,padding:"15px 15px 0px 15px",borderRadius:"10px",display:"flex",flexWrap:"wrap",gap:c?"10px":0},n.createElement(h.Z,{size:!c&&"small",variant:"outlined",type:"email",label:"Email",name:"email",value:d.email,onChange:N,onBlur:w,error:Boolean(Z.email)&&Boolean(S.email),helperText:Z.email&&S.email||" ",sx:{flexBasis:200,flexGrow:1}}),n.createElement(E.Z,{number:"phoneNumber",code:"phoneCode",style:{flexBasis:200,flexGrow:1},size:!c&&"small",form:d,errors:S,touched:Z,handleChange:N,handleBlur:w})))),n.createElement(r.Z,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(s.Z,{variant:"outlined",onClick:()=>t(0)},"cancel"),n.createElement(s.Z,{type:"submit",variant:"contained",disableElevation:!0,disabled:!Boolean(Object.keys(Z).length)&&Boolean(Object.keys(S).length)||Boolean(Object.keys(S).length)},"next")))},v=a(5924),S=a(2214),C=a(7697),N=a(3577),w=a(1187),B=a(4708);var k=e=>{let{region:t,setStage:a,setRegisterForm:l,handleRegister:i}=e;const{0:m,1:c}=(0,n.useState)({currency:t.currency||"USD"});return n.createElement(r.Z,{sx:{display:"flex",flexDirection:"column",gap:"20px",height:"100%",justifyContent:"space-evenly",alignItems:"center"}},n.createElement(r.Z,{display:"flex",flexDirection:"column",gap:"20px"},n.createElement(o.Z,{fontWeight:"bold",fontSize:"1.3rem",sx:{display:"flex",alignItems:"center",gap:"5px"}},n.createElement(N.Z,null),"Select your currency"),n.createElement(w.Z,{form:m,handleChange:e=>{let{target:t}=e;c({currency:t.value})}})),n.createElement(r.Z,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(s.Z,{variant:"outlined",disableElevation:!0,onClick:()=>a(4)},"Back"),n.createElement(s.Z,{onClick:()=>{l((e=>({...e,payments:{...e.payments,currency:B[m.currency]}}))),i()},variant:"contained",disableElevation:!0},"confirm")))},z=a(156),D=a(4160);var R=e=>{let{setStatus:t,location:a}=e;const s=new URLSearchParams(a.search).get("tab"),m=(0,l.Z)(),c=(0,i.I0)(),{0:p,1:d}=(0,n.useState)(0),{0:x,1:f}=(0,n.useState)({}),g=(0,i.v9)((e=>e.session.region));(0,n.useEffect)((()=>{"undefined"!=typeof window&&(document.title=`Register | ${m.title}`)}),[m.title]);const h=[n.createElement(u,{setStage:d,tab:s}),n.createElement(Z,{setStage:d,setRegisterForm:f,region:g}),n.createElement(v.Z,{handleBack:()=>d(1),handleNext:e=>{f((t=>({...t,password:e}))),d(3)}}),n.createElement(S.Z,{onCancel:()=>d(2),onComplete:e=>{f((t=>({...t,addresses:{saved:[e]}}))),d(4)},enableSkip:!0,onSkip:()=>d(4)}),n.createElement(C.Z,{mobileValues:x.phone,onCancel:()=>d(3),onComplete:e=>{f((t=>({...t,payments:{...t.payments,saved:[e]}}))),d(5)},setStatus:t,enableSkip:!0,onSkip:()=>d(5)}),n.createElement(k,{region:g,setStage:d,setRegisterForm:f,handleRegister:()=>{f((e=>(c((0,z.a$)({data:e,setStatus:t,onSuccess:()=>{(0,D.c4)("/auth/login"+(s?"?tab="+s:"")),d(0)},onError:()=>{d(0)}})),{})))}})];return n.createElement(r.Z,{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},n.createElement(o.Z,{mt:"10px",fontSize:"clamp(1rem, 5vw, 2rem)",sx:{typography:"secondaryFont",fontWeight:"bold"}},Boolean(p)&&"Register"),n.createElement(r.Z,{width:"min(500px, 100%)",height:"100%",padding:"0px 20px"},h[p]))}}}]);
//# sourceMappingURL=component---src-pages-auth-register-js-1651e1fac3975176c1e6.js.map