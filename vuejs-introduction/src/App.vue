<template>
    <UserInfo />
</template>

<script>

    // Importação dos componentes
    // import HelloWorld from './components/HelloWorld.vue'
    // import ButtonVue from './components/Buttons/ButtonVue.vue'
    // import Form from './components/Form.vue'
    // import LifeCycle from './components/LifeCycle.vue'
    import UserInfo from './components/UserInfo.vue'

    // Por padrão exportamos o componente App e em "components:", colocamos os componentes que o App depende, ou seja, a aplicação não funciona se eles não forem utilizados.
    export default {
        name: 'App',
        components: {
            UserInfo
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
