<template>
	<v-dialog persistent v-model="value" max-height="600" max-width="400">
		<v-card>
			<v-card-title>
				<h3>About Happiness<br></h3>
				<v-img src="@/assets/kunstwerke/Fotografien/ballerina-silhouette-dance-4k.jpg"></v-img>
			</v-card-title>
			<v-card-text>
				<h1 class="text-center">Richard Dressler</h1>
				<p></p>
				<p>Richard kommt aus Großbritannien und ist dort ein kleine Berühmtheit. Dieses Exponat aus seiner von 2021
					ausgestellten Vernissage ist eines seiner Lieblingswerke.
				</p>
				<h2 class="ma-auto">PREIS: 4000,00€ <br> </h2>

				<v-row>
					<p>
						<br>
						Kontaktiere den Künstler
						<v-btn small icon href="mailto:denisvejzagic@gmail.com" target="_blank" @click="clear">
							<v-icon class="p-3">mdi-email-outline</v-icon>
						</v-btn>
					</p>

				</v-row>
			</v-card-text>
			<v-btn class="ma-4 justify-center" color="secondary" small @click="clear">Abbrechen</v-btn>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class OrderDialog extends Vue {

	@Prop({ default: false }) value!: boolean;
	@Prop({}) orderId!: number;


	openMail() {
		console.log('mail funzt!');
	}



	$refs!: {
		form: HTMLFormElement
	}

	clear(): void {
		// this.$refs.form.reset();
		this.$emit('input', false); // close the dialog after successful login
	}
}
</script>

<style scoped></style>