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
  <div class="columns">
    <div class="column">
      <div class="card">
        <line-chart label='DATA LABEL' :legend='true' legend='right' curve='false' xtitle='Month' ytitle='Number' :data="testData">test</line-chart>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <line-chart label='DATA LABEL' :legend='true' legend='right' curve='false' xtitle='Month' ytitle='Number' :data="testData">test</line-chart>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <line-chart label='DATA LABEL' :legend='true' legend='right' curve='false' xtitle='Month' ytitle='Number' :data="testData">test</line-chart>
      </div>
    </div>
  </div>

  <div class="card" id="addDataCard">
    <h2>Add New Data</h2>
    <div class="field">
      <label class="label">Test</label>
      <div class="control">
        <div class="select">
          <select v-model='testSelected'>
            <option disabled value=''>Select Test</option>
            <option>pH</option>
            <option>Temperature</option>
            <option>Nitrates</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <div class="select">
          <select v-model='daySelected'>
            <option disabled value=''>Select Day</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
          </select>
        </div>
        <div class="select">
          <select v-model='monthSelected'>
            <option disabled value=''>Select Month</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div class="select">
          <select v-model='yearSelected'>
            <option disabled value=''>Select Year</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Value</label>
      <div class="control">
        <input v-model='newValue' class="input" type="text" placeholder="e.g 7.4 (no units)">
      </div>
    </div>

    <div class="field is-grouped is-grouped-left" id="buttons">
      <p class="control">
        <a class="button is-primary" @click='dataSubmit()'>
      Submit
        </a>
      </p>
      <p class="control">
        <a class="button is-light" @click='cancel()'>
      Cancel
        </a>
      </p>
    </div>

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
      testSelected: '',
      daySelected: '',
      monthSelected: '',
      yearSelected: '',
      newValue: '',
      phData: [],
      tempData: [],
      nitratesData: [],
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
      ],
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

    dataSubmit() {
      this.axios.post('http://localhost:3000/dashboard', {
          'test': this.testSelected,
          'day': this.daySelected,
          'month': this.monthSelected,
          'year': this.yearSelected,
          'value': this.newValue,
          'user': this.userId
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },

    cancel() {
      this.axios.get('http://localhost:3000')
        .then((response) => {
          alert(response.data);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    margin: 1rem auto;
    max-width: 80%;
    padding: 1rem;
}

#addDataCard {
    max-width: 40%;

    div {
        max-width: 80%;
        margin: auto;
    }

    h2 {
        font-size: 1.5rem;
        padding: 0 0 0.5rem 0.5rem;
    }
}

#buttons {
    padding: 1.5rem 0;
}

.rlink {
    color: white;
}

.rlink:hover {
    color: #35dcf2;
}
</style>
