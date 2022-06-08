import modal02 from "../components/Modal02.vue";
export default {
    title: "Modal/註冊畫面",
    component: modal02,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        buttonColor: { control: "color" },
    },
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { modal02 },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<modal02 v-bind="args" />',
});
export const MailSignUp = Template.bind({});
MailSignUp.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    // joinButtonColor: "rgba(0, 0, 0, 0.2)",
    fontColor: "#fff",
    linkFontColor: "#fff",
    fb: false,
};

export const FBSignUp = Template.bind({});
FBSignUp.args = {
    title: "看電影學英文",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    // joinButtonColor: "rgba(0, 0, 0, 0.2)",
    fontColor: "#fff",
    linkFontColor: "#fff",
    fb: true,
};
