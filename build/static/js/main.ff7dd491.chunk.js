(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(t,e,n){t.exports={note:"Note_note__bwuxy",highlightedNote:"Note_highlightedNote__10ygf",title:"Note_title__3YrU7",text:"Note_text__2fsEk",buttons:"Note_buttons__Z1hwp",button:"Note_button__17qe9"}},,function(t,e,n){t.exports={form:"NewOrEditForm_form__19iiP",buttons:"NewOrEditForm_buttons__2Ld8H",button:"NewOrEditForm_button__3iVoo"}},function(t,e,n){t.exports={backdrop:"Modal_backdrop__2hg6k",modal:"Modal_modal__MrLBt","slide-down":"Modal_slide-down__2aCnl"}},,function(t,e,n){t.exports={header:"Header_header__3Uv6Y",button:"Header_button__2zQpv"}},function(t,e,n){t.exports={NotesList:"NotesList_NotesList__279Ka",tips:"NotesList_tips__1Arxi"}},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i),c=(n(14),n(1)),s=n.n(c),a=n(2),d=n(0),u=s.a.createContext({dummyNotes:[],newNote:!1,editingNote:!1,editingId:"",updateEditingId:function(){},currentEditNote:{},finishedSwap:!1,showNewNote:function(){},hideNewNote:function(){},showEditingNote:function(){},hideEditingNote:function(){},currentlyEditingNote:function(){},addNewNote:function(){},deleteNote:function(){},editNote:function(){},swappingNotes:{},noteId:1,setNoteId:function(){},titleInput:"",setTitleInput:function(){},textInput:"",setTextInput:function(){},noteSubmit:function(){},noteTitleChange:function(){},noteTextChange:function(){}}),r=function(t){var e=Object(c.useState)([{id:"0",title:"New Note",text:"Add a New Note to Begin!"},{id:"1",title:"Nesfsfsfsfe",text:"Adsfsfsf Begin!"}]),n=Object(a.a)(e,2),i=n[0],o=n[1],s=Object(c.useState)(!1),r=Object(a.a)(s,2),l=r[0],j=r[1],b=Object(c.useState)(!1),N=Object(a.a)(b,2),h=N[0],f=N[1],x=Object(c.useState)(""),O=Object(a.a)(x,2),p=O[0],g=O[1],m=Object(c.useState)({id:"",title:"",text:""}),_=Object(a.a)(m,2),w=_[0],v=_[1],C=Object(c.useState)(2),E=Object(a.a)(C,2),I=E[0],S=E[1],k=Object(c.useState)(""),y=Object(a.a)(k,2),T=y[0],F=y[1],A=Object(c.useState)(""),L=Object(a.a)(A,2),B=L[0],M=L[1],P=[],H=Object(c.useState)(!1),D=Object(a.a)(H,2),J=D[0],U=D[1],Y=function(){j(!1),F(""),M("")},q=function(){f(!1),F(""),M("")},z=function(t){var e=t.concat(i);o(e)},K=function(t){var e=i.map((function(e){return t.id===e.id?t:e}));g(""),o(e)};return Object(d.jsx)(u.Provider,{value:{dummyNotes:i,newNote:l,editingNote:h,editingId:p,updateEditingId:g,currentEditNote:w,finishedSwap:J,showNewNote:function(){j(!0)},hideNewNote:Y,showEditingNote:function(){f(!0)},hideEditingNote:q,currentlyEditingNote:function(t){v(t)},addNewNote:z,deleteNote:function(t){var e=i.filter((function(e){return e.id!==t}));o(e)},editNote:K,swappingNotes:P,noteId:I,setNoteId:S,titleInput:T,setTitleInput:F,textInput:B,setTextInput:M,noteSubmit:function(t){if(t.preventDefault(),B.trim().length>0){if(l){S(I+1);var e={id:I.toString(),title:T,text:B};z([e]),Y()}else if(h){K({id:p,title:T,text:B}),q()}F(""),M("")}},noteTitleChange:function(t){F(t.target.value)},noteTextChange:function(t){t.target.value.length<=255&&M(t.target.value)},handleSwap:function(){var t=P[0].id;P[0].id=P[1].id,P[1].id=t;var e=i.map((function(t){return P[0].id===t.id?P[0]:P[1].id===t.id?P[1]:t}));o(e),U(!0),P=[]}},children:t.children})},l=u,j=n(8),b=n.n(j),N=function(){var t=Object(c.useContext)(l);return Object(d.jsxs)("header",{className:b.a.header,children:[Object(d.jsx)("h2",{children:"AppendNotes"}),Object(d.jsx)("button",{className:b.a.button,onClick:t.showNewNote,children:"Add Note"})]})},h=n(3),f=n.n(h),x=function(t){var e=Object(c.useContext)(l),n=Object(c.useState)(!1),i=Object(a.a)(n,2),o=i[0],s=i[1],u="".concat(f.a.note," ").concat(o?f.a.highlightedNote:"");Object(c.useEffect)((function(){e.finishedSwap&&s(!1)}),[e.finishedSwap,e.handleSwap]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:u,onClick:function(){return function(t){var n={id:t.id,title:t.title,text:t.text};s(!o),e.swappingNotes.length<2&&(e.swappingNotes.push(n),2===e.swappingNotes.length&&e.handleSwap())}(t)},tabIndex:"0",children:[Object(d.jsxs)("h3",{className:f.a.title,children:[" ",t.title," "]}),Object(d.jsxs)("p",{className:f.a.text,children:[" ",t.text," "]}),Object(d.jsxs)("div",{className:f.a.buttons,children:[Object(d.jsx)("button",{className:f.a.button,onClick:function(){return function(t){e.showEditingNote(),e.currentlyEditingNote(t),e.setTitleInput(t.title),e.setTextInput(t.text)}(t)},children:"Edit"}),Object(d.jsx)("button",{className:f.a.button,onClick:function(){return e.deleteNote(t.id)},children:"Delete"})]})]})})},O=n(9),p=n.n(O),g=function(){var t=Object(c.useContext)(l).dummyNotes.map((function(t){return Object(d.jsx)(x,{id:t.id,title:t.title,text:t.text},t.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:p.a.tips,children:"* Click the Add Note button to create a new note. Click two notes to swap them! *"}),Object(d.jsx)("div",{className:p.a.NotesList,children:t})]})},m=n(6),_=n.n(m),w=function(t){return Object(d.jsx)("div",{className:_.a.backdrop,onClick:t.onClose})},v=function(t){return Object(d.jsx)("div",{className:_.a.modal,children:Object(d.jsx)("div",{className:_.a.content,children:t.children})})},C=document.getElementById("overlays"),E=function(t){var e=Object(c.useContext)(l);return Object(d.jsxs)(d.Fragment,{children:[o.a.createPortal(Object(d.jsx)(w,{onClose:e.editingNote?e.hideEditingNote:e.hideNewNote}),C),o.a.createPortal(Object(d.jsx)(v,{children:t.children}),C)]})},I=n(5),S=n.n(I),k=function(t){var e=Object(c.useContext)(l);return Object(c.useEffect)((function(){e.updateEditingId(t.id)}),[e,t.id]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:S.a.form,onSubmit:e.noteSubmit,id:"noteForm",children:[Object(d.jsx)("label",{children:"Title:    "}),Object(d.jsx)("input",{type:"text",value:e.titleInput,onChange:e.noteTitleChange}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{placeholder:e.editingNote?null:"Enter a note... (upto 255 characters)",value:e.textInput,onChange:e.noteTextChange})]}),Object(d.jsxs)("div",{className:S.a.buttons,children:[Object(d.jsx)("button",{className:S.a.button,onClick:e.editingNote?e.hideEditingNote:e.hideNewNote,children:"Close"}),Object(d.jsx)("button",{className:S.a.button,type:"submit",value:"submit",form:"noteForm",children:"Add"})]})]})},y=function(t){return Object(d.jsx)(E,{children:Object(d.jsx)(k,{id:t.id})})},T=function(){var t=Object(c.useContext)(l),e=t.currentEditNote;return Object(d.jsxs)(d.Fragment,{children:[t.newNote&&Object(d.jsx)(y,{}),t.editingNote&&Object(d.jsx)(y,{id:e.id}),Object(d.jsx)(N,{}),Object(d.jsx)(g,{})]})};o.a.render(Object(d.jsx)(r,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.ff7dd491.chunk.js.map