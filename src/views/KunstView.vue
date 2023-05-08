<template>
	<v-container fluid grid-list>
		<h1 class="text-center">KUNSTWERKE</h1>

		<v-row>
			<v-col cols="2" class="mb-6">
				<v-text-field label="Titel" outlined></v-text-field>
			</v-col>
			<v-col cols="2">
				<v-text-field label="Künstler" outlined></v-text-field>
			</v-col>
			<v-col class="justify-start">
				<v-btn x-small class="mt-4 mx-1">Suchen</v-btn>
				<v-btn x-small class="mt-4 mx-1">Suchen</v-btn>
			</v-col>
		</v-row>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/butterfly-stones-wet-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/circle-shape-light-lines-4k_1540575054.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/dog-light-bulb-idea-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/drops-light-circle-surface-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/rose-bud-petals-white-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/silhouettes-person-dog-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<!-- <h1>Funzt!</h1> -->
		</v-layout>

		<v-layout row wrap class="ma-auto mt-16" @click="openImage">
			<!-- <v-flex>
				<v-card width="256" height="128">
					<v-img src="@/assets/kunstwerke/Fotografien/-lifebuoy-help-ship-4k.jpg" @click="openImage"></v-img>
					<v-card-text>Titel des Bildes</v-card-text>
				</v-card>
			</v-flex> -->

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/bicyclist-bridge-bw-silhouette-night-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/butterfly-stones-wet-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/circle-shape-light-lines-4k_1540575054.jpg"></v-img>


				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/dog-light-bulb-idea-4k.jpg"></v-img>

				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/drops-light-circle-surface-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/rose-bud-petals-white-4k.jpg"></v-img>

				</v-card>
			</v-flex>

			<!-- <v-flex>
				<v-card width="256" height="128">
					<v-img src="@/assets/kunstwerke/Fotografien/silhouettes-person-dog-4k.jpg"></v-img>
				</v-card>
			</v-flex> -->

			<!-- <h1>Funzt!</h1> -->
		</v-layout>

		<v-layout row wrap class="ma-auto mt-12">
			<!-- <v-flex>
				<v-card width="256" height="128">
					<v-img src="@/assets/kunstwerke/Fotografien/-lifebuoy-help-ship-4k.jpg"></v-img>
					<v-card-text>
						Titel des Bildes
					</v-card-text>
				</v-card>
			</v-flex> -->

			<!-- <v-flex>
				<v-card width="256" height="128">
					<v-img src="@/assets/kunstwerke/Fotografien/bicyclist-bridge-bw-silhouette-night-4k.jpg"></v-img>
				</v-card>
			</v-flex> -->

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/butterfly-stones-wet-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/circle-shape-light-lines-4k_1540575054.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/dog-light-bulb-idea-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/drops-light-circle-surface-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/rose-bud-petals-white-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/silhouettes-person-dog-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<!-- <h1>Funzt!</h1> -->
		</v-layout>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class KunstView extends Vue {

	openImage() {
		//
	}



}
</script>

<style scoped></style>
