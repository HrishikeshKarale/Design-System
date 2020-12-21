//https://developers.google.com/identity/sign-in/web/build-button

import { cookie } from "@/typeScript/cookie.js";

export const authentication = {
  data() {
    const token = null;
    const profile = false;
    const googleUserProfile = null;
    const GclientSecret = "mpYEEEaJX4lCHdESYhKVUoJ1";
    const Gname = "google-signin-client_id";
    const GClientID =
      "94699127686-kq6vksueuk2rne078alt4pv2951hvq13.apps.googleusercontent.com";
    const gapi = null;
    const user = null;
    const sqliteUser = null;
    const sqliteToken = null;
    return {
      token,
      googleUserProfile,
      profile,
      GclientSecret,
      Gname,
      GClientID,
      gapi,
      user,
      sqliteUser,
      sqliteToken
    };
  }, //data
  mixins: [cookie], //mixins

  computed: {
    signedIn: function() {
      let signedIn = false;
      if (this.gapi) {
        signedIn = this.gapi && this.gapi.isSignedIn();
      } else if (localStorage.getItem("user")) {
        signedIn = localStorage.getItem("jwt") != null;
      }
      return signedIn;
    }
  }, //computed

  methods: {
    //initialize user data when signedIn via Google
    init: function(response) {
      if (response) {
        this.gapi = response.detail.gapi;

        //if signedIn
        if (this.gapi.isSignedIn()) {
          this.googleUserProfile = this.gapi.getBasicProfile();
          this.user = {
            ID: this.googleUserProfile.getId(),
            name: this.googleUserProfile.getName(),
            image: this.googleUserProfile.getImageUrl(),
            email: this.googleUserProfile.getEmail(),
            token: this.gapi.getAuthResponse().id_token,
            isLoggedIn: this.gapi.isSignedIn(),
            isAdmin: 0
          };
          this.setCookie("gapi", JSON.stringify(this.gapi));
          localStorage.setItem("gapi", JSON.stringify(this.gapi));
          this.setCookie("user", JSON.stringify(this.user));
          localStorage.setItem("user", JSON.stringify(this.user));
        }
      }
    }, //init

    signOut: function() {
      if (this.gapi) {
        this.gapi.disconnect();
        this.user.isLoggedIn = false;
      }
      this.deleteCookie("user");
      localStorage.removeItem("jwt");
      this.deleteCookie("user");
      localStorage.removeItem("user");
      location.reload(true);
    } //signOut
  }, //methods

  beforeCreate() {
    const googleLoginScript = document.createElement("script");
    googleLoginScript.type = "text/javascript";
    googleLoginScript.async = true;
    googleLoginScript.defer = true;
    googleLoginScript.src =
      "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginScript, s);
  },
  created() {
    //add eventlistner to catch the gapi after the platform.js loads
    window.addEventListener("google-loaded", this.init);

    //add meta and srcipt tag for google autnentication
    const googleLoginMeta = document.createElement("meta");
    googleLoginMeta.name = this.Gname;
    googleLoginMeta.content = this.GClientID;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginMeta, s);
  } //mounted
};
