<template>
  <div>
    <input class="input-field" type="text" placeholder="name" v-model="name" />
    <input
      class="input-field"
      type="text"
      placeholder="phone"
      v-model="phone"
    />
    <button class="btn" @click="add">add</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    name: '',
    phone: '',
  }),
  methods: {
    ...mapActions({
      api_AddContact: 'api_AddContact',
    }),
    add() {
      const newContact = {
        name: this.name,
        phone: this.phone,
        id: Math.floor(Math.random() * 233232323)
      }
      this.api_AddContact(newContact).finally(() => {
        this.clear('name', 'phone')
      })
    },
    clear(...fields) {
      fields.map((el) => {
        this[el] = ''
      })
    },
  },
}
</script>
