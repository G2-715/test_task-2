<template>
  <div id="app">
    <c-container>
      <c-aside>

      </c-aside>
      <c-content>
        <router-view />

        <v-footer></v-footer>
      </c-content>
    </c-container>
  </div>
</template>

<script>
import cContainer from "./components/containers/cContainer";
import cAside from "./components/containers/cAside";
import cContent from "./components/containers/cContent";

import vFooter from "./components/vFooter";

export default {
  name: "App",
  components: {
    "c-container": cContainer,
    "c-aside": cAside,
    "c-content": cContent,

    "v-footer": vFooter
  }
};
</script>


<style lang="scss">
#app {
  background-color: #101114;
  min-height: 100vh;
}
</style>
