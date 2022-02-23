<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 4</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 4</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>

      <ion-card-header>
        <ion-card-title>Thats a fucking map</ion-card-title>
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
import {IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Maps from "@/views/Maps";

export default defineComponent({
  name: "Tab4",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    Maps
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
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
/* let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
      browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
*/

</script>


