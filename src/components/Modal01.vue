<template>
  <section class="modal_shadow">
    <div class="modal" id="modal01" :style="backgroundColor">
      <div class="close_btn">
        <!-- <span><img src="../assets/images/back_btn.svg" alt="" /></span> -->
        <span><img src="../assets/images/close_btn.svg" alt="" /></span>
      </div>
      <div class="title">
        <img src="../assets/images/funtube.svg" alt="" />
        <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span>
      </div>
      <div class="sub_title" :class="subTitleSize">{{ subTitle }}</div>
      <div class="choose_blk">
        <div :style="buttonColor" :class="buttonFontSize">
          <img src="../assets/images/mail.svg" alt="" />
          使用電子信箱加入
        </div>
        <div :style="[buttonColor, buttonFontColor]" :class="buttonFontSize">
          <img src="../assets/images/facebook-square.svg" alt="" />
          使用Facebook加入
        </div>
      </div>
      <div class="is_member">
        <p :class="linkFontSize" :style="linkFontColor">
          已是會員&nbsp;立即登入
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  name: "modal01",
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    subTitleSize: {
      type: String,
      validator: function (value) {
        return ["14px", "16px", "18px", "20px"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    buttonFontColor: {
      type: String,
    },
    linkFontColor: {
      type: String,
    },
    buttonFontSize: {
      type: String,
      validator: function (value) {
        return ["14px", "16px", "18px", "20px"].indexOf(value) !== -1;
      },
    },
    linkFontSize: {
      type: String,
      validator: function (value) {
        return ["14px", "16px", "18px", "20px"].indexOf(value) !== -1;
      },
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      subTitleSize: computed(() => ({
        [`font-${props.subTitleSize}`]: true,
      })),
      buttonFontSize: computed(() => ({
        [`font-${props.buttonFontSize}`]: true,
      })),
      linkFontSize: computed(() => ({
        [`font-${props.linkFontSize}`]: true,
      })),
      backgroundColor: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      buttonColor: computed(() => ({
        backgroundColor: props.buttonColor,
      })),
      buttonFontColor: computed(() => ({
        color: props.buttonFontColor,
      })),
      linkFontColor: computed(() => ({
        color: props.linkFontColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>