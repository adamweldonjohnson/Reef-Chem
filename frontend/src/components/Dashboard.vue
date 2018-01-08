<template>
<div>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></a>
      <div class="navbar-burger burger" data-target="navbarFullscreen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" id="navbarFullscreen">
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
  <div class="card">
    <line-chart :data="testData">test</line-chart>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'


export default {
  components: {},
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
      testData: [
        ['Jan', 44],
        ['Feb', 27],
        ['Mar', 60],
        ['Apr', 55],
        ['May', 37],
        ['Jun', 40],
        ['Jul', 69],
        ['Aug', 33],
        ['Sept', 76],
        ['Oct', 90],
        ['Nov', 34],
        ['Dec', 22]
      ]
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
