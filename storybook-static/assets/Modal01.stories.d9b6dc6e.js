import{r as u,a as e,b as m,d as t,t as a,n as r,e as l,o as b,f as c}from"./vue.esm-bundler.213224a0.js";import{_ as g,a as x}from"./funtube.cf071115.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var y="/assets/mail.f9b38edb.svg",C="/assets/facebook-square.bb71fbd1.svg";const p={name:"modal01",props:{title:{type:String,required:!0},subTitle:{type:String,required:!0},subTitleSize:{type:String,validator:function(o){return["14px","16px","18px","20px"].indexOf(o)!==-1}},backgroundColor:{type:String},buttonColor:{type:String},buttonFontColor:{type:String},linkFontColor:{type:String},buttonFontSize:{type:String,validator:function(o){return["14px","16px","18px","20px"].indexOf(o)!==-1}},linkFontSize:{type:String,validator:function(o){return["14px","16px","18px","20px"].indexOf(o)!==-1}}},emits:["click"],setup(o,{emit:s}){return o=u(o),{subTitleSize:e(()=>({[`font-${o.subTitleSize}`]:!0})),buttonFontSize:e(()=>({[`font-${o.buttonFontSize}`]:!0})),linkFontSize:e(()=>({[`font-${o.linkFontSize}`]:!0})),backgroundColor:e(()=>({backgroundColor:o.backgroundColor})),buttonColor:e(()=>({backgroundColor:o.buttonColor})),buttonFontColor:e(()=>({color:o.buttonFontColor})),linkFontColor:e(()=>({color:o.linkFontColor})),onClick(){s("click")}}}},f={class:"modal_shadow"},k=t("div",{class:"close_btn"},[t("span",null,[t("img",{src:g,alt:""})])],-1),S={class:"title"},F=t("img",{src:x,alt:""},null,-1),h=t("span",null,"\xA0|\xA0",-1),v={class:"choose_blk"},z=t("img",{src:y,alt:""},null,-1),T=c(" \u4F7F\u7528\u96FB\u5B50\u4FE1\u7BB1\u52A0\u5165 "),M=[z,T],q=t("img",{src:C,alt:""},null,-1),B=c(" \u4F7F\u7528Facebook\u52A0\u5165 "),D=[q,B],j={class:"is_member"};function J(o,s,i,n,w,E){return b(),m("section",f,[t("div",{class:"modal",id:"modal01",style:l(n.backgroundColor)},[k,t("div",S,[F,h,t("span",null,a(i.title),1)]),t("div",{class:r(["sub_title",n.subTitleSize])},a(i.subTitle),3),t("div",v,[t("div",{style:l(n.buttonColor),class:r(n.buttonFontSize)},M,6),t("div",{style:l([n.buttonColor,n.buttonFontColor]),class:r(n.buttonFontSize)},D,6)]),t("div",j,[t("p",{class:r(n.linkFontSize),style:l(n.linkFontColor)}," \u5DF2\u662F\u6703\u54E1\xA0\u7ACB\u5373\u767B\u5165 ",6)])],4)])}var d=_(p,[["render",J]]);p.__docgenInfo={displayName:"modal01",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subTitle",type:{name:"string"},required:!0},{name:"subTitleSize",type:{name:"string"},values:["14px","16px","18px","20px"]},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"buttonFontColor",type:{name:"string"}},{name:"linkFontColor",type:{name:"string"}},{name:"buttonFontSize",type:{name:"string"},values:["14px","16px","18px","20px"]},{name:"linkFontSize",type:{name:"string"},values:["14px","16px","18px","20px"]}],events:[{name:"click"}]};var I={parameters:{storySource:{source:`import modal01 from "../components/Modal01.vue";\r
export default {\r
    title: "Modal/\u52A0\u5165\u756B\u9762",\r
    component: modal01,\r
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        subTitleSize: {\r
            control: { type: "select" },\r
            options: ["14px", "16px", "18px", "20px"],\r
        },\r
        buttonFontSize: {\r
            control: { type: "select" },\r
            options: ["14px", "16px", "18px", "20px"],\r
        },\r
        linkFontSize: {\r
            control: { type: "select" },\r
            options: ["14px", "16px", "18px", "20px"],\r
        },\r
        buttonColor: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: { modal01 },\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return { args };\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<modal01 v-bind="args" />',\r
});\r
export const Join = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Join.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    subTitle: "\u52A0\u5165\u6703\u54E1\u4EAB\u6709\u5B8C\u6574\u529F\u80FD",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    buttonFontColor: "#fff",\r
    linkFontColor: "#fff",\r
};\r
`,locationsMap:{join:{startLoc:{col:17,line:24},endLoc:{col:2,line:33},startBody:{col:17,line:24},endBody:{col:2,line:33}}}}},title:"Modal/\u52A0\u5165\u756B\u9762",component:d,argTypes:{backgroundColor:{control:"color"},onClick:{},subTitleSize:{control:{type:"select"},options:["14px","16px","18px","20px"]},buttonFontSize:{control:{type:"select"},options:["14px","16px","18px","20px"]},linkFontSize:{control:{type:"select"},options:["14px","16px","18px","20px"]},buttonColor:{control:"color"}}};const N=o=>({components:{modal01:d},setup(){return{args:o}},template:'<modal01 v-bind="args" />'}),O=N.bind({});O.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",subTitle:"\u52A0\u5165\u6703\u54E1\u4EAB\u6709\u5B8C\u6574\u529F\u80FD",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",buttonFontColor:"#fff",linkFontColor:"#fff"};const G=["Join"];export{O as Join,G as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal01.stories.d9b6dc6e.js.map
