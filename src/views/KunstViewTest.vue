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
				<v-btn color="#BDBDBD" x-small class="mt-4 mx-1">Suchen</v-btn>
				<v-btn color="#BDBDBD" x-small class="mt-4 mx-1">Suchen</v-btn>
			</v-col>
		</v-row>

		<v-layout row wrap class="ma-auto mt-12">

			<v-flex class="ma-8" v-for="(item, index) in images" :key="index">
				<v-card max-width="256" max-height="128" @click="showOrderDialog(item.id)">
					<v-img max-width="256" max-height="128" :src="item.name"></v-img>
				</v-card>
			</v-flex>

		</v-layout>

		<OrderDialog v-model="showOrder"></OrderDialog>

	</v-container>
</template>

<script>

// import router from 'vue-router';
import OrderDialog from '@/components/OrderDialog.vue';

export default {

	components: {
		OrderDialog,
	},

	data() {
		return {
			message: 'Hello Vue!',
			showOrder: false,

			images: [
				{ id: 1, name: require('@/assets/kunstwerke/Fotografien/ballerina-silhouette-dance-4k.jpg') },
				{ id: 2, name: require('@/assets/kunstwerke/Fotografien/bicyclist-bridge-bw-silhouette-night-4k.jpg') },
				{ id: 3, name: require('@/assets/kunstwerke/Fotografien/butterfly-stones-wet-4k.jpg') },
				{ id: 4, name: require('@/assets/kunstwerke/Fotografien/dog-light-bulb-idea-4k.jpg') },
				{ id: 5, name: require('@/assets/kunstwerke/Fotografien/graffiti-octopus-street-art-4k.jpg') },
				{ id: 6, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
				{ id: 7, name: require('@/assets/kunstwerke/streetart/alice-pasqual.jpg') },
				{ id: 8, name: require('@/assets/kunstwerke/streetart/alp-ancel.jpg') },
				{ id: 9, name: require('@/assets/kunstwerke/streetart/andreas-fickl.jpg') },
				{ id: 10, name: require('@/assets/kunstwerke/streetart/jon-tyson.jpg') },
				{ id: 1, name: require('@/assets/kunstwerke/streetart/zhen-hu.jpg') },
				{ id: 12, name: require('@/assets/kunstwerke/streetart/unsplash.jpg') },
				{ id: 13, name: require('@/assets/kunstwerke/streetart/paolo-bendandi.jpg') },
				{ id: 14, name: require('@/assets/kunstwerke/streetart/nate-bell.jpg') },
				{ id: 15, name: require('@/assets/kunstwerke/streetart/meric-dagli.jpg') },
				{ id: 16, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
				{ id: 17, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
				{ id: 18, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
				{ id: 19, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
				{ id: 20, name: require('@/assets/kunstwerke/Fotografien/feet-shadow-light-dark-4k.jpg') },
			],

		};
	},

	methods: {
		openPayment(id) {
			switch (id) {
				case 1:
					console.log('öffnet', id);
					break;
				case 2:
					console.log('öffnet', id);
					break;
				case 3:
					console.log('öffnet', id);
					break;
				case 4:
					console.log('öffnet', id);
					break;
				case 5:
					console.log('öffnet', id);
					break;
				case 6:
					console.log('öffnet', id);
					break;
				case 7:
					console.log('öffnet', id);
					break;
				default:
					break;
			}
		},


		showOrderDialog(id) {

			switch (id) {
				case 1:
					this.showOrder = true;
					console.log('payment: ', id);
					break;
				case 2:
					this.showOrder = true;
					console.log('payment: ', id);
					break;
				case 3:
					this.showOrder = true;
					console.log('payment: ', id);
					break;
				case 4:
					this.showOrder = true;
					console.log('payment: ', id);
					break;

				default:
					break;
			}

			return;

		}
	}

};
</script>

<style lang="scss" scoped></style>