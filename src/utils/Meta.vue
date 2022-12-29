<template></template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
interface meataPropsType {
  title?: string;
  keyword?: string[];
  description?: string;
  meta?: { [key: string]: string }[];
}
const props = defineProps<meataPropsType>();
useHead({
  title: props.title,
  meta: [
    {
      name: "keyword",
      content: props.keyword?.join(","),
    },
    {
      name: "description",
      content: props.description,
    },
    ...(props.meta || []),
  ],
});
</script>
