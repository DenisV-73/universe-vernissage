<template>
	<v-container fill-height fluid>
		<v-row class="justify-center">
			<v-card class="mx-3" width="350" height="400" color="primary">
				<v-card-title class="justify-center">Künstler Verwalten</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eu massa volutpat tincidunt eget et lectus.
					Nullam bibendum, dolor ut hendrerit semper, nisi elit eleifend odio, vel volutpat nisi augue ac lorem.
				</v-card-text>
			</v-card>

			<v-card class="mx-3" width="350" height="400" color="red">
				<v-card-title class="justify-center">User Verwalten</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eu massa volutpat tincidunt eget et lectus.
					Nullam bibendum, dolor ut hendrerit semper, nisi elit eleifend odio, vel volutpat nisi augue ac lorem.
				</v-card-text>
			</v-card>

			<v-card class="mx-3" width="350" height="400" color="green">
				<v-card-title class="justify-center">Dashboard</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eu massa volutpat tincidunt eget et lectus.
					Nullam bibendum, dolor ut hendrerit semper, nisi elit eleifend odio, vel volutpat nisi augue ac lorem.
				</v-card-text>
			</v-card>

			<v-card class="mx-3" width="350" height="400" color="orange">
				<v-card-title class="justify-center">Buchhaltung</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eu massa volutpat tincidunt eget et lectus.
					Nullam bibendum, dolor ut hendrerit semper, nisi elit eleifend odio, vel volutpat nisi augue ac lorem.
				</v-card-text>
			</v-card>

		</v-row>







	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AdminView extends Vue {
	cards = [
		{ title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
		{ title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
		{ title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
	];
}
</script>

<style scoped></style>