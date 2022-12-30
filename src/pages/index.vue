<template>
  <div class="text-red-500">Index</div>
  <Meta title="Index" :keyword="['首页']" description="文本介绍" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import Meta from "@/utils/Meta.vue";
</script>
<style scoped lang="scss"></style>
<route lang="json">
{
  "meta": {
    "layout": "index"
  }
}
</route>
