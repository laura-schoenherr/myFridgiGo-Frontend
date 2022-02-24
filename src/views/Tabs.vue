<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" >
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>{{ $t('tabs.Einkaufsliste')}}</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="todayOutline"></ion-icon>
          <ion-label>{{ $t('tabs.Plan')}}</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="fileTrayFullOutline"></ion-icon>
          <ion-label>{{ $t('tabs.Rezepte')}}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="personCircleOutline"></ion-icon>
          <ion-label>{{ $t('tabs.Konto')}}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personCircleOutline, homeOutline, todayOutline, fileTrayFullOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      personCircleOutline,
      homeOutline,
      todayOutline,
      fileTrayFullOutline
    }
  }
}
</script>