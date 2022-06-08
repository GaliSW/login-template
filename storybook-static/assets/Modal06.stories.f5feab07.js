import{r as i,a as n,b as c,d as o,t as d,e,o as u}from"./vue.esm-bundler.213224a0.js";import{_ as m}from"./back_btn.c7f2ca39.js";import{_ as p,a as C}from"./funtube.cf071115.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const l={name:"modal02",props:{title:{type:String,required:!0},backgroundColor:{type:String},buttonColor:{type:String},joinButtonColor:{type:String},sendButtonColor:{type:String},fontColor:{type:String}},setup(t){return t=i(t),{subTitleSize:n(()=>({[`font-${t.subTitleSize}`]:!0})),buttonFontSize:n(()=>({[`font-${t.buttonFontSize}`]:!0})),linkFontSize:n(()=>({[`font-${t.linkFontSize}`]:!0})),backgroundColor:n(()=>({backgroundColor:t.backgroundColor})),buttonColor:n(()=>({backgroundColor:t.buttonColor})),joinButtonColor:n(()=>({backgroundColor:t.joinButtonColor})),sendButtonColor:n(()=>({backgroundColor:t.sendButtonColor})),fontColor:n(()=>({color:t.fontColor}))}}},g={class:"modal_shadow"},b=o("div",{class:"top_btn"},[o("span",null,[o("img",{src:m,alt:""})]),o("span",null,[o("img",{src:p,alt:""})])],-1),f={class:"title"},y=o("img",{src:C,alt:""},null,-1),k=o("span",null,"\xA0|\xA0",-1),B=o("div",{class:"sub_title"},"\u7C21\u8A0A\u9A57\u8B49",-1),v={class:"info"},S={class:"new_phone"},h=o("input",{type:"text",placeholder:"\u65B0\u624B\u6A5F\u865F\u78BC"},null,-1);function x(t,T,s,r,D,M){return u(),c("section",g,[o("div",{class:"modal",id:"modal06",style:e(r.backgroundColor)},[b,o("div",f,[y,k,o("span",null,d(s.title),1)]),B,o("div",v,[o("div",S,[h,o("div",{style:e(r.sendButtonColor)},"\u767C\u9001\u9A57\u8B49\u78BC",4)]),o("input",{type:"text",name:"account",id:"account",placeholder:"\u8ACB\u8F38\u5165\u7C21\u8A0A\u9A57\u8B49\u78BC",autocomplete:"off",style:e(r.buttonColor)},null,4),o("div",{style:e(r.fontColor)}," \u6536\u5230\u7C21\u8A0A\u9A57\u8B49\u78BC\u5F8C\uFF0C\u8ACB\u65BC30\u5206\u9418\u5167\u5B8C\u6210\u52A0\u5165\u3002\u8D85\u904E30\u5206\u9418\uFF0C\u9A57\u8B49\u78BC\u5373\u5931\u6548 ",4)]),o("div",{class:"join",style:e(r.joinButtonColor)},"\u52A0\u5165\u5B8C\u6210",4)],4)])}var a=_(l,[["render",x]]);l.__docgenInfo={displayName:"modal02",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"joinButtonColor",type:{name:"string"}},{name:"sendButtonColor",type:{name:"string"}},{name:"fontColor",type:{name:"string"}}]};var w={parameters:{storySource:{source:`import modal06 from "../components/Modal06.vue";\r
export default {\r
    title: "Modal/\u4FEE\u6539\u624B\u6A5F",\r
    component: modal06,\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        buttonColor: { control: "color" },\r
        joinButtonColor: { control: "color" },\r
        sendButtonColor: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    components: { modal06 },\r
\r
    setup() {\r
        return { args };\r
    },\r
    template: '<modal06 v-bind="args" />',\r
});\r
export const Update = Template.bind({});\r
Update.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    fontColor: "#fff",\r
};\r
`,locationsMap:{update:{startLoc:{col:17,line:13},endLoc:{col:2,line:20},startBody:{col:17,line:13},endBody:{col:2,line:20}}}}},title:"Modal/\u4FEE\u6539\u624B\u6A5F",component:a,argTypes:{backgroundColor:{control:"color"},onClick:{},buttonColor:{control:"color"},joinButtonColor:{control:"color"},sendButtonColor:{control:"color"}}};const j=t=>({components:{modal06:a},setup(){return{args:t}},template:'<modal06 v-bind="args" />'}),z=j.bind({});z.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",fontColor:"#fff"};const E=["Update"];export{z as Update,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Modal06.stories.f5feab07.js.map
