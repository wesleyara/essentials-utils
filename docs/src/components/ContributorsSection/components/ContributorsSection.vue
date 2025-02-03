<script setup lang='ts'>
import { contributors } from '../../../utils/constants';
import { ContributorsCard } from '../../ContributorsCard';
</script>

<template>
  <section class="window-width mx-auto mb-10 mt-20 flex flex-col items-center">
    <h4>Author</h4>
    <ContributorsCard
      src="https://avatars.githubusercontent.com/u/89321125?v=4"
      name="Wesley Araújo"
      github="https://github.com/wesleyara"
      showName
    />
    <h4>Contributors</h4>
    <span class="flex flex-wrap items-center justify-center">
      <ContributorsCard
        v-for="contributor in contributors"
        :key="contributor.name"
        :src="contributor.image"
        :name="contributor.name"
        :github="contributor.github"
        :showName="false"
      />
    </span>
</section>
</template>