import modal04 from "../components/Modal04.vue";
export default {
    title: "Modal/忘記密碼",
    component: modal04,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        buttonColor: { control: "color" },
        joinButtonColor: { control: "color" },
        joinButtonColor2: { control: "color" },
    },
};
const Template = (args) => ({
    components: { modal04 },

    setup() {
        return { args };
    },
    template: '<modal04 v-bind="args" />',
});
export const Forget = Template.bind({});
Forget.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    fontColor: "#fff",
};
