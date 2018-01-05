<template>
<div>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="field is-grouped">
            <router-link class="rlink" :to="{ name: 'Home' }">Home</router-link>
          </div>
        </div>
        <div class="navbar-item">
          <router-link class="rlink" :to="{ name: 'Profile' }">Profile</router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <p class="control">
              <a class="button is-danger" @click="logOut">
              <span>Log out</span>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <a class="button is-danger is-pulled-right">Log out</a>
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
import chart from 'chart.js'
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
    margin: 1rem auto;
}

.rlink {
    color: white;
}

.rlink:hover {
    color: #35dcf2;
}
</style>
