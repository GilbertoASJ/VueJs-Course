<template>
	<div>
		<h3>Dados do usuário: {{ name }}</h3>
		<GeneralInfo />
	</div>
</template>

<script>

	import GeneralInfo from './GeneralInfo.vue'
	
	export default {
		name: 'UserInfo',
		components: {
			GeneralInfo,
		},
		data() {
			return {
				name: "John Doe",
			}
		}
	}
</script>
