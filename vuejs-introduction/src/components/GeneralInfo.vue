<template>
	<div>
		<!-- Diretivas if else -->
		<p v-if="isWorking">Estou trabalhando :)</p>
		<p v-else>No momento estou em busca de novas oportunidades</p>
		<p>Estou utilizando no momento as seguintes tecnologias: </p>
		<ul>
			<li>HTML e CSS</li>
			<li>Javascript com Vuejs</li>
			<li>Back-end com PHP</li>
		</ul>

		<!-- Diretiva simplista para exibir informação na tela -->
		<p v-show="showEmail">Mande uma mensagem para: {{ email }}</p>
	</div>
</template>

<script>
	
	export default {
		name: 'GeneralInfo',
		data() {
			return {
				isWorking: true,
				showEmail: true,
				email: 'gilberto@gmail.com'
			}
		}
	}
</script>