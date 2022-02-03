"use strict";(self.webpackChunknobleui_angular=self.webpackChunknobleui_angular||[]).push([[449],{1449:(h,m,a)=>{a.r(m),a.d(m,{AuthModule:()=>d});var i=a(9808),e=a(5e3),r=a(5205);const c=function(){return{"background-image":"url(https://via.placeholder.com/219x452)"}};let p=(()=>{class t{constructor(o,l){this.router=o,this.route=l}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onLoggedin(o){o.preventDefault(),localStorage.setItem("isLoggedin","true"),localStorage.setItem("isUser","true"),localStorage.setItem("isAdmin","false"),localStorage.getItem("isLoggedin")&&this.router.navigate([this.returnUrl])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.F0),e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:30,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"nobleui-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","text","id","exampleInputEmail1","placeholder","PhoneNumber","value","1234567890",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","autocomplete","current-password","placeholder","Password","value","notPassword",1,"form-control"],[1,"form-check","mb-3"],["type","checkbox","id","authCheck",1,"form-check-input"],["for","authCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary","me-2","mb-2","mb-md-0",3,"click"]],template:function(o,l){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Secured"),e.TgZ(10,"span"),e._uU(11,"BEE"),e.qZA(),e.qZA(),e.TgZ(12,"h5",9),e._uU(13,"Welcome back! Log in to your account."),e.qZA(),e.TgZ(14,"form",10),e.TgZ(15,"div",11),e.TgZ(16,"label",12),e._uU(17,"Phone Number"),e.qZA(),e._UZ(18,"input",13),e.qZA(),e.TgZ(19,"div",11),e.TgZ(20,"label",14),e._uU(21,"Password"),e.qZA(),e._UZ(22,"input",15),e.qZA(),e.TgZ(23,"div",16),e._UZ(24,"input",17),e.TgZ(25,"label",18),e._uU(26," Remember me "),e.qZA(),e.qZA(),e.TgZ(27,"div"),e.TgZ(28,"button",19),e.NdJ("click",function(u){return l.onLoggedin(u)}),e._uU(29,"Login"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(1,c)))},directives:[i.PC,r.yS],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),t})();const s=function(){return{"background-image":"url(https://via.placeholder.com/219x452)"}},g=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth"]],decls:1,vars:0,template:function(o,l){1&o&&e._UZ(0,"router-outlet")},directives:[r.lC],encapsulation:2}),t})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:p},{path:"register",component:(()=>{class t{constructor(o){this.router=o}ngOnInit(){}onRegister(o){o.preventDefault(),localStorage.setItem("isLoggedin","true"),localStorage.getItem("isLoggedin")&&this.router.navigate(["/"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:39,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"nobleui-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample"],[1,"mb-3"],["for","exampleInputUsername1",1,"form-label"],["type","text","id","exampleInputUsername1","autocomplete","Username","placeholder","Username",1,"form-control"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","placeholder","Email",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","autocomplete","current-password","placeholder","Password",1,"form-control"],[1,"form-check","mb-3"],["type","checkbox","id","authCheck",1,"form-check-input"],["for","authCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary","me-2","mb-2","mb-md-0",3,"click"],["type","button",1,"btn","btn-outline-primary","btn-icon-text","mb-2","mb-md-0"],[1,"feather","icon-twitter","btn-icon-prepend"],["routerLink","/auth/login",1,"d-block","mt-3","text-muted"]],template:function(o,l){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Noble"),e.TgZ(10,"span"),e._uU(11,"UI"),e.qZA(),e.qZA(),e.TgZ(12,"h5",9),e._uU(13,"Create a free account."),e.qZA(),e.TgZ(14,"form",10),e.TgZ(15,"div",11),e.TgZ(16,"label",12),e._uU(17,"Username"),e.qZA(),e._UZ(18,"input",13),e.qZA(),e.TgZ(19,"div",11),e.TgZ(20,"label",14),e._uU(21,"Email address"),e.qZA(),e._UZ(22,"input",15),e.qZA(),e.TgZ(23,"div",11),e.TgZ(24,"label",16),e._uU(25,"Password"),e.qZA(),e._UZ(26,"input",17),e.qZA(),e.TgZ(27,"div",18),e._UZ(28,"input",19),e.TgZ(29,"label",20),e._uU(30," Remember me "),e.qZA(),e.qZA(),e.TgZ(31,"div"),e.TgZ(32,"button",21),e.NdJ("click",function(u){return l.onRegister(u)}),e._uU(33,"Sign up"),e.qZA(),e.TgZ(34,"button",22),e._UZ(35,"i",23),e._uU(36," Sign up with twitter "),e.qZA(),e.qZA(),e.TgZ(37,"a",24),e._uU(38,"Already a user? Sign in"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(1,s)))},directives:[i.PC,r.yS],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),t})()}]}];let d=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,r.Bz.forChild(g)]]}),t})()}}]);