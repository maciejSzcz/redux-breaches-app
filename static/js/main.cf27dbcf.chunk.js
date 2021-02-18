(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{487:function(e,t){},502:function(e,t,a){"use strict";a.r(t);var r=a(7),o=a(0),n=a(15),i=a(60),l=a(59),c=a(191),s=a(369),u=a(128),d=a(30),m="BREACHES_SUCCESS",f="SORT_BREACHES_BY_NAME",b="SORT_BREACHES_BY_COUNT",h="DELETE_BREACH_BY_ID",p="SET_VISIBILITY_FILTER",j="SET_KEYWORD",g="ADD_BREACH",x="SET_EDITING",C="UPDATE_BREACH",D=function(){return Object(c.createAction)({endpoint:"https://user-sec-app.herokuapp.com/",method:"GET",types:["BREACHES_REQUEST",m,"BREACHES_FAILURE"]})},O=a(337),w=a(533),y=a(94),v=a(336),B=a(516),T=a(248),N=a.n(T),S=a(333),k=Object(v.a)({"@global":{".makeStyles-itemBottomRight-15 > .MuiFormControl-root.MuiTextField-root":{marginTop:"-16px"}},container:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gridColumnSpacing:"1em",marginTop:"1em",marginBottom:"1em","@media (min-width: 780px)":{gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"1fr"}},itemBottomRight:{gridRowStart:"2",gridColumn:"4 / span 7",color:"#ffffff","@media (min-width: 780px)":{gridColumn:"5",gridRowStart:"1"}},itemBottomLeft:{gridRowStart:"2",gridColumn:"1 / span 3",color:"#ffffff","@media (min-width: 780px)":{gridColumn:"4",gridRowStart:"1"}},itemTopLeft:{gridRowStart:"1",gridColumn:"1 / 3",color:"#ffffff","@media (min-width: 780px)":{gridColumn:"auto"}},itemTopCenter:{gridRowStart:"1",gridColumn:"3 / 5",color:"#ffffff","@media (min-width: 780px)":{gridColumn:"auto"}},itemTopRight:{gridRowStart:"1",gridColumn:"5 / 7",color:"#ffffff","@media (min-width: 780px)":{gridColumn:"auto"}},button:{color:"#000000",backgroundColor:"#3949ab","&:hover":{backgroundColor:"#627d98"}}}),F=function(e){var t=e.sortByName,a=e.sortByCount,o=e.setKeyword,n=e.setVisibilityFilter,i=k();return Object(r.jsxs)("div",{className:i.container,children:[Object(r.jsx)(O.a,{onClick:function(){t()},className:i.itemTopLeft,children:"Filter by name"}),Object(r.jsx)(O.a,{onClick:function(){a()},className:i.itemTopCenter,children:"Filter by count"}),Object(r.jsx)(O.a,{onClick:function(){n("SHOW_VERIFIED")},className:i.itemTopRight,children:"Show verified"}),Object(r.jsx)(O.a,{onClick:function(){n("SHOW_ALL")},className:i.itemBottomLeft,children:"Show all"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(e.target[0].value)},className:i.itemBottomRight,children:[Object(r.jsx)(S.a,{label:"Search..."}),Object(r.jsx)(O.a,{className:i.button,type:"submit",children:"Search"})]})]})},P=Object(l.b)(null,(function(e){return{sortByName:function(){e({type:f})},sortByCount:function(){e({type:b})},setVisibilityFilter:function(t){e(function(e){return{type:p,filter:e}}(t))},setKeyword:function(t){e(function(e){return{type:j,keyword:e}}(t))}}}))(F),I=a(192),M=a.n(I),E=a(372),R=a(92),_=a(375),L=a(129),A=a(510),H=a(504),W=Object(v.a)({"@global":{".MuiFormHelperText-root.Mui-error":{color:"#cf6679"},".MuiFormLabel-root.Mui-error":{color:"#cf6679"},".MuiFormLabel-root":{color:"#ffffff"},".MuiFormLabel-root.Mui-focused":{color:"#ffffff"},".MuiInputBase-input.MuiFilledInput-input":{color:"#ffffff"},".MuiFormLabel-root.Mui-focused.Mui-error":{color:"#cf6679"},".MuiInput-underline.Mui-error::after":{borderBottomColor:"#cf6679"},".MuiInputBase-root.MuiFilledInput-root":{backgroundColor:"#373837"},".MuiFormControl-root.MuiTextField-root":{margin:"0.5em 0em 0.5em 0em"}},form:{display:"flex",minWidth:"40%",flexDirection:"column",justifyContent:"center",flexWrap:"wrap",marginTop:"2em",marginBottom:"2em",padding:"1em",overflow:"auto"},list:{overflow:"auto",maxHeight:"250px",display:"flex",alignItems:"center",flexDirection:"column"},listItem:{display:"flex"},listField:{flexGrow:"2"},listAddButton:{flexGrow:"1",color:"#000000",backgroundColor:"#3949ab","&:hover":{backgroundColor:"#627d98"}},listDelButton:{flexGrow:"0.6",color:"#000000",backgroundColor:"#F44336","&:hover":{backgroundColor:"#FF7961"}},paper:{marginTop:"1em",marginBottom:"1em",backgroundColor:"#232423",minWidth:"80vw",display:"flex",justifyContent:"center",alignItems:"center"},button:{color:"#000000",backgroundColor:"#3949ab",width:"9em",margin:"0.5em",alignSelf:"center","&:hover":{backgroundColor:"#627d98"}},buttonLeaks:{color:"#000000",backgroundColor:"#3949ab",width:"9em",margin:"0.5em",alignSelf:"center","&:hover":{backgroundColor:"#627d98"}},resetButton:{color:"#000000",width:"9em",margin:"0.5em",alignSelf:"center",backgroundColor:"#F44336","&:hover":{backgroundColor:"#FF7961"}},fileContainer:{display:"inline-block",textAlign:"left",background:"#373837",padding:"16px",position:"relative",borderRadius:"3px",alignSelf:"center",margin:"0.5em"},fileInput:{color:"#ffffff"}}),q=function(e){var t=e.values,a=e.touched,o=e.errors,n=e.isSubmitting,i=e.handleChange,l=e.handleBlur,c=e.handleSubmit,s=e.handleReset,u=e.setFieldValue,d=W();return Object(r.jsx)(L.a,{className:d.paper,children:Object(r.jsxs)("form",{onSubmit:c,className:d.form,children:[Object(r.jsx)(S.a,{id:"standard-basic",label:"Name",name:"Name",type:"text",variant:"filled",placeholder:"Name",error:o.Name&&a.Name,helperText:a.Name?o.Name:void 0,value:t.Name,onChange:i,onBlur:l}),Object(r.jsx)(S.a,{id:"standard-basic",label:"Title",name:"Title",type:"text",variant:"filled",placeholder:"Title",error:o.Title&&a.Title,helperText:a.Title?o.Title:void 0,value:t.Title,onChange:i,onBlur:l}),Object(r.jsx)(S.a,{id:"standard-basic",label:"Domain",name:"Domain",type:"text",variant:"filled",placeholder:"Domain",error:o.Domain&&a.Domain,helperText:a.Domain?o.Domain:void 0,value:t.Domain,onChange:i,onBlur:l}),Object(r.jsx)(S.a,{id:"date",label:"Breach date",name:"BreachDate",type:"date",variant:"filled",error:o.BreachDate&&a.BreachDate,helperText:a.BreachDate?o.BreachDate:void 0,value:t.BreachDate,onChange:i,onBlur:l}),Object(r.jsx)(S.a,{id:"standard-number",label:"PwnCount",name:"PwnCount",type:"number",placeholder:"0",variant:"filled",error:o.PwnCount&&a.PwnCount,helperText:a.PwnCount?o.PwnCount:void 0,value:t.PwnCount,onChange:i,onBlur:l}),Object(r.jsx)(S.a,{id:"standard-multiline-flexible",label:"Description",name:"Description",placeholder:"Description",variant:"filled",rows:5,error:o.Description&&a.Description,helperText:a.Description?o.Description:void 0,value:t.Description,onChange:i,onBlur:l,multiline:!0}),Object(r.jsx)(R.a,{name:"DataClasses",render:function(e){return Object(r.jsx)(A.a,{className:d.list,children:t.DataClasses&&t.DataClasses.length>0?t.DataClasses.map((function(t,a){var n;return Object(r.jsxs)(H.a,{className:d.listItem,children:[Object(r.jsx)(S.a,{name:"DataClasses.".concat(a),label:"Data types",variant:"filled",placeholder:"Ex. Emails, passwords, etc.",error:null===(n=o.DataClasses)||void 0===n?void 0:n.index,value:t,onChange:i,onBlur:l,className:d.listField}),Object(r.jsx)(O.a,{type:"button",color:"primary",className:d.listAddButton,onClick:function(){return e.insert(a+1,"")},children:"Add"}),Object(r.jsx)(O.a,{type:"button",color:"secondary",className:d.listDelButton,onClick:function(){return e.remove(a)},children:"Delete"})]},a)})):Object(r.jsx)(O.a,{type:"button",className:d.buttonLeaks,color:"primary",onClick:function(){return e.push("")},children:"Add data leak types"})})}}),Object(r.jsx)("div",{className:d.fileContainer,children:Object(r.jsx)("input",{type:"file",name:"file",className:d.fileInput,onChange:function(e){u("file",e.currentTarget.files[0])}})}),Object(r.jsx)(O.a,{type:"submit",className:d.button,color:"primary",disabled:n,children:"Create"}),Object(r.jsx)(O.a,{type:"button",className:d.resetButton,color:"secondary",onClick:s,children:"Reset"})]})})},z=Object(R.b)({validate:function(e,t){var a={};return e.Name||(a.Name="Name is required"),e.Title||(a.Title="Title is required"),e.Domain?e.Domain.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g)||(a.Domain="Domain must be valid"):a.Domain="Domain is required",e.BreachDate?Date.parse(e.BreachDate)>Date.now()&&(a.BreachDate="Date can't be from the future"):a.BreachDate="Breach Date is required",e.PwnCount?e.PwnCount<0&&(a.PwnCount="PwnCount must be a positive value"):a.PwnCount="PwnCount is required (estimate)",e.Description?e.Description.length<20&&(a.Description="Description too short"):a.Description="Description is required",a},mapPropsToValues:function(e){return{Name:"",Title:"",Domain:"",BreachDate:"2021-01-01",PwnCount:0,Description:"",DataClasses:[],file:null}},handleSubmit:function(e,t){return Object(E.a)(M.a.mark((function a(){var r,o,n,i,l,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=t.props,o=t.setSubmitting,n=t.resetForm,(i=new FormData).append("upload",e.file),l="",!e.file){a.next=7;break}return a.next=7,fetch("https://user-sec-app.herokuapp.com/upload",{method:"POST",body:i}).then((function(e){return e.json()})).then((function(e){l=e.url})).catch((function(e){console.error("Error:",e)}));case 7:c={BreachDate:e.BreachDate,Description:e.Description,Domain:e.Domain,Name:e.Name,PwnCount:e.PwnCount,Title:e.Title,_id:(new _.a).toString(),DataClasses:e.DataClasses.map((function(e){return[e]})),LogoPath:l},r.addBreach(c),setTimeout((function(){o(!1),n()}),500);case 10:case"end":return a.stop()}}),a)})))()}})(q),V=Object(l.b)(null,(function(e){return{addBreach:function(t){e(function(e){return{type:g,breach:e}}(t))}}}))(z),G=Object(v.a)({"@global":{body:{margin:0,background:"#181918"},"td.MuiTableCell-root":{borderBottom:0,color:"#ffffff"},".MuiIconButton-root.Mui-disabled":{color:"#ffffff"},".MuiIconButton-root":{color:"#ffffff"},"span.MuiTypography-caption":{color:"#ffffff"},"svg.MuiTablePagination-selectIcon":{color:"#ffffff"}},flexContainer:{display:"flex",minHeight:"100vh",width:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{color:"#000000",backgroundColor:"#3949ab","&:hover":{backgroundColor:"#627d98"}},navText:{padding:"1em",fontSize:"1.5em"},navBar:{display:"flex",justifyContent:"center",alignItems:"center"}}),Z=function(e){var t=e.breaches,a=e.loaded,n=e.getBreaches,i=(e.sortByName,e.sortByCount,e.deleteBreachById);e.setVisibilityFilter,e.setKeyword;Object(o.useEffect)((function(){a||n()}),[n,a]);var l=G(),c=Object(B.a)("(max-width:600px)"),s=Object(B.a)("(max-width:900px)"),d=[{field:"url",title:"Logo",width:null,cellStyle:{width:60,whiteSpace:"nowrap",borderBottom:0},headerStyle:{width:60},hidden:!!c,render:function(e){return Object(r.jsx)("img",{src:e.LogoPath,alt:"logo",style:{maxHeight:30,maxWidth:60}})}},{title:"Name",field:"Name"},{title:"Domain",field:"Domain",hidden:!!c||!!s},{title:"BreachDate",field:"BreachDate",hidden:!!c||!!s,render:function(e){return Object(r.jsx)("p",{children:e.BreachDate.slice(0,10)})}},{title:"PwnCount",field:"PwnCount"},{field:"url",render:function(e){return Object(r.jsx)(O.a,{className:l.button,children:Object(r.jsx)(u.b,{to:e._id,style:{color:"#000000",textDecoration:"None"},children:"Details"})})}}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w.a,{position:"static",className:l.navBar,children:Object(r.jsx)(y.a,{type:"h2",className:l.navText,children:"Data leaks database"})}),Object(r.jsxs)("div",{className:l.flexContainer,children:[Object(r.jsx)(N.a,{columns:d,data:t,title:"Demo Title",style:{backgroundColor:"#232423",color:"#ffffff",minWidth:"80vw",maxWidth:"99%",overflow:"auto",marginBottom:"2em"},isLoading:!a,className:l.table,options:{headerStyle:{backgroundColor:"#232423",color:"#ffffff"},rowStyle:{fontFamily:"Roboto",color:"#ffffff"},cellStyle:{borderBottom:0},sorting:!1},actions:c?void 0:[{icon:"delete",tooltip:"Delete breach",onClick:function(e,t){return i(t._id)}}],components:{Toolbar:function(e){return Object(r.jsx)(P,{})}}}),Object(r.jsx)(V,{})]})]})},U=a(153),Y=Object(U.a)((function(e){return e.visibilityFilter}),(function(e){return e.breaches}),(function(e,t){switch(e){case"SHOW_ALL":return t;case"SHOW_VERIFIED":return t.filter((function(e){return e.IsVerified}));default:return t}})),J=Object(U.a)(Y,(function(e){return e.keyword}),(function(e,t){if(""!==t){var a=e.filter((function(e){return e.Name.toLowerCase().includes(t)||e.Description.toLowerCase().includes(t)}));return Array.from(new Set(a.map((function(e){return e._id})))).map((function(e){return a.find((function(t){return t._id===e}))}))}return e})),K=Object(l.b)((function(e){return{breaches:J(e.breaches),loaded:e.breaches.loaded}}),(function(e){return{getBreaches:function(){e(D())},deleteBreachById:function(t){e(function(e){return{type:h,id:e}}(t))}}}))(Z),Q=Object(U.a)((function(e){return e.breaches.breaches}),(function(e,t){return t.match.params.id}),(function(e,t){return e.filter((function(e){return e._id===t}))[0]})),X=a(28),$=a(534),ee=a(535),te=a(212),ae=a(318),re=a(376),oe=a.n(re),ne=a(210),ie=Object(o.forwardRef)((function(e,t){var a=e.values,o=e.touched,n=e.errors,i=e.isSubmitting,l=e.handleChange,c=e.handleBlur,s=e.handleSubmit,u=e.handleReset,d=e.setEditing,m=le();return Object(r.jsxs)(L.a,{className:m.modal,children:[Object(r.jsxs)("form",{onSubmit:s,spellCheck:"false",className:m.form,children:[Object(r.jsx)(S.a,{id:"standard-basic",label:"Name",name:"Name",type:"text",placeholder:"Name",variant:"filled",error:n.Name&&o.Name,helperText:o.Name?n.Name:void 0,value:a.Name,onChange:l,onBlur:c}),Object(r.jsx)(S.a,{id:"standard-basic",label:"Title",name:"Title",type:"text",placeholder:"Title",variant:"filled",error:n.Title&&o.Title,helperText:o.Title?n.Title:void 0,value:a.Title,onChange:l,onBlur:c}),Object(r.jsx)(S.a,{id:"standard-basic",label:"Domain",name:"Domain",type:"text",placeholder:"Domain",variant:"filled",error:n.Domain&&o.Domain,helperText:o.Domain?n.Domain:void 0,value:a.Domain,onChange:l,onBlur:c}),Object(r.jsx)(S.a,{id:"date",label:"Breach date",name:"BreachDate",type:"date",variant:"filled",error:n.BreachDate&&o.BreachDate,helperText:o.BreachDate?n.BreachDate:void 0,value:a.BreachDate,onChange:l,onBlur:c}),Object(r.jsx)(S.a,{id:"standard-number",label:"PwnCount",name:"PwnCount",type:"number",placeholder:"0",variant:"filled",error:n.PwnCount&&o.PwnCount,helperText:o.PwnCount?n.PwnCount:void 0,value:a.PwnCount,onChange:l,onBlur:c}),Object(r.jsx)(S.a,{id:"standard-multiline-flexible",label:"Description",name:"Description",placeholder:"Description",variant:"filled",rows:4,error:n.Description&&o.Description,value:a.Description,onChange:l,onBlur:c,multiline:!0}),Object(r.jsx)(R.a,{name:"DataClasses",render:function(e){return Object(r.jsx)(A.a,{className:m.list,children:a.DataClasses&&a.DataClasses.length>0?a.DataClasses.map((function(t,a){var o;return Object(r.jsxs)(H.a,{className:m.listItem,children:[Object(r.jsx)(S.a,{name:"DataClasses.".concat(a),label:"Data types",placeholder:"Ex. Emails, passwords, etc.",variant:"filled",error:null===(o=n.DataClasses)||void 0===o?void 0:o.index,value:t,onChange:l,onBlur:c,className:m.listField}),Object(r.jsx)(O.a,{type:"button",onClick:function(){return e.insert(a+1,"")},className:m.listAddButton,children:"Add"}),Object(r.jsx)(O.a,{type:"button",onClick:function(){return e.remove(a)},className:m.listDelButton,children:"Delete"})]},a)})):Object(r.jsx)(O.a,{type:"button",className:m.buttonLeaks,onClick:function(){return e.push("")},children:"Add data leak types"})})}}),Object(r.jsx)(O.a,{type:"submit",className:m.button,color:"primary",disabled:i,children:"Create"}),Object(r.jsx)(O.a,{type:"button",className:m.resetButton,color:"secondary",onClick:u,children:"Reset"})]}),Object(r.jsx)("div",{className:m.controls,children:Object(r.jsx)(O.a,{type:"button",variant:"outlined",className:m.closeButton,onClick:function(){return d(!1)},children:"Close"})})]})})),le=Object(v.a)({"@global":{".MuiFormHelperText-root.Mui-error":{color:"#cf6679"},".MuiFormLabel-root.Mui-error":{color:"#cf6679"},".MuiFormLabel-root":{color:"#ffffff"},".MuiFormLabel-root.Mui-focused":{color:"#ffffff"},".MuiInputBase-input.MuiInput-input":{color:"#ffffff"},".MuiFormLabel-root.Mui-focused.Mui-error":{color:"#cf6679"},".MuiInput-underline.Mui-error::after":{borderBottomColor:"#cf6679"},".MuiInputBase-root.MuiFilledInput-root":{backgroundColor:"#373837"},".MuiInputBase-input.MuiFilledInput-input":{color:"#ffffff"},".MuiFormControl-root.MuiTextField-root":{margin:"0.5em 0em 0.5em 0em"}},modal:Object(ne.a)({position:"relative",minHeight:"80vh",maxHeight:"90vh",top:"5%",left:"50%",width:"90%",marginLeft:"-45%",overflow:"auto",backgroundColor:"#232423",display:"flex",alignItems:"center",flexDirection:"column"},"@media (min-width:780px)",{width:"70%",marginLeft:"-35%"}),list:{overflow:"auto",maxHeight:"250px",display:"flex",alignItems:"center",flexDirection:"column"},listItem:{display:"flex"},listField:{flexGrow:"2"},listAddButton:{flexGrow:"1",color:"#000000",backgroundColor:"#3949ab","&:hover":{backgroundColor:"#627d98"}},listDelButton:{flexGrow:"0.6",color:"#000000",backgroundColor:"#F44336","&:hover":{backgroundColor:"#FF7961"}},closeButton:{color:"#F44336",border:"1px solid #F44336"},controls:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",position:"absolute",left:"50px",top:"20px"},form:{display:"flex",flexDirection:"column",justifyContent:"center",flexWrap:"wrap",paddingTop:"5em",minWidth:"40%",margin:"0 1em"},button:{color:"#000000",backgroundColor:"#3949ab",width:"9em",margin:"0.5em",alignSelf:"center","&:hover":{backgroundColor:"#627d98"}},buttonLeaks:{color:"#000000",backgroundColor:"#3949ab",width:"9em",margin:"0.5em",alignSelf:"center","&:hover":{backgroundColor:"#627d98"}},resetButton:{color:"#000000",width:"9em",margin:"0.5em",alignSelf:"center",backgroundColor:"#F44336","&:hover":{backgroundColor:"#FF7961"}}}),ce=ie,se=Object(v.a)({"@global":{body:{margin:0,background:"#181918"},a:{color:"#ffffff"}},Typography:{color:"#ffffff",margin:"1em 0"},listItem:{color:"#ffffff",fontSize:"0.875rem"},cardContainer:{maxWidth:"800px",backgroundColor:"#232423",marginTop:"1em",marginBottom:"1em"},flexContainer:{display:"flex",minHeight:"100vh",width:"98vw",justifyContent:"center",alignItems:"center"},controls:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},button:{color:"#000000",backgroundColor:"#3949ab","&:hover":{backgroundColor:"#627d98"}},backButton:{color:"#000000",backgroundColor:"#F44336","&:hover":{backgroundColor:"#FF7961"}}}),ue=function(e){var t,a=e.breach,o=e.loaded,n=e.getBreaches,i=e.editing,l=e.setEditing,c=se();return o?a?Object(r.jsx)("div",{className:c.flexContainer,children:Object(r.jsx)($.a,{className:c.cardContainer,children:Object(r.jsxs)(ee.a,{children:[Object(r.jsx)(y.a,{color:"textSecondary",className:c.Typography,gutterBottom:!0,children:Object(r.jsx)(O.a,{className:c.backButton,children:Object(r.jsx)(u.b,{to:"/",style:{color:"#000",textDecoration:"None"},children:"Return"})})}),Object(r.jsx)("img",{src:a.LogoPath,alt:"logo",style:{height:50}}),Object(r.jsxs)(y.a,{variant:"h6",className:c.Typography,gutterBottom:!0,children:["Name: ",a.Name]}),Object(r.jsxs)(y.a,{color:"h7",className:c.Typography,gutterBottom:!0,children:["Title: ",a.Title]}),Object(r.jsxs)(y.a,{color:"textSecondary",className:c.Typography,gutterBottom:!0,children:["Domain: ",a.Domain]}),Object(r.jsxs)(y.a,{color:"textSecondary",className:c.Typography,gutterBottom:!0,children:["Date: ",a.BreachDate.slice(0,10)]}),Object(r.jsxs)(y.a,{color:"textSecondary",className:c.Typography,gutterBottom:!0,children:["Pwn Count: ",a.PwnCount]}),Object(r.jsxs)(y.a,{variant:"body2",color:"textSecondary",className:c.Typography,component:"p",gutterBottom:!0,children:["Description: ",oe()(a.Description)]}),Object(r.jsx)(y.a,{variant:"body2",className:c.Typography,component:"p",children:"Data types leaked:"}),Object(r.jsx)("ul",{children:null===(t=a.DataClasses)||void 0===t?void 0:t.map((function(e,t){return Object(r.jsx)(y.a,{color:"textSecondary",className:c.listItem,component:"li",children:e},t)}))}),Object(r.jsx)(O.a,{type:"button",className:c.button,onClick:function(){l(!0)},children:"Edit"}),Object(r.jsx)(te.a,{open:i,onClose:function(){l(!1)},children:Object(r.jsx)(ce,Object(X.a)({},e))})]})})}):Object(r.jsx)("h1",{children:"Not found"}):Object(r.jsxs)("div",{className:c.flexContainer,children:[Object(r.jsx)(ae.a,{}),o?void 0:n()]})},de=Object(R.b)({validate:function(e,t){var a={};return e.Name||(a.Name="Name is required"),e.Title||(a.Title="Title is required"),e.Domain?e.Domain.match(/([\w.]+\.[a-z]{2,3}[^,\s]*)/g)||(a.Domain="Domain must be valid"):a.Domain="Domain is required",e.BreachDate?Date.parse(e.BreachDate)>Date.now()&&(a.BreachDate="Invalid date"):a.BreachDate="Breach Date is required",e.PwnCount?e.PwnCount<0&&(a.PwnCount="PwnCount must be a positive value"):a.PwnCount="PwnCount is required (estimate)",e.Description||(a.Description="Description is required"),a},enableReinitialize:!0,mapPropsToValues:function(e){return void 0===e.breach?{Name:"",Title:"",Domain:"",BreachDate:"2021-01-01",PwnCount:0,Description:"",DataClasses:[]}:{Name:e.breach.Name,Title:e.breach.Title,Domain:e.breach.Domain,BreachDate:e.breach.BreachDate.slice(0,10),PwnCount:e.breach.PwnCount,Description:e.breach.Description,DataClasses:e.breach.DataClasses,_id:e.breach._id}},handleSubmit:function(e,t){var a=t.props,r=t.setSubmitting,o=t.resetForm;a.updateBreach(e),a.setEditing(!1),setTimeout((function(){r(!1),o()}),500)}})(ue),me=Object(l.b)((function(e,t){return{breach:Q(e,t),loaded:e.breaches.loaded,editing:e.breaches.editing}}),(function(e){return{getBreaches:function(){e(D())},setEditing:function(t){e(function(e){return{type:x,editing:e}}(t))},updateBreach:function(t){e({type:C,breach:t})}}}))(de),fe=a(95),be={breaches:[],errors:[],visibilityFilter:"SHOW_ALL",keyword:"",loaded:!1,editing:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(X.a)(Object(X.a)({},e),{},{breaches:[].concat(Object(fe.a)(e.breaches),Object(fe.a)(t.payload)),loaded:!0});case g:var a={DataClasses:t.breach.DataClasses,_id:t.breach._id,Name:t.breach.Name,Title:t.breach.Title,Domain:t.breach.Domain,BreachDate:t.breach.BreachDate,PwnCount:t.breach.PwnCount,Description:t.breach.Description,LogoPath:t.breach.LogoPath};return Object(X.a)(Object(X.a)({},e),{},{breaches:[].concat(Object(fe.a)(e.breaches),[a])});case C:return Object(X.a)(Object(X.a)({},e),{},{breaches:Object(fe.a)(e.breaches.map((function(e){return console.log(t.breach._id),e._id===t.breach._id?Object(X.a)(Object(X.a)({},e),{},{DataClasses:t.breach.DataClasses,_id:t.breach._id,Name:t.breach.Name,Title:t.breach.Title,Domain:t.breach.Domain,BreachDate:t.breach.BreachDate,PwnCount:t.breach.PwnCount,Description:t.breach.Description}):e})))});case f:var r=e.breaches.sort((function(e,t){return e.Name.localeCompare(t.Name)}));return Object(X.a)(Object(X.a)({},e),{},{breaches:Object(fe.a)(r)});case b:var o=e.breaches.sort((function(e,t){return e.PwnCount<t.PwnCount?1:e.PwnCount>t.PwnCount?-1:0}));return Object(X.a)(Object(X.a)({},e),{},{breaches:Object(fe.a)(o)});case h:var n=e.breaches.filter((function(e){return e._id!==t.id}));return Object(X.a)(Object(X.a)({},e),{},{breaches:Object(fe.a)(n)});case p:return Object(X.a)(Object(X.a)({},e),{},{visibilityFilter:t.filter});case j:return Object(X.a)(Object(X.a)({},e),{},{keyword:t.keyword});case x:return Object(X.a)(Object(X.a)({},e),{},{editing:t.editing});default:return e}},pe=Object(i.combineReducers)({breaches:he}),je=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},ge=Object(i.createStore)(pe,je,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(c.apiMiddleware)));ge.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(ge.getState()))})),Object(n.render)(Object(r.jsx)(l.a,{store:ge,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:K}),Object(r.jsx)(d.a,{exact:!0,path:"/:id",component:me}),Object(r.jsx)(d.a,{component:function(){return Object(r.jsx)("h1",{children:"Not found"})}})]})})}),document.getElementById("root"))}},[[502,1,2]]]);
//# sourceMappingURL=main.cf27dbcf.chunk.js.map