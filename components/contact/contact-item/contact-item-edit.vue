<template>
  <div>
    <input class="input-field" v-model="name" />
    <input class="input-field" v-model="phone" />
    <button class="btn" @click="$emit('save', { name, phone, id: item.id })">
      Save
    </button>
    <button class="btn" @click="$emit('decline')">Decline</button>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created() {
    const {name, phone} = this.item 
    this.phone = phone
    this.name = name
  }
}
</script>