<template>
	<button @click="handleClick">Click</button>
	{{ count.x }}
</template>

<script>
	
	// Criamos um botão que ao ser ciclado irá aumentar uma unidade em seu valor, retornamos no data() esse valor, e em methods, criamos a função que irá fazer esse acréscimo. Em name escrevemos o nome padrão do componente que estamos exportando.

	// O data, pode ser tido como uma memória privada para cada componente. Precisa ser uma função pois se fosse um simples objeto, seus valores iriam ser afetados em todos os componentes.
	
	export default {
		name: 'ButtonVue',
		data() {
			return {
				count: {
					x: 0,
				},
			};
		},
		methods: {
			handleClick() {
				this.count.x++;
			}
		},
	}
</script>