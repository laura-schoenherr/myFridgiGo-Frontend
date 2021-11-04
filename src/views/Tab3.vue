<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rezepte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rezepte</ion-title>
        </ion-toolbar>
      </ion-header>

      <!--Filter button-->
      <ion-button fill="outline" color="medium" expand="block">
        <ion-label>Filtern</ion-label>
      </ion-button>

      <!--"Add" button for recipe form-->
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button router-link="tab3/form">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!--Beginning of the grid for the recipe display-->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
            </ion-card>

            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
            </ion-card>

            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
            </ion-card>

            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
            </ion-card>

            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
            </ion-card>

            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>

              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>ion-item in a card, icon left, button right</ion-label>
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>

              <ion-card-content>
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>




    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton,
  IonIcon, IonFab, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonButton, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from "vue";
import { add } from "ionicons/icons";

export default defineComponent({
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFabButton, IonIcon, IonFab,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonCol, IonRow },
  setup() {
    return {
      add,
    };
  },
})
</script>