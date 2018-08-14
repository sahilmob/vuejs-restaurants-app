<template>
    <div class="row">
        <form>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
            <button type="button" class="btn btn-danger" @click.prevent="sigOut">Sign out</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
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
      firebase.auth
        .signOut()
        .then(() => {
          alert("Logged out");
        })
        .catch(err => {
          alert("error.");
        });
    }
  }
};
</script>

<style>
</style>
