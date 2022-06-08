<template>
  <section class="modal_shadow">
    <div class="modal" id="modal04" :style="backgroundColor">
      <div class="top_btn">
        <span><img src="../assets/images/back_btn.svg" alt="" /></span>
        <span><img src="../assets/images/close_btn.svg" alt="" /></span>
      </div>
      <div class="title">
        <img src="../assets/images/funtube.svg" alt="" />
        <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span>
      </div>
      <div class="sub_title">忘記密碼</div>
      <div class="info">
        <form action="#">
          <input
            type="text"
            name="account"
            id="account"
            placeholder="帳號(信箱)"
            autocomplete="on"
            :style="buttonColor"
          />

          <div :style="fontColor">
            <img src="../assets/images/alert.svg" alt="" />
            密碼會直接寄到您註冊的信箱
          </div>
        </form>
      </div>
      <div class="send" :style="joinButtonColor">送出</div>
    </div>
  </section>
</template>
<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  name: "modal02",
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    joinButtonColor: {
      type: String,
    },
    joinButtonColor2: {
      type: String,
    },
    fontColor: {
      type: String,
    },
  },

  //   emits: ["sex"],

  setup(props) {
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
      joinButtonColor: computed(() => ({
        backgroundColor: props.joinButtonColor,
      })),
      joinButtonColor2: computed(() => ({
        backgroundColor: props.joinButtonColor2,
      })),
      fontColor: computed(() => ({
        color: props.fontColor,
      })),
    };
  },
};
</script>