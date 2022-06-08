import modal07 from "../components/Modal07.vue";
export default {
    title: "Modal/隱私權",
    component: modal07,
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
    },
};
const Template = (args) => ({
    components: { modal07 },

    setup() {
        return { args };
    },
    template: '<modal07 v-bind="args" />',
});
export const Terms = Template.bind({});
Terms.args = {
    title: "看電影學英文",
    backgroundColor: "#fff",
    fontColor: "#000",
};
