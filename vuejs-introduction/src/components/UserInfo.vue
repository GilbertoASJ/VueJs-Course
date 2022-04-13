<template>
	<div class="gDivUserInfo">
		<h3>Dados do usuário: {{ name }}</h3>
		<UserPicture />

		<!-- Ao passar uma prop podemos utilizar o v-bind: para mostrar que queremos passar um valor de data() -->
		<GeneralInfo :email="email" :isWorking=true />
	</div>
</template>

<script>

	import GeneralInfo from './GeneralInfo.vue'
	import UserPicture from './UserPicture.vue'
	
	export default {
		name: 'UserInfo',
		components: {
			GeneralInfo,
			UserPicture
		},
		data() {
			return {
				name: "Gilberto",
				email: "gilberto@email.com",
			}
		}
	}
</script>

<style scoped>
	div.gDivUserInfo {
		width: 400px;
		border-radius: 20px;
		padding: 16px;
		box-shadow: 10px 5px 60px #000;
		margin: 0 auto;
	}
</style>
