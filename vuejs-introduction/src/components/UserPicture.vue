<template>
	<!-- 
		Ao invés de utilizar a forma escrita 'v-bind', podemos utilizar um 'short-code', assim utilizando apenas ':' 
	-->
	<img :src="avatarImg" :alt="avatarImgAlt">
</template>

<script>
	export default {
		name: 'UserPicture',
		data() {
			return {
				avatarImg: 'https://avatars.githubusercontent.com/u/56325350?v=4',
				avatarImgAlt: 'Imagem do avatar do usuário'
			}
		}
	}
</script>

<style>
	img {
		width: 150px;
		height: 150px;
		border-radius: 30px;
	}
</style>