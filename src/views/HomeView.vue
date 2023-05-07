<template>
  <div class="ma-4">
    <v-col>
      <v-row>
        <v-img src="@/assets/gallery_image.jpg"></v-img>
      </v-row>

      <v-row>
        <v-col>

          <h1 class="text-center"> <b>Kuratieren</b> und präsentieren Sie Kunst <b>online auf</b></h1>
          <h1 class="text-center font-weight-bold"><b> höchstem Niveau</b></h1>

          <v-layout align-start justify-center fill-height>
            <div class="ma-16">
              <h2 class="text-center">SORGFÄLTIGE KURATIERUNG</h2>
              <p class="text-center"><br>Kuratieren Sie Ausstellungen online, mit<br> vorgefertigten oder
                <br>individuellen
                3D‑Räumen.
              </p>
            </div>
            <div class="ma-16">
              <h2 class="text-center">VIRTUELLE GALERIEN</h2>
              <p class="text-center"><br>Alles, was Sie brauchen, um Kunst zu<br> präsentieren und zu verwalten.</p>
            </div>
            <div class="ma-16">
              <h2 class="text-center">IMMERSIVES ERLEBNIS</h2>
              <p class="text-center"><br>Mit der dritten Dimension geben Sie ihrem<br>Portfolio mehr Tiefe und gestalten
                eine<br>attraktive Vorschau.</p>
            </div>
          </v-layout>

        </v-col>
      </v-row>

      <v-row class="row-color">
        <v-col>

          <v-layout align-start justify-center column fill-height>

            <h1 class="ma-12">3D-Ausstellungen<br><b>einfach erstellen.</b></h1>

            <div class="ma-12">
              <v-row>

                <v-icon class="align-start mx-3">mdi-video-3d-variant</v-icon>

                <p class="text-align-justify">Wählen Sie aus einer Vielzahl
                  kostenloser
                  3D-Räume
                  oder<br>verbessern
                  Sie das Erlebnis mit Räumen aus unserem<br>Marketplace.</p>

              </v-row>
            </div>

            <div class="ma-12">
              <v-row>

                <v-icon class="align-start mx-3">mdi-plus-box-outline</v-icon>

                <p class="text-align-justify">Fügen Sie Kunstwerke, Skulpturen, Audio und Video hinzu<br>und platzieren
                  Sie
                  sie in Ihrem 3D-Raum.</p>
              </v-row>
            </div>

            <div class="ma-12">
              <v-row>

                <v-icon class="align-start mx-3">mdi-code-tags</v-icon>

                <p class="text-align-justify">Fügen Sie Kunstwerke, Skulpturen, Audio und Video hinzu<br>und platzieren
                  Sie
                  sie in Ihrem 3D-Raum.</p>
              </v-row>
            </div>

            <v-btn x-large class="mx-16" color="black" dark @click="toRoom">
              Zu Art.Spaces
            </v-btn>

          </v-layout>
        </v-col>

        <v-col>
          <v-img src="@/assets/artspaces-place-sculpture.jpg"></v-img>
        </v-col>
      </v-row>


      <v-row>
        <MadeWith />
      </v-row>

    </v-col>

    <CustomCarousel class="row-color" />

    <!-- <v-container>
      <iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src="https://vernissage.netlify.app/"
        style="border: 3px, color: #7fffd4" name="Vernissage" scrolling="no" msallowfullscreen="true"
        allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="3" height="800px"
        width="960px"></iframe>
    </v-container> -->
  </div>
</template>




<script lang="ts">
import router from '@/router';
import Vue from "vue";
import Component from 'vue-class-component';
import CustomCarousel from "../components/Custom_Carousel.vue";
import MadeWith from "../components/Made_With.vue";

@Component({
  components: {
    CustomCarousel,
    MadeWith,
  }
})
export default class HomeView extends Vue {

  toRoom() {
    router.push({ name: 'RoomView' });

  }



}

//NOTE - Das Iframe funktioniert und muß in eine eigene View eingebttet werden nicht in einer Componente
</script>

<style>
.row-color {
  background-color: rgb(245, 245, 245);
}
</style>
