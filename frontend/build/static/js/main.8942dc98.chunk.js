(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),o=n(8),r=(n(29),n(22)),l=n(2),u=n(3),p=n(0);var d=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__copyright",children:[" \xa9 ",(new Date).getFullYear()," Mesto Russian"]})})},h=n.p+"static/media/header__logo.b61d43d7.svg";var m=function(e){var t=c.a.useState(!1),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"pre-header ".concat(a?"pre-header_opened":""),children:[Object(p.jsx)("p",{className:"pre-header__user-email",children:e.headerUserEmail||""}),Object(p.jsx)("button",{className:"pre-header__button",onClick:e.signOut,children:e.buttonName})]}),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:h,alt:"\u041c\u0435\u0441\u0442\u043e. \u0420\u043e\u0441\u0441\u0438\u044f"}),Object(p.jsxs)("div",{className:"".concat(e.loggedIn?"header__wrapper ".concat(a?"header__wrapper_type_exit":"header__wrapper_type_nav"):"header__wrapper_type_hidden"),onClick:function(){s(!a)},children:[Object(p.jsx)("p",{className:"header__user-email",children:e.headerUserEmail||""}),Object(p.jsx)("button",{className:"header__button",onClick:e.signOut,children:e.buttonName})]}),Object(p.jsx)(o.b,{className:"header__link ".concat(e.loggedIn?"header__link_type_hidden":""),to:e.linkPath||"",children:e.linkName||""})]})]})};var j=function(e){return Object(p.jsx)("div",{className:"popup popup_type_cardZoom ".concat(e.card?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__wrapper",children:[Object(p.jsxs)("div",{className:"popup__image-wrapper",children:[Object(p.jsx)("img",{className:"popup__main-image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(p.jsx)("p",{className:"popup__subtitle",children:e.card?e.card.name:""})]}),Object(p.jsx)("button",{className:"popup__exit",type:"button",onClick:e.onClose})]})})},_=c.a.createContext();function b(e){var t=c.a.useContext(_),n=e.card.owner===t._id,a="element__delete-button ".concat(n?"element__delete-button_visible":"element__delete-button_hidden"),s=e.card.likes.some((function(e){return e===t._id})),i="element__like-button ".concat(s?"element__like-button_active":"element__like-button_inactive");return Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(p.jsx)("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardImageClick(e.card)}}),Object(p.jsxs)("div",{className:"element__main",children:[Object(p.jsx)("p",{className:"element__title",children:e.card.name}),Object(p.jsxs)("div",{className:"element__like-space",children:[Object(p.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]})]})]})}var f=function(e){var t=c.a.useContext(_);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{loggedIn:e.loggedIn,signOut:e.signOut,buttonName:"\u0412\u044b\u0439\u0442\u0438",headerUserEmail:e.headerUserEmail}),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__content",children:[Object(p.jsx)("img",{className:"avatar",src:t.avatar,alt:"\u0412\u0430\u0448 \u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("ul",{className:"profile__unnumbered-list",children:[Object(p.jsx)("li",{className:"profile__list",children:Object(p.jsx)("h1",{className:"profile__name",children:t.name})}),Object(p.jsx)("li",{className:"profile__list",children:Object(p.jsx)("p",{className:"profile__status",children:t.about})})]}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(p.jsx)(b,{onCardClick:e.onCardLike,onCardDelete:e.onCardDelete,card:t,onCardImageClick:e.onCardClick,onDeleteCardClick:e.onDeleteCardClick},t._id)}))})]})]})};var O=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__wrapper",children:[Object(p.jsxs)("form",{className:"popup__container popup__container_".concat(e.name),name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(p.jsx)("h2",{className:"popup__title",children:e.title}),e.children]}),Object(p.jsx)("button",{className:"popup__exit",type:"button",onClick:e.onClose})]})})},x=n(13),g=n(14),v=function(){function e(t){var n=t.baseUrl,a=t.authorization;Object(x.a)(this,e),this._baseUrl=n,this._authorization=a}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"userServerInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"POST",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:{authorization:"Bearer ".concat(this._authorization),"Content-Type":"application/json"},body:e}).then(this._checkResponse)}}]),e}();function N(e){var t=c.a.useContext(_),n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],d=r[1];return c.a.useEffect((function(){i(t.name||""),d(t.about||"")}),[t,e.isOpen]),Object(p.jsx)(O,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},isOpen:e.isOpen,onClose:e.onClose,name:"profileEdit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"name-input",className:"popup__input popup__input_name",placeholder:"\u0418\u043c\u044f",name:"name",type:"text",value:s,onChange:function(e){i(e.target.value)},minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"name-input-error popup__input-error"}),Object(p.jsx)("input",{id:"status-input",className:"popup__input popup__input_status",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"about",value:u,onChange:function(e){d(e.target.value)},type:"text",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{className:"status-input-error popup__input-error"}),Object(p.jsx)("button",{className:"popup__save",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})}function C(e){var t=c.a.useRef("");return c.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(p.jsx)(O,{isOpen:e.isOpen,onClose:e.onClose,name:"avatarEdit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"avatar-link-input",className:"popup__input popup__input_avatar-link",ref:t,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",type:"url",required:!0}),Object(p.jsx)("span",{className:"avatar-link-input-error popup__input-error"}),Object(p.jsx)("button",{className:"popup__save",type:"submit",onClick:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})}function k(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1];return c.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(p.jsx)(O,{onClose:e.onClose,name:"placeAdd",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"place-name-input",className:"popup__input popup__input_place-name",value:a,onChange:function(e){s(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",type:"text",minLength:"2",maxLength:"30",required:!0}),Object(p.jsx)("span",{className:"place-name-input-error popup__input-error"}),Object(p.jsx)("input",{id:"place-link-input",className:"popup__input popup__input_place-link",value:r,onChange:function(e){u(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",type:"url",required:!0}),Object(p.jsx)("span",{className:"place-link-input-error popup__input-error"}),Object(p.jsx)("button",{className:"popup__save",type:"submit",onClick:function(t){t.preventDefault(),e.onUpdatePlace({name:a,link:r})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}var y=n(23),S=n(24),w=function(e){var t=e.component,n=Object(S.a)(e,["component"]);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(y.a)({},n)):Object(p.jsx)(u.a,{to:"/sign-in"})}})};var U=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1];return Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("form",{className:"form__container form__container_login",onSubmit:function(t){t.preventDefault(),e.onAuthorizationUser({password:r,email:a})},noValidate:!0,children:[Object(p.jsx)("h2",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsx)("input",{id:"email-input",className:"form__input form__input_email",onChange:function(e){s(e.target.value)},placeholder:"Email",name:"e-mail",type:"email",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"email-input-error email__input-error"}),Object(p.jsx)("input",{id:"password-input",className:"form__input form__input_password",onChange:function(e){u(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{className:"password-input-error form__input-error"}),Object(p.jsx)("button",{className:"form__enter",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var E=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),r=Object(l.a)(i,2),u=r[0],d=r[1];return Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("form",{className:"form__container form__container_register",onSubmit:function(t){t.preventDefault(),e.onRegisterUser({password:u,email:a})},noValidate:!0,children:[Object(p.jsx)("h2",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)("input",{id:"email-input",className:"form__input form__input_email",onChange:function(e){s(e.target.value)},placeholder:"Email",name:"e-mail",type:"email",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"email-input-error email__input-error"}),Object(p.jsx)("input",{id:"password-input",className:"form__input form__input_password",onChange:function(e){d(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{className:"password-input-error form__input-error"}),Object(p.jsx)("button",{className:"form__enter",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsxs)("p",{className:"form__already-registered",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(p.jsx)(o.b,{to:"/sign-in",className:"form__already-registered form__already-registered_type_button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},T=n.p+"static/media/SuccessfulRegist.a9eb6caf.svg",z=n.p+"static/media/TryAgainRegist.d4ce2a26.svg";var L=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__wrapper",children:[Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("img",{className:"popup__register-img",src:e.successfulyRegistered?T:z,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(p.jsx)("h2",{className:"popup__register-title",children:e.successfulyRegistered?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]}),Object(p.jsx)("button",{className:"popup__exit",type:"button",onClick:e.onClose})]})})},P=new(function(){function e(t){var n=t.baseUrl;Object(x.a)(this,e),this._baseUrl=n}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"registration",value:function(e){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"authorization",value:function(e){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"tokenCheck",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://api.domainname.kostya2120.nomoredomains.club"});var R=function(){var e=new v({authorization:localStorage.getItem("jwt"),baseUrl:"https://api.domainname.kostya2120.nomoredomains.club"}),t=Object(u.g)(),n=c.a.useState(!1),a=Object(l.a)(n,2),s=a[0],i=a[1];function o(){i(!0)}var h=c.a.useState({}),b=Object(l.a)(h,2),x=b[0],g=b[1],y=c.a.useState([]),S=Object(l.a)(y,2),T=S[0],z=S[1],R=c.a.useState(""),I=Object(l.a)(R,2),D=I[0],A=I[1];c.a.useEffect((function(){Promise.all([e.userServerInfo(),e.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];g(n),A(n.email),z(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}),[localStorage.getItem("jwt")]),console.log(x),console.log(T),c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&P.tokenCheck(e).then((function(e){e&&(o(),t.push("/main"))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}),[]);var B=c.a.useState(null),F=Object(l.a)(B,2),q=F[0],J=F[1],G=c.a.useState(!1),V=Object(l.a)(G,2),H=V[0],M=V[1],Y=c.a.useState(!1),Z=Object(l.a)(Y,2),K=Z[0],Q=Z[1],W=c.a.useState(!1),X=Object(l.a)(W,2),$=X[0],ee=X[1],te=c.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],se=c.a.useState(!1),ie=Object(l.a)(se,2),oe=ie[0],re=ie[1];function le(){M(!1),Q(!1),ee(!1),ce(!1),re(!1),J(null)}var ue=c.a.useState(!1),pe=Object(l.a)(ue,2),de=pe[0],he=pe[1];return Object(p.jsx)(_.Provider,{value:x,children:Object(p.jsx)("div",{className:"substrate",children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsxs)(u.d,{children:[Object(p.jsx)(w,{signOut:function(){localStorage.removeItem("jwt"),t.push("/sign-in"),i(!1)},headerUserEmail:D,path:"/main",loggedIn:s,onEditAvatar:function(){M(!0)},onEditProfile:function(){Q(!0)},onAddPlace:function(){ee(!0)},onCardClick:function(e){J(e)},onDeleteCardClick:function(){ce(!0)},cards:T,onCardLike:function(t){var n=t.likes.some((function(e){return e===x._id}));e.changeLikeCardStatus(t._id,n).then((function(e){z((function(n){return n.map((function(n){return n._id===t._id?e:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))},onCardDelete:function(t){e.deleteCard(t._id).then((function(){z(T.filter((function(e){return e._id!==t._id})))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))},component:f}),Object(p.jsxs)(u.b,{path:"/sign-up",children:[Object(p.jsx)(m,{linkName:"\u0412\u043e\u0439\u0442\u0438",linkPath:"/sign-in"}),Object(p.jsx)(E,{onRegisterUser:function(e){P.registration(JSON.stringify(e)).then((function(e){console.log(e),he(!0),re(!0)})).catch((function(e){he(!1),re(!0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}}),Object(p.jsx)(L,{name:"registerNotification",isOpen:oe,onClose:le,successfulyRegistered:de})]}),Object(p.jsxs)(u.b,{path:"/sign-in",children:[Object(p.jsx)(m,{linkName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",linkPath:"/sign-up"}),Object(p.jsx)(U,{onAuthorizationUser:function(e){console.log(e),P.authorization(JSON.stringify(e)).then((function(e){localStorage.setItem("jwt",e.token),o(),t.push("/main")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))},handleLogin:o})]}),Object(p.jsx)(u.b,{exact:!0,path:"/",children:s?Object(p.jsx)(u.a,{to:"/main"}):Object(p.jsx)(u.a,{to:"sign-in"})})]}),Object(p.jsx)(d,{}),Object(p.jsx)(j,{onClose:le,card:q}),Object(p.jsx)(C,{onClose:le,isOpen:H,onUpdateAvatar:function(t){e.editAvatar(JSON.stringify(t)).then((function(e){g(e),le()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}}),Object(p.jsx)(N,{onClose:le,isOpen:K,onUpdateUser:function(t){e.editProfile(JSON.stringify(t)).then((function(e){g(e),le()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}}),Object(p.jsx)(k,{onClose:le,isOpen:$,onUpdatePlace:function(t){e.addCard(JSON.stringify(t)).then((function(e){z([e].concat(Object(r.a)(T))),le()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e,". \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}))}}),Object(p.jsx)(O,{onClose:le,name:"deleteConfirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",isOpen:ae,children:Object(p.jsx)("button",{className:"popup__save",type:"submit",children:"\u0414\u0430"})})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.8942dc98.chunk.js.map