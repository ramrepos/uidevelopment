 var app =
         {
             submitName : function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName = lName + ',' + fName;
                document.getElementById('fullName').innerText = fullName;
             }
 };

            
        