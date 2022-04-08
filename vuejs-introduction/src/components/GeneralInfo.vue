<template>
	<div>
		<!-- Diretivas if else -->
		<p v-if="isWorking">Estou trabalhando :)</p>
		<p v-else>No momento estou em busca de novas oportunidades</p>
		<p>No momento utilizando as seguintes tecnologias: </p>

		<div class="gTechonologiesDiv">
			<div>
				<p><strong>Front-end:</strong></p>

				<!-- Diretiva v-for realizando uma listagem de tecnologias com base nos dados retornados em 'data', o elemento 'index', é o índice de cada elemento gerado automaticamente pelo vue, e precisa ser indicado no v-bind:key -->
				<ul>
					<li v-for="(technology, index) in frontEndTechnologies" :key="index">
						{{ technology }}
					</li>
				</ul>
			</div>

			<div>
				<p><strong>Back-end:</strong></p>
				<ul>
					<li v-for="technology in backEndTechnologies" :key="technology.id">
						{{ technology.languageName }}
					</li>
				</ul>
			</div>
		</div>

		<div><button class="btnEmail" @click="handleShowEmail">{{ buttonText }}</button></div>

		<!-- Diretiva simplista para exibir informação na tela -->
		<p v-show="showEmail">Mande uma mensagem para: {{ email }}</p>
		<p>Para acessar meu portfólio <a v-bind:href="portfolioLink" target="_blank">clique aqui!</a></p>
	</div>
</template>

<script>
	
	export default {
		name: 'GeneralInfo',
		data() {
			return {
				isWorking: true,
				showEmail: false,
				email: 'gilberto@gmail.com',
				portfolioLink: 'https://google.com.br',
				buttonText: "Exibir e-mail",
				frontEndTechnologies: ['HTML5', 'CSS3', 'JavaScript'],
				backEndTechnologies: [
					{id: 1, languageName: 'PHP'},
					{id: 2, languageName: 'Laravel'},
					{id: 3, languageName: 'PostgreSQL'},
				]
			}
		},
		methods: {
			handleShowEmail() {

				// Trocando o estado de showEmail para o contrário dele, logo, inicia como false, quando o botão é clicado altera o estado para true, e assim consecutivamente
				this.showEmail = !this.showEmail;

				if(!this.showEmail) {
					this.buttonText = "Exibir e-mail";
				} else {
					this.buttonText = "Esconder e-mail";
				}
			}
		}
	}
</script>

<style scoped>
	ul {
		list-style: none;
		padding: 0;
	}

	button.btnEmail {
		border: 0;
		background: #fff;
		padding: 10px 15px;
		border-radius: 9px;
		cursor: pointer;
	}

	div.gTechonologiesDiv {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
</style>