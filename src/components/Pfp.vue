<template>
    <img v-bind:class="gender" src="../assets/profile-zoom.jpg" v-bind:alt="`${firstName} ${lastName}`" />
</template>

<script>
export default {
    name: "Pfp",
    data() {
        return {
            firstName: "Kristine",
            lastName: "Legaspi",
            gender: "female",
        };
    },
}
</script>

<style scoped>
img {
	border-radius: 50%;
	border: 5px #333 solid;
	margin-bottom: 1rem;
}

.female {
	border-color: pink;
	background-color: pink;
	color: #333;
	max-width: 20%;
	max-height: 20%;
}
</style>