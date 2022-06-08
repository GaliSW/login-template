import modal05 from "../components/Modal05.vue";
export default {
    title: "Modal/簡訊驗證",
    component: modal05,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        buttonColor: { control: "color" },
        joinButtonColor: { control: "color" },
        joinButtonColor2: { control: "color" },
    },
};
const Template = (args) => ({
    components: { modal05 },

    setup() {
        return { args };
    },
    template: '<modal05 v-bind="args" />',
});
export const Message = Template.bind({});
Message.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    fontColor: "#fff",
};
