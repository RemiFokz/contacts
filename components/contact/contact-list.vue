<template>
  <ul>
    <ContactItem v-for="item in items" :item="item" :key="item.id" />
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  }
}
</script>
