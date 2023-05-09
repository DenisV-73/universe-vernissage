<template>
  <v-app>
    <v-app-bar app>
      <v-btn class="font-weight-bold" large @click="toHome">
        <v-img :width="32" src="@/assets/vernissage_logo.png"></v-img>
        VERNISSAGE
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn text small class="ma-1">PRICING</v-btn>
      <v-btn text small class="ma-1">HILFE</v-btn>
      <v-btn text small class="ma-1" @click="showRegistrationDialog = true">REGISTRIEREN</v-btn>
      <v-btn text small class="ma-1" @click="showLoginDialog = true">EINLOGGEN</v-btn>

      <v-app-bar-nav-icon @click="switchDrawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer v-model="drawer" height="618" absolute temporary right hide-overlay>
        <v-card>
          <v-list id="menu_text" nav dense>
            <v-icon>mdi-account-outline</v-icon>
            <v-list-item-group>
              <v-list-item v-for="(item, index) in logon_items" :key="index">
                {{ item.title }}
              </v-list-item>
            </v-list-item-group>

            <v-divider :thickness="6" color="error"></v-divider>

            <v-list-item-group>
              <v-list-item v-for="(item, index) in tools_items" :key="index">
                {{ item.title }}
              </v-list-item>
            </v-list-item-group>

            <v-divider :thickness="6" color="error"></v-divider>

            <v-list-item-group>
              <h4 class="text-center">Universe-Vernissage entdecken</h4>
              <v-list-item v-for="(item, index) in explore_items" :key="index" @click="openCategory">
                {{ item.title }}
              </v-list-item>
            </v-list-item-group>

            <v-divider :thickness="6" color="error"></v-divider>

            <v-list-item-group>
              <v-list-item v-for=" (item, index)  in  support_items " :key="index" @click="toDsvgo">
                {{ item.title }}
              </v-list-item>
            </v-list-item-group>

            <!-- <v-divider :thickness="6" color="error"></v-divider> -->

            <!-- <v-list-item-group>
              <v-list-item v-for="(item, index) in support_items" :key="index">
                {{ item.title }}
              </v-list-item>
            </v-list-item-group> -->


          </v-list>
        </v-card>
      </v-navigation-drawer>
      <router-view />
    </v-main>

    <LoginComponent v-model="showLoginDialog" class="justify-center" />
    <Registration v-model="showRegistrationDialog" class="justify-center" />

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import router from './router';
import LoginComponent from './components/login.vue';
import Registration from './components/registration.vue';

@Component({
  components: {
    LoginComponent,
    Registration,
  }
})
export default class App extends Vue {
  drawer = false;
  showLoginDialog = false;
  showRegistrationDialog = false;

  logon_items = [
    {
      title: 'Registrieren',
      //LINK - Route To Registration
    },
    {
      title: 'Einloggen',
      //LINK - Route To Login
    },
  ];

  tools_items = [
    {
      title: 'Depot',
      //LINK - Route 
    },
    {
      title: 'Spaces',
      //LINK - Route
    },
    {
      title: 'Office',
      //LINK - Route
    },
    {
      title: 'Augmented',
      //LINK - Route 
    },
  ];

  explore_items = [
    {
      title: '3D Ausstellungen',
      //LINK - Route 
    },
    {
      title: 'Kunst',
      path: ''
    },
    {
      title: 'Marketplace',
      //LINK - Route
    },
  ];

  support_items = [
    {
      title: 'DSVGO',

    },
    {
      title: 'Impressum',
      //LINK - Route
    },
    {
      title: 'Kontakt',
      //LINK - Route
    },

  ];

  switchDrawer() {
    this.drawer = !this.drawer;
  }

  toHome() {
    router.push({ name: 'home' });
  }

  toDsvgo() {
    router.push({ name: 'dsvgo' });
  }


  openCategory() {
    router.push({ name: 'KunstTest' });
  }

}
</script>

<style>
.v-application {
  font-family: Ysabeau !important;
}


#logo-btn {
  font-weight: black !important;
}

#menu_text {
  font-weight: bold !important;
  font-size: 0.8em !important;
}
</style>