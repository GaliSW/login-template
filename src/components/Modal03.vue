<template>
  <section class="modal_shadow">
    <div class="modal" id="modal03" :style="backgroundColor">
      <div class="top_btn">
        <span><img src="../assets/images/back_btn.svg" alt="" /></span>
        <span><img src="../assets/images/close_btn.svg" alt="" /></span>
      </div>
      <div class="title">
        <img src="../assets/images/funtube.svg" alt="" />
        <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span>
      </div>
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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="手機(密碼)"
            autocomplete="on"
            :style="buttonColor"
          />
          <div @click="remember">
            <img src="../assets/images/uncheck.svg" alt="" v-if="isRemember" />
            <img src="../assets/images/checked.svg" alt="" v-else />
            記住我
          </div>
        </form>
      </div>
      <div class="login_mail" :style="joinButtonColor">登入</div>
      <div class="login_fb" :style="joinButtonColor2">使用Facebook登入</div>
      <div class="terms" :style="linkFontColor">忘記密碼&nbsp;?</div>
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
    linkFontColor: {
      type: String,
    },
  },

  //   emits: ["sex"],

  setup(props) {
    props = reactive(props);
    const isRemember = ref(false);
    const remember = () => {
      isRemember.value = !isRemember.value;
    };

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
      linkFontColor: computed(() => ({
        color: props.linkFontColor,
      })),

      isRemember,
      remember,
    };
  },
};
</script>