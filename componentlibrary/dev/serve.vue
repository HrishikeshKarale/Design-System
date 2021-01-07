<script lang="ts">
import Vue from 'vue';
import { ComponentLibraryVue2Sample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    ComponentLibraryVue2Sample,
  }
});
</script>

<template>
  <div id="app">
    <component-library-vue2-sample />
  </div>
</template>
