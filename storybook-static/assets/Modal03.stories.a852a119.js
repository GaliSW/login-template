import{r as u,g,a as r,b as i,d as o,t as _,e as l,f as C,o as s}from"./vue.esm-bundler.213224a0.js";import{_ as p}from"./back_btn.c7f2ca39.js";import{_ as b,a as k}from"./funtube.cf071115.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";var y="/assets/uncheck.104c77ff.svg",v="/assets/checked.2486ab0b.svg";const c={name:"modal02",props:{title:{type:String,required:!0},backgroundColor:{type:String},buttonColor:{type:String},joinButtonColor:{type:String},joinButtonColor2:{type:String},linkFontColor:{type:String}},setup(t){t=u(t);const e=g(!1),a=()=>{e.value=!e.value};return{subTitleSize:r(()=>({[`font-${t.subTitleSize}`]:!0})),buttonFontSize:r(()=>({[`font-${t.buttonFontSize}`]:!0})),linkFontSize:r(()=>({[`font-${t.linkFontSize}`]:!0})),backgroundColor:r(()=>({backgroundColor:t.backgroundColor})),buttonColor:r(()=>({backgroundColor:t.buttonColor})),joinButtonColor:r(()=>({backgroundColor:t.joinButtonColor})),joinButtonColor2:r(()=>({backgroundColor:t.joinButtonColor2})),linkFontColor:r(()=>({color:t.linkFontColor})),isRemember:e,remember:a}}},B={class:"modal_shadow"},S=o("div",{class:"top_btn"},[o("span",null,[o("img",{src:p,alt:""})]),o("span",null,[o("img",{src:b,alt:""})])],-1),h={class:"title"},j=o("img",{src:k,alt:""},null,-1),F=o("span",null,"\xA0|\xA0",-1),x={class:"info"},T={action:"#"},z={key:0,src:y,alt:""},L={key:1,src:v,alt:""},D=C(" \u8A18\u4F4F\u6211 ");function M(t,e,a,n,q,E){return s(),i("section",B,[o("div",{class:"modal",id:"modal03",style:l(n.backgroundColor)},[S,o("div",h,[j,F,o("span",null,_(a.title),1)]),o("div",x,[o("form",T,[o("input",{type:"text",name:"account",id:"account",placeholder:"\u5E33\u865F(\u4FE1\u7BB1)",autocomplete:"on",style:l(n.buttonColor)},null,4),o("input",{type:"password",name:"password",id:"password",placeholder:"\u624B\u6A5F(\u5BC6\u78BC)",autocomplete:"on",style:l(n.buttonColor)},null,4),o("div",{onClick:e[0]||(e[0]=(...m)=>n.remember&&n.remember(...m))},[n.isRemember?(s(),i("img",z)):(s(),i("img",L)),D])])]),o("div",{class:"login_mail",style:l(n.joinButtonColor)},"\u767B\u5165",4),o("div",{class:"login_fb",style:l(n.joinButtonColor2)},"\u4F7F\u7528Facebook\u767B\u5165",4),o("div",{class:"terms",style:l(n.linkFontColor)},"\u5FD8\u8A18\u5BC6\u78BC\xA0?",4)],4)])}var d=f(c,[["render",M]]);c.__docgenInfo={displayName:"modal02",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"joinButtonColor",type:{name:"string"}},{name:"joinButtonColor2",type:{name:"string"}},{name:"linkFontColor",type:{name:"string"}}]};var A={parameters:{storySource:{source:`import modal03 from "../components/Modal03.vue";\r
export default {\r
    title: "Modal/\u7ACB\u5373\u767B\u5165",\r
    component: modal03,\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        buttonColor: { control: "color" },\r
        joinButtonColor: { control: "color" },\r
        joinButtonColor2: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    components: { modal03 },\r
\r
    setup() {\r
        return { args };\r
    },\r
    template: '<modal03 v-bind="args" />',\r
});\r
export const Login = Template.bind({});\r
Login.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    linkFontColor: "#fff",\r
};\r
`,locationsMap:{login:{startLoc:{col:17,line:13},endLoc:{col:2,line:20},startBody:{col:17,line:13},endBody:{col:2,line:20}}}}},title:"Modal/\u7ACB\u5373\u767B\u5165",component:d,argTypes:{backgroundColor:{control:"color"},onClick:{},buttonColor:{control:"color"},joinButtonColor:{control:"color"},joinButtonColor2:{control:"color"}}};const w=t=>({components:{modal03:d},setup(){return{args:t}},template:'<modal03 v-bind="args" />'}),N=w.bind({});N.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",linkFontColor:"#fff"};const G=["Login"];export{N as Login,G as __namedExportsOrder,A as default};
//# sourceMappingURL=Modal03.stories.a852a119.js.map
