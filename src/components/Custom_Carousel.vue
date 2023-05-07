<template>
	<div>
		<v-carousel cycle height="400" show-arrows-on-hover>
			<v-carousel-item v-for="i in 5" :key="i">
				<v-sheet color="rgb(245, 245, 245)" height="100%">
					<v-row class="fill-height" align="center" justify="center">

						<v-hover v-slot="{ hover }">
							<v-card class="mx-6">
								<v-img class="card-image" src="@/assets/marc-uts-5.jpg">
									<v-expand-transition>
										<div v-if="hover"
											class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h1 black--text"
											style="height: 100%;" @click="toAbout">
											VISIT
										</div>
									</v-expand-transition>
								</v-img>

								<v-card-text>
									Redsheep Gallery<br>
									<b>Marc Bodie<br></b>
									13 Apr 2023 - 15 Mai 2023
								</v-card-text>
							</v-card>
						</v-hover>
						<v-hover v-slot="{ hover }">
							<v-card class="mx-6">
								<v-img class="card-image" src="@/assets/marc-uts-5.jpg">
									<v-expand-transition>
										<div v-if="hover"
											class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h1 black--text"
											style="height: 100%;" @click="toAbout">
											VISIT
										</div>
									</v-expand-transition>
								</v-img>

								<v-card-text>
									Redsheep Gallery<br>
									<b>Marc Bodie<br></b>
									13 Apr 2023 - 15 Mai 2023
								</v-card-text>
							</v-card>
						</v-hover>
						<v-hover v-slot="{ hover }">
							<v-card class="mx-6">
								<v-img class="card-image" src="@/assets/marc-uts-5.jpg">
									<v-expand-transition>
										<div v-if="hover"
											class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h1 black--text"
											style="height: 100%;" @click="toAbout">
											VISIT
										</div>
									</v-expand-transition>
								</v-img>

								<v-card-text>
									Redsheep Gallery<br>
									<b>Marc Bodie<br></b>
									13 Apr 2023 - 15 Mai 2023
								</v-card-text>
							</v-card>
						</v-hover>
						<v-hover v-slot="{ hover }">
							<v-card class="mx-6">
								<v-img class="card-image" src="@/assets/marc-uts-5.jpg">
									<v-expand-transition>
										<div v-if="hover"
											class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h1 black--text"
											style="height: 100%;" @click="toAbout">
											VISIT
										</div>
									</v-expand-transition>
								</v-img>

								<v-card-text>
									Redsheep Gallery<br>
									<b>Marc Bodie<br></b>
									13 Apr 2023 - 15 Mai 2023
								</v-card-text>
							</v-card>
						</v-hover>

					</v-row>
				</v-sheet>

			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script lang="ts">
import router from '@/router';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CustomCarousel extends Vue {

	isVisit = false;


	toAbout() {
		router.push({ name: 'RoomView' })
	}
}
</script>

<style scoped >
.visit {
	border-style: solid;
	border-color: black;

}

.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: .65;
	position: absolute;
	width: 100%;
	border-style: solid;
	border-color: black !important;
}
</style>