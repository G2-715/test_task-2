<template>
  <div id="app">
    <div class="background">
      <c-container>
        <c-aside>
          <v-aside />
        </c-aside>

        <c-content>
          <c-content-wrapper>
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </c-content-wrapper>

          <v-footer />
        </c-content>
      </c-container>
    </div>
  </div>
</template>

<script>
import cContainer from "./containers/cContainer";
import cAside from "./containers/cAside";
import cContent from "./containers/cContent";
import cContentWrapper from "./containers/cContentWrapper";

import vAside from "./components/vAside";
import vFooter from "./components/vFooter";

export default {
  name: "App",
  components: {
    "c-container": cContainer,
    "c-aside": cAside,
    "c-content": cContent,
    "c-content-wrapper": cContentWrapper,

    "v-aside": vAside,
    "v-footer": vFooter
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

@font-face {
  font-family: "fontb267362fe0bf162719681f797a756433";

  src: url("https://nomail.com.ua/files/eot/b267362fe0bf162719681f797a756433.eot?#iefix")
      format("embedded-opentype"),
    url("https://nomail.com.ua/files/woff/b267362fe0bf162719681f797a756433.woff")
      format("woff"),
    url("https://nomail.com.ua/files/woff2/b267362fe0bf162719681f797a756433.woff2")
      format("woff2");
}

@font-face {
  font-family: "Arial MT";
  src: local("ArialMT"),
    url("https://nomail.com.ua/files/woff/b267362fe0bf162719681f797a756433.woff")
      format("woff");
}

#app {
  position: relative;
  background-color: #101114;
  min-height: 100vh;
}

p {
  margin: 0;
}

.gray-text,
.dark-text {
  font-size: 16px;
  font-family: "Arial MT";
  line-height: 21px;
}

.gray-text {
  color: #8494ab;
}

.dark-text {
  color: #373c43;
}

.invalid {
  border: 1px solid #fab1a0 !important;
  box-shadow: 0px 0px 8px #fab1a0;
}

.invalid-info {
  color: #fab1a0 !important;
}

.placeholder {
  text-shadow: 0 0 0 #bec6cf !important;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(calc(-100% - 45px));
  opacity: 0;
}
</style>
