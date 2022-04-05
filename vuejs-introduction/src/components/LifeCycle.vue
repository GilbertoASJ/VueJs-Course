<template>
	<h3>Meu nome é {{ name }}</h3>
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

				this.name = 'Júnior';
			}, 2000)
		}
	}
</script>