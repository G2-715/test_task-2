<template>
  <div id="app">
    <c-container>
      <c-aside>
        <v-aside />
      </c-aside>

      <c-content>
        <c-content-wrapper>
          <router-view />
        </c-content-wrapper>

        <v-footer />
      </c-content>
    </c-container>
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

.invalid-bottom {
  border-bottom: 1px solid #fab1a0 !important;
  box-shadow: inset 0px -2px 5px -4px rgba(250,177,160,1);
}
</style>
