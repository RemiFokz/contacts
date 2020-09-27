export const state = () => ({
  contacts: [],
  loginStatus: false,
})
export const mutations = {
  LOAD_CONTACTS(state, contacts) {
    state.contacts = contacts
  },
  SET_LOGIN(state, login) {
    state.loginStatus = login
  },
  ADD_CONTACT(state, contact) {
    state.contacts.push(contact)
  },
  EDIT_CONTACT(state, contact) {
    const ind = state.contacts.findIndex(({ id }) => id === contact.id)
    const { name, phone } = contact
    if (ind >= 0) {
      state.contacts[ind].name = name
      state.contacts[ind].phone = phone
    }
  },
  DELETE_CONTACT(state, contactId) {
    state.contacts = state.contacts.filter(({ id }) => id !== contactId)
  },
}
export const actions = {
  async api_GetContacts({ commit }) {
    try {
      const response = await this.$axios.get('http://localhost:3000/contacts')

      commit('LOAD_CONTACTS', response.data)
    } catch (error) {
      throw error
    }
  },
  async api_Login({ commit }, userInfo) {
    try {
      const response = await this.$axios.get('http://localhost:3000/login')
      commit('SET_LOGIN', response.data.login)
    } catch (error) {
      throw error
    }
  },
  async api_AddContact({ commit }, contact) {
    try {
      const response = await this.$axios.post(
        'http://localhost:3000/contacts',
        contact
      )

      commit('ADD_CONTACT', response.data)
    } catch (error) {
      throw error
    }
  },
  async api_EditContact({ commit }, contact) {
    try {
      const response = await this.$axios.patch(
        `http://localhost:3000/contacts/${contact.id}`,
        contact
      )

      commit('EDIT_CONTACT', response.data)
    } catch (error) {
      throw error
    }
  },
  async api_DeleteContact({ commit }, id) {
    try {
      const response = await this.$axios.delete(
        `http://localhost:3000/contacts/${id}`
      )
      commit('DELETE_CONTACT', id)
    } catch (error) {
      throw error
    }
  },
}
