<?php
$directory = "assets/memes/"; // Meme Dir
$images = glob($directory . "*.{jpg,png,gif}", GLOB_BRACE); // Use any .jpg, .png, .gif others will be ignored
echo json_encode($images); // Echo the json $images
?>