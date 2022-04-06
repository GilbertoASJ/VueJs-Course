<template>
	<h3>Olá {{ name }}</h3>
</template>

<script>
	
	export default {
		name: 'LifeCycle',
		data() {
			return {
				name: 'Não definido'
			}
		},
		created() {

			setTimeout(() => {

				this.name = 'Gilberto';
			}, 1000)
		},
		mounted() {

			setTimeout(() => {

				this.name = 'John';
			}, 2000)
		}
	}
</script>