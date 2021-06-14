<template>
  <div v-if="!isEdit" class="bg-white rounded">
    <div>{{ task.name }}</div>
    <div>{{ task.description }}</div>
  </div>
  <div v-else>
    <input v-model="newName" type="text" class="border" />
    <input v-model="newDescription" type="text" class="border" />
    <input v-model="newDate" type="date" class="border" />
  </div>
  <button @click="edit">{{ isEdit ? "sauvegarder" : "Editer" }}</button>
</template>
<script setup lang="ts">
import { useTypedStore } from "@/store";
import type { Task } from "@/type";
import { defineProps } from "vue";

const store = useTypedStore();
const props = defineProps<{
  task: Task;
  idxTask: number;
  idxList: number;
}>();
ref: isEdit = false;
ref: newName = props.task.name;
ref: newDate = props.task.date;
ref: newDescription = props.task.description;

const edit = () => {
  isEdit = !isEdit;
  if (!isEdit) {
    console.log(newName, newDescription);
    store.commit("trello/EDIT_TASK", {
      idxTask: props.idxTask,
      idxList: props.idxList,
      newName: newName,
      newDate: newDate,
      newDescription: newDescription,
    });
  }
};
</script>
