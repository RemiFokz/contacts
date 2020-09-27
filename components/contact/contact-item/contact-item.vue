<template>
  <li class="card">
    <div class="card-content">
      <component
        :is="edit ? 'Edit' : 'Contact'"
        :item="item"
        @edit="changeEdit"
        @save="save"
        @remove="remove"
        @decline="changeEdit"
      />
    </div>
  </li>
</template>
<script>

import Edit from '@/components/contact/contact-item/contact-item-edit'
import Contact from '@/components/contact/contact-item/contact-item-view'
import { mapActions } from 'vuex'
export default {
  components: {
    Edit,
    Contact,
  },
  data: () => ({
    edit: false,
  }),
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      api_EditContact: 'api_EditContact',
      api_DeleteContact: 'api_DeleteContact'
    }),
    changeEdit() {
      this.edit = !this.edit
    },
    save(contact) {
      this.api_EditContact(contact).finally(() =>{
        this.changeEdit()
      })
    },
    remove(id) {
      this.api_DeleteContact(id)
    }
  }
}
</script>

