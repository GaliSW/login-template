<template>
  <section class="modal_shadow">
    <div class="modal" id="modal06" :style="backgroundColor">
      <div class="top_btn">
        <span><img src="../assets/images/back_btn.svg" alt="" /></span>
        <span><img src="../assets/images/close_btn.svg" alt="" /></span>
      </div>
      <div class="title">
        <img src="../assets/images/funtube.svg" alt="" />
        <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span>
      </div>
      <div class="sub_title">簡訊驗證</div>
      <div class="info">
        <div class="new_phone">
          <input type="text" placeholder="新手機號碼" />
          <div :style="sendButtonColor">發送驗證碼</div>
        </div>
        <input
          type="text"
          name="account"
          id="account"
          placeholder="請輸入簡訊驗證碼"
          autocomplete="off"
          :style="buttonColor"
        />

        <div :style="fontColor">
          收到簡訊驗證碼後，請於30分鐘內完成加入。超過30分鐘，驗證碼即失效
        </div>
      </div>
      <div class="join" :style="joinButtonColor">加入完成</div>
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
    sendButtonColor: {
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
      sendButtonColor: computed(() => ({
        backgroundColor: props.sendButtonColor,
      })),
      fontColor: computed(() => ({
        color: props.fontColor,
      })),
    };
  },
};
</script>