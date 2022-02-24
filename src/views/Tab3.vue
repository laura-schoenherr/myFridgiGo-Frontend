<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-padding-top ion-padding-end">
        <ion-title size="large">{{ $t('tab3.title')}}</ion-title>
        <ion-item slot="end">
          <ion-button>
            <LocalesSwitcher/>
          </ion-button>
        </ion-item>
      </ion-toolbar>
    </ion-header>
    <ion-content>


      <!--Filter button-->
      <ion-button fill="outline" color="medium" expand="block">
        <ion-label>{{ $t('tab3.Filtern')}}</ion-label>
      </ion-button>

      <!--"Add" button for recipe form-->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button router-link="tab3/form">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!--Beginning of the grid for the recipe display-->
      <ion-grid>
        <ion-row> <!--first row-->
         <ion-col size-sm="6">
            <ion-card>
              <ion-card-content class="ion-no-padding">
                <img
                    alt="Kuchenstücke am Stiel mit Schokoglasur auf Blech"
                    src="../img/Cakesticks.png" />
              </ion-card-content>
              <ion-card-header>
                <ion-card-title>Cake Sticks</ion-card-title>
                <ion-card-subtitle>Schokokuchen am Stiel</ion-card-subtitle>
              </ion-card-header>
            </ion-card>

          </ion-col>
          <ion-col size-sm="6">

            <ion-card>
              <ion-card-content class="ion-no-padding">
                <img
                    alt="Schupfnudeln mit Spinat"
                    src="../img/Schupfnudeln.png"/>
              </ion-card-content>
              <ion-card-header>
                <ion-card-title>Schupfnudeln mit Spinat</ion-card-title>
               <ion-card-subtitle>15 Minuten Pfanne</ion-card-subtitle>
              </ion-card-header>
            </ion-card>

          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-content class="ion-no-padding">
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>

            <ion-card>
              <ion-card-content class="ion-no-padding">
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-content class="ion-no-padding">
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>

            <ion-card>
              <ion-card-content class="ion-no-padding">
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>

            <ion-card>
              <ion-card-content class="ion-no-padding">
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>

            <ion-card>
              <ion-card-content class="ion-no-padding">
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>

          <ion-col>
            <ion-card>
              <ion-card-content class="ion-no-padding">
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </ion-card-content>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
            </ion-card>

             <ion-card>
              <ion-card-content class="ion-no-padding">
                This is content, without any paragraph or header tags,
                within an ion-card-content element.
              </ion-card-content>
               <ion-card-header>
                 <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                 <ion-card-title>Card Title</ion-card-title>
               </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonFabButton, IonContent,
  IonIcon, IonFab, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonButton, IonGrid, IonCol, IonRow, IonLabel} from '@ionic/vue';
import { defineComponent } from "vue";
import { add } from "ionicons/icons";
import LocalesSwitcher from "@/components/LocalesSwitcher";

export default defineComponent({
  name: 'Tab3',
  components: { LocalesSwitcher, IonHeader, IonToolbar, IonTitle, IonPage, IonFabButton, IonContent, IonIcon, IonFab,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonCol, IonRow, IonLabel, },
  setup() {
    return {
      add,
    }
  }
});
</script>

<style scoped>
</style>
