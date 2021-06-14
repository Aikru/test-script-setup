<template>
  <div class="flex flex-col shadow-xl px-8 rounded-2xl mx-4">
    <div class="text-xl font-semibold text-green-400">
      {{ props.column.name }}
    </div>
    <div v-for="(task, index) in column.tasks" :key="index">
      <Task :idx-task="index" :idx-list="idxList" :task="task" />
    </div>

    <button @click="addTask">Add Task</button>
  </div>
</template>

<script setup lang="ts">
import Task from "@/components/Task.vue";
import { defineProps } from "vue";
import { useTypedStore } from "@/store";
import type { Column } from "@/type";

const store = useTypedStore();

const props = defineProps<{
  column: Column;
  idxList: number;        
}>();

const addTask = () => {
  store.dispatch("trello/taskManager", { idxList: props.idxList });
};
</script>
      