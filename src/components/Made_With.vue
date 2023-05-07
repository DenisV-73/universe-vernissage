<template>
	<v-col>
		<h1 class="text-center">#MADEWITH<b>KUNSTMATRIX</b></h1>
		<v-row>
			<v-layout align-start justify-center fill-height>
				<div>
					<p class="text-center"><br>Besuchen Sie 3D-Ausstellungen von Kunstmatrix-Benutzern. Zeigen<br>
						Sie uns Ihre beste Arbeit und was Sie mit den Tools gestaltet haben,<br>damit Ihre Ausstellung hier
						präsentiert
						wird.
					</p>
				</div>
			</v-layout>
		</v-row>


		<v-row class="justify-space-around ma-16">
			<v-layout align-center justify-center row fill-height>

				<v-icon>mdi-bookmark-outline</v-icon>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Alle zeigen
					</v-btn>
				</v-hover>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Skulpturen
					</v-btn>
				</v-hover>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Beste Kuration
					</v-btn>
				</v-hover>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Digitale Kunst
					</v-btn>
				</v-hover>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Marketplace Räume
					</v-btn>
				</v-hover>

				<v-hover v-slot="{ hover }">
					<v-btn class="mx-1" :style="{ 'text-decoration': hover ? 'underline' : 'none' }" x-small rounded
						color="rgb(250, 250, 250)">
						Spezialräume
					</v-btn>
				</v-hover>

			</v-layout>
		</v-row>
	</v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MadeWith extends Vue {

}
</script>

<style></style>