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


      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import axios from "axios";
import {defineComponent} from "vue";

export default  defineComponent({
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList },

  data() {
    return { greeting: null as any };
  },
  methods: {
    loadGreeting(){
      axios
          .get("http://localhost:8080/greeting")
          .then((response) => {
            this.greeting = response.data;
        })
      }
    }
})
</script>