<template>
    <div class="box">
        <img v-bind:class="gender" src="../assets/profile-zoom.jpg" v-bind:alt="`${firstName} ${lastName}`" />
        <div class="content">
        <h1>{{ title }}</h1><a href="mailto:contact@kristinelegaspi.com" target="_blank"><i class="fas fa-envelope"></i></a>
        <p>MS in Computer Science at Georgia Tech</p>
        </div>
    <header>
        <Button text="Social Links" />
    </header>
    </div>
</template>

<script>
import Button from '@/components/Button'

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
    },
    methods: {
        
    },
    data() {
        return {
            firstName: "Kristine",
            lastName: "Legaspi",
            gender: "female",
        }
    }
}
</script>

<style scoped>

.box {
    position: fixed;
    width: 650px;
    height: 325px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
    background: transparent;
    border-radius: 4px;
    /* display: flex; */
    vertical-align: middle;
}

.box .content {
    padding-left: 20px;
    margin-left: 0;
}

.box .content h1 {
    margin: 0;
    padding-top: 30px;
    padding-left: 29px;
    padding-right: 10px;
    display: inline-grid;
    margin-bottom: 1rem;
    font-weight: normal;
    font-family: 'Roboto Mono', monospace;
}

.box .content p {
    margin: 0;
    padding: 10px 0 10px;
    padding-left: 30px;
    text-align: justify;
    display: flex;
    margin-bottom: 1rem;
}

.box header {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    margin-bottom: 20px;
    text-align: center;
    border: 3px;
    padding-left: 30px;
}

img {
    float: left;
    display: block;
	border-radius: 50%;
	border: 5px #333 solid;
	margin-bottom: 1rem;
    /* vertical-align: middle; */
}

.female {
	border-color: pink;
	background-color: pink;
	color: #333;
	max-width: 70%;
	max-height: 70%;
}

/* Font Awesome icons */

i {
    /* padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px; */
    display: inline-block;
	font-size: 28px;
	padding-bottom: 15px;
	color: rgb(255, 154, 171);
}

i:hover {
	color: pink;
	opacity: 80;
}

</style>