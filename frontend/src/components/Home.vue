<template>
<div id="app">
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item"><img src="../assets/goldfish.png" alt="Bulma: a modern CSS framework based on Flexbox" width="70" height="50">ReefChem</a>
      <div class="navbar-burger burger" data-target="navbarFullscreen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" id="navbarFullscreen">

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control button" style="color:#35dcf2" @click='signIn()'>Signin
              <!-- <router-link class="button" style="color:#35dcf2" :to="{ name: 'Signin'}">Signin</router-link> -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="splash">
    <div></div>
    <div class="container">
      <div class="card">
        <h1 class="title is-1 card-header">ReefChem</h1>
        <p class="subtitle card-content">The online chemistry tracking app for marine aquaria.</p>
      </div>
    </div>
    <div></div>
  </div>

  <div id="features">
    <div class="featurette">
      <div class="icon">
        <i class="fas fa-database fa-4x"></i>
      </div>
      <div>
        <h3 class="subtitle">Database-backed</h3>
        <p>It remembers everything<br><br></p>
        <p>We track your chemistry so you don't have to. Enter test values and it automatically logs your data.<br><br></p>
      </div>
    </div>
    <div class="featurette">
      <div class="icon">
        <i class="fas fa-cloud fa-4x"></i>
      </div>
      <div>
        <h3 class="subtitle">Cloud-Based</h3>
        <p>No downloads, always available<br><br>Easy sign-up with your <br>Google account.<br><br>Simple, right?</p>
      </div>
    </div>
    <div class="featurette">
      <div class="icon">
        <i class="fas fa-chart-line fa-4x"></i>
      </div>
      <div>
        <h3 class="subtitle">Easy Dashboard</h3>
        <p>WYSIWYG dashboard<br><br>One glance, and you know where you stand.<br><br>
        </p>
        <p>Want something to keep? Download high-res chart images showing your exact chemistry over time.</p>
      </div>
    </div>
  </div>

  <section class="footer">
    <p>&copy; 2017 I'd Love an Interview</p>
  </section>
</div>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$router.push('/signin');
    }
  }
}
</script>

<style lang="scss">
.splash {
    background-image: url("../assets/splashNew.jpg");
    background-size: cover;
    background-position: center;
    height: 50vh;
    color: white;
    display: flex;
    text-align: center;

    .container {

        .card {
            position: relative;
            top: 45%;
            margin: auto;
            max-width: 50%;
            background-color: rgba(163, 172, 186, 0.4);
            border-radius: 0.2rem;

            .card-header {
                padding: 1rem 0;
                justify-content: center;
                color: #35dcf2;
            }
            .card-content {
                padding: 0.5rem 0 1rem;
                color: white;
            }
        }
    }
}

#features {
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding-bottom: 3rem;
    max-width: 90%;

    .featurette {
        flex: 1;
        display: flex;
        flex-direction: column;
        max-width: 20%;
        align-items: center;
        padding-top: 3rem;

        div:nth-of-type(2) {
            padding: 2rem 0;
            text-align: center;
        }
    }
}

.footer {
    padding: 0.5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
}
.rlink {
    color: white;
}
.rlink:hover {
    color: #35dcf2;
}

.title {
    // color: white;
}
</style>
