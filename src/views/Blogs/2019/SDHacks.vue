<template>
    <div class="back">
        <a href="javascript:history.back()">
            <i class="fas fa-angle-double-left"></i>
        </a>
    </div>

    <div class="post">
        <h2>SD Hacks</h2>
        <h4>October 2019</h4>
        <p>
            My first ever hackathon! I was very thrilled to attend this event because I was excited to experience a weekend-long hackathon filled with coding and surrounded with like-minded and passionate individuals. <a href="http://www.sdhacks.io/" target="_blank">SD Hacks</a> was located at University of California San Diego and my friends and I drove down Friday night.
        </p>
        <p>
            There were many companies, such as Amazon AWS and Google Cloud. There were intermissions where we were introduced to the services that each companies provide and how their technologies can help our projects. 
        </p>
        <p>
            There was a lot of catered food and competitive games such as TypeRacer, Speed Stacks, and SSBU. I won 2nd place for the typing competition, scoring above 140 Words Per Minute. I finally met someone who typed faster than I did.
        </p>
        <p>
            We decided to build a health-related mobile application named <a href="https://github.com/krissylegaspi/SaltNPrepr" target="_blank">SaltNPrepr</a>. This was my first exposure to React Native and any type of framework. It was a challenge but I was able to figure out the tech stack and contribute.
        </p>
        <p>
            <p1>Technologies:</p1> React Native, Firebase
        </p>
        <p>
            <p1>Links: 
                <a href="https://github.com/krissylegaspi/SaltNPrepr" target="_blank">GitHub Repo</a>
            </p1>
        </p>
        <div class="screenshot">
            <img src="../../../../src/assets/Project/SaltNPrepr/page1.png">
            <img src="../../../../src/assets/Project/SaltNPrepr/page2.png">
        </div>
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
    align-items: center;
    max-width: 48%;
    padding-left: 5px;
    padding-right: 5px;
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