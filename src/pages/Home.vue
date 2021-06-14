<template>
  <AddCol />
  <ColumnContainer />
</template>

<script setup lang="ts">
import AddCol from "@/components/AddCol.vue";
import ColumnContainer from "@/components/ColumnContainer.vue";

//NOTE PERSO :
//EMIT & PROPS EN SCRIPT SETUPs
//import { defineEmit, defineProps } from "vue";
//
// const props = defineProps<{
//   name: string
// }>()
//
// const emit = defineEmit<(eventName: "userClicked" | "userCancelled", payload?: string) => void>()
//
// emit("userCancelled", "message de qualité")
</script>
