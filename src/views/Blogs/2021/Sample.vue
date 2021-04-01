<template>
    <div class="sample">
        <a @click="goBack">
            <i class="fas fa-angle-double-left"></i>
        </a>
        <h1>This is a sample post</h1>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push('/blog');
        }
    }
}

</script>

<style scoped>

.sample {
    max-width: 650px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: auto;
}

</style>