<template>
	<div>
		<button @click="handleActive">Clique aqui</button>
		<span v-show="showActive">Ativado!</span>
	</div>
</template>

<script>
	
	export default {
		name: 'ReuseComponent',
		data() {
			return {
				showActive: false,
			}
		},
		methods: {
			handleActive() {
				this.showActive = !this.showActive;
			}
		}
	}
</script>