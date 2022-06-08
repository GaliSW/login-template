import{r as i,a as n,b as c,d as o,t as d,e,o as u,f as m}from"./vue.esm-bundler.213224a0.js";import{_}from"./back_btn.c7f2ca39.js";import{_ as g,a as C}from"./funtube.cf071115.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var b="/assets/alert.c164535e.svg";const l={name:"modal02",props:{title:{type:String,required:!0},backgroundColor:{type:String},buttonColor:{type:String},joinButtonColor:{type:String},joinButtonColor2:{type:String},fontColor:{type:String}},setup(t){return t=i(t),{subTitleSize:n(()=>({[`font-${t.subTitleSize}`]:!0})),buttonFontSize:n(()=>({[`font-${t.buttonFontSize}`]:!0})),linkFontSize:n(()=>({[`font-${t.linkFontSize}`]:!0})),backgroundColor:n(()=>({backgroundColor:t.backgroundColor})),buttonColor:n(()=>({backgroundColor:t.buttonColor})),joinButtonColor:n(()=>({backgroundColor:t.joinButtonColor})),joinButtonColor2:n(()=>({backgroundColor:t.joinButtonColor2})),fontColor:n(()=>({color:t.fontColor}))}}},f={class:"modal_shadow"},y=o("div",{class:"top_btn"},[o("span",null,[o("img",{src:_,alt:""})]),o("span",null,[o("img",{src:g,alt:""})])],-1),k={class:"title"},B=o("img",{src:C,alt:""},null,-1),v=o("span",null,"\xA0|\xA0",-1),S=o("div",{class:"sub_title"},"\u5FD8\u8A18\u5BC6\u78BC",-1),h={class:"info"},j={action:"#"},x=o("img",{src:b,alt:""},null,-1),F=m(" \u5BC6\u78BC\u6703\u76F4\u63A5\u5BC4\u5230\u60A8\u8A3B\u518A\u7684\u4FE1\u7BB1 "),T=[x,F];function z(t,N,s,r,q,E){return u(),c("section",f,[o("div",{class:"modal",id:"modal04",style:e(r.backgroundColor)},[y,o("div",k,[B,v,o("span",null,d(s.title),1)]),S,o("div",h,[o("form",j,[o("input",{type:"text",name:"account",id:"account",placeholder:"\u5E33\u865F(\u4FE1\u7BB1)",autocomplete:"on",style:e(r.buttonColor)},null,4),o("div",{style:e(r.fontColor)},T,4)])]),o("div",{class:"send",style:e(r.joinButtonColor)},"\u9001\u51FA",4)],4)])}var a=p(l,[["render",z]]);l.__docgenInfo={displayName:"modal02",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"joinButtonColor",type:{name:"string"}},{name:"joinButtonColor2",type:{name:"string"}},{name:"fontColor",type:{name:"string"}}]};var I={parameters:{storySource:{source:`import modal04 from "../components/Modal04.vue";\r
export default {\r
    title: "Modal/\u5FD8\u8A18\u5BC6\u78BC",\r
    component: modal04,\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        buttonColor: { control: "color" },\r
        joinButtonColor: { control: "color" },\r
        joinButtonColor2: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    components: { modal04 },\r
\r
    setup() {\r
        return { args };\r
    },\r
    template: '<modal04 v-bind="args" />',\r
});\r
export const Forget = Template.bind({});\r
Forget.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    fontColor: "#fff",\r
};\r
`,locationsMap:{forget:{startLoc:{col:17,line:13},endLoc:{col:2,line:20},startBody:{col:17,line:13},endBody:{col:2,line:20}}}}},title:"Modal/\u5FD8\u8A18\u5BC6\u78BC",component:a,argTypes:{backgroundColor:{control:"color"},onClick:{},buttonColor:{control:"color"},joinButtonColor:{control:"color"},joinButtonColor2:{control:"color"}}};const D=t=>({components:{modal04:a},setup(){return{args:t}},template:'<modal04 v-bind="args" />'}),M=D.bind({});M.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",fontColor:"#fff"};const O=["Forget"];export{M as Forget,O as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal04.stories.a030aa2c.js.map
