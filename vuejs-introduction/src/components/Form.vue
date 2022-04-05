<template>

	<form id="app-form">	
		<input type="text" v-model="input_name" placeholder="Digite seu nome">
		<input type="submit" name="submit" value="Enviar" @click="handleSubmitForm">

		<p>Olá {{ input_name }}</p>
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
				profession: "Programador",
			}
		},
		methods: {

			handleSubmitForm(e) {

				// Recupera o valor de name e atribui a input_name, assim quando input name for exibido em tela, seu valor irá ser calculado apenas após o clique do botão
				this.name = this.input_name;
				e.preventDefault();
			}
		}
	}
</script>