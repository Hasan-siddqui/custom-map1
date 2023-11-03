<?php 
session_start();

$captchacode = substr(md5(rand()), 0, 4);

// Store the CAPTCHA code in the session
$_SESSION['captcha_code'] = $captchacode;

// Create image
$image = imagecreatetruecolor(120, 40); // Adjusted height to match the variables below
$bgcolor = imagecolorallocate($image, rand(200,250), rand(200,250),rand(200,250));
$txtcol = imagecolorallocate($image, rand(0,100), rand(0,100),rand(0,100));
//Helvetica Neue
$font_size = 20;
$imwid = 120;
$imhgt = 40;
$fontFile = 'font.ttf';

imagefilledrectangle($image, 0, 0, $imwid, $imhgt, $bgcolor);
//imagestring($image, $font_size, 30, 10, $captchacode, $txtcol);
imagettftext($image, $font_size, 0, 20, 30, $txtcol, $fontFile, $captchacode);

// Set the content type header to display the image
header('Content-Type: image/png');

// Output the image as PNG
imagepng($image);

// Clean up and destroy the image to free up memory
imagedestroy($image);
?>