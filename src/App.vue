<template>
  <div id="app">
    <prosthesis></prosthesis>
    <treatment></treatment>
  </div>
</template>

<script>
import Prosthesis from './components/Prosthesis.vue';
import Treatment from './components/Treatment.vue';

export default {
  name: 'App',
  components: {
    Prosthesis,
    Treatment,
  },
};
</script>

<style lang="scss">
@import './main.scss';
</style>
