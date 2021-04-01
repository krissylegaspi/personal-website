<template>
    <div class="back">
        <a href="javascript:history.back()">
            <i class="fas fa-angle-double-left"></i>
        </a>
    </div>

    <div class="post">
        <h2>Hacktech</h2>
        <h4>March 2020</h4>
        <p>
            Hackathon hosted by Caltech.
        </p>
        <p>
            Weeks away from the event, there were news spreading about regarding the cancellation of this event. Gladly, they didn't because it would have affected numberous participants who booked their flights and hotel just to attend. Due to the COVID-19 pandemic, Hacktech was moved from taking place in Pasadena to being held virtually. Because I prefered the traditional approach to hackathons, I decided to not participate this year and instead work on my own projects.
        </p>
        <p>
            I was saddened that I was not able to experience Hacktech but I am glad that they took safety precautions in order to help prevent the spread of the coronavirus.
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