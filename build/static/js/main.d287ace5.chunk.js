(this["webpackJsonpreact-intro"]=this["webpackJsonpreact-intro"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"clientId":"922608243494-v702cevmguj2ajgc0vkb6lrcnj4mkob2.apps.googleusercontent.com"}')},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(30),o=a.n(i),r=a(5),l=a(6),d=a(8),j=a(7),h=a(4),b=a(3),m=(a(39),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).Handler=function(){sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),sessionStorage.removeItem("id"),sessionStorage.removeItem("Guser_token"),sessionStorage.removeItem("Guser_obj")},e}return Object(l.a)(a,[{key:"render",value:function(){return null!==sessionStorage.getItem("name")&&void 0!==sessionStorage.getItem("name")||null!==sessionStorage.getItem("Guser_token")&&void 0!==sessionStorage.getItem("Guser_token")?Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-1 mb-lg-0",children:Object(s.jsx)("div",{children:Object(s.jsx)("li",{className:"nav-item ",children:Object(s.jsx)(h.b,{to:"/",className:"nav-link items",children:"Home"})})})}),Object(s.jsx)("ul",{className:"navbar-nav mr-auto mb-1 mb-lg-0",children:Object(s.jsxs)("ul",{className:"navbar-nav mr navbar-right  ",children:[Object(s.jsx)("li",{className:"nav-item left ",children:Object(s.jsxs)(h.b,{to:"/viewbookings",className:"nav-link items nav-span ",children:[Object(s.jsx)("span",{className:"material-icons",children:"account_circle "}),Object(s.jsx)("span",{children:sessionStorage.getItem("name")?sessionStorage.getItem("name"):JSON.parse(sessionStorage.getItem("Guser_obj")).name})]})}),Object(s.jsx)("li",{className:"nav-item left",onClick:this.Handler,children:Object(s.jsx)(h.b,{to:"/",className:"nav-link items",children:"Logout"})})]})})]})})}):Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-1 mb-lg-0",children:Object(s.jsx)("div",{children:Object(s.jsx)("li",{className:"nav-item ",children:Object(s.jsx)(h.b,{to:"/",className:"nav-link items",children:"Home"})})})}),Object(s.jsx)("ul",{className:"navbar-nav mr-auto mb-1 mb-lg-0",children:Object(s.jsxs)("ul",{className:"navbar-nav mr navbar-right  ",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(h.b,{to:"/register",className:"nav-link items",children:"Sign Up"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(h.b,{to:"/login",className:"nav-link items",children:"Login"})})]})})]})})})}}]),a}(c.a.Component)),u=Object(b.e)(m),O=(a(45),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).renderCity=function(){if(e.state.data)return e.state.data.map((function(e){return Object(s.jsx)("option",{value:e.city,children:e.city_name},e._id)}))},e.cityHandler=function(t){fetch("https://developerfunnel.herokuapp.com/hotels?city=".concat(t.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({hotel:t})}))},e.renderHotels=function(){if(e.state.hotel)return e.state.hotel.map((function(e){return Object(s.jsxs)("option",{value:e._id,children:[e.name,", ",e.city_name]},e._id)}))},e.hotelHandler=function(t){e.props.history.push("/details/".concat(t.target.value))},e.state={data:"",hotel:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return this.state.data&&console.log(this.state.hotel),Object(s.jsxs)("div",{className:"quick",children:[Object(s.jsx)("h3",{children:"Are you in a hurry to plan your trip, try"}),Object(s.jsx)("h2",{children:"Quick Book"}),Object(s.jsxs)("div",{className:"first",children:[Object(s.jsxs)("select",{onChange:this.cityHandler,defaultValue:"Select City",children:[Object(s.jsx)("option",{disabled:!0,children:"Select City"}),this.renderCity()]}),Object(s.jsxs)("select",{onChange:this.hotelHandler,defaultValue:"Select Hotel",children:[Object(s.jsx)("option",{disabled:!0,children:"Select Hotel"}),this.renderHotels()]})]})]})}}]),a}(c.a.Component)),p=Object(b.e)(O),g=(a(46),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).searchcall=function(){return e.state.data?e.state.data.map((function(e){return Object(s.jsxs)(h.b,{to:"/list/".concat(e.trip),className:"row sinitem",children:[Object(s.jsx)("div",{className:"col-lg-6 col-md-5  b1",children:Object(s.jsx)("img",{className:"img",src:e.image})}),Object(s.jsxs)("div",{className:"col-lg-6 col-md-3 b2 text",children:[Object(s.jsx)("h3",{children:e.name}),"Plan ",e.name," trip with us."]})]},e._id)})):Object(s.jsx)("img",{className:"loadingimg",src:"https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"})},e.state={data:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/booking",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t})})),sessionStorage.removeItem("tripId"),sessionStorage.removeItem("hotelname"),sessionStorage.removeItem("hoteladdress")}},{key:"render",value:function(){return this.state.data&&console.log(this.state.data),Object(s.jsxs)("div",{className:"quicksea",children:[Object(s.jsx)("h4",{className:"title",children:"Where to travel once in a lifetime..?"}),Object(s.jsx)("p",{className:"title",children:"Here You Go"}),Object(s.jsx)("h3",{className:"title",children:"Checkout the world's best hotels"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsx)("div",{className:"col col-lg-6",children:this.searchcall()})})})]})}}]),a}(c.a.Component)),x=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{}),Object(s.jsx)(g,{})]})},v=a(2),f=(a(47),a(14)),N=a.n(f),S="https://developerfunnel.herokuapp.com/hotellist",y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){"inp1"===e.target.name?n.setState(Object(v.a)(Object(v.a)({},n.state),{},{minVal:e.target.value})):n.setState(Object(v.a)(Object(v.a)({},n.state),{},{maxVal:e.target.value}))},n.clickHandler=function(){console.log("https://developerfunnel.herokuapp.com/hotellist/1?hcost=".concat(n.state.maxVal,"&lcost=").concat(n.state.minVal)),console.log(n.state),n.state.minVal&&n.state.maxVal&&N.a.get("https://developerfunnel.herokuapp.com/hotellist/1?hcost=".concat(n.state.maxVal,"&lcost=").concat(n.state.minVal)).then((function(e){console.log(e.data),n.setState({data:e.data})}))},n.datadisplay=function(){return n.state.data?n.state.data.length>0?n.state.data.map((function(e,t){return Object(s.jsxs)(h.b,{to:"/details/".concat(e._id),className:"row boxing",children:[Object(s.jsx)("div",{className:"col-md-6 p-md-4",children:Object(s.jsx)("img",{src:e.thumb,className:"w-100",alt:"sdsd"})}),Object(s.jsxs)("div",{className:"col-md-6 p-4 ps-md-0",children:[Object(s.jsx)("h3",{className:"mt-0",children:e.name}),Object(s.jsx)("p",{children:e.address}),Object(s.jsxs)("p",{children:["Cost : $",e.cost]})]})]},t)})):Object(s.jsx)("div",{className:"nodata",children:"No Data Found"}):Object(s.jsx)("img",{className:"loader",src:"https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"})},n.filterLogic=function(e){var t,a=e.target.value,s=sessionStorage.getItem("tripId");t=""==a?"".concat(S,"/").concat(s):"".concat(S,"/").concat(s,"?roomtype=").concat(a),N.a.get(t).then((function(e){n.setState({data:e.data})}))},n.state={data:"",minVal:"",maxVal:"",cnt:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;sessionStorage.setItem("tripId",this.props.match.params.id),N.a.get("https://developerfunnel.herokuapp.com/hotellist/".concat(this.props.match.params.id)).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return console.log("login",this.props),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row bg-light maindiv",children:[Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsxs)("div",{className:"roomFilter",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("center",{children:"Room Filter"})}),Object(s.jsxs)("div",{onChange:this.filterLogic,children:[Object(s.jsxs)("label",{className:"radio",children:[Object(s.jsx)("input",{type:"radio",value:"",name:"room"}),"All"]}),Object(s.jsxs)("label",{className:"radio",children:[Object(s.jsx)("input",{type:"radio",value:"1",name:"room"}),"Deluxe Room"]}),Object(s.jsxs)("label",{className:"radio",children:[Object(s.jsx)("input",{type:"radio",value:"2",name:"room"}),"Premium Room"]}),Object(s.jsxs)("label",{className:"radio",children:[Object(s.jsx)("input",{type:"radio",value:"3",name:"room"}),"Travel Room"]}),Object(s.jsxs)("label",{className:"radio",children:[Object(s.jsx)("input",{type:"radio",value:"4",name:"room"}),"Semi Delux Room"]})]})]}),Object(s.jsxs)("div",{onChange:this.changeHandler,className:"filter",children:[Object(s.jsx)("h3",{className:"title",children:"Price Filter"}),Object(s.jsxs)("div",{className:"paramgroup",children:[Object(s.jsx)("input",{type:"text",className:"form-control input",placeholder:"$Min","aria-label":"Username",onChange:this.changeHandler,name:"inp1"}),Object(s.jsx)("input",{type:"text",className:"form-control input",placeholder:"$Max","aria-label":"Username","aria-describedby":"basic-addon1",onChange:this.changeHandler,name:"inp2"}),Object(s.jsx)("button",{onClick:this.clickHandler,className:"btn btn-primary btn-sm",children:"Go"})]})]})]}),Object(s.jsxs)("div",{className:"col-md-9",children:[this.state.data.length>0?Object(s.jsxs)("h3",{children:["Hotels"," ",Object(s.jsxs)("span",{className:"result",children:[this.state.data.length," results found"]})," "]}):"",this.datadisplay()]})]})})}}]),a}(c.a.Component),k=Object(b.e)(y),I=(a(65),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).display=function(){return e.state.data?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"detailrow",children:[Object(s.jsx)("div",{className:"detailcol",children:Object(s.jsx)("img",{src:e.state.data.thumb})}),Object(s.jsxs)("div",{className:"detailcol",children:[Object(s.jsx)("h2",{children:e.state.data.name}),Object(s.jsxs)("p",{children:["Address : ",e.state.data.address]}),Object(s.jsxs)("p",{children:["cost : ",Object(s.jsxs)("strong",{children:["$",e.state.data.cost]})]}),Object(s.jsxs)("div",{className:"detailsrow",children:[Object(s.jsx)("div",{className:"detailscol",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("h3",{children:" Avilable Trip Types"}),e.state.data.tripType.map((function(e,t){return Object(s.jsx)("li",{children:e.name},t)}))]})}),Object(s.jsx)("div",{className:"detailscol",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("h3",{children:" Avilable Rooms"}),e.state.data.type.map((function(e,t){return Object(s.jsx)("li",{children:e.name},t)}))]})})]})]})]}),Object(s.jsxs)("div",{className:"butt",children:[Object(s.jsx)(h.b,{to:"/list/".concat(e.state.tripId),children:Object(s.jsx)("button",{className:"back",children:"Back"})}),Object(s.jsx)(h.b,{to:"/booking/".concat(e.state.data._id),children:Object(s.jsx)("button",{className:"place",children:"Go to Booking"})})]})]}):Object(s.jsx)("img",{className:"detailloadingimg",src:"https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"})},e.state={data:"",tripId:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://developerfunnel.herokuapp.com/hotelsdetails/".concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t[0],tripId:sessionStorage.getItem("tripId")})}))}},{key:"render",value:function(){return console.log("details",this.props),sessionStorage.setItem("hotelname",this.state.data.name),sessionStorage.setItem("hoteladdress",this.state.data.address),null!==sessionStorage.getItem("name")&&void 0!==sessionStorage.getItem("name")||localStorage.setItem("url",this.props.match.url),Object(s.jsx)("div",{children:this.display()})}}]),a}(c.a.Component)),w=(a(66),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).dateHandler=function(t){e.setState({Date:t.target.value})},e.nameHandler=function(t){e.setState({Name:t.target.value})},e.mobileHandler=function(t){e.setState({Mobile:t.target.value})},e.bookingHandler=function(){fetch("http://localhost:3000/Register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then(e.props.history.push("/viewbookings")),localStorage.removeItem("url")},e.state={hotelName:sessionStorage.getItem("hotelname"),hotelAddress:sessionStorage.getItem("hoteladdress"),Name:"",Mobile:"",Date:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){null!==sessionStorage.getItem("name")&&void 0!==sessionStorage.getItem("name")||void 0!==sessionStorage.getItem("Guser_token")&&null!==sessionStorage.getItem("Guser_token")||this.props.history.push("/login"),sessionStorage.getItem("name")&&this.setState(Object(v.a)(Object(v.a)({},this.state),{},{Name:sessionStorage.getItem("name")})),sessionStorage.getItem("Guser_obj")&&this.setState(Object(v.a)(Object(v.a)({},this.state),{},{Name:JSON.parse(sessionStorage.getItem("Guser_obj")).name}))}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Fill a bit details for making your holiday Awesome : "}),Object(s.jsx)("hr",{}),Object(s.jsx)("h3",{children:this.state.hotelName}),Object(s.jsx)("p",{children:this.state.hotelAddress}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Name"})}),Object(s.jsx)("input",{type:"text",placeholder:"Name",value:this.state.Name,onChange:this.nameHandler}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Phone No."})}),Object(s.jsx)("input",{type:"number",placeholder:"Phone Number",value:this.state.Mobile,onChange:this.mobileHandler}),Object(s.jsxs)("div",{className:"date",children:[Object(s.jsx)("label",{children:" Booking Date: "}),Object(s.jsx)("input",{onChange:this.dateHandler,type:"date"})]}),Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)(h.b,{to:"/",children:Object(s.jsx)("button",{type:"button",className:"cancel",children:"Cancel"})}),Object(s.jsx)(h.b,{to:"/viewbookings",children:Object(s.jsx)("button",{className:"sign",onClick:this.bookingHandler,children:"Place Booking"})})]})]})})}}]),a}(c.a.Component)),C=(a(67),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).display=function(){if(e.state.data)return e.state.data.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id}),Object(s.jsx)("td",{children:e.Name}),Object(s.jsx)("td",{children:e.Mobile}),Object(s.jsx)("td",{children:e.hotelName}),Object(s.jsx)("td",{children:e.Date})]},e.id)}))},e.state={data:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.state.data||N.a.get("http://localhost:3000/Register").then((function(t){e.setState({data:t.data})})),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["Hi ",sessionStorage.getItem("name")?sessionStorage.getItem("name"):JSON.parse(sessionStorage.getItem("Guser_obj")).name]}),Object(s.jsxs)("p",{className:"email",children:["Your Registered Email : ",Object(s.jsx)("span",{children:sessionStorage.getItem("email")?sessionStorage.getItem("email"):JSON.parse(sessionStorage.getItem("Guser_obj")).email})]}),Object(s.jsx)("p",{children:"Check your Bookings Below"})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Id"}),Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Mobile"}),Object(s.jsx)("th",{children:"Hotel"}),Object(s.jsx)("th",{children:"Booking Date"})]})}),Object(s.jsx)("tbody",{children:this.display()})]})})]})}}]),a}(c.a.Component)),H=(a(68),a(32)),G=a(33),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).login=function(){if(s.state.data.length>0)for(var e=0;e<s.state.data.length;e++)s.state.data[e].email!==s.state.email||s.state.data[e].password!==s.state.password?s.setState(Object(v.a)(Object(v.a)({},s.state),{},{error:"Enter Valid Credentials"})):s.state.data[e].email===s.state.email&&(sessionStorage.setItem("name",s.state.data[e].name),sessionStorage.setItem("id",s.state.data[e].id),sessionStorage.setItem("email",s.state.data[e].email),null===localStorage.getItem("url")||void 0===localStorage.getItem("url")?s.props.history.push("./viewbookings"):s.props.history.push("".concat(localStorage.getItem("url"))))},s.loggedinstate=function(e){if(e||e.accessToken){var t=e.accessToken,a=e.profileObj;sessionStorage.setItem("Guser_token",JSON.stringify(t)),sessionStorage.setItem("Guser_obj",JSON.stringify(a)),null===localStorage.getItem("url")||void 0===localStorage.getItem("url")?s.props.history.push("./viewbookings"):s.props.history.push("".concat(localStorage.getItem("url")))}else alert("login failed")},s.emailchange=function(e){s.setState(Object(v.a)(Object(v.a)({},s.state),{},{email:e.target.value}))},s.passwordchange=function(e){s.setState(Object(v.a)(Object(v.a)({},s.state),{},{password:e.target.value}))},s.state={email:"",password:"",error:"",data:"",islogged:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.state.data||N.a.get("http://localhost:3000/Register").then((function(t){return e.setState(Object(v.a)(Object(v.a)({},e.state),{},{data:t.data}))})),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:" form-container",children:[Object(s.jsx)("h2",{children:"Login Form"}),Object(s.jsx)("p",{children:"Please login to enjoy seamless bookings."}),Object(s.jsx)("hr",{}),Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{onChange:this.emailchange,type:"text",placeholder:"Enter Email"}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{onChange:this.passwordchange,type:"password",placeholder:"Enter Password"}),Object(s.jsx)("p",{style:{color:"orangered"},children:this.state.error?this.state.error:""}),Object(s.jsx)("button",{className:"btn",onClick:this.login,children:"Login"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"or",children:"OR"}),Object(s.jsx)(G.GoogleLogin,{className:"glogin",clientId:H.clientId,onSuccess:this.loggedinstate,onFailure:this.loggedinstate,buttonText:"Login with Google"})]})})}}]),a}(c.a.Component),P=(a(69),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).register=function(){fetch("http://localhost:3000/Register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s.state.data)}).then(s.props.history.push("./login"))},s.email=function(e){var t=Object(v.a)({},s.state.data);t.email=e.target.value,s.setState(Object(v.a)(Object(v.a)({},s.state),{},{data:t}))},s.name=function(e){var t=Object(v.a)({},s.state.data);t.name=e.target.value,s.setState(Object(v.a)(Object(v.a)({},s.state),{},{data:t}))},s.password=function(e){var t=Object(v.a)({},s.state.data);t.password=e.target.value,s.setState(Object(v.a)(Object(v.a)({},s.state),{},{data:t}))},s.state={islogged:!1,data:{name:"",email:"",password:""}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.state),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"reg-container",children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsx)("p",{children:"Please fill in this form to create an account."}),Object(s.jsx)("hr",{}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Name"})}),Object(s.jsx)("input",{type:"text",onChange:this.name,placeholder:"Enter Name"}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Email"})}),Object(s.jsx)("input",{type:"text",onChange:this.email,placeholder:"Enter Email",required:!0}),Object(s.jsx)("label",{children:Object(s.jsx)("b",{children:"Password"})}),Object(s.jsx)("input",{type:"password",onChange:this.password,placeholder:"Enter Password",name:"psw",required:!0}),Object(s.jsx)("div",{className:"clearfix",children:Object(s.jsx)("button",{onClick:this.register,className:"signupbtn",children:"Sign Up"})})]})})}}]),a}(c.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(h.a,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(b.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(b.a,{exact:!0,path:"/login",component:_}),Object(s.jsx)(b.a,{exact:!0,path:"/register",component:P}),Object(s.jsx)(b.a,{path:"/list/:id",component:k}),Object(s.jsx)(b.a,{path:"/details/:id",component:I}),Object(s.jsx)(b.a,{path:"/booking/:id",component:w}),Object(s.jsx)(b.a,{path:"/viewbookings",component:C})]})}}]),a}(c.a.Component);o.a.render(Object(s.jsx)(E,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.d287ace5.chunk.js.map