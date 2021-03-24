<template>
    <button @click="onClick()" class="button">{{text}}</button>
</template>

<script>
import Socials from './Socials'

export default {
    name: 'Button',
    props: {
        text: String,
    },
    methods: {
        onClick() {
            console.log('click')
        }
    },
    components: {
        Socials
    }
}
</script>