import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import router from './router';
import store from './store';

const client = new ApolloClient({
  uri: '/api/v3/graphql',
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

Vue.use(VueApollo);

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app');
