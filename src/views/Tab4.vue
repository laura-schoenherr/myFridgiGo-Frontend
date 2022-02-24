<template>
  <ion-page>
      <ion-header>
        <ion-toolbar class="ion-padding-top ion-padding-end">
          <ion-title size="large">{{ $t('tab4.title')}}</ion-title>
          <ion-item slot="end">
            <ion-button>
            <LocalesSwitcher/>
            </ion-button>
          </ion-item>
        </ion-toolbar>
      </ion-header>
<ion-content>
      <ion-card>
      <ion-card-header>
        <ion-card-title>{{ $t('tab4.Büro')}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <maps
            :disableUI="false"
            :zoom="12"
            mapType="roadmap"
            :center="{ lat: 52.41163319339472, lng: 12.539792573722497 }"
            :markers="markers">
        </maps>
      </ion-card-content>

      </ion-card>

</ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Maps from "@/views/Maps";
import LocalesSwitcher from "@/components/LocalesSwitcher";

export default defineComponent({
  name: "Tab4",
  components: {
    LocalesSwitcher,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    Maps,
    IonItem,

  },

  setup() {
    const markers = [{
      lat: 52.41163319339472,
      lng: 12.539792573722497,
      title: "Unser Büro"
    }]
    return {markers};
  }
})


</script>


