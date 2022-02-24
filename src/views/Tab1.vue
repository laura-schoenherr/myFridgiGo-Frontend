<template>
  <ion-page>
      <ion-header>
        <ion-toolbar class="ion-padding-top ion-padding-end">
          <ion-title size="large">{{ $t('einkaufsliste') }}</ion-title>
<ion-item slot="end">
            <ion-button>
              <LocalesSwitcher/>
            </ion-button>
</ion-item>
        </ion-toolbar>
      </ion-header>

    <ion-content>

      <!-- <div
          id="container"
          v-bind:class="{'top-margin': !greeting, activityShowing: greeting }"
      >
        <ion-button v-show="!greeting" @click="loadGreeting" expand="block"
                    color="danger">View all Greetings</ion-button>

        <strong v-show="greeting"> All Greetings</strong> -->

      <!-- Loops through the greetings -->
        <!-- <ion-list>

          <ion-item v-for="item in greeting" v-bind:key="item.id">
            <ion-label>{{item}} </ion-label>
          </ion-item>
        </ion-list> -->

        <div
          id="username"
          v-bind:class="{'top-margin': !userName, activityShowing: userName }"
          >

        <p>{{ $t('tab1.eingeloggt')}}</p>
        <ion-button v-show="!userName" @click="getUserName" expand="block">Username</ion-button>
        </div>
        <div v-if="!isAuthenticated">
          <ion-button @click="login">Login or Sign up
        </ion-button> </div>
        <div v-else><ion-button @click="logout">Logout</ion-button></div>

        <ion-button @click="logout">Logout</ion-button>






      <!-- </div> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonItem, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, } from '@ionic/vue';
import axios from "axios";
import {defineComponent} from "vue";
import LocalesSwitcher from "@/components/LocalesSwitcher";
/* import {vueKeycloak} from "@baloise/vue-keycloak";*/

export default  defineComponent({
  name: 'Tab1',
  components: { LocalesSwitcher, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton,   },


  data() {
    return {
      greeting: null,
      firstName: '',
      lastName: '',
      userName: null,
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
    getUserName() {
        axios
            .get("http://localhost:8080/FridigGo/users/profile")
            .then((response) => {
              this.userName = response.data;
              console.log(this.userName);
            })
      }
    }
})
</script>