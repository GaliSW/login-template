import modal01 from "../components/Modal01.vue";
export default {
    title: "Modal/加入畫面",
    component: modal01,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: {},
        subTitleSize: {
            control: { type: "select" },
            options: ["14px", "16px", "18px", "20px"],
        },
        buttonFontSize: {
            control: { type: "select" },
            options: ["14px", "16px", "18px", "20px"],
        },
        linkFontSize: {
            control: { type: "select" },
            options: ["14px", "16px", "18px", "20px"],
        },
        buttonColor: { control: "color" },
    },
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { modal01 },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<modal01 v-bind="args" />',
});
export const Join = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Join.args = {
    title: "看電影學英文",
    subTitle: "加入會員享有完整功能",
    backgroundColor: "#0D2D53",
    buttonColor: "rgba(0, 0, 0, 0.2)",
    buttonFontColor: "#fff",
    linkFontColor: "#fff",
};
