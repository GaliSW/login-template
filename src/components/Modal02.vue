<template>
  <section class="modal_shadow">
    <div class="modal" id="modal02" :style="backgroundColor">
      <div class="top_btn">
        <span><img src="../assets/images/back_btn.svg" alt="" /></span>
        <span><img src="../assets/images/close_btn.svg" alt="" /></span>
      </div>
      <div class="title">
        <img src="../assets/images/funtube.svg" alt="" />
        <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span>
      </div>
      <div class="sub_title" v-if="fb">使用Facebook登入</div>
      <div class="info">
        <form action="#">
          <input
            type="text"
            name="account"
            id="account"
            placeholder="帳號(信箱)"
            autocomplete="on"
            :style="buttonColor"
            v-if="!fb"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="手機(密碼)"
            autocomplete="on"
            :style="buttonColor"
          />
          <p :style="fontColor">請填寫正確手機號碼以取得簡訊驗證碼，完成加入</p>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="中文姓名"
              autocomplete="on"
              :style="buttonColor"
            />
            <div>
              <input type="radio" id="male" name="sex" />

              <label for="male" @click="sexClick(0)">
                <img
                  class="male_checked"
                  src="../assets/images/radio_checked.svg"
                  alt=""
                  v-show="sex == 0"
                />
                <img
                  class="male_uncheck"
                  src="../assets/images/radio_uncheck.svg"
                  alt=""
                  v-show="sex !== 0"
                />
                男
              </label>
              <input type="radio" id="female" name="sex" />

              <label for="female" @click="sexClick(1)">
                <img
                  class="female_checked"
                  src="../assets/images/radio_checked.svg"
                  alt=""
                  v-show="sex == 1"
                />
                <img
                  class="female_uncheck"
                  src="../assets/images/radio_uncheck.svg"
                  alt=""
                  v-show="sex !== 1"
                />

                女
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="join_btn" :style="joinButtonColor">加入</div>
      <div class="terms" :style="linkFontColor">
        加入即代表同意NEWS的服務
        <a href="#" :style="linkFontColor">條款與隱私權</a>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  name: "modal02",
  props: {
    fb: {
      type: Boolean,
      default: false,
    },
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
    fontColor: {
      type: String,
    },
    linkFontColor: {
      type: String,
    },
  },

  //   emits: ["sex"],

  setup(props) {
    props = reactive(props);
    const sex = ref(0);
    const sexClick = (s) => {
      sex.value = s;
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
      fontColor: computed(() => ({
        color: props.fontColor,
      })),
      linkFontColor: computed(() => ({
        color: props.linkFontColor,
      })),

      sex,
      sexClick,
    };
  },
};
</script>