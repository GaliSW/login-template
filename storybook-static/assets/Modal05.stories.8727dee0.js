import{r as i,a as n,b as c,d as o,t as d,e,o as u}from"./vue.esm-bundler.213224a0.js";import{_ as m}from"./back_btn.c7f2ca39.js";import{_ as g,a as C}from"./funtube.cf071115.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const l={name:"modal02",props:{title:{type:String,required:!0},backgroundColor:{type:String},buttonColor:{type:String},joinButtonColor:{type:String},joinButtonColor2:{type:String},fontColor:{type:String}},setup(t){return t=i(t),{subTitleSize:n(()=>({[`font-${t.subTitleSize}`]:!0})),buttonFontSize:n(()=>({[`font-${t.buttonFontSize}`]:!0})),linkFontSize:n(()=>({[`font-${t.linkFontSize}`]:!0})),backgroundColor:n(()=>({backgroundColor:t.backgroundColor})),buttonColor:n(()=>({backgroundColor:t.buttonColor})),joinButtonColor:n(()=>({backgroundColor:t.joinButtonColor})),joinButtonColor2:n(()=>({backgroundColor:t.joinButtonColor2})),fontColor:n(()=>({color:t.fontColor}))}}},_={class:"modal_shadow"},b=o("div",{class:"top_btn"},[o("span",null,[o("img",{src:m,alt:""})]),o("span",null,[o("img",{src:g,alt:""})])],-1),f={class:"title"},y=o("img",{src:C,alt:""},null,-1),k=o("span",null,"\xA0|\xA0",-1),B=o("div",{class:"sub_title"},"\u7C21\u8A0A\u9A57\u8B49",-1),j={class:"info"},S={action:"#"};function v(t,x,s,r,z,T){return u(),c("section",_,[o("div",{class:"modal",id:"modal05",style:e(r.backgroundColor)},[b,o("div",f,[y,k,o("span",null,d(s.title),1)]),B,o("div",j,[o("form",S,[o("input",{type:"text",name:"account",id:"account",placeholder:"\u8ACB\u8F38\u5165\u7C21\u8A0A\u9A57\u8B49\u78BC",autocomplete:"off",style:e(r.buttonColor)},null,4),o("div",{style:e(r.fontColor)}," \u6536\u5230\u7C21\u8A0A\u9A57\u8B49\u78BC\u5F8C\uFF0C\u8ACB\u65BC30\u5206\u9418\u5167\u5B8C\u6210\u52A0\u5165\u3002\u8D85\u904E30\u5206\u9418\uFF0C\u9A57\u8B49\u78BC\u5373\u5931\u6548 ",4)])]),o("div",{class:"join",style:e(r.joinButtonColor)},"\u52A0\u5165\u5B8C\u6210",4),o("div",{class:"update",style:e(r.joinButtonColor2)},"\u4FEE\u6539\u624B\u6A5F\u865F\u78BC",4)],4)])}var a=p(l,[["render",v]]);l.__docgenInfo={displayName:"modal02",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"joinButtonColor",type:{name:"string"}},{name:"joinButtonColor2",type:{name:"string"}},{name:"fontColor",type:{name:"string"}}]};var E={parameters:{storySource:{source:`import modal05 from "../components/Modal05.vue";\r
export default {\r
    title: "Modal/\u7C21\u8A0A\u9A57\u8B49",\r
    component: modal05,\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        buttonColor: { control: "color" },\r
        joinButtonColor: { control: "color" },\r
        joinButtonColor2: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    components: { modal05 },\r
\r
    setup() {\r
        return { args };\r
    },\r
    template: '<modal05 v-bind="args" />',\r
});\r
export const Message = Template.bind({});\r
Message.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    fontColor: "#fff",\r
};\r
`,locationsMap:{message:{startLoc:{col:17,line:13},endLoc:{col:2,line:20},startBody:{col:17,line:13},endBody:{col:2,line:20}}}}},title:"Modal/\u7C21\u8A0A\u9A57\u8B49",component:a,argTypes:{backgroundColor:{control:"color"},onClick:{},buttonColor:{control:"color"},joinButtonColor:{control:"color"},joinButtonColor2:{control:"color"}}};const h=t=>({components:{modal05:a},setup(){return{args:t}},template:'<modal05 v-bind="args" />'}),M=h.bind({});M.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",fontColor:"#fff"};const L=["Message"];export{M as Message,L as __namedExportsOrder,E as default};
//# sourceMappingURL=Modal05.stories.8727dee0.js.map
