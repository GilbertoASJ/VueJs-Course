<template>
	<div>
		<button @click="$emit('changeImage')">Trocar imagem de perfil</button>
	</div>
</template>

<script>
	
	export default {
		name: "ChangeImage",
		emits: ['changeImage']
	}
</script>

<style scoped>
	
	button {
		background: transparent;
		border: 1px solid whitesmoke;
		padding: 5px;
		color: whitesmoke;
		cursor: pointer;
		transition: .95s;
	}

	button:hover {
		background: whitesmoke;
		color: black;
	}
</style>