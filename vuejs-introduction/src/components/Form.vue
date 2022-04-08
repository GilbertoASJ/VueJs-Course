<template>

	<form id="app-form" @submit="formSubmited($event)">	
		<input type="text" v-model="input_name" placeholder="Digite seu nome">
		<input type="text" v-model="input_email" placeholder="Digite seu e-mail">
		<input type="submit" name="submit" value="Enviar" @click="handleSubmitForm">

		<!-- <p>Olá {{ input_name }}</p> -->
		<p>
			Olá <strong>{{ name }}</strong>, 
			fiquei sabendo que você é <strong>{{ profession }}</strong>
		</p>
	</form>
</template>

<script>
	
	export default {
		name: 'AppForm',
		data() {
			return {
				name: "",
				input_name: "", 
				input_email: "",
				profession: "Programador",
			}
		},
		methods: {

			handleSubmitForm() {

				// Recupera o valor de name e atribui a input_name, assim quando input name for exibido em tela, seu valor irá ser calculado apenas após o clique do botão
				this.name = this.input_name;
			},

			formSubmited(e) {
				console.log('Formulário enviado');

				const email = this.input_email;
				const name = this.input_name;
				console.log(`O nome é: ${name}`);
				console.log(`O e-mail é: ${email}`);

				e.preventDefault();
			}
		}
	}
</script>

<style scoped>
	
	#app-form {
		margin: 250px 0;
	}
</style>