   var output = ['one', 'two', 'three', 'four', 'five'];


   // two different ways to do the same thing:

   // 1.
   for (var i = 0; i < output.length; i++) {
       console.log(output[i]);
   }

   // 2.
   // output.forEach(items => {
   //     console.log(items);
   // })