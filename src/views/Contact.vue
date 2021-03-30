<template>
    <br><br><br><center><h2>Under construction</h2></center>
    <form class="cf">
        <div class="half left cf">
            <input type="text" id="input-name" placeholder="Name">
            <input type="email" id="input-email" placeholder="E-mail Address">
        </div>
        <div class="half right cf">
            <input type="text" id="input-subject" placeholder="Subject">
            <textarea name="message" type="text" id="input-message" placeholder="Message">
            </textarea>
        </div>
        <button type="submit" value="Submit" id="input-submit">Submit</button>
    </form>
</template>

<script>

</script>

<style scoped>

*, *:before, *:after {
    @include box-sizing(border-box);
}

html, body {
    background: transparent;
    padding: 1em;
    font-size: 18px;
}

form {
    max-width: 600px;
    text-align: center;
    margin: 20px auto;
    padding-top: 30px;
}

form input, form textarea {
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    margin-top: 1em;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    resize: none;
    border-radius: 3px;
    font-size: 18px;
}

form textarea {
    height: 126px;
}

/* .half {
    float: left;
    width: 40%;
    margin-bottom: 1em;
}

.right {
    width: 50%;
}

.left {
    margin-right: 2%;
} */

button {
    padding: 10px 45px;
    margin-top: 30px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

button:hover {
    transform: scale(1.05);
}

button a {
    text-decoration: none;
    color: black;
}

</style>