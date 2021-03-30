<template>
<div class="box">
<!-- SaltNPrepr -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="SaltNPrepr"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">SaltNPrepr</b></p>
                    <p>React Native</p>
                    <p>JavaScript</p>
                    <p>Firebase</p>
                </div>
            </div>
            <div class="card_back">
                <p>A mobile application that helps the user choose a meal to prepare based on available ingredients.</p>
                <button><a href="https://github.com/krissylegaspi/SaltNPrepr" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

<!-- PythonChatbot -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="PythonChatBot"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">Python Chatbots</b></p>
                    <p>Control Flow</p>
                    <p>Rule-based</p>
                    <p>NLP</p>
                </div>
            </div>
            <div class="card_back">
                <p>Various chatbots that responds to the user. The chatbots are built using different techniques.</p>
                <button><a href="https://github.com/krissylegaspi/PythonChatbot" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

<!-- KrisBot -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="KrisBot"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">KrisBot</b></p>
                    <p>Node.js</p>
                    <p>Discord.js</p>
                    <p>Discord API</p>
                </div>
            </div>
            <div class="card_back">
                <p>A Discord bot that features chat commands, music playback, and permissions.</p>
                <button><a href="https://github.com/krissylegaspi/KrisBot" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

<!-- Yams -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="Yams"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">Yams</b></p>
                    <p>React.js</p>
                    <p>JavaScript</p>
                    <p>Spotify API</p>
                </div>
            </div>
            <div class="card_back">
                <p>This application allows uers to search Spotify, create custom Spotify playlists, and save it to their Spotify account.</p>
                <button><a href="https://github.com/krissylegaspi/Yams" target="_blank">Github</a></button>
            </div>
        </div>
    </div>


<!-- TreasureHunt -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="TreasureHunt"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">Treasure Hunt</b></p>
                    <p>Phaser.js</p>
                    <p>JavaScript</p>
                    <p>HTML/CSS</p>
                </div>
            </div>
            <div class="card_back">
                <p>UNDER CONSTRUCTION</p>
                <button><a href="https://github.com/krissylegaspi/TreasureHunt" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

<!-- IncomePrediction -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="IncomePrediction"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">Income Prediction</b></p>
                    <p>R</p>
                    <p>Linear Regression</p>
                    <p>Statistical Analysis</p>
                </div>
            </div>
            <div class="card_back">
                <p>UNDER CONSTRUCTION</p>
                <button><a href="https://github.com/krissylegaspi/" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

<!-- HandwritingRecognition -->
    <div class="flip-container">
        <div class="flipper">
            <div class="card_front">
                <div class="HandwritingRecognition"></div>
                <div class="center">
                    <p><b style="color: rgb(255, 113, 137)">Handwriting Recognition</b></p>
                    <p>Python</p>
                    <p>scikit-learn</p>
                    <p>K-Means</p>
                </div>
            </div>
            <div class="card_back">
                <p>UNDER CONSTRUCTION</p>
                <button><a href="https://github.com/krissylegaspi/" target="_blank">Github</a></button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

body {
    background: rgb(224, 224, 224);
    /* mix-blend-mode: difference; */
}

.box {
    /* position: absolute; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    /* top: 45%;
    left: 50%;
    transform: translate(-50%, -50%); */
}

.flip-container {
    width: percentage(300/1060);
    margin-top: 35px;
    margin-bottom: 35px;
    display: inline-block;
    margin: 0 auto;
    padding-left: 50px;
    padding-bottom: 50px;
    width: 80%;
    height: 50%;
}

.flip-container:hover .flipper {
    transform: rotateY(180deg);
}

.flip-container, .card_front, .card_back {
    width: 320px;
    height: 380px;
}

.flipper {
    transition: all 0.6s;
    transform-style: preserve-3d;
    position: relative;
}

.card_front, .card_back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

.card_front {
    z-index: 20;
    transform: rotateY(0deg);
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    font-size: 1.3em;
    font-size: 18px;
}

.card_front b {
    font-size: 20px;
}

.card_back {
    transform: rotateY(180deg);
    background-image: linear-gradient(to top, rgb(192, 113, 126), transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card_back p {
    padding: 10px 30px;
    text-align: center;
    line-height: 1.68;
    font-size: 18px;
    margin-bottom: 30px;
}

.card_back button {
    padding: 10px 45px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.card_back button:hover {
    transform: scale(1.05);
}

.card_back button a {
    text-decoration: none;
    color: black;
}

.SaltNPrepr {
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/SaltNPrepr/foodbanner.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.PythonChatBot {
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/PythonChatBot/pythonchatbot.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.KrisBot {
    /* padding-top: 35px; */
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/KrisBot/discord-logo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.Yams {
    /* padding-top: 35px; */
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/Yams/spotifybanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.TreasureHunt {
    /* padding-top: 35px; */
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/TreasureHunt/treasure.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.IncomePrediction {
    /* padding-top: 35px; */
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/IncomePrediction/incomebanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.HandwritingRecognition {
    /* padding-top: 35px; */
    position: relative;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/Project/HandwritingRecognition/handwritebanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    transform: skewY(-6deg);
    transform-origin: top-left;
}

.center {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.center p {
    width: 200px;
    text-align: center;
    border-bottom: 1px solid;
    padding-top: 10px;
    padding-bottom: 20px;
}
</style>