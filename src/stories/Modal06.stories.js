import modal06 from "../components/Modal06.vue";
export default {
    title: "Modal/修改手機",
    component: modal06,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        buttonColor: { control: "color" },
        joinButtonColor: { control: "color" },
        sendButtonColor: { control: "color" },
    },
};
const Template = (args) => ({
    components: { modal06 },

    setup() {
        return { args };
    },
    template: '<modal06 v-bind="args" />',
});
export const Update = Template.bind({});
Update.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    fontColor: "#fff",
};
