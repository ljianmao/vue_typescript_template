<template>
    <div id="app">
        <img src="./assets/logo.png" />
        <router-view />
    </div>
</template>

<script loang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'App'
})
// export default {
//     name: 'App'
// }
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
