 define([],function(){
 var lib =
         {
             submitName : function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName = fName + ',' + lName;
                document.getElementById('fullName').innerText = fullName;
             }
 };
 return lib;
 });

            
        