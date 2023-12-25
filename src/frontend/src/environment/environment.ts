export const host = 'http://localhost:3000/api/';
export const environment = {
  category: {
    get: host + 'category'
  },

  subscribe: {
    get: host + 'subscribe'
  },

  host: {
    get: host
  },

  author: {
    get: host + 'user'
  },

  login: {
    get: host + 'login'
  },

  register: {
    get: host + 'register'
  },

  logos: {
    get: host + 'logos'
  },

  privacyPolicy: {
    get: host + 'privacy-policy'
  },

  contactUs: {
    get: host + 'contact-us'
  },

  posts: {
    get: host + 'post'
  },
}
