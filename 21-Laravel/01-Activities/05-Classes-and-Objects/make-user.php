<?php
 require 'user.php';

 function println ($string){
   echo "$string\n";
 }

 $scott = new User('Scott', 'Bickell','scott@scott.com');
 $joe = new User('Joe', 'Mama', 'joe@joe.com');
 $andrew = new User ('Andrew', 'Figel', 'andrew@figel.org');


 println($scott->fullName());
 println($joe->fullName());
 println($andrew->fullName());
