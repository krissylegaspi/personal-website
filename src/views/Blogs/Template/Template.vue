<template>
    <div class="back">
        <a href="javascript:history.back()">
            <i class="fas fa-angle-double-left"></i>
        </a>
    </div>

    <div class="post">
        <h2>Title</h2>
        <h4>Date</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</template>

<script>

</script>

<style scoped>

.back {
    max-width: 650px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: auto;
}

.post {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
}

.post a {
    color: var(--text);
    font-style: italic;
    text-decoration: none;
}

.post a:hover {
    text-decoration: underline;
}

.post h2 {
    font-family: 'Homemade Apple', cursive;
    margin: auto;
    content: '';
    box-sizing: border-box;
    font-size: 30px;
    word-spacing: 0.32em;
}

.post h4 {
    border-bottom: 1px pink solid;
    margin: auto;
    opacity: 1;
    font-family: 'Roboto Mono', monospace;
    opacity: 70%;
    padding-bottom: 10px;
}

img {
    max-width: 100%;
    padding-top: 10px;
}

.screenshot img {
    padding-top: 10px;
    max-width: 50%;
}

.post p {
    padding-top: 10px;
    text-align: justify;
}

.post p p1 {
    font-weight: bold;
}

.post p p1 a {
    font-weight: normal;
}

</style>