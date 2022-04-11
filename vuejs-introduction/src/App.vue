<template>
    <ReuseComponent />
    <UserInfo />
    <ReuseComponent />
    <ReuseComponent />
    <ReuseComponent />
</template>

<script>

    // Importação dos componentes
    // import HelloWorld from './components/HelloWorld.vue'
    // import ButtonVue from './components/Buttons/ButtonVue.vue'
    // import Form from './components/Form.vue'
    // import LifeCycle from './components/LifeCycle.vue'
    import UserInfo from './components/UserInfo.vue'
    // import MutipleEvents from './components/MutipleEvents.vue'
    import ReuseComponent from './components/ReuseComponent.vue'

    // Por padrão exportamos o componente App e em "components:", colocamos os componentes que o App depende, ou seja, a aplicação não funciona se eles não forem utilizados.
    export default {
        name: 'App',
        components: {
            UserInfo,
            ReuseComponent
        }
    }
</script>

<style>
    body {
        background: #222;
        color: whitesmoke;
    }

    a {
        color: floralwhite;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
