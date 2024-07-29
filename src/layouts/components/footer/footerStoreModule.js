import axios from '@axios'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    sendSubscriberEmail(context, subscriberEmail) {
      return new Promise((resolve, reject) => {
        axios
          .post(`newsletter/${subscriberEmail}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response.data)
          })
      })
    },
  },
}
