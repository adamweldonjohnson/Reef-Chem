<template>
<div>
  <h1 class="is-size-1">Dashboard</h1>
  <a class="button is-danger is-pulled-right" @click="logOut">Log out</a>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://images.pexels.com/photos/731141/pexels-photo-731141.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Scuba Santa">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="this.photo" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{name}}</p>
          <p class="subtitle is-6">{{email}}</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
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
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    max-width: 35%;
    margin: auto;
}
</style>
