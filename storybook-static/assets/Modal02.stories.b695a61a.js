import{r as y,g as k,a as e,b as c,d as o,t as h,i as u,e as r,w as s,v as i,f as m,o as d}from"./vue.esm-bundler.213224a0.js";import{_ as v}from"./back_btn.c7f2ca39.js";import{_ as S,a as x}from"./funtube.cf071115.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";var f="/assets/radio_checked.d522ebd0.svg",g="/assets/radio_uncheck.21467ad2.svg";const p={name:"modal02",props:{fb:{type:Boolean,default:!1},title:{type:String,required:!0},backgroundColor:{type:String},buttonColor:{type:String},joinButtonColor:{type:String},fontColor:{type:String},linkFontColor:{type:String}},setup(n){n=y(n);const l=k(0),a=t=>{l.value=t};return{subTitleSize:e(()=>({[`font-${n.subTitleSize}`]:!0})),buttonFontSize:e(()=>({[`font-${n.buttonFontSize}`]:!0})),linkFontSize:e(()=>({[`font-${n.linkFontSize}`]:!0})),backgroundColor:e(()=>({backgroundColor:n.backgroundColor})),buttonColor:e(()=>({backgroundColor:n.buttonColor})),joinButtonColor:e(()=>({backgroundColor:n.joinButtonColor})),fontColor:e(()=>({color:n.fontColor})),linkFontColor:e(()=>({color:n.linkFontColor})),sex:l,sexClick:a}}},F={class:"modal_shadow"},T=o("div",{class:"top_btn"},[o("span",null,[o("img",{src:v,alt:""})]),o("span",null,[o("img",{src:S,alt:""})])],-1),j={class:"title"},D=o("img",{src:x,alt:""},null,-1),M=o("span",null,"\xA0|\xA0",-1),w={key:0,class:"sub_title"},U={class:"info"},z={action:"#"},N=o("input",{type:"radio",id:"male",name:"sex"},null,-1),L={class:"male_checked",src:f,alt:""},V={class:"male_uncheck",src:g,alt:""},E=m(" \u7537 "),q=o("input",{type:"radio",id:"female",name:"sex"},null,-1),A={class:"female_checked",src:f,alt:""},I={class:"female_uncheck",src:g,alt:""},O=m(" \u5973 "),W=m(" \u52A0\u5165\u5373\u4EE3\u8868\u540C\u610FNEWS\u7684\u670D\u52D9 ");function G(n,l,a,t,K,P){return d(),c("section",F,[o("div",{class:"modal",id:"modal02",style:r(t.backgroundColor)},[T,o("div",j,[D,M,o("span",null,h(a.title),1)]),a.fb?(d(),c("div",w,"\u4F7F\u7528Facebook\u767B\u5165")):u("",!0),o("div",U,[o("form",z,[a.fb?u("",!0):(d(),c("input",{key:0,type:"text",name:"account",id:"account",placeholder:"\u5E33\u865F(\u4FE1\u7BB1)",autocomplete:"on",style:r(t.buttonColor)},null,4)),o("input",{type:"password",name:"password",id:"password",placeholder:"\u624B\u6A5F(\u5BC6\u78BC)",autocomplete:"on",style:r(t.buttonColor)},null,4),o("p",{style:r(t.fontColor)},"\u8ACB\u586B\u5BEB\u6B63\u78BA\u624B\u6A5F\u865F\u78BC\u4EE5\u53D6\u5F97\u7C21\u8A0A\u9A57\u8B49\u78BC\uFF0C\u5B8C\u6210\u52A0\u5165",4),o("div",null,[o("input",{type:"text",name:"name",id:"name",placeholder:"\u4E2D\u6587\u59D3\u540D",autocomplete:"on",style:r(t.buttonColor)},null,4),o("div",null,[N,o("label",{for:"male",onClick:l[0]||(l[0]=C=>t.sexClick(0))},[s(o("img",L,null,512),[[i,t.sex==0]]),s(o("img",V,null,512),[[i,t.sex!==0]]),E]),q,o("label",{for:"female",onClick:l[1]||(l[1]=C=>t.sexClick(1))},[s(o("img",A,null,512),[[i,t.sex==1]]),s(o("img",I,null,512),[[i,t.sex!==1]]),O])])])])]),o("div",{class:"join_btn",style:r(t.joinButtonColor)},"\u52A0\u5165",4),o("div",{class:"terms",style:r(t.linkFontColor)},[W,o("a",{href:"#",style:r(t.linkFontColor)},"\u689D\u6B3E\u8207\u96B1\u79C1\u6B0A",4)],4)],4)])}var b=B(p,[["render",G]]);p.__docgenInfo={displayName:"modal02",exportName:"default",description:"",tags:{},props:[{name:"fb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"buttonColor",type:{name:"string"}},{name:"joinButtonColor",type:{name:"string"}},{name:"fontColor",type:{name:"string"}},{name:"linkFontColor",type:{name:"string"}}]};var Z={parameters:{storySource:{source:`import modal02 from "../components/Modal02.vue";\r
export default {\r
    title: "Modal/\u8A3B\u518A\u756B\u9762",\r
    component: modal02,\r
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
    argTypes: {\r
        backgroundColor: { control: "color" },\r
        onClick: {},\r
        buttonColor: { control: "color" },\r
    },\r
};\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: { modal02 },\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return { args };\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<modal02 v-bind="args" />',\r
});\r
export const MailSignUp = Template.bind({});\r
MailSignUp.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    // joinButtonColor: "rgba(0, 0, 0, 0.2)",\r
    fontColor: "#fff",\r
    linkFontColor: "#fff",\r
    fb: false,\r
};\r
\r
export const FBSignUp = Template.bind({});\r
FBSignUp.args = {\r
    title: "\u770B\u96FB\u5F71\u5B78\u82F1\u6587",\r
    backgroundColor: "#0D2D53",\r
    buttonColor: "rgba(0, 0, 0, 0.2)",\r
    // joinButtonColor: "rgba(0, 0, 0, 0.2)",\r
    fontColor: "#fff",\r
    linkFontColor: "#fff",\r
    fb: true,\r
};\r
`,locationsMap:{"mail-sign-up":{startLoc:{col:17,line:12},endLoc:{col:2,line:21},startBody:{col:17,line:12},endBody:{col:2,line:21}},"fb-sign-up":{startLoc:{col:17,line:12},endLoc:{col:2,line:21},startBody:{col:17,line:12},endBody:{col:2,line:21}}}}},title:"Modal/\u8A3B\u518A\u756B\u9762",component:b,argTypes:{backgroundColor:{control:"color"},onClick:{},buttonColor:{control:"color"}}};const _=n=>({components:{modal02:b},setup(){return{args:n}},template:'<modal02 v-bind="args" />'}),H=_.bind({});H.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",fontColor:"#fff",linkFontColor:"#fff",fb:!1};const J=_.bind({});J.args={title:"\u770B\u96FB\u5F71\u5B78\u82F1\u6587",backgroundColor:"#0D2D53",buttonColor:"rgba(0, 0, 0, 0.2)",fontColor:"#fff",linkFontColor:"#fff",fb:!0};const $=["MailSignUp","FBSignUp"];export{J as FBSignUp,H as MailSignUp,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Modal02.stories.b695a61a.js.map
