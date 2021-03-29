<template>
	<div class="app" :class="mode">
		<Navigation :mode="mode" @toggle="toggle" />
		<Header />
	</div>
</template>

<script>
import Header from '@/components/Header'
import Toggle from '@/components/Toggle'
import Navigation from '@/components/Navigation'

export default {
	name: 'app',
	data() {
		return {
			mode: 'light'
		}
	},
	components: {
		Header,
		Navigation,
		Toggle
	},
	created () {
		window.addEventListener('keyup', this.keyPress)
	},
	methods: {
		keypress (e) {
			if (e.key === 't') {
				this.toggle()
			}
		},
		toggle () {
			if (this.mode === "dark") {
				this.mode = "light"
			} else {
				this.mode = "dark"
			}
		}
	}
}
</script>

<style>
/* 
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} 
*/

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

.app {
	width: 100vw;
	min-height: 100vh;
    background: white;
    color: black;
	transition: background 0.3s ease-in-out;
}

.dark {
    background: rgb(49, 48, 61);
    color: white;
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
