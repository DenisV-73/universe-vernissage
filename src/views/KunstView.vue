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
				<v-card width="256" height="128" @click="openImage('stones')">
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

		</v-layout>

		<v-layout row wrap class="ma-auto mt-16" @click="openImage">

			<v-flex>
				<v-card width="256" height="122" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/About Happiness [ordinary person 87].png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="122" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/Contemplation [ordinary person 41].png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="144" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/Happines-Ordinary People_86.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="144" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/Happy Coin[ordinary person 82].png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="144" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/Lonely Beauty [ordinary person 90].png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="144" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Hee Jin Ahn/Progress in the void [ordinary person 88].png"></v-img>
				</v-card>
			</v-flex>

		</v-layout>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex>
				<v-card width="256" height="120" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\Beginning of the Stop.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="145" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\Canvas1.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="145" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\Cross-section of Luxury.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="145" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\Messase.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="145" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\The World and Us_2.png"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="258" height="145" @click="openImage" color="black">
					<v-img src="@/assets/kunstwerke/Seung-Yoon Choi\Rising Fall 3_high.png"></v-img>
				</v-card>
			</v-flex>

		</v-layout>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\alice-pasqual.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\alp-ancel.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\andreas-fickl.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\ben-elwood.jpg"></v-img>

				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\george-pagan.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\zhen-hu.jpg"></v-img>
				</v-card>
			</v-flex>

		</v-layout>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/spider-spider-web-drops-bw-glare-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/sparks-glitter-light-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/silhouettes-person-dog-4k.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\unsplash.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\sam-fry.jpg"></v-img>
				</v-card>
			</v-flex>

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/Fotografien/silhouettes-person-dog-4k.jpg"></v-img>
				</v-card>
			</v-flex>

		</v-layout>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex>
				<v-card width="256" height="128" @click="openImage">
					<v-img src="@/assets/kunstwerke/streetart\meric-dagli.jpg"></v-img>
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

		</v-layout>


	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class KunstView extends Vue {


	arts = [
		{ name: '@/-lifebuoy-help-ship-4k.jpg' },
		{ name: '@/-lifebuoy-help-ship-4k.jpg' },
		{ name: '@/-lifebuoy-help-ship-4k.jpg' },
		{ name: '@/-lifebuoy-help-ship-4k.jpg' },
		{ name: '@/-lifebuoy-help-ship-4k.jpg' },
	];

	openImage(v: string) {
		switch (v) {
			case '':
				break;

			default:
				break;
		}
	}



}
</script>

<style scoped></style>
