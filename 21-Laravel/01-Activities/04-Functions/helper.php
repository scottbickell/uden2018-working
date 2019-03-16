<?php
function println ($string) {
  echo "$string\n";
}

function separate ($separator = '=', $repititions = 12) {
  println(str_repeat($separator, $repititions));
}

function test_name($name) {
  if (strlen($name) > 12)
  return "It's a long name.";
  else
    return "It's a short name";
}

function  test_beer ($age) {
  if ($age > 21)
  return "Beer Beer Beer";
  else if ($age === 21)
    return "Just slipped by Beer beer beer";
}