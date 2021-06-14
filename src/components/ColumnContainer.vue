<template>
  <div class="w-full flex divide-x-2">
    <div v-for="(column, index) in columnList" :key="index" class="w-4/5">
      <Column :column="column" :idx-list="index"></Column>
    </div>
  </div>
</template>

<script setup lang="ts">
import Column from "@/components/Column.vue";

import { useTypedStore } from "@/store";
import { computed } from "@vue/runtime-core";

const store = useTypedStore();

ref: columnList = computed(() => store.state.trello.columnList);
</script>
