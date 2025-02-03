<script setup lang="ts">
import { defineProps } from "vue";

import { ContributorCardProps } from "../models/contributors-card.models";

const handleNavigate = (url: string, newTab: boolean) => {
  open(url, newTab ? "_blank" : "_self");
};

defineProps<ContributorCardProps>();
</script>

<template>
  <span class="flex flex-col items-center justify-center gap-1 rounded-md p-4">
    <img
      :src="src"
      :alt="name"
      class="h-24 w-24 cursor-pointer rounded-full"
      @click="handleNavigate(github, true)"
    />

    <p v-if="showName">{{ name }}</p>
  </span>
</template>