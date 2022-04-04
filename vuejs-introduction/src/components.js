import Vue from 'vue';

// Várias maneiras de se criar um componente no Vue

// String - Vue.component('<id>', {<componente>})
// Vue.component('ButtonString', {
// 	template: '<button @click="handle1Click">Click {{ count }} times.</button>',
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	methods: {
// 		handle1Click() {
// 			this.count++;
// 		}
// 	}
// })

// Template String
// Vue.component('ButtonTemplateString', {
// 	template: `
// 		<button @click="handle2Click">
// 			Click {{ count }} times.
// 		</button>
// 	`,
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	methods: {
// 		handle2Click() {
// 			this.count++;
// 		}
// 	}
// })

// X template - No arquivo index.html
// Vue.component('ButtonXTemplate', {
// 	template: '#button-x-template',
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	methods: {
// 		handle2Click() {
// 			this.count++;
// 		}
// 	}
// })

// Button Inline - Depreciado
// Vue.component('ButtonInline', {
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	methods: {
// 		handle2Click() {
// 			this.count++;
// 		}
// 	}
// })

// <ButtonInline inline-template>
//     <button @click="handleClick">Click {{ count }} times.</button>
// </ButtonInline>