<template>
  吞下星光
  <!-- <img :src="photo" class="photo" /> -->
  <a-list item-layout="horizontal" :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.content"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar :src="photo" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import photo from "../assets/头像.jpg";
import { withDefaults,defineProps } from "vue";

interface Props{
  postList: any[]
}
const props=withDefaults(defineProps<Props>(), {
  postList:()=>[]
});

</script>
<style scoped>
.photo{
    width: 200px;
}
</style>
