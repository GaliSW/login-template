import modal03 from "../components/Modal03.vue";
export default {
    title: "Modal/立即登入",
    component: modal03,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        buttonColor: { control: "color" },
        joinButtonColor: { control: "color" },
        joinButtonColor2: { control: "color" },
    },
};
const Template = (args) => ({
    components: { modal03 },

    setup() {
        return { args };
    },
    template: '<modal03 v-bind="args" />',
});
export const Login = Template.bind({});
Login.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    linkFontColor: "#fff",
};
