"use strict";(self.webpackChunke_commerce_website=self.webpackChunke_commerce_website||[]).push([[678],{1541:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var n=i(7294),r=i(5007),a=i(2734),o=i(8396),l=i(1508),s=i(2658),c=i(8990),p=i(1079),m=i(9102),d=i(2927),u=i(5949),x=i(5893),h=(0,u.Z)((0,x.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),g=i(8973),f=i(2456);var y=e=>{let{isLoading:t,subTitle:i,title:r,image:c,description:m}=e;const d=(0,a.Z)(),u=(0,o.Z)("(min-width:1000px)"),x=new URLSearchParams(r.toLowerCase()).toString().replace("=","");return n.createElement(l.Z,{maxWidth:"400px",borderRadius:"25px",boxShadow:`0px 0px 10px 0px ${d.palette.grey[400]}`,padding:"30px 20px",flexBasis:300,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center"},n.createElement(l.Z,{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-evenly",gap:"20px",flexDirection:u?"row":"row-reverse"},n.createElement(l.Z,{display:"flex",flexDirection:"column",gap:"20px"},t?n.createElement(f.Z,{count:3,width:"100%"}):n.createElement(l.Z,{display:"flex",flexDirection:"column",gap:u?"15px":"5px"},n.createElement(s.Z,{color:"text.secondary",fontSize:"clamp(0.4rem, 3vw, 0.8rem)"},i),n.createElement(s.Z,{fontWeight:"bold",fontSize:"24px"},r),n.createElement(s.Z,{fontSize:"0.9rem",fontWeight:"lighter"},m)),n.createElement(p.Z,{href:`/category?search=${x}`,sx:{borderRadius:"25px",color:"black",width:"160px",height:"50px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",":hover .shop-now-btn":{width:"100%",justifyContent:"flex-end"},":hover":{color:"white",cursor:"pointer"},":hover .arrow":{margin:"10px"}}},"Shop now",n.createElement(l.Z,{className:"shop-now-btn",bgcolor:"primary.main",position:"absolute",left:0,zIndex:-1,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",sx:{transition:"0.3s",transformOrigin:"left"},borderRadius:"25px"},n.createElement(h,{className:"arrow"})))),t?n.createElement(g.Z,{width:u?"150px":"100px",height:u?"150px":"100px",variant:"rounded"}):n.createElement(l.Z,{width:u?"150px":"100px",height:u?"150px":"100px",sx:{backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center"}})))},w=i(5576),E=i(7811),b=i(1862);var Z=()=>{const e=(0,o.Z)("(min-width:1000px)"),{0:t,1:i}=(0,n.useState)(0),{0:r,1:a}=(0,n.useState)(!0),{0:m,1:d}=(0,n.useState)(!1),{0:u,1:x}=(0,n.useState)([]),{0:h,1:g}=(0,n.useState)(0);return(0,n.useEffect)((()=>{(new E.Z).fetchSpotlights().then((e=>{x(e),a(!1)})).catch((e=>{a(!1),d(!0)}))}),[h]),n.createElement(w.Z,{width:"100%",height:"60vh",index:t,setIndex:i,maxIndex:u.length-1,isLoading:r,border:!0,isAuto:!0,controls:!0,swipeable:!0},m?n.createElement(b.Z,{setReloadCounter:g}):u.map((t=>n.createElement(l.Z,{width:"100%",height:"100%",display:"flex",flexDirection:e?"row":"column-reverse"},n.createElement(l.Z,{width:e?"50%":"100%",height:e?"100%":"50%",display:"flex",justifyContent:"space-evenly",alignItems:"center",position:"relative"},n.createElement(l.Z,{width:e?"80%":"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"},n.createElement(l.Z,{display:"flex",flexDirection:"column",gap:e?"20px":"1px"},n.createElement(s.Z,{variant:"h3",fontSize:"clamp(1rem, 7vw, 2.5rem)",fontWeight:"bold"},t.title),n.createElement(s.Z,null,t.description)),n.createElement(p.Z,{href:t.action.path},n.createElement(c.Z,{variant:"outlined"},t.action.title)))),n.createElement(l.Z,{width:e?"50%":"100%",height:e?"100%":"50%",sx:{backgroundImage:`url(${t.image})`,backgroundSize:"cover",backgroundPosition:"center"}})))))};var v=e=>{let{setIsContact:t,setConfirmationModal:i}=e;const u=(0,a.Z)(),x=(0,o.Z)("(min-width:1000px)"),h=(0,r.v9)((e=>e.user)),g=(0,r.v9)((e=>e.currency));return(0,n.useEffect)((()=>{"undefined"!=typeof window&&(document.title=`Home | ${u.title}`)}),[u.title]),n.createElement(l.Z,{display:"flex",justifyContent:"center"},n.createElement(l.Z,{width:x?"80%":"90%"},n.createElement(l.Z,{display:"flex",flexDirection:"column",gap:"50px"},n.createElement(Z,null),n.createElement(l.Z,{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",borderRadius:"20px",border:`1px solid ${u.palette.grey[400]}`,alignItems:"center",padding:"20px",gap:"20px"},n.createElement(s.Z,{fontSize:"clamp(1rem, 3vw, 1.5rem)",fontWeight:"bold",ml:"10px"},"Need to talk to a specialist?"),n.createElement(c.Z,{size:"big",onClick:()=>t(!0),disableElevation:!0,variant:"contained",startIcon:n.createElement(m.Z,null),sx:{width:"300px",height:"50px"}},"Contact Us Directly")),n.createElement(l.Z,{display:"flex",flexDirection:"column"},n.createElement(l.Z,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"30px"},n.createElement(s.Z,{variant:"h2",sx:{typography:"secondaryFont",fontWeight:"bold",fontSize:"clamp(1.2rem, 4vw, 2rem)"}},"Explore our catalogue"),n.createElement(s.Z,{color:"text.secondary"},"Satisfy your cravings")),n.createElement(d.Z,{user:h,currency:g,setConfirmationModal:i,title:"Clothing",category:"clothing"}),n.createElement(d.Z,{user:h,currency:g,setConfirmationModal:i,title:"Electronics",category:"electronics"}),n.createElement(d.Z,{user:h,currency:g,setConfirmationModal:i,title:"Food",category:"food"})),n.createElement(l.Z,{width:"100%",gap:"20px",height:"90%",display:"flex",flexWrap:"wrap"},n.createElement(y,{subTitle:"Up to 25% off",title:"Electronics",description:"Save on your favourite items",image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),n.createElement(y,{subTitle:"Up to 25% off",title:"Beverages",description:"Save on your favourite items",image:"https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),n.createElement(y,{subTitle:"Up to 25% off",title:"Clothing",description:"Save on your favourite items",image:"https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})),n.createElement(l.Z,{minHeight:"80vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0px"},n.createElement(l.Z,{width:"100%",borderRadius:"25px",border:`1px solid ${u.palette.grey[400]}`,display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"30px",alignItems:"center",padding:"20px 30px"},n.createElement(s.Z,{fontWeight:"bold",fontSize:"2rem",sx:{typography:"secondaryFont",fontWeight:"bold"}},"About Us"),n.createElement(l.Z,{display:"flex",alignItems:"center",width:"100%",gap:"40px",flexDirection:x?"row":"column"},n.createElement(l.Z,{width:"100%",height:"300px",sx:{backgroundImage:"url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",backgroundSize:"cover",backgroundPosition:"center"}}),n.createElement(s.Z,{width:"100%",lineHeight:"30px",textAlign:"center"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. Quisque ut purus nec tortor eleifend rhoncus. Suspendisse potenti.")),n.createElement(p.Z,{href:"/about"},n.createElement(c.Z,{variant:"contained",disableElevation:!0},"More details")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-aa43e81d6e93560ee3c0.js.map