"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6954],{6954:(P,l,t)=>{t.r(l),t.d(l,{BilleteraPageModule:()=>U});var u=t(6814),d=t(95),o=t(7852),c=t(5785),e=t(6689),g=t(3202),Z=t(4281);const p=[{path:"",component:(()=>{class n{constructor(a){this.qrScanner=a}ngOnInit(){}scan(){this.qrScanner.prepare().then(a=>{if(a.authorized){const i=this.qrScanner.scan().subscribe(s=>{console.log("C\xf3digo QR escaneado:",s),this.qrScanner.hide(),i.unsubscribe()});this.qrScanner.show()}else a.denied?console.error("Permisos de c\xe1mara denegados"):console.error("No se pudo acceder a la c\xe1mara")}).catch(a=>console.error("Error al preparar el escaneo de QR",a))}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(g.l))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-billetera"]],decls:61,vars:1,consts:[["color","primary"],[3,"fullscreen"],[2,"color","rgb(0, 95, 212)"],[2,"color","rgb(0, 212, 21)"],[2,"padding","3px"],["slot","start"],["aria-hidden","true","name","qr-code-outline",2,"font-size","30px"],[2,"color","rgb(255, 2, 2)"],["lines","none"],["aria-hidden","true","name","wallet",2,"font-size","30px"],[2,"color","rgb(22, 193, 0)"],["name","billetera"],["expand","full",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"ion-toolbar",0)(1,"ion-title"),e._uU(2,"Billetera"),e.qZA()(),e.TgZ(3,"ion-content",1)(4,"ion-card")(5,"ion-card-header")(6,"ion-card-title")(7,"span"),e._uU(8," $47.600 "),e.qZA()(),e.TgZ(9,"ion-card-subtitle")(10,"span"),e._uU(11,"Saldo"),e.qZA()(),e.TgZ(12,"ion-card-title")(13,"span",2),e._uU(14,"Colective"),e.qZA(),e.TgZ(15,"span",3),e._uU(16,"Pay"),e.qZA()()(),e.TgZ(17,"ion-card-content"),e._uU(18," Josu\xe9 David Vera Parra "),e.qZA()(),e.TgZ(19,"ion-header")(20,"ion-title"),e._uU(21,"Resumen de transacciones"),e.qZA()(),e.TgZ(22,"div",4)(23,"ion-card")(24,"ion-card-content")(25,"ion-list")(26,"ion-item")(27,"ion-thumbnail",5),e._UZ(28,"ion-icon",6),e.qZA(),e.TgZ(29,"ion-label"),e._uU(30,"04/07/2023 15:30 Pago con QR "),e._UZ(31,"br"),e.TgZ(32,"span",7),e._uU(33,"-$800"),e.qZA()()(),e.TgZ(34,"ion-item")(35,"ion-thumbnail",5),e._UZ(36,"ion-icon",6),e.qZA(),e.TgZ(37,"ion-label"),e._uU(38,"04/07/2023 15:30 Pago con QR "),e._UZ(39,"br"),e.TgZ(40,"span",7),e._uU(41,"-$800"),e.qZA()()(),e.TgZ(42,"ion-item")(43,"ion-thumbnail",5),e._UZ(44,"ion-icon",6),e.qZA(),e.TgZ(45,"ion-label"),e._uU(46,"04/07/2023 15:30 Pago con QR "),e._UZ(47,"br"),e.TgZ(48,"span",7),e._uU(49,"-$800"),e.qZA()()(),e.TgZ(50,"ion-item",8)(51,"ion-thumbnail",5),e._UZ(52,"ion-icon",9),e.qZA(),e.TgZ(53,"ion-label"),e._uU(54,"04/07/2023 15:30 Deposito "),e._UZ(55,"br"),e.TgZ(56,"span",10),e._uU(57,"+$50.000"),e.qZA()()()()()()(),e._UZ(58,"app-explore-container",11),e.TgZ(59,"ion-button",12),e.NdJ("click",function(){return i.scan()}),e._uU(60,"Escanear c\xf3digo QR"),e.qZA()()),2&a&&(e.xp6(3),e.Q6J("fullscreen",!0))},dependencies:[o.YG,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.Bs,o.wd,o.sr,Z.Z],styles:['@charset "UTF-8";.custom-card[_ngcontent-%COMP%]{height:10%}.custom-icon[_ngcontent-%COMP%]{font-size:30px}']}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(p),c.Bz]}),n})();var h=t(3554);let U=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,d.u5,o.Pc,h.e,m]}),n})()}}]);