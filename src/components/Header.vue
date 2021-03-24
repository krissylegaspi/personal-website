<template>
    <header>
        <h1>{{ title }}</h1>
        <a href="mailto:kg.lgsp@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        <Button text="Social Links" />
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: "Kristine Legaspi"
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    border: 3px;
}

h1 {
margin-bottom: 1rem;
font-weight: normal;
}
</style>