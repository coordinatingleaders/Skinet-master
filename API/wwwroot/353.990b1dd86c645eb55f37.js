"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[353],{7353:(B,l,s)=>{s.r(l),s.d(l,{ShopModule:()=>H});var p=s(8583),v=s(4466),c=s(15);class d{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}var t=s(3018),m=s(1841);class C{constructor(){this.pageIndex=0,this.pageSize=0,this.count=0,this.data=[]}}var g=s(8002),S=s(2340),u=s(5917);let _=(()=>{class n{constructor(e){this.http=e,this.baseURL=S.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new C,this.shopParams=new d,this.productCache=new Map}getProducts(e){if(0==e)this.productCache=new Map;else if(this.productCache.size>0&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),(0,u.of)(this.pagination);let o=new m.LE;return 0!==this.shopParams.brandId&&(o=o.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(o=o.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(o=o.append("search",this.shopParams.search)),o=o.append("sort",this.shopParams.sort),o=o.append("pageIndex",this.shopParams.pageNumber.toString()),o=o.append("pageSize",this.shopParams.pageSize.toString()),this.http.get(this.baseURL+"products",{observe:"response",params:o}).pipe((0,g.U)(a=>(a.body&&(this.productCache.set(Object.values(this.shopParams).join("-"),a.body.data),this.pagination=a.body),this.pagination)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){let o;return this.productCache.forEach(a=>{o=a.find(r=>r.id===e)}),o?(0,u.of)(o):this.http.get(this.baseURL+"products/"+e)}getBrands(){return this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseURL+"products/brands").pipe((0,g.U)(e=>(this.brands=e,e)))}getTypes(){return this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseURL+"products/types").pipe((0,g.U)(e=>(this.types=e,e)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Z(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1,"Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results "),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.Oqu(e.totalCount)}}function P(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1," There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results for this filter "),t.qZA())}let b=(()=>{class n{constructor(){this.pageNumber=0,this.pageSize=0,this.totalCount=0}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"header"),t.YNc(1,Z,8,3,"span",0),t.YNc(2,P,5,0,"span",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.totalCount&&o.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===o.totalCount))},directives:[p.O5],styles:[""]}),n})();var h=s(665),f=s(9508);let x=(()=>{class n{constructor(e){this.basketService=e}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-light",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[1,"text-decoration-none",3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return o.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6,"View"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"a",7),t.TgZ(9,"h6",8),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.s9C("src",o.product.pictureUrl,t.LSH),t.s9C("alt",o.product.name),t.xp6(3),t.MGl("routerLink","/shop/",o.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",o.product.id,""),t.xp6(2),t.Oqu(o.product.name),t.xp6(2),t.Oqu(t.lcZ(13,6,o.product.price)))},directives:[c.rH,c.yS],pipes:[p.H9],styles:[".btn[_ngcontent-%COMP%]{width:45%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.75);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlaybutton[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]}),n})();var T=s(2214);let y=(()=>{class n{constructor(){this.totalCount=0,this.pageSize=0,this.pageNumber=0,this.pageChanged=new t.vpe}ngOnInit(){}onPageChange(e){this.pageChanged.emit(e.page)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(e,o){1&e&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(r){return o.onPageChange(r)}),t.qZA()),2&e&&t.Q6J("boundaryLinks",!0)("totalItems",o.totalCount)("ngModel",o.pageNumber)("itemsPerPage",o.pageSize)},directives:[T.Qt,h.JJ,h.On],styles:[""]}),n})();const A=["search"];function q(n,i){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=i.$implicit,o=t.oxw(2);t.Q6J("selected",o.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.Oqu(e.name)}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).onBrandSelected(r.id)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw(2);t.ekj("active",e.id==o.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name,"")}}function I(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).onTypeSelected(r.id)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw(2);t.ekj("active",e.id==o.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name,"")}}function O(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",10),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",11),t.NdJ("change",function(a){return t.CHM(e),t.oxw().onSortSelected(a.target.value)}),t.YNc(4,q,2,3,"option",12),t.qZA(),t.TgZ(5,"h5",13),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",14),t.YNc(8,N,2,4,"li",15),t.qZA(),t.TgZ(9,"h5",13),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",14),t.YNc(12,I,2,4,"li",15),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",18),t.TgZ(1,"input",19,20),t.NdJ("keyup.enter",function(){return t.CHM(e),t.oxw().onSearch()}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSearch()}),t._uU(4,"Search"),t.qZA(),t.TgZ(5,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().onReset()}),t._uU(6,"Reset"),t.qZA(),t.qZA()}}function M(n,i){if(1&n&&(t.TgZ(0,"div",23),t._UZ(1,"app-product-item",24),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("product",e)}}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",25),t.TgZ(1,"app-pager",26),t.NdJ("pageChanged",function(a){return t.CHM(e),t.oxw().onPageChanged(a)}),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)}}let w=(()=>{class n{constructor(e){this.shopService=e,this.totalCount=0,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=e.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(e=!1){this.shopService.getProducts(e).subscribe(o=>{o&&(this.products=o.data,this.shopParams.pageNumber=o.pageIndex,this.shopParams.pageSize=o.pageSize,this.totalCount=o.count)},o=>{console.log(o)})}getBrands(){this.shopService.getBrands().subscribe(e=>{this.brands=[{id:0,name:"ALL"},...e]},e=>{console.log(e)})}getTypes(){this.shopService.getTypes().subscribe(e=>{this.types=[{id:0,name:"ALL"},...e]},e=>{console.log(e)})}onBrandSelected(e){const o=this.shopService.getShopParams();o.brandId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.getProducts()}onTypeSelected(e){const o=this.shopService.getShopParams();o.typeId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.getProducts()}onSortSelected(e){const o=this.shopService.getShopParams();o.sort=e,this.shopService.setShopParams(o),this.getProducts()}onPageChanged(e){const o=this.shopService.getShopParams();o.pageNumber!==e&&(o.pageNumber=e,this.shopService.setShopParams(o),this.getProducts(!0))}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new d,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop"]],viewQuery:function(e,o){if(1&e&&t.Gf(A,5),2&e){let a;t.iGM(a=t.CRH())&&(o.searchTerm=a.first)}},decls:11,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","d-flex mt-2",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-secondary","ms-3","mt-3","mb-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-secondary","ms-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"d-flex","mt-2"],["type","text","placeholder","Search",1,"form-control",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"section",2),t.YNc(3,O,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4),t.TgZ(5,"div",5),t._UZ(6,"app-paging-header",6),t.YNc(7,k,7,0,"div",7),t.qZA(),t.TgZ(8,"div",1),t.YNc(9,M,2,1,"div",8),t.qZA(),t.YNc(10,U,2,3,"div",9),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.types&&o.brands),t.xp6(3),t.Q6J("totalCount",o.totalCount)("pageSize",o.shopParams.pageSize)("pageNumber",o.shopParams.pageNumber),t.xp6(1),t.Q6J("ngIf",o.products),t.xp6(2),t.Q6J("ngForOf",o.products),t.xp6(1),t.Q6J("ngIf",o.totalCount&&o.totalCount>0))},directives:[p.O5,b,p.sg,h.YN,h.Kr,x,y],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#4582ecd8;border-radius:10px}"]}),n})();var z=s(7285);function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"i",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().decrementQuantity()}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().incrementQuantity()}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().addItemToBasket()}),t._uU(15,"Add to Cart"),t.qZA(),t.qZA(),t._UZ(16,"hr",11),t.TgZ(17,"h4"),t._uU(18,"Description"),t.qZA(),t.TgZ(19,"p"),t._uU(20),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,6,e.product.price)),t.xp6(5),t.Oqu(e.quantity),t.xp6(8),t.Oqu(e.product.description)}}const F=[{path:"",component:w},{path:":id",component:(()=>{class n{constructor(e,o,a,r){this.shopService=e,this.bcService=o,this.activateRoute=a,this.basketService=r,this.quantity=1,o.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){const e=this.activateRoute.snapshot.paramMap.get("id");e&&this.shopService.getProduct(+e).subscribe(o=>{this.product=o,this.bcService.set("@productDetails",o.name)},o=>{console.log(o)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(z.pm),t.Y36(c.gz),t.Y36(f.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-detail"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluent","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font","size 1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ms-4",3,"click"],[1,"my-4"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,21,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.product))},directives:[p.O5],pipes:[p.H9],styles:[""]}),n})(),data:{breadcrumb:{alias:"productDetails"}}}];let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(F)],c.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,v.m,Q]]}),n})()}}]);