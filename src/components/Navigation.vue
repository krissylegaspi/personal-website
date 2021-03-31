<template>
    <header>
        <Toggle :mode="mode" @toggle="$emit('toggle')" />
    </header>
    <div class="nav-bar" id="nav">
        <ul>
        <router-link to="/">HOME</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/shop">SHOP</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/about">ABOUT</router-link>
        <!-- <router-link to="/contact" id="pls">HIRE ME</router-link> -->
        <a href="mailto:contact@kristinelegaspi.com" id="pls">HIRE ME</a>
        </ul>
    </div>
</template>

<script>
import Toggle from '@/components/Toggle'

export default {
    props: ['mode'],
    components: {
        Toggle
    }
}

</script>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0px 25px; */
    padding-left: 25px;
    height: 60px;
    background: white;
    transition: background 0.3s ease-in-out;
}

.dark header {
    background: rgb(49, 48, 61);
}

header h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 900;
}

.container .theme-switch {
    --background: rgb(255, 148, 166);
    --text: black;
    color: var(--text);
    width: 50px;
    height: 30px;
    background: var(--highlight);
    border-radius: 50px;
    position: relative;
}

.container .theme-switch .switch {
    background: black;
    width: 24px;
    height: 24px;
    background: var(--background);
    border-radius: 100%;
    position: absolute;
    top: -40px;
    left: 20px;
    transition: 0.5s all ease;
}

.light-theme {
    --background: white;
    --text: black;
    background: var(--background);
}

.light-theme .theme-switch {
    background: var(--text);
}

.light-theme .theme-switch .switch {
    transform: translateX(37px);
}

.light-theme .theme-switch .switch a {
    color: var(--text);
}

.nav-bar {
    width: 100%;
    font-family: 'Cutive Mono', monospace;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
}

.nav-bar .ul {
    display: flex;
    list-style-type: none;
}

/* #pls {
    color: rgb(255, 113, 137);
} */

#pls:hover {
    color: rgb(255, 113, 137);
}

.nav-bar .ul .active {
    color: var(--highlight);
}

.nav-bar .ul .active:hover, .nav-bar .ul .active:before {
    opacity: 0;
}

.nav-bar a {
    font-size: 26px;
    color: var(--text);
    /* font-weight: bold; */
    text-decoration: none;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
    font-family: 'Cutive Mono', monospace;
}

.nav-bar a:before, .nav-bar a:after
{
    position: absolute;
    opacity: 0;
    font-size: 30px;
    top: 0px;
    bottom: 2px;
    transition: all 0.3s;
    font-family: 'Cutive Mono', monospace;
    text-align: center;
}

.nav-bar a:before
{
    content: '(';
    font-size: 43px;
    letter-spacing: 1px;
    left: 0px;
    transform: translateX(10px);
    font-family: 'Cutive Mono', monospace;
    text-align: center;
}

.nav-bar a:after
{
    content: ')';
    font-size: 43px;
    letter-spacing: 1px;
    right: 0px;
    transform: translateX(-10px);
    font-family: 'Cutive Mono', monospace;
    text-align: center;
}

.nav-bar a:hover:before, .nav-bar a:hover:after
{
    opacity: 1;
    letter-spacing: -10px;
    transform: translateX(-5px);
    font-family: 'Cutive Mono', monospace;
    text-align: center;
}
</style>