"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6304],{6304:(E,f,d)=>{d.r(f),d.d(f,{ion_alert:()=>_});var m=d(5861),i=d(6953),v=d(1273),k=d(1182),c=d(645),b=d(4237),g=d(7876),a=d(6506);d(2966),d(8077),d(4587),d(7643);const x=t=>{const e=(0,a.c)(),r=(0,a.c)(),o=(0,a.c)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(1.1)"},{offset:1,opacity:"1",transform:"scale(1)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,o])},D=t=>{const e=(0,a.c)(),r=(0,a.c)(),o=(0,a.c)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,o])},z=t=>{const e=(0,a.c)(),r=(0,a.c)(),o=(0,a.c)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(0.9)"},{offset:1,opacity:"1",transform:"scale(1)"}]),e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,o])},I=t=>{const e=(0,a.c)(),r=(0,a.c)(),o=(0,a.c)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(t.querySelector(".alert-wrapper")).fromTo("opacity",.99,0),e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,o])},_=class{constructor(t){(0,i.r)(this,t),this.didPresent=(0,i.d)(this,"ionAlertDidPresent",7),this.willPresent=(0,i.d)(this,"ionAlertWillPresent",7),this.willDismiss=(0,i.d)(this,"ionAlertWillDismiss",7),this.didDismiss=(0,i.d)(this,"ionAlertDidDismiss",7),this.didPresentShorthand=(0,i.d)(this,"didPresent",7),this.willPresentShorthand=(0,i.d)(this,"willPresent",7),this.willDismissShorthand=(0,i.d)(this,"willDismiss",7),this.didDismissShorthand=(0,i.d)(this,"didDismiss",7),this.delegateController=(0,c.d)(this),this.triggerController=(0,c.e)(),this.customHTMLEnabled=g.c.get("innerHTMLTemplatesEnabled",v.E),this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,c.B)},this.dispatchCancelHandler=e=>{if((0,c.i)(e.detail.role)){const o=this.processedButtons.find(s=>"cancel"===s.role);this.callButtonHandler(o)}},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.header=void 0,this.subHeader=void 0,this.message=void 0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:r}=this;t&&r.addClickListener(e,t)}onKeydown(t){if(!new Set(this.processedInputs.map(l=>l.type)).has("radio")||t.target&&!this.el.contains(t.target)||t.target.classList.contains("alert-button"))return;const r=this.el.querySelectorAll(".alert-radio"),o=Array.from(r).filter(l=>!l.disabled),s=o.findIndex(l=>l.id===t.target.id);let n;if(["ArrowDown","ArrowRight"].includes(t.key)&&(n=s===o.length-1?o[0]:o[s+1]),["ArrowUp","ArrowLeft"].includes(t.key)&&(n=0===s?o[o.length-1]:o[s-1]),n&&o.includes(n)){const l=this.processedInputs.find(p=>p.id===(null==n?void 0:n.id));l&&(this.rbClick(l),n.focus())}}buttonsChanged(){this.processedButtons=this.buttons.map(e=>"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e)}inputsChanged(){const t=this.inputs,e=t.find(n=>!n.disabled),o=t.find(n=>n.checked&&!n.disabled)||e,s=new Set(t.map(n=>n.type));s.has("checkbox")&&s.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(s.values()).join("/")}. Please see alert docs for more info.`),this.inputType=s.values().next().value,this.processedInputs=t.map((n,l)=>{var p;return{type:n.type||"text",name:n.name||`${l}`,placeholder:n.placeholder||"",value:n.value,label:n.label,checked:!!n.checked,disabled:!!n.disabled,id:n.id||`alert-input-${this.overlayIndex}-${l}`,handler:n.handler,min:n.min,max:n.max,cssClass:null!==(p=n.cssClass)&&void 0!==p?p:"",attributes:n.attributes||{},tabindex:"radio"===n.type&&n!==o?-1:0}})}connectedCallback(){(0,c.j)(this.el),this.triggerChanged()}componentWillLoad(){(0,c.k)(this.el),this.inputsChanged(),this.buttonsChanged()}disconnectedCallback(){this.triggerController.removeClickListener(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentDidLoad(){this.gesture||"md"===(0,g.b)(this)||!this.wrapperEl||(this.gesture=(0,k.c)(this.wrapperEl,t=>t.classList.contains("alert-button")),this.gesture.enable(!0))}present(){var t=this;return(0,m.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition),yield t.delegateController.attachViewToDom(),t.currentTransition=(0,c.f)(t,"alertEnter",x,z),yield t.currentTransition,t.currentTransition=void 0})()}dismiss(t,e){var r=this;return(0,m.Z)(function*(){r.currentTransition=(0,c.g)(r,t,e,"alertLeave",D,I);const o=yield r.currentTransition;return o&&r.delegateController.removeViewFromDom(),o})()}onDidDismiss(){return(0,c.h)(this.el,"ionAlertDidDismiss")}onWillDismiss(){return(0,c.h)(this.el,"ionAlertWillDismiss")}rbClick(t){for(const e of this.processedInputs)e.checked=e===t,e.tabindex=e===t?0:-1;this.activeId=t.id,(0,c.s)(t.handler,t),(0,i.i)(this)}cbClick(t){t.checked=!t.checked,(0,c.s)(t.handler,t),(0,i.i)(this)}buttonClick(t){var e=this;return(0,m.Z)(function*(){const r=t.role,o=e.getValues();if((0,c.i)(r))return e.dismiss({values:o},r);const s=yield e.callButtonHandler(t,o);return!1!==s&&e.dismiss(Object.assign({values:o},s),t.role)})()}callButtonHandler(t,e){return(0,m.Z)(function*(){if(null!=t&&t.handler){const r=yield(0,c.s)(t.handler,e);if(!1===r)return!1;if("object"==typeof r)return r}return{}})()}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const e=this.processedInputs.find(r=>!!r.checked);return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(e=>e.checked).map(e=>e.value);const t={};return this.processedInputs.forEach(e=>{t[e.name]=e.value||""}),t}renderAlertInputs(){switch(this.inputType){case"checkbox":return this.renderCheckbox();case"radio":return this.renderRadio();default:return this.renderInput()}}renderCheckbox(){const t=this.processedInputs,e=(0,g.b)(this);return 0===t.length?null:(0,i.h)("div",{class:"alert-checkbox-group"},t.map(r=>(0,i.h)("button",{type:"button",onClick:()=>this.cbClick(r),"aria-checked":`${r.checked}`,id:r.id,disabled:r.disabled,tabIndex:r.tabindex,role:"checkbox",class:Object.assign(Object.assign({},(0,b.g)(r.cssClass)),{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0,"ion-focusable":!0,"alert-checkbox-button-disabled":r.disabled||!1})},(0,i.h)("div",{class:"alert-button-inner"},(0,i.h)("div",{class:"alert-checkbox-icon"},(0,i.h)("div",{class:"alert-checkbox-inner"})),(0,i.h)("div",{class:"alert-checkbox-label"},r.label)),"md"===e&&(0,i.h)("ion-ripple-effect",null))))}renderRadio(){const t=this.processedInputs;return 0===t.length?null:(0,i.h)("div",{class:"alert-radio-group",role:"radiogroup","aria-activedescendant":this.activeId},t.map(e=>(0,i.h)("button",{type:"button",onClick:()=>this.rbClick(e),"aria-checked":`${e.checked}`,disabled:e.disabled,id:e.id,tabIndex:e.tabindex,class:Object.assign(Object.assign({},(0,b.g)(e.cssClass)),{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0,"ion-focusable":!0,"alert-radio-button-disabled":e.disabled||!1}),role:"radio"},(0,i.h)("div",{class:"alert-button-inner"},(0,i.h)("div",{class:"alert-radio-icon"},(0,i.h)("div",{class:"alert-radio-inner"})),(0,i.h)("div",{class:"alert-radio-label"},e.label)))))}renderInput(){const t=this.processedInputs;return 0===t.length?null:(0,i.h)("div",{class:"alert-input-group"},t.map(e=>{var r,o,s,n;return(0,i.h)("div",{class:"alert-input-wrapper"},"textarea"===e.type?(0,i.h)("textarea",Object.assign({placeholder:e.placeholder,value:e.value,id:e.id,tabIndex:e.tabindex},e.attributes,{disabled:null!==(o=null===(r=e.attributes)||void 0===r?void 0:r.disabled)&&void 0!==o?o:e.disabled,class:C(e),onInput:l=>{var p;e.value=l.target.value,null!==(p=e.attributes)&&void 0!==p&&p.onInput&&e.attributes.onInput(l)}})):(0,i.h)("input",Object.assign({placeholder:e.placeholder,type:e.type,min:e.min,max:e.max,value:e.value,id:e.id,tabIndex:e.tabindex},e.attributes,{disabled:null!==(n=null===(s=e.attributes)||void 0===s?void 0:s.disabled)&&void 0!==n?n:e.disabled,class:C(e),onInput:l=>{var p;e.value=l.target.value,null!==(p=e.attributes)&&void 0!==p&&p.onInput&&e.attributes.onInput(l)}})))}))}renderAlertButtons(){const t=this.processedButtons,e=(0,g.b)(this);return(0,i.h)("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(o=>(0,i.h)("button",{type:"button",id:o.id,class:P(o),tabIndex:0,onClick:()=>this.buttonClick(o)},(0,i.h)("span",{class:"alert-button-inner"},o.text),"md"===e&&(0,i.h)("ion-ripple-effect",null))))}renderAlertMessage(t){const{customHTMLEnabled:e,message:r}=this;return e?(0,i.h)("div",{id:t,class:"alert-message",innerHTML:(0,v.a)(r)}):(0,i.h)("div",{id:t,class:"alert-message"},r)}render(){const{overlayIndex:t,header:e,subHeader:r,message:o,htmlAttributes:s}=this,n=(0,g.b)(this),l=`alert-${t}-hdr`,p=`alert-${t}-sub-hdr`,A=`alert-${t}-msg`;return(0,i.h)(i.H,Object.assign({role:this.inputs.length>0||this.buttons.length>0?"alertdialog":"alert","aria-modal":"true","aria-labelledby":e?l:r?p:null,"aria-describedby":void 0!==o?A:null,tabindex:"-1"},s,{style:{zIndex:`${2e4+t}`},class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[n]:!0,"overlay-hidden":!0,"alert-translucent":this.translucent}),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{class:"alert-wrapper ion-overlay-wrapper",ref:L=>this.wrapperEl=L},(0,i.h)("div",{class:"alert-head"},e&&(0,i.h)("h2",{id:l,class:"alert-title"},e),r&&(0,i.h)("h2",{id:p,class:"alert-sub-title"},r)),this.renderAlertMessage(A),this.renderAlertInputs(),this.renderAlertButtons()),(0,i.h)("div",{tabindex:"0"}))}get el(){return(0,i.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"],buttons:["buttonsChanged"],inputs:["inputsChanged"]}}},C=t=>{var e,r,o;return Object.assign(Object.assign({"alert-input":!0,"alert-input-disabled":(null!==(r=null===(e=t.attributes)||void 0===e?void 0:e.disabled)&&void 0!==r?r:t.disabled)||!1},(0,b.g)(t.cssClass)),(0,b.g)(t.attributes?null===(o=t.attributes.class)||void 0===o?void 0:o.toString():""))},P=t=>Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0,[`alert-button-role-${t.role}`]:void 0!==t.role},(0,b.g)(t.cssClass));_.style={ios:".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:7px}}}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:9px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:9px}}}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #eb445a)}",md:".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}.alert-message.sc-ion-alert-md{max-height:266px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:266px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}@supports (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-radio-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.alert-radio-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}@supports (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-checkbox-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"}},4237:(E,f,d)=>{d.d(f,{c:()=>v,g:()=>c,h:()=>i,o:()=>g});var m=d(5861);const i=(a,h)=>null!==h.closest(a),v=(a,h)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},h):h,c=a=>{const h={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(u=>null!=u).map(u=>u.trim()).filter(u=>""!==u):[])(a).forEach(u=>h[u]=!0),h},b=/^[a-z][a-z0-9+\-.]*:/,g=function(){var a=(0,m.Z)(function*(h,u,w,y){if(null!=h&&"#"!==h[0]&&!b.test(h)){const x=document.querySelector("ion-router");if(x)return null!=u&&u.preventDefault(),x.push(h,w,y)}return!1});return function(u,w,y,x){return a.apply(this,arguments)}}()}}]);