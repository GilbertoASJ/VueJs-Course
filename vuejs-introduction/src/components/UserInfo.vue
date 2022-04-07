<template>
	<div>
		<h3>Dados do usuário: {{ name }}</h3>
		<UserPicture />
		<GeneralInfo />
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
			}
		}
	}
</script>
