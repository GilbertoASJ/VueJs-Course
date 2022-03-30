<template>
	<button @click="handleClick">Click {{ count }} times.</button>
</template>

<script>

	// Criamos um botão que ao ser ciclado irá aumentar uma unidade em seu valor, retornamos no data() esse valor, e em methods, criamos a função que irá fazer esse acréscimo. Em name escrevemos o nome padrão do componente que estamos exportando.

	export default {
		name: 'ButtonVue',
		data() {
			return {
				count: 0,
			};
		},
		methods: {
			handleClick() {
				this.count++;
			}
		}
	}
</script>