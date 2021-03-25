<template>
    <Header />
</template>

<script>
import Header from './components/Header'

export default {
	name: 'App',
	components: {
		Header,
	},
	data() {
		return {
			
		}
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

button {
	cursor: pointer;
	display: inline-block;
	background: pink;
	color: rgb(85, 85, 85);
	font-size: 18px;
	border: 0;
	padding: 15px;
	width: 150px;
	height: 50px;
	transition: all 1s;
	font-family: monospace;
	cursor: pointer;
}

button:focus {
	outline: none;
}

button:hover {
	transform: scale(0.98);
	background: rgb(255, 148, 166);
	opacity: 100;
}

/* Font Awesome icons */

i {
	font-size: 28px;
	padding-bottom: 15px;
	color: rgb(255, 113, 137);
}

i:hover {
	color: pink;
	opacity: 80;
}
</style>
