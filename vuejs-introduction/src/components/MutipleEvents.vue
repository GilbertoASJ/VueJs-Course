<template>
	<div>
		<button @click="firstEvent(firstMessage), secondEvent(secondMessage), lastEvent()">
			Ativar múltiplos eventos
		</button>
		<p>{{ paragraphMutipleEvents }}</p>
	</div>
</template>

<script>
	
	export default {
		name: 'MutipleEvents',
		data() {
			return {
				paragraphMutipleEvents: "",
				firstMessage: "Primeiro evento foi ativado.",
				secondMessage: "Segundo evento foi ativado."
			}
		},
		methods: {
			firstEvent(message) {
				this.paragraphMutipleEvents = message;
			},

			secondEvent(message) {

				setTimeout(() => {
					this.paragraphMutipleEvents = message;

				}, 2500)
			},

			lastEvent() {

				setTimeout(() => {
					this.paragraphMutipleEvents = "";

				}, 4500)
			}	
		}
	}
</script>

<style scoped>
	div {
		margin: 50px;
	}

</style>