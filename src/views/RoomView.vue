<template>
	<div>
		<v-container>
			<iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src="https://vernissage.netlify.app/"
				style="border: 3px, color: #7fffd4" name="Vernissage" scrolling="no" msallowfullscreen="true"
				allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="3" height="645px"
				width="960px"></iframe>
		</v-container>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoomView extends Vue {

}
</script>

<style scoped></style>