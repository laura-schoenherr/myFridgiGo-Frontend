<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>User Greeting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">User Greeting</ion-title>
        </ion-toolbar>

      </ion-header>

      <div
          id="container"
          v-bind:class="{'top-margin': !greeting, activityShowing: greeting }"
      >
        <ion-button v-show="!greeting" @click="loadGreeting" expand="block"
                    color="danger">View all Greetings</ion-button>

        <strong v-show="greeting"> All Greetings</strong>

        <ion-list>
          <!-- Loops through the greetings -->
          <ion-item v-for="item in greeting" v-bind:key="item.id">
            <ion-label>{{item}} </ion-label>
          </ion-item>
        </ion-list>
        <p>Hier kannst du dich ein- und ausloggen oder ein Konto einrichten</p>
        <div v-if="!isAuthenticated"> <ion-button @click="login">Login or Sign up</ion-button> </div>
        <div v-else><ion-button @click="logout">Logout</ion-button></div>

        <ion-button @click="logout">Logout</ion-button>


      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton } from '@ionic/vue';
import axios from "axios";
import {defineComponent} from "vue";
/* import {vueKeycloak} from "@baloise/vue-keycloak";*/

export default  defineComponent({
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonButton },

  data() {
    return {
      greeting: null,
      firstName: '',
      lastName: '',
      userInfo: '',
    };
  },
 /* computed: {
    isAuthenticated: () => {
      return vueKeycloak.authenticated
    }
  },
  methods: {
    login () {
      vueKeycloak.login({ redirectUri: window.location.origin })
    },
    logout () {
      vueKeycloak.logout({ redirectUri: window.location.origin })
    }
  } */
  methods: {
    /* loadGreeting(){
      axios
          .get("http://localhost:8080/greeting")
          .then((response) => {
            this.greeting = response.data;
        })
      } */
    getUserInfo() {
      axios
      .get("http://localhost:8080/FridigGo/")
    }
    }
})
</script>