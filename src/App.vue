<template>
	<div class="app" :class="mode">
		<!-- <Header /> -->
		<Navigation :mode="mode" @toggle="toggle" />
		<router-view />
	</div>
</template>

<script>
// import Header from '@/components/Header'
import Toggle from '@/components/Toggle'
import Navigation from '@/components/Navigation'
import Tab from '@/components/Tab'

export default {
	name: 'app',
	data() {
		return {
			mode: 'light'
		}
	},
	components: {
		// Header,
		Navigation,
		Toggle,
		Tab
	},
	created () {
		window.addEventListener('keyup', this.keyPress)
	},
	methods: {
		keypress () {
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
		},
		scrolltoTop() {
			window.scrollTo(0,0);
		}
	}
}
</script>

<style>
/* @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"); */

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

html {
    margin-left: calc(100vw - 100%); /* Need to redo in order for this to work with dark mode enabled */
    margin-right: 0;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Lexend', sans-serif;
}

.app {
	/* overflow-y: scroll; */
	width: 100%;
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
