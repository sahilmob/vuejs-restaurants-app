<template>
  <div class="row flex-column">
    <div>
      <p v-if="!currentUser">
        Please login to continue
      </p>
      <p v-else>Logged in as: <br>{{currentUser}}</p>
    </div>
    <div>
      <form>
        <div v-show="!currentUser" class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div v-show="!currentUser" class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <button type="button" class="btn btn-primary" @click.prevent="signIn" v-if="!currentUser">Sign in</button>
        <button type="button" class="btn btn-danger" @click.prevent="signOut" v-else>Sign out</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { store } from "../store/store";
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});
export default {
  methods: {
    signIn() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          var errCode = err.code;
          var errMsg = err.message;

          if (errCode === "auth/wrong-password") {
            alert("Worng password");
          } else {
            alert(errMsg);
          }
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged out");
        })
        .catch(err => {
          alert("error.");
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style>
</style>
