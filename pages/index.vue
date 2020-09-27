<template>
  <div class="row">
    <div class="section">
      <ContactAdd />
    </div>
    <div class="section">
      <SearchBar v-model="search" />
      <ContactList :items="filteredContacts" />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapState({ contacts: 'contacts' }),
    filteredContacts() {
      const fields = ['name', 'phone']
      return this.search ? 
      this.contacts.filter(el => fields.some(field =>  el[field].toString().toLowerCase().includes(this.search.toLowerCase()))) : this.contacts
    }
  },
  methods: {
    ...mapActions({
      api_GetContacts: 'api_GetContacts'
    })
  },
  created() {
    this.api_GetContacts()
  }
}
</script>
<style lang="scss">
</style>
