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
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-5 is-parent">
      <div class="tile is-child card">
        <div class="card-image">
          <img :src="headerImage" alt="A Bubble Anenmone">
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="this.photo" alt="user image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Hello, {{name}}</p>
              <p class="subtitle is-6">How's it going?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-child card dataCard">
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
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
      <div class="tile is-child is-parent card dataCard">
        <h2>Test Data Search</h2>
        <div class="field">
          <label class="label">Test</label>
          <div class="control">
            <div class="select">
              <select v-model='searchTestSelected'>
                <option disabled value=''>Select Test</option>
                <option>pH</option>
                <option>Temperature</option>
                <option>Nitrates</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Value</label>
          <div class="control">
            <input v-model='searchValue' class="input" type="text" placeholder="e.g 7.4 (no units)">
          </div>
        </div>

        <div class="field is-grouped is-grouped-left" id="buttons">
          <p class="control">
            <a class="button is-primary" @click='searchSubmit()'>
          Submit
            </a>
          </p>
          <p class="control">
            <a class="button is-light" @click='cancel()'>
          Cancel
            </a>
          </p>
        </div>
        <div v-if="resultsFound" class="is-child card">
          <h3>Results</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Test Value</th>
                <th>Delete Record</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in searchResultsArray">
                <td>{{i[0]}}</td>
                <td>{{i[1]}}</td>
                <td>
                  <p class="control">
                    <a class="button is-danger" @click='deleteRecord'>Delete</a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="control">
            <a class="button is-secondary" @click='clearSearchArray'>Clear Results</a>
          </p>
        </div>
      </div>

    </div>

    <div class="tile is-parent is-vertical">
      <div class="tile is-child card">
        <h2>pH</h2>
        <line-chart label='pH' :min='7' :max='9' :legend='true' legend='right' xtitle='Date' ytitle='pH' :data="apipHData" :download='true' download='yourpHChart' :colors="['#35dcf2']"></line-chart>
      </div>

      <div class="tile is-child card">
        <h2>Temperature</h2>
        <line-chart label='Temperature' :min='60' :max='85.0' :legend='true' legend='right' xtitle='Date' ytitle='Temperature (F)' :data="apiTemperatureData" :download='true' download='yourTemperatureChart' :colors="['#35dcf2']"></line-chart>
      </div>

      <div class="tile is-child card">
        <h2>Nitrates</h2>
        <line-chart label='Nitrates' :min='0' :max='0.2' :legend='true' legend='right' xtitle='Date' ytitle='Nitrates mmol/dL' :data="apiNitratesData" :download='true' download='yourNitrateChart' :colors="['#35dcf2']"></line-chart>
      </div>
    </div>
    <div class="tile is-parent is-vertical is-3">
      <div class="tile is-child card list">
        <h2>API pH Data</h2>
        <ul v-for="i in apipHData">
          <li>{{i}}</li>
        </ul>
      </div>
      <div class="tile is-child card list">
        <h2>API Temperature Data</h2>
        <ul v-for="i in apiTemperatureData">
          <li>{{i}}</li>
        </ul>
      </div>
      <div class="tile is-child card list">
        <h2>API Nitrates Data</h2>
        <ul v-for="i in apiNitratesData">
          <li>{{i}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import headerImage from "../assets/bubbleanemone.jpg"

export default {
  components: {},
  data() {
    return {
      headerImage,
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
      apipHData: [],
      apiTemperatureData: [],
      apiNitratesData: [],
      libraryOptions: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      resultsFound: false,
      searchResultsArray: [],
      searchTestSelected: '',
      searchValue: '',
    }
  },
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;

      this.axios.get('http://localhost:3000/dashboard/' + this.userId)
        .then((response) => {
          let data = response.data;

          for (var i = 0; i < data.length; i++) {
            if (data[i].type == 'pH') {
              let apiDate = data[i].date;
              let displayDate = new Date(apiDate);
              let localDateString = displayDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
              this.apipHData.push([localDateString, data[i].value])

            } else if (data[i].type == 'Temperature') {
              let apiDate = data[i].date;
              let displayDate = new Date(apiDate);
              let localDateString = displayDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
              this.apiTemperatureData.push([localDateString, data[i].value])
            } else {
              let apiDate = data[i].date;
              let displayDate = new Date(apiDate);
              let localDateString = displayDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
              this.apiNitratesData.push([localDateString, data[i].value])
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },

    dataSubmit() {
      //Setting new date from user fields
      let submitDate = new Date();
      submitDate.setFullYear(this.yearSelected, (this.monthSelected - 1), this.daySelected);

      //Posting to server
      this.axios.post('http://localhost:3000/dashboard', {
          'type': this.testSelected,
          'date': submitDate,
          'value': this.newValue,
          'userId': this.userId
        })
        //Logging response, alerting user
        .then((response) => {
          console.log(response);
          // alert('data added');
        })
        //Logging error if error
        .catch((error) => {
          console.log(error);
        });
    },

    cancel() {},

    searchSubmit() {

      this.axios.post(('http://localhost:3000/dashboard/' + this.userId), {
          'type': this.searchTestSelected,
          'value': this.searchValue,
          'userId': this.userId
        })
        .then((response) => {
          let data = response.data;
          this.resultsFound = true;
          // console.log(response);
          for (var i = 0; i < data.length; i++) {
            if (data[i].type == 'pH') {
              let apiDate = data[i].date;
              let displayDate = new Date(apiDate);
              let localDateString = displayDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
              this.searchResultsArray.push([localDateString, data[i].value])
            } else {
              let apiDate = data[i].date;
              let displayDate = new Date(apiDate);
              let localDateString = displayDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
              this.apiNitratesData.push([localDateString, data[i].value])
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },

    clearSearchArray() {
      this.searchResultsArray = [];
      this.searchValue = '';
      this.searchTestSelected = '';
      this.resultsFound = !this.resultsFound;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 1rem;
    h2 {
        font-size: 1.5rem;
        padding: 0.5rem;
        text-align: center;
    }
    h3 {
        font-size: 1.5rem;
        padding: 0.5rem;
        text-align: center;
    }
}

.is-ancestor {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.list {
    li {
        font-style: italic;
        text-align: center;
    }
}

.dataCard {
    div {
        max-width: 80%;
        margin: auto;
    }

    h2 {
        font-size: 1.5rem;
        text-align: center;
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
