(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{S64v:function(t,e,i){"use strict";i.r(e),i.d(e,"TestimonyModule",(function(){return je}));var o=i("Tx//"),c=i("tyNb"),n=i("P+IX"),s=i("uswQ"),r=i("ogYm"),a=i("mmyZ"),d=i("Vbab"),l=i("qXBG"),m=i("fXoL"),u=i("APW9"),f=i("UDmo"),p=i("mrSG"),h=i("NWLm"),v=i("5AYL");const{fields:g}=v.a;var y=[g.id,g.category,g.title,g.testimonyType,g.description,g.region,g.status,g.priority,g.assignedTo,g.images,g.documents,g.videos,g.position,g.anonymous,g.activity,g.tags,g.transferTo,g.createdAt,g.updatedAt],b=i("Oxlt"),w=i("QmLB"),N=i("0EQZ");let I=(()=>{class t{constructor(t){this.errorService=t,this.rows=[],this.count=0,this.loading=!1,this.filter={},this._pagination={},this.sorter={},this.selectedKeys=new N.c(!0,[]),this.exportLoading=!1,this.unlimited=!1}get hasRows(){return this.count>0}get orderBy(){const t=this.sorter;return t&&t.columnKey?`${t.columnKey}_${"desc"===t.order?"DESC":"ASC"}`:null}get limit(){if(this.unlimited)return 0;const t=this._pagination;return t&&t.pageSize?t.pageSize:10}get offset(){if(this.unlimited)return 0;const t=this._pagination;return t&&t.pageSize?t.pageIndex*t.pageSize:0}get pagination(){return!this.unlimited&&Object.assign(Object.assign({},this._pagination),{total:this.count,showSizeChanger:!0})}get paginationPageSize(){return this._pagination&&this._pagination.pageSize?this._pagination.pageSize:10}get paginationPageIndex(){return this._pagination&&this._pagination.pageIndex?this._pagination.pageIndex:0}get selectedRows(){return this.rows.filter(t=>this.selectedKeys.isSelected(t.id))}doResetSelectedKeys(){this.selectedKeys=new N.c(!0,[])}doReset(){return Object(p.a)(this,void 0,void 0,(function*(){return this.rows=[],this.count=0,this.loading=!1,this.filter={},this._pagination={},this.sorter={},this.doResetSelectedKeys(),this.exportLoading=!1,this.doFetch()}))}doExport(){return Object(p.a)(this,void 0,void 0,(function*(){try{this.exportLoading=!0;const t=this.filter,e=yield h.a.list(t,this.orderBy,null,null);new b.a(y,"testimony").transformAndExportAsExcelFile(e.rows),this.exportLoading=!1}catch(t){this.errorService.handle(t),this.exportLoading=!1}}))}doChangePagination(t){this._pagination=t,this.doFetch(this.filter,!0)}doChangeSort(t){this.sorter=t?{columnKey:t.active,order:t.direction}:{},this.doFetch(this.filter,!0)}doFetch(t,e=!1){return Object(p.a)(this,void 0,void 0,(function*(){try{this.loading=!0,this.rows=[],this.count=0,e||(this._pagination={}),this.filter=t||{},this.doResetSelectedKeys();const i=yield h.a.list(t,this.orderBy,this.limit,this.offset);this.rows=i.rows,this.count=i.count,this.loading=!1}catch(i){this.errorService.handle(i),this.loading=!1,this.rows=[],this.count=0}}))}}return t.\u0275fac=function(e){return new(e||t)(m.Rc(w.a))},t.\u0275prov=m.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var M=i("SUxV"),T=i("6SvT"),x=i("t7ZL"),S=i("zkTT"),k=i("gFX4"),L=i("3I9H");let D=(()=>{class t{constructor(t,e,i,o){this.errorService=t,this.snackbar=e,this.router=i,this.testimonyListService=o,this.loading=!1,this.socket=k(L.a.urlsocket)}doDestroy(t){return Object(p.a)(this,void 0,void 0,(function*(){try{this.loading=!0,yield h.a.destroyAll([t]),this.socket.emit("refresh",{}),this.loading=!1,this.snackbar.success(Object(d.d)("entities.testimony.destroy.success")),this.router.navigate(["/testimony"]),yield this.testimonyListService.doFetch(this.testimonyListService.filter)}catch(e){this.errorService.handle(e),this.loading=!1}}))}doDestroyAll(t){return Object(p.a)(this,void 0,void 0,(function*(){try{return this.loading=!0,yield h.a.destroyAll(t),this.loading=!1,this.testimonyListService.doResetSelectedKeys(),this.snackbar.success(Object(d.d)("entities.testimony.destroyAll.success")),this.router.navigate(["/testimony"]),this.testimonyListService.doFetch(this.testimonyListService.filter)}catch(e){this.errorService.handle(e),this.loading=!1}}))}}return t.\u0275fac=function(e){return new(e||t)(m.Rc(w.a),m.Rc(S.a),m.Rc(c.b),m.Rc(I))},t.\u0275prov=m.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=i("ofXK"),O=i("bTqV"),X=i("Qu3c"),C=i("NFeN");function F(t,e){1&t&&(m.Nc(0,"button",7),m.Ic(1,"mat-icon",8),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",9),m.Mc()),2&t&&m.dd("routerLink","/testimony/new")}function j(t,e){1&t&&(m.Nc(0,"button",7),m.Ic(1,"mat-icon",10),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",11),m.Mc()),2&t&&m.dd("routerLink","/testimony/import")}function z(t,e){if(1&t){const t=m.Oc();m.Nc(0,"span",12),m.Nc(1,"button",13),m.Tc("click",(function(){return m.nd(t),m.Xc().doDestroyAllSelected()})),m.Ic(2,"mat-icon",14),m.xd(3,"\xa0 "),m.Ic(4,"app-i18n",15),m.Mc(),m.Mc()}if(2&t){const t=m.Xc();m.dd("matTooltip",t.destroyButtonTooltip),m.wc(1),m.dd("disabled",t.destroyButtonDisabled)}}const E=function(){return["/audit-log"]},K=function(){return{entityNames:"testimony"}};function H(t,e){1&t&&(m.Nc(0,"button",16),m.Ic(1,"mat-icon",17),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",18),m.Mc()),2&t&&m.dd("routerLink",m.fd(2,E))("queryParams",m.fd(3,K))}let R=(()=>{class t{constructor(t,e,i,o,c){this.service=t,this.testimonyService=e,this.destroyService=i,this.auditLogService=o,this.confirmService=c,this.socket=k(L.a.urlsocket)}get destroyButtonDisabled(){return this.service.selectedKeys.isEmpty()||this.service.loading||this.destroyService.loading}get destroyButtonTooltip(){if(this.service.selectedKeys.isEmpty()||this.service.loading)return Object(d.d)("common.mustSelectARow")}doDestroyAllSelected(){return Object(p.a)(this,void 0,void 0,(function*(){if(yield this.confirmService.confirm())return[this.destroyService.doDestroyAll(this.service.selectedKeys.selected),this.socket.emit("refresh",{})]}))}get hasPermissionToAuditLogs(){return this.auditLogService.hasPermissionToRead}get hasPermissionToCreate(){return this.testimonyService.hasPermissionToCreate}get hasPermissionToDestroy(){return this.testimonyService.hasPermissionToDestroy}get hasPermissionToEdit(){return this.testimonyService.hasPermissionToEdit}get hasPermissionToImport(){return this.testimonyService.hasPermissionToImport}doExport(){return this.service.doExport()}get exportButtonDisabled(){return!this.service.hasRows||this.service.loading||this.service.exportLoading}get exportButtonTooltip(){if(!this.service.hasRows||this.service.loading)return Object(d.d)("common.noDataToExport")}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(I),m.Hc(M.a),m.Hc(D),m.Hc(T.a),m.Hc(x.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-list-toolbar"]],decls:9,vars:6,consts:[[1,"app-page-toolbar"],["mat-raised-button","","color","primary",3,"routerLink",4,"ngIf"],[3,"matTooltip",4,"ngIf"],["mat-raised-button","","color","primary",3,"routerLink","queryParams",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","matTooltip","click"],["inline","","fontSet","far","fontIcon","fa-file-excel"],["key","common.export"],["mat-raised-button","","color","primary",3,"routerLink"],["fontSet","fas","fontIcon","fa-plus","inline",""],["key","common.new"],["inline","","fontSet","fas","fontIcon","fa-file-import"],["key","common.import"],[3,"matTooltip"],["mat-raised-button","","color","warn",3,"disabled","click"],["inline","","fontSet","far","fontIcon","fa-trash-alt"],["key","common.destroy"],["mat-raised-button","","color","primary",3,"routerLink","queryParams"],["inline","","fontSet","fas","fontIcon","fa-history"],["key","auditLog.menu"]],template:function(t,e){1&t&&(m.Nc(0,"div",0),m.wd(1,F,4,1,"button",1),m.wd(2,j,4,1,"button",1),m.wd(3,z,5,2,"span",2),m.wd(4,H,4,4,"button",3),m.Nc(5,"button",4),m.Tc("click",(function(){return e.doExport()})),m.Ic(6,"mat-icon",5),m.xd(7,"\xa0 "),m.Ic(8,"app-i18n",6),m.Mc(),m.Mc()),2&t&&(m.wc(1),m.dd("ngIf",e.hasPermissionToCreate),m.wc(1),m.dd("ngIf",e.hasPermissionToImport),m.wc(1),m.dd("ngIf",e.hasPermissionToDestroy),m.wc(1),m.dd("ngIf",e.hasPermissionToAuditLogs),m.wc(1),m.dd("disabled",e.exportButtonDisabled)("matTooltip",e.exportButtonTooltip))},directives:[P.k,O.b,X.a,C.a,f.a,c.c],encapsulation:2}),t})();var B=i("6qfu"),A=i("3Pt+"),$=i("cscj"),_=i("jmCL"),q=i("kmnG"),U=i("qFsG"),G=i("vFJ8"),Z=i("d3UM"),Q=i("FKr1");function V(t,e){if(1&t&&(m.Nc(0,"mat-option",14),m.xd(1),m.Mc()),2&t){const t=e.$implicit;m.dd("value",t.id),m.wc(1),m.zd(" ",t.label," ")}}function Y(t,e){if(1&t&&(m.Nc(0,"mat-option",14),m.xd(1),m.Mc()),2&t){const t=e.$implicit;m.dd("value",t.id),m.wc(1),m.zd(" ",t.label," ")}}function J(t,e){if(1&t&&(m.Nc(0,"mat-option",14),m.xd(1),m.Mc()),2&t){const t=e.$implicit;m.dd("value",t.id),m.wc(1),m.zd(" ",t.label," ")}}function W(t,e){if(1&t&&(m.Nc(0,"mat-option",14),m.xd(1),m.Mc()),2&t){const t=e.$implicit;m.dd("value",t.id),m.wc(1),m.zd(" ",t.label," ")}}function tt(t,e){if(1&t){const t=m.Oc();m.Nc(0,"form",3,4),m.Tc("ngSubmit",(function(){return m.nd(t),m.Xc().doFilter()})),m.Nc(2,"div",5),m.Nc(3,"div",6),m.Ic(4,"app-autocomplete-form-field",7),m.Mc(),m.Nc(5,"div",6),m.Nc(6,"mat-form-field",8),m.Nc(7,"mat-label"),m.xd(8),m.Mc(),m.Ic(9,"input",9),m.Nc(10,"mat-error"),m.Ic(11,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(12,"div",6),m.Nc(13,"mat-form-field",8),m.Nc(14,"mat-label"),m.xd(15),m.Mc(),m.Nc(16,"mat-select",11),m.Nc(17,"mat-option"),m.xd(18,"--"),m.Mc(),m.wd(19,V,2,2,"mat-option",12),m.Mc(),m.Nc(20,"mat-error"),m.Ic(21,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(22,"div",6),m.Nc(23,"mat-form-field",8),m.Nc(24,"mat-label"),m.xd(25),m.Mc(),m.Nc(26,"mat-select",11),m.Nc(27,"mat-option"),m.xd(28,"--"),m.Mc(),m.wd(29,Y,2,2,"mat-option",12),m.Mc(),m.Nc(30,"mat-error"),m.Ic(31,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(32,"div",6),m.Nc(33,"mat-form-field",8),m.Nc(34,"mat-label"),m.xd(35),m.Mc(),m.Nc(36,"mat-select",11),m.Nc(37,"mat-option"),m.xd(38,"--"),m.Mc(),m.wd(39,J,2,2,"mat-option",12),m.Mc(),m.Nc(40,"mat-error"),m.Ic(41,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(42,"div",6),m.Nc(43,"mat-form-field",8),m.Nc(44,"mat-label"),m.xd(45),m.Mc(),m.Nc(46,"mat-select",11),m.Nc(47,"mat-option"),m.xd(48,"--"),m.Mc(),m.wd(49,W,2,2,"mat-option",12),m.Mc(),m.Nc(50,"mat-error"),m.Ic(51,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(52,"div",6),m.Ic(53,"app-autocomplete-form-field",13),m.Mc(),m.Nc(54,"div",6),m.Nc(55,"mat-form-field",8),m.Nc(56,"mat-label"),m.xd(57),m.Mc(),m.Nc(58,"mat-select",11),m.Nc(59,"mat-option"),m.xd(60,"--"),m.Mc(),m.Nc(61,"mat-option",14),m.xd(62),m.Mc(),m.Nc(63,"mat-option",14),m.xd(64),m.Mc(),m.Mc(),m.Nc(65,"mat-error"),m.Ic(66,"app-validations",10),m.Mc(),m.Mc(),m.Mc(),m.Nc(67,"div",6),m.Ic(68,"app-autocomplete-form-field",13),m.Mc(),m.Mc(),m.Nc(69,"div",15),m.Nc(70,"button",16),m.Ic(71,"mat-icon",17),m.xd(72,"\xa0 "),m.Ic(73,"app-i18n",18),m.Mc(),m.Nc(74,"button",19),m.Tc("click",(function(){return m.nd(t),m.Xc().doReset()})),m.Ic(75,"mat-icon",20),m.xd(76,"\xa0 "),m.Ic(77,"app-i18n",21),m.Mc(),m.Mc(),m.Mc()}if(2&t){const t=m.Xc();m.dd("formGroup",t.form),m.wc(4),m.dd("control",t.form.get(t.fields.category.name))("label",t.fields.category.label)("fetchFn",t.fields.category.fetchFn),m.wc(4),m.yd(t.fields.title.label),m.wc(1),m.dd("formControlName",t.fields.title.name),m.wc(2),m.dd("control",t.form.get(t.fields.title.name))("label",t.fields.title.label),m.wc(4),m.yd(t.fields.region.label),m.wc(1),m.dd("formControlName",t.fields.region.name),m.wc(3),m.dd("ngForOf",t.fields.region.options),m.wc(2),m.dd("control",t.form.get(t.fields.region.name))("label",t.fields.region.label),m.wc(4),m.yd(t.fields.testimonyType.label),m.wc(1),m.dd("formControlName",t.fields.testimonyType.name),m.wc(3),m.dd("ngForOf",t.fields.testimonyType.options),m.wc(2),m.dd("control",t.form.get(t.fields.testimonyType.name))("label",t.fields.testimonyType.label),m.wc(4),m.yd(t.fields.status.label),m.wc(1),m.dd("formControlName",t.fields.status.name),m.wc(3),m.dd("ngForOf",t.fields.status.options),m.wc(2),m.dd("control",t.form.get(t.fields.status.name))("label",t.fields.status.label),m.wc(4),m.yd(t.fields.priority.label),m.wc(1),m.dd("formControlName",t.fields.priority.name),m.wc(3),m.dd("ngForOf",t.fields.priority.options),m.wc(2),m.dd("control",t.form.get(t.fields.priority.name))("label",t.fields.priority.label),m.wc(2),m.dd("control",t.form.get(t.fields.assignedTo.name))("label",t.fields.assignedTo.label)("required",t.fields.assignedTo.required)("fetchFn",t.fields.assignedTo.fetchFn),m.wc(4),m.yd(t.fields.anonymous.label),m.wc(1),m.dd("formControlName",t.fields.anonymous.name),m.wc(3),m.dd("value",!0),m.wc(1),m.zd(" ",t.fields.anonymous.yesLabel," "),m.wc(1),m.dd("value",!1),m.wc(1),m.zd(" ",t.fields.anonymous.noLabel," "),m.wc(2),m.dd("control",t.form.get(t.fields.anonymous.name))("label",t.fields.anonymous.label),m.wc(2),m.dd("control",t.form.get(t.fields.transferTo.name))("label",t.fields.transferTo.label)("required",t.fields.transferTo.required)("fetchFn",t.fields.transferTo.fetchFn),m.wc(2),m.dd("disabled",t.loading),m.wc(4),m.dd("disabled",t.loading)}}let et=(()=>{class t{constructor(t,e,i){this.service=t,this.formBuilder=e,this.route=i,this.expanded=!1}ngOnInit(){return Object(p.a)(this,void 0,void 0,(function*(){this.buildSchema(),this.buildForm(),this.doFilter()}))}get fields(){return v.a.fields}get loading(){return this.service.loading}doToggleExpanded(){this.expanded=!this.expanded}doFilter(){if(!this.form.valid)return;this.expanded=!1;const t=this.schema.cast(this.form.value);return this.service.doFetch(t)}buildForm(){const{filter:t}=this.service;this.form=this.schema.buildForm(t,this.route.snapshot.queryParams)}doReset(){this.form=this.schema.buildForm(),this.doFilter(),this.expanded=!1}buildSchema(){this.schema=new B.a([this.fields.category,this.fields.title,this.fields.region,this.fields.testimonyType,this.fields.status,this.fields.priority,this.fields.assignedTo,this.fields.anonymous,this.fields.transferTo],this.formBuilder)}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(I),m.Hc(A.d),m.Hc(c.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-list-filter"]],decls:3,vars:4,consts:[[1,"filter"],[3,"values","fields","expanded","click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["ngForm","ngForm"],[1,"row"],[1,"col-xs-12","col-lg-6"],[3,"control","label","fetchFn"],["floatLabel","always","appearance","outline"],["matInput","",3,"formControlName"],[3,"control","label"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"control","label","required","fetchFn"],[3,"value"],[1,"filter-buttons"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["inline","","fontSet","fas","fontIcon","fa-search"],["key","common.search"],["mat-flat-button","","type","button","color","accent",3,"disabled","click"],["inline","","fontSet","fas","fontIcon","fa-undo"],["key","common.reset"]],template:function(t,e){1&t&&(m.Nc(0,"div",0),m.Nc(1,"app-filter-preview",1),m.Tc("click",(function(){return e.doToggleExpanded()})),m.Mc(),m.wd(2,tt,78,46,"form",2),m.Mc()),2&t&&(m.wc(1),m.dd("values",e.form.value)("fields",e.fields)("expanded",e.expanded),m.wc(1),m.dd("ngIf",e.form&&e.expanded))},directives:[$.a,P.k,A.s,A.n,A.h,_.a,q.c,q.f,U.b,A.c,A.m,A.g,q.b,G.a,Z.a,Q.o,P.j,O.b,C.a,f.a],encapsulation:2}),t})();var it=i("+0xr"),ot=i("Dh3D"),ct=i("M9IT"),nt=i("9Zza"),st=i("n9IN"),rt=i("inre"),at=i("Ddwb");function dt(t,e){if(1&t&&(m.Nc(0,"th",13),m.Ic(1,"app-table-th-checkbox",14),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.dd("rows",t.service.rows)("selectedKeys",t.service.selectedKeys)}}function lt(t,e){if(1&t&&(m.Nc(0,"td",15),m.Ic(1,"app-table-td-checkbox",16),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("row",t)("selectedKeys",i.service.selectedKeys)}}function mt(t,e){if(1&t&&(m.Nc(0,"th",13),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.category.label," ")}}function ut(t,e){if(1&t&&(m.Nc(0,"td",15),m.Ic(1,"app-table-item-relation-to-one",17),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("url",i.fields.category.viewUrl)("permission",i.fields.category.readPermission)("value",i.presenter(t,"category"))}}function ft(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.title.label," ")}}function pt(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"title")," ")}}function ht(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.region.label," ")}}function vt(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"region")," ")}}function gt(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.testimonyType.label," ")}}function yt(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"testimonyType")," ")}}function bt(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.status.label," ")}}function wt(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"status")," ")}}function Nt(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.priority.label," ")}}function It(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"priority")," ")}}function Mt(t,e){if(1&t&&(m.Nc(0,"th",13),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.assignedTo.label," ")}}function Tt(t,e){if(1&t&&(m.Nc(0,"td",15),m.Ic(1,"app-table-item-relation-to-one",17),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("url",i.fields.assignedTo.viewUrl)("permission",i.fields.assignedTo.readPermission)("value",i.presenter(t,"assignedTo"))}}function xt(t,e){if(1&t&&(m.Nc(0,"th",18),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.anonymous.label," ")}}function St(t,e){if(1&t&&(m.Nc(0,"td",15),m.xd(1),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.zd(" ",i.presenter(t,"anonymous")," ")}}function kt(t,e){if(1&t&&(m.Nc(0,"th",13),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.tags.label," ")}}function Lt(t,e){if(1&t&&(m.Nc(0,"td",15),m.Ic(1,"app-table-item-relation-to-many",17),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("url",i.fields.tags.viewUrl)("permission",i.fields.tags.readPermission)("value",i.presenter(t,"tags"))}}function Dt(t,e){if(1&t&&(m.Nc(0,"th",13),m.xd(1),m.Mc()),2&t){const t=m.Xc();m.wc(1),m.zd(" ",t.fields.transferTo.label," ")}}function Pt(t,e){if(1&t&&(m.Nc(0,"td",15),m.Ic(1,"app-table-item-relation-to-one",17),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("url",i.fields.transferTo.viewUrl)("permission",i.fields.transferTo.readPermission)("value",i.presenter(t,"transferTo"))}}function Ot(t,e){1&t&&m.Ic(0,"th",13)}const Xt=function(t){return["/testimony",t,"edit"]};function Ct(t,e){if(1&t&&(m.Nc(0,"button",20),m.Nc(1,"mat-icon"),m.xd(2,"edit"),m.Mc(),m.Mc()),2&t){const t=m.Xc().$implicit,e=m.Xc();m.dd("routerLink",m.gd(2,Xt,t.id))("matTooltip",e.i18n("common.edit"))}}function Ft(t,e){if(1&t){const t=m.Oc();m.Nc(0,"button",23),m.Tc("click",(function(){m.nd(t);const e=m.Xc().$implicit;return m.Xc().doDestroy(e.id)})),m.Nc(1,"mat-icon"),m.xd(2,"delete"),m.Mc(),m.Mc()}if(2&t){const t=m.Xc(2);m.dd("matTooltip",t.i18n("common.destroy"))}}const jt=function(t){return["/testimony",t]};function zt(t,e){if(1&t&&(m.Nc(0,"td",19),m.Nc(1,"button",20),m.Nc(2,"mat-icon"),m.xd(3,"search"),m.Mc(),m.Mc(),m.wd(4,Ct,3,4,"button",21),m.wd(5,Ft,3,1,"button",22),m.Mc()),2&t){const t=e.$implicit,i=m.Xc();m.wc(1),m.dd("routerLink",m.gd(4,jt,t.id))("matTooltip",i.i18n("common.view")),m.wc(3),m.dd("ngIf",i.hasPermissionToEdit),m.wc(1),m.dd("ngIf",i.hasPermissionToDestroy)}}function Et(t,e){1&t&&m.Ic(0,"tr",24)}function Kt(t,e){1&t&&m.Ic(0,"tr",25)}function Ht(t,e){1&t&&(m.Nc(0,"div",26),m.Ic(1,"app-i18n",27),m.Mc())}function Rt(t,e){1&t&&(m.Nc(0,"div",26),m.Ic(1,"app-i18n",28),m.Mc())}const Bt=function(){return[10,20,30,40]};let At=(()=>{class t{constructor(t,e,i,o){this.service=t,this.destroyService=e,this.testimonyService=i,this.confirmService=o}presenter(t,e){return v.a.presenter(t,e)}i18n(t){return Object(d.d)(t)}doDestroy(t){return Object(p.a)(this,void 0,void 0,(function*(){if(yield this.confirmService.confirm())return this.destroyService.doDestroy(t)}))}get hasPermissionToEdit(){return this.testimonyService.hasPermissionToEdit}get hasPermissionToDestroy(){return this.testimonyService.hasPermissionToDestroy}get fields(){return v.a.fields}get columns(){return["_select",this.fields.category.name,this.fields.title.name,this.fields.testimonyType.name,this.fields.region.name,this.fields.status.name,this.fields.priority.name,this.fields.assignedTo.name,this.fields.anonymous.name,this.fields.tags.name,this.fields.transferTo.name,"_actions"]}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(I),m.Hc(D),m.Hc(M.a),m.Hc(x.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-list-table"]],decls:43,vars:23,consts:[[1,"table-responsive"],["mat-table","","matSort","",2,"width","100%",3,"dataSource","matSortActive","matSortDirection","matSortChange"],["matColumnDef","_select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","_actions"],["style","width: 180px; text-align: right;","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],["showFirstLastButtons","",3,"disabled","pageIndex","pageSize","pageSizeOptions","length","page"],["mat-header-cell",""],[3,"rows","selectedKeys"],["mat-cell",""],[3,"row","selectedKeys"],[3,"url","permission","value"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",2,"width","180px","text-align","right"],["mat-icon-button","","type","button","color","primary",3,"routerLink","matTooltip"],["mat-icon-button","","type","button","color","primary",3,"routerLink","matTooltip",4,"ngIf"],["mat-icon-button","","type","button","color","primary",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","type","button","color","primary",3,"matTooltip","click"],["mat-header-row",""],["mat-row",""],[1,"mat-table-message"],["key","table.noData"],["key","table.loading"]],template:function(t,e){1&t&&(m.Nc(0,"div",0),m.Nc(1,"table",1),m.Tc("matSortChange",(function(t){return e.service.doChangeSort(t)})),m.Lc(2,2),m.wd(3,dt,2,2,"th",3),m.wd(4,lt,2,2,"td",4),m.Kc(),m.Lc(5,5),m.wd(6,mt,2,1,"th",3),m.wd(7,ut,2,3,"td",4),m.Kc(),m.Lc(8,5),m.wd(9,ft,2,1,"th",6),m.wd(10,pt,2,1,"td",4),m.Kc(),m.Lc(11,5),m.wd(12,ht,2,1,"th",6),m.wd(13,vt,2,1,"td",4),m.Kc(),m.Lc(14,5),m.wd(15,gt,2,1,"th",6),m.wd(16,yt,2,1,"td",4),m.Kc(),m.Lc(17,5),m.wd(18,bt,2,1,"th",6),m.wd(19,wt,2,1,"td",4),m.Kc(),m.Lc(20,5),m.wd(21,Nt,2,1,"th",6),m.wd(22,It,2,1,"td",4),m.Kc(),m.Lc(23,5),m.wd(24,Mt,2,1,"th",3),m.wd(25,Tt,2,3,"td",4),m.Kc(),m.Lc(26,5),m.wd(27,xt,2,1,"th",6),m.wd(28,St,2,1,"td",4),m.Kc(),m.Lc(29,5),m.wd(30,kt,2,1,"th",3),m.wd(31,Lt,2,3,"td",4),m.Kc(),m.Lc(32,5),m.wd(33,Dt,2,1,"th",3),m.wd(34,Pt,2,3,"td",4),m.Kc(),m.Lc(35,7),m.wd(36,Ot,1,0,"th",3),m.wd(37,zt,6,6,"td",8),m.Kc(),m.wd(38,Et,1,0,"tr",9),m.wd(39,Kt,1,0,"tr",10),m.Mc(),m.wd(40,Ht,2,0,"div",11),m.wd(41,Rt,2,0,"div",11),m.Mc(),m.Nc(42,"mat-paginator",12),m.Tc("page",(function(t){return e.service.doChangePagination(t)})),m.Mc()),2&t&&(m.wc(1),m.dd("dataSource",e.service.rows)("matSortActive",e.service.sorter.columnKey)("matSortDirection",e.service.sorter.order),m.wc(4),m.dd("matColumnDef",e.fields.category.name),m.wc(3),m.dd("matColumnDef",e.fields.title.name),m.wc(3),m.dd("matColumnDef",e.fields.region.name),m.wc(3),m.dd("matColumnDef",e.fields.testimonyType.name),m.wc(3),m.dd("matColumnDef",e.fields.status.name),m.wc(3),m.dd("matColumnDef",e.fields.priority.name),m.wc(3),m.dd("matColumnDef",e.fields.assignedTo.name),m.wc(3),m.dd("matColumnDef",e.fields.anonymous.name),m.wc(3),m.dd("matColumnDef",e.fields.tags.name),m.wc(3),m.dd("matColumnDef",e.fields.transferTo.name),m.wc(6),m.dd("matHeaderRowDef",e.columns),m.wc(1),m.dd("matRowDefColumns",e.columns),m.wc(1),m.dd("ngIf",!e.service.loading&&!e.service.count),m.wc(1),m.dd("ngIf",e.service.loading),m.wc(1),m.dd("disabled",e.service.loading)("pageIndex",e.service.paginationPageIndex)("pageSize",e.service.paginationPageSize)("pageSizeOptions",m.fd(22,Bt))("length",e.service.count))},directives:[it.j,ot.a,it.c,it.e,it.b,it.g,it.i,P.k,ct.a,it.d,nt.a,it.a,st.a,rt.a,ot.b,at.a,O.b,c.c,X.a,C.a,it.f,it.h,f.a],encapsulation:2}),t})(),$t=(()=>{class t{constructor(t){this.authService=t,this.breadcrumb=[[Object(d.d)("dashboard.menu")],[Object(d.d)("entities.testimony.menu")]]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(l.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-list"]],decls:7,vars:1,consts:[[3,"items"],[1,"app-content-page"],[1,"app-content-title"],["key","entities.testimony.list.title"]],template:function(t,e){1&t&&(m.Ic(0,"app-breadcrumb",0),m.Nc(1,"div",1),m.Nc(2,"h1",2),m.Ic(3,"app-i18n",3),m.Mc(),m.Ic(4,"app-testimony-list-toolbar"),m.Ic(5,"app-testimony-list-filter"),m.Ic(6,"app-testimony-list-table"),m.Mc()),2&t&&m.dd("items",e.breadcrumb)},directives:[u.a,f.a,R,et,At],encapsulation:2}),t})(),_t=(()=>{class t{constructor(t,e,i){this.errorService=t,this.snackbar=e,this.router=i,this.loading=!1,this.record=null}doFind(t){return Object(p.a)(this,void 0,void 0,(function*(){try{this.record=null,this.loading=!0,this.record=yield h.a.find(t),this.loading=!1}catch(e){this.errorService.handle(e),this.record=null,this.loading=!1,this.router.navigate(["/testimony"])}}))}}return t.\u0275fac=function(e){return new(e||t)(m.Rc(w.a),m.Rc(S.a),m.Rc(c.b))},t.\u0275prov=m.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const qt=function(t){return["/testimony",t,"edit"]};function Ut(t,e){if(1&t&&(m.Nc(0,"button",4),m.Ic(1,"mat-icon",5),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",6),m.Mc()),2&t){const t=m.Xc();m.dd("routerLink",m.gd(1,qt,t.record.id))}}function Gt(t,e){if(1&t){const t=m.Oc();m.Nc(0,"button",7),m.Tc("click",(function(){return m.nd(t),m.Xc().doDestroy()})),m.Ic(1,"mat-icon",8),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",9),m.Mc()}if(2&t){const t=m.Xc();m.dd("disabled",t.destroyLoading)}}const Zt=function(){return["/audit-log"]},Qt=function(t){return{entityId:t}};function Vt(t,e){if(1&t&&(m.Nc(0,"button",10),m.Ic(1,"mat-icon",11),m.xd(2,"\xa0 "),m.Ic(3,"app-i18n",12),m.Mc()),2&t){const t=m.Xc();m.dd("routerLink",m.fd(2,Zt))("queryParams",m.gd(3,Qt,t.record.id))}}let Yt=(()=>{class t{constructor(t,e,i,o,c){this.service=t,this.testimonyService=e,this.destroyService=i,this.auditLogService=o,this.confirmService=c}doDestroy(){return Object(p.a)(this,void 0,void 0,(function*(){if(yield this.confirmService.confirm())return this.destroyService.doDestroy(this.record.id)}))}get destroyLoading(){return this.destroyService.loading}get hasPermissionToDestroy(){return this.testimonyService.hasPermissionToDestroy}get hasPermissionToEdit(){return this.testimonyService.hasPermissionToEdit}get hasPermissionToImport(){return this.testimonyService.hasPermissionToImport}get hasPermissionToAuditLogs(){return this.auditLogService.hasPermissionToRead}get record(){return this.service.record}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(_t),m.Hc(M.a),m.Hc(D),m.Hc(T.a),m.Hc(x.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-view-toolbar"]],decls:4,vars:3,consts:[[1,"app-page-toolbar"],["mat-raised-button","","color","primary",3,"routerLink",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-flat-button","",3,"routerLink","queryParams",4,"ngIf"],["mat-raised-button","","color","primary",3,"routerLink"],["inline","","fontSet","far","fontIcon","fa-edit"],["key","common.edit"],["mat-raised-button","","color","primary",3,"disabled","click"],["inline","","fontSet","far","fontIcon","fa-trash-alt"],["key","common.destroy"],["mat-flat-button","",3,"routerLink","queryParams"],["inline","","fontSet","fas","fontIcon","fa-history"],["key","auditLog.menu"]],template:function(t,e){1&t&&(m.Nc(0,"div",0),m.wd(1,Ut,4,3,"button",1),m.wd(2,Gt,4,1,"button",2),m.wd(3,Vt,4,5,"button",3),m.Mc()),2&t&&(m.wc(1),m.dd("ngIf",e.record&&e.hasPermissionToEdit),m.wc(1),m.dd("ngIf",e.record&&e.hasPermissionToDestroy),m.wc(1),m.dd("ngIf",e.record&&e.hasPermissionToAuditLogs))},directives:[P.k,O.b,c.c,C.a,f.a],encapsulation:2}),t})();var Jt=i("Xa2L"),Wt=i("wZkO"),te=i("2xaH"),ee=i("E99N"),ie=i("f0Cb"),oe=i("YGpq"),ce=i("XG4R"),ne=i("8SCG"),se=i("WpVw");function re(t,e){1&t&&(m.Nc(0,"div",6),m.Ic(1,"mat-spinner",7),m.Mc())}const ae=function(t){return{src:t,type:"audio/mp3"}},de=function(t){return[t]},le=function(t){return{autoplay:!1,controls:!0,sources:t}};function me(t,e){if(1&t&&(m.Nc(0,"div",20),m.Ic(1,"app-vjs-player",24),m.Mc()),2&t){const t=m.Xc().$implicit,e=m.Xc(2);m.wc(1),m.dd("label",e.fields.audio.label)("options",m.gd(6,le,m.gd(4,de,m.gd(2,ae,"http://85.159.212.11:3000/api/file/download?privateUrl="+t.privateUrl))))}}function ue(t,e){if(1&t&&(m.Nc(0,"div"),m.wd(1,me,2,8,"div",23),m.Mc()),2&t){const t=m.Xc(2);m.wc(1),m.dd("ngIf",0!==t.record.audio.length)}}const fe=function(t){return{src:t,type:"video/mp4"}};function pe(t,e){if(1&t&&(m.Nc(0,"div"),m.Ic(1,"app-vjs-player",24),m.Mc()),2&t){const t=e.$implicit,i=m.Xc(3);m.wc(1),m.dd("label",i.fields.videos.label)("options",m.gd(6,le,m.gd(4,de,m.gd(2,fe,"http://85.159.212.11:3000/api/file/download?privateUrl="+t.privateUrl))))}}function he(t,e){if(1&t&&(m.Nc(0,"div",19),m.wd(1,pe,2,8,"div",21),m.Mc()),2&t){const t=m.Xc(2);m.wc(1),m.dd("ngForOf",t.record.videos)}}function ve(t,e){if(1&t&&(m.Nc(0,"div"),m.Nc(1,"mat-tab-group"),m.Nc(2,"mat-tab",8),m.Nc(3,"div",9),m.Nc(4,"div",10),m.Nc(5,"div",11),m.Ic(6,"app-view-item-text",12),m.Mc(),m.Nc(7,"div",11),m.Ic(8,"app-view-item-relation-to-one",13),m.Mc(),m.Nc(9,"div",11),m.Ic(10,"app-view-item-text",12),m.Mc(),m.Nc(11,"div",14),m.Ic(12,"app-view-item-text",12),m.Mc(),m.Nc(13,"div",15),m.Ic(14,"app-view-item-text",12),m.Mc(),m.Mc(),m.Ic(15,"mat-divider",16),m.Nc(16,"div",10),m.Nc(17,"div",11),m.Ic(18,"app-view-item-text",12),m.Mc(),m.Nc(19,"div",11),m.Ic(20,"app-view-item-text",12),m.Mc(),m.Nc(21,"div",17),m.Ic(22,"app-view-item-text",12),m.Mc(),m.Mc(),m.Ic(23,"mat-divider",16),m.Nc(24,"div",10),m.Nc(25,"div",11),m.Ic(26,"app-view-item-relation-to-one",13),m.Mc(),m.Nc(27,"div",11),m.Ic(28,"app-view-item-relation-to-one",13),m.Mc(),m.Nc(29,"div",11),m.Ic(30,"app-view-item-relation-to-one",13),m.Mc(),m.Nc(31,"div",11),m.Ic(32,"app-view-item-text",12),m.Mc(),m.Mc(),m.Ic(33,"mat-divider",16),m.Nc(34,"div",10),m.Nc(35,"div",17),m.Ic(36,"app-view-item-relation-to-many",13),m.Mc(),m.Nc(37,"div",17),m.Ic(38,"app-view-item-text",12),m.Mc(),m.Mc(),m.Mc(),m.Mc(),m.Nc(39,"mat-tab",18),m.Nc(40,"div",9),m.Nc(41,"div",10),m.Nc(42,"div",19),m.Ic(43,"app-view-item-images",12),m.Mc(),m.Nc(44,"div",20),m.wd(45,ue,2,1,"div",21),m.Mc(),m.Mc(),m.Nc(46,"div",10),m.wd(47,he,2,1,"div",22),m.Nc(48,"div",20),m.Ic(49,"app-view-item-files",12),m.Mc(),m.Mc(),m.Mc(),m.Mc(),m.Mc(),m.Mc()),2&t){const t=m.Xc();m.wc(2),m.dd("label",t.i18n("common.information")),m.wc(4),m.dd("label",t.fields.testimonyType.label)("value",t.presenter(t.record,"testimonyType")),m.wc(2),m.dd("label",t.fields.category.label)("url",t.fields.category.viewUrl)("permission",t.fields.category.readPermission)("value",t.presenter(t.record,"category")),m.wc(2),m.dd("label",t.fields.priority.label)("value",t.presenter(t.record,"priority")),m.wc(2),m.dd("label",t.fields.status.label)("value",t.presenter(t.record,"status")),m.wc(2),m.dd("label",t.fields.anonymous.label)("value",t.presenter(t.record,"anonymous")),m.wc(4),m.dd("label",t.fields.title.label)("value",t.presenter(t.record,"title")),m.wc(2),m.dd("label",t.fields.contact.label)("value",t.presenter(t.record,"contact")),m.wc(2),m.dd("label",t.fields.description.label)("value",t.presenter(t.record,"description")),m.wc(4),m.dd("label",t.fields.assignedTo.label)("url",t.fields.assignedTo.viewUrl)("permission",t.fields.assignedTo.readPermission)("value",t.presenter(t.record,"assignedTo")),m.wc(2),m.dd("label",t.fields.transferTo.label)("url",t.fields.transferTo.viewUrl)("permission",t.fields.transferTo.readPermission)("value",t.presenter(t.record,"transferTo")),m.wc(2),m.dd("label",t.fields.createdBy.label)("url",t.fields.createdBy.viewUrl)("permission",t.fields.createdBy.readPermission)("value",t.presenter(t.record,"createdBy")),m.wc(2),m.dd("label",t.fields.region.label)("value",t.presenter(t.record,"region")),m.wc(4),m.dd("label",t.fields.tags.label)("url",t.fields.tags.viewUrl)("permission",t.fields.tags.readPermission)("value",t.presenter(t.record,"tags")),m.wc(2),m.dd("label",t.fields.position.label)("value",t.presenter(t.record,"position")),m.wc(1),m.dd("label",t.i18n("common.attachements")),m.wc(4),m.dd("label",t.fields.images.label)("value",t.presenter(t.record,"images")),m.wc(2),m.dd("ngForOf",t.record.audio),m.wc(2),m.dd("ngIf",0!==t.record.videos.length),m.wc(2),m.dd("label",t.fields.documents.label)("value",t.presenter(t.record,"documents"))}}let ge=(()=>{class t{constructor(t,e,i){this.service=t,this.route=e,this.authService=i,this.breadcrumb=[[Object(d.d)("dashboard.menu")],[Object(d.d)("entities.testimony.menu"),"/testimony"],[Object(d.d)("entities.testimony.view.title")]]}ngOnInit(){return Object(p.a)(this,void 0,void 0,(function*(){yield this.service.doFind(this.route.snapshot.paramMap.get("id"))}))}presenter(t,e){return v.a.presenter(t,e)}i18n(t){return Object(d.d)(t)}get fields(){return v.a.fields}get loading(){return this.service.loading}get record(){return this.service.record}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(_t),m.Hc(c.a),m.Hc(l.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-view"]],decls:7,vars:3,consts:[[3,"items"],[1,"app-content-page"],[1,"app-content-title"],["key","entities.testimony.view.title"],["class","app-page-spinner",4,"ngIf"],[4,"ngIf"],[1,"app-page-spinner"],["color","accent"],[1,"tab",3,"label"],[1,"mat-tab"],[1,"row"],[1,"col-md-3"],[3,"label","value"],[3,"label","url","permission","value"],[1,"col-md-2"],[1,"col-md-1"],[2,"margin-top","10px","margin-bottom","10px"],[1,"col-md-6"],[3,"label"],[1,"col-md-8"],[1,"col-md-4"],[4,"ngFor","ngForOf"],["class","col-md-8",4,"ngIf"],["class","col-md-4",4,"ngIf"],[3,"label","options"]],template:function(t,e){1&t&&(m.Ic(0,"app-breadcrumb",0),m.Nc(1,"div",1),m.Nc(2,"h1",2),m.Ic(3,"app-i18n",3),m.Mc(),m.Ic(4,"app-testimony-view-toolbar"),m.wd(5,re,2,0,"div",4),m.wd(6,ve,50,46,"div",5),m.Mc()),2&t&&(m.dd("items",e.breadcrumb),m.wc(5),m.dd("ngIf",e.loading),m.wc(1),m.dd("ngIf",!e.loading))},directives:[u.a,f.a,Yt,P.k,Jt.b,Wt.c,Wt.a,te.a,ee.a,ie.a,oe.a,ce.a,P.j,ne.a,se.a],encapsulation:2}),t})();var ye=i("zdBv");let be=(()=>{class t{constructor(t){this.authService=t,this.breadcrumb=[[Object(d.d)("dashboard.menu")],[Object(d.d)("entities.testimony.menu"),"/testimony"],[Object(d.d)("entities.testimony.importer.title")]]}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(l.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-importer"]],decls:5,vars:1,consts:[[3,"items"],[1,"app-content-page"],[1,"app-content-title"],["key","entities.testimony.importer.title"]],template:function(t,e){1&t&&(m.Ic(0,"app-breadcrumb",0),m.Nc(1,"div",1),m.Nc(2,"h1",2),m.Ic(3,"app-i18n",3),m.Mc(),m.Ic(4,"app-importer"),m.Mc()),2&t&&m.dd("items",e.breadcrumb)},directives:[u.a,f.a,ye.a],encapsulation:2}),t})();var we=i("YnoM"),Ne=i("ZE+5");function Ie(t,e){1&t&&m.Ic(0,"app-i18n",7)}function Me(t,e){1&t&&m.Ic(0,"app-i18n",8)}function Te(t,e){1&t&&(m.Nc(0,"div",9),m.Ic(1,"mat-spinner",10),m.Mc())}function xe(t,e){if(1&t){const t=m.Oc();m.Nc(0,"app-testimony-form",11),m.Tc("save",(function(e){return m.nd(t),m.Xc().doSave(e)}))("cancel",(function(){return m.nd(t),m.Xc().doCancel()})),m.Mc()}if(2&t){const t=m.Xc();m.dd("saveLoading",t.saveLoading)("record",t.record)("isEditing",t.isEditing)("modal",!1)}}let Se=(()=>{class t{constructor(t,e,i,o){this.service=t,this.route=e,this.router=i,this.authService=o,this.breadcrumb=[[Object(d.d)("dashboard.menu")],[Object(d.d)("entities.testimony.menu"),"/testimony"],[this.isEditing?Object(d.d)("entities.testimony.edit.title"):Object(d.d)("entities.testimony.new.title")]]}ngOnInit(){return Object(p.a)(this,void 0,void 0,(function*(){yield this.service.doInit(this.route.snapshot.paramMap.get("id"))}))}get isEditing(){return this.route.snapshot.paramMap.has("id")}get initLoading(){return this.service.initLoading}get saveLoading(){return this.service.saveLoading}get record(){return this.service.record}doSave(t){return this.isEditing?this.service.doUpdate(t.id,t.values):this.service.doCreate(t.values)}doCancel(){this.router.navigate(["/testimony"])}}return t.\u0275fac=function(e){return new(e||t)(m.Hc(we.a),m.Hc(c.a),m.Hc(c.b),m.Hc(l.a))},t.\u0275cmp=m.Bc({type:t,selectors:[["app-testimony-form-page"]],decls:7,vars:5,consts:[[3,"items"],[1,"app-content-page"],[1,"app-content-title"],["key","entities.testimony.edit.title",4,"ngIf"],["key","entities.testimony.new.title",4,"ngIf"],["class","app-page-spinner",4,"ngIf"],[3,"saveLoading","record","isEditing","modal","save","cancel",4,"ngIf"],["key","entities.testimony.edit.title"],["key","entities.testimony.new.title"],[1,"app-page-spinner"],["color","accent"],[3,"saveLoading","record","isEditing","modal","save","cancel"]],template:function(t,e){1&t&&(m.Ic(0,"app-breadcrumb",0),m.Nc(1,"div",1),m.Nc(2,"h1",2),m.wd(3,Ie,1,0,"app-i18n",3),m.wd(4,Me,1,0,"app-i18n",4),m.Mc(),m.wd(5,Te,2,0,"div",5),m.wd(6,xe,1,4,"app-testimony-form",6),m.Mc()),2&t&&(m.dd("items",e.breadcrumb),m.wc(3),m.dd("ngIf",e.isEditing),m.wc(1),m.dd("ngIf",!e.isEditing),m.wc(1),m.dd("ngIf",e.initLoading),m.wc(1),m.dd("ngIf",!e.initLoading))},directives:[u.a,P.k,f.a,Jt.b,Ne.a],encapsulation:2}),t})();const ke=[{path:"",component:s.a,children:[{path:":id/edit",component:Se,canActivate:[n.a,r.a],data:{permission:a.a.values.testimonyEdit}},{path:"new",component:Se,canActivate:[n.a,r.a],data:{permission:a.a.values.testimonyCreate}},{path:"import",component:be,canActivate:[n.a,r.a],data:{permission:a.a.values.testimonyImport}},{path:":id",component:ge,canActivate:[n.a,r.a],data:{permission:a.a.values.testimonyRead}},{path:"",component:$t,canActivate:[n.a,r.a],data:{permission:a.a.values.testimonyRead}}]}];let Le=(()=>{class t{}return t.\u0275mod=m.Fc({type:t}),t.\u0275inj=m.Ec({factory:function(e){return new(e||t)},providers:[],imports:[[c.f.forChild(ke)],c.f]}),t})();var De=i("PCNd"),Pe=i("jSGM");const{fields:Oe}=v.a;var Xe=[Oe.category,Oe.title,Oe.description,Oe.region,Oe.testimonyType,Oe.status,Oe.priority,Oe.assignedTo,Oe.images,Oe.audio,Oe.documents,Oe.videos,Oe.position,Oe.anonymous,Oe.activity,Oe.tags,Oe.transferTo];let Ce=(()=>{class t extends Pe.a{constructor(t){super(t,h.a.import,Xe,Object(d.d)("entities.testimony.importer.fileName"),Object(d.d)("entities.testimony.importer.hint"))}}return t.\u0275fac=function(e){return new(e||t)(m.Rc(w.a))},t.\u0275prov=m.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Fe=i("t9Rf");let je=(()=>{class t{}return t.\u0275mod=m.Fc({type:t}),t.\u0275inj=m.Ec({factory:function(e){return new(e||t)},providers:[{provide:Pe.a,useClass:Ce}],imports:[[De.a,Le,o.a,Fe.a]]}),t})()}}]);