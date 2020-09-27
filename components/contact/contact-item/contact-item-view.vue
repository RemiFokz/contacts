<template>
  <div>
    <h6>Name: {{ item.name }}</h6>
    <h6>Phone : {{ item.phone }}</h6>
    <button class="btn" @click="$emit('edit')">Edit</button>
    <button class="btn" @click="$emit('remove', item.id)">Delete</button>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>