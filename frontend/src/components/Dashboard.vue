<template>
<div>
  <h1>Dashboard</h1>
  <button @click="logOut">Log out</button>

</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss">
</style>
