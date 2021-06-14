<template>
  <div class="flex justify-center gap-4 m-8">
    <input
      v-model="columnName"
      class="border ring ring-green-200 focus:ring-green-400"
      type="text"
    /><button @click="submit()">Ajouter une colonne</button>
  </div>
</template>

<script setup lang="ts">
import { useTypedStore } from "@/store";
import { ref } from "@vue/reactivity";

const store = useTypedStore();

ref: columnName = "";

const submit = () => {
  store.commit("trello/SET_NEW_COL", columnName);
  columnName = "";
};
</script>
