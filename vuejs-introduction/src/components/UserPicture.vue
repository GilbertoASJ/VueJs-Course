<template>
	<!-- Ao invés de utilizar a forma escrita 'v-bind', podemos utilizar um 'short-code', assim utilizando apenas ':' -->
	<img :src="avatarImg" :alt="avatarImgAlt">
	<ChangeImage @change-image="changeUserPicture" />
</template>

<script>

	import ChangeImage from './ChangeImage.vue'

	export default {
		name: 'UserPicture',
		components: {
			ChangeImage,
		},
		data() {
			return {
				avatarImg: 'https://avatars.githubusercontent.com/u/56325350?v=4',
				avatarImgAlt: 'Imagem do avatar do usuário'
			}
		},
		methods: {
			changeUserPicture() {

				let firstImage = "https://avatars.githubusercontent.com/u/56325350?v=4"
				let secondImage = "https://github.com/GilbertoASJ/GilbertoASJ/raw/master/Code%20typing-bro.png"

				if(this.avatarImg == firstImage) {

					this.avatarImg = secondImage

				} else if(this.avatarImg == secondImage) {
					this.avatarImg = firstImage;
				}

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