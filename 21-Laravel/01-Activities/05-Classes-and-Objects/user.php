<?php

// Store the user's first name; last name; and email address. 
// It should set these upon instantiation. 
// You'll need to use a constructor for this: 
  // http://php.net/manual/en/language.oop5.decon.php
//   Store a URL for the user's profile image. Don't set this in the constructor, 
// but write a method that can set this property after the object is created.
//   Write a method to return the user's full name.

//   Should any of this information be private?  
//   We should probably make the first name and email address required, but it's okay if users don't want to share their last names. With your partner, brainstorm a way to set the last name to a default if users don't provide one.  
//   What order should you put your constructor arguments in to make this easy?
//   Finally, create a short script, and instantiate a few users. 
// Print their full name to make sure everything is wired up right.

// $first_name = "something";
// $last_name = "something";
// $email_address = "something";

class User {
  
  public $first_name;

  public $last_name;

  public $email_address;

  public $image_url;

  public function __construct($first_name, $last_name, $email_address)
  {
    $this->first_name = $first_name;
    $this->last_name = $last_name;
    $this->email_address = $email_address;
    // $this->image_url = $image_url;
  }

  public function fullName() {
    return $this->first_name . " " . $this->last_name;
  }

}

