<template>
	
	<form id="app-form">
		<input type="text" v-model="input_name" placeholder="Digite seu nome">
		<input type="submit" name="submit" value="Enviar" @click="handleSubmitForm">

		<p>Olá {{ name }}</p>
		<p>Olá {{ input_name }}</p>
	</form>
</template>

<script>
	
	export default {
		name: 'AppForm',
		data() {
			return {
				name: "",
				input_name: "", 
			}
		},
		methods: {

			handleSubmitForm(e) {

				this.name = this.input_name;
				e.preventDefault();
			}
		}
	}
</script>