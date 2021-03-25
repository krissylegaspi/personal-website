<template>
    <button id="slid" @click="onClick()" class="button">{{text}}</button>
    <h2 id="slide-text"><code>
        <a href="https://www.linkedin.com/in/kristine-legaspi/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/krissylegaspi" target="_blank"><i class="fab fa-github"></i></a>
        <a href="" target="_blank"><i class="fab fa-codepen"></i></a>
        <a href="" target="_blank"><i class="far fa-file-alt"></i></a>
    </code></h2>
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
            console.log("Click")
            var slidBtn = document.getElementById("slid"),
                slideText = document.getElementById("slide-text");

            // SlideDown and SlideUp

            slidBtn.onclick = function () {
            "use strict";
            if (!slideText.hasAttribute("class") || slideText.classList.contains("slideUp")) {
                slideText.removeAttribute("class", "slideUp");
                slideText.setAttribute("class", "slideDown");
            } else if (slideText.classList.contains("slideDown")) {
                slideText.classList.remove("slideDown");
                slideText.classList.add("slideUp");
            }
        };

        }
    },
    components: {
        Socials
    }
}
</script>

<style scoped>
h2 {
    padding: 10px;
    margin: 20px;
    color: black;
    opacity: 0;
}

h2#slide-text {
    position: relative;
    bottom: 25px;
    margin: 0;
    display: flex;
}

.slideDown {
	animation: slideDown .5s ease-in 1 forwards;
}

.slideUp {
	opacity: 1;
	animation: slideUp .5s ease-out 1 forwards;
}

@keyframes slideDown {
	to {
		bottom: 0;
		opacity: 1;
	}
}

@keyframes slideUp {
	to {
		bottom: 50px;
		opacity: 0;
	}
}

/* Font Awesome icons */

i {
    margin-top: 30px;
	font-size: 22px;
    padding-right: 20px;
    padding-left: 10px;
	padding-bottom: 15px;
	color: rgb(255, 154, 171);
    text-align: left;
}

i:hover {
	color: pink;
	opacity: 80;
}

</style>