<template>
	<v-dialog persistent v-model="value" max-width="400" max-height="height">
		<v-card>
			<v-card-title>
				<span class="headline">Login</span>
			</v-card-title>

			<v-form ref="form" class="pa-4" v-model="valid" lazy-validation>
				<v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

				<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

				<v-text-field v-model="password" :type="show ? 'text' : 'password'" :rules="passwordRules" :counter="8"
					label="Passwort" required :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show">
				</v-text-field>

				<v-btn :disabled="!valid" color="success" class="mr-4 mt-4" @click="storeUser">
					Bestätigen
				</v-btn>

				<v-btn color="error" class="mr-4 mt-4" @click="clear">
					Abbrechen
				</v-btn>
			</v-form>

		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class LoginComponent extends Vue {

	@Prop({ default: false }) value!: boolean;

	$refs!: {
		form: HTMLFormElement
	}
	// email = '';
	password = '';
	show = false;
	valid = true;
	snackbar = false;
	select = null;
	name = '';


	nameRules = [
		(v: string) => !!v || 'Name benötigt!',
		(v: string) => (v && v.length >= 3) || 'Name benötigt',
	];
	email = '';
	emailRules = [
		(v: string) => !!v || 'E-mail benötigt!',
		(v: string) => /.+@.+\..+/.test(v) || 'Keine gültige E-mail Adresse',
	];

	passwordRules = [
		(v: string) => !!v || 'Passwort erforderlich!',
		(v: string) => (v && v.length >= 8) || 'Passwort min. 8 Zeichen',
	];

	validate(): void {
		if (this.$refs.form.validate()) {
			this.snackbar = true // Property 'snackbar' does not exist on type 'CombinedVueInstance<Vue ...
			this.$emit('input', false); // close the dialog after successful login
			console.log('validate!');

		}
	}

	clear(): void {
		this.$refs.form.reset();
		this.$emit('input', false); // close the dialog after successful login
	}

	storeUser(): void {
		this.validate();
	}

}

</script>


