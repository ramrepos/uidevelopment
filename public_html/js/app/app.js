 var app =
         {
             submitName : function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName;
                if (fName && fName.length > 0 && lName && lName.length > 0) {
                            fullName = lName + ',' + fName;
                            document.getElementById('fullName').innerText = fullName;
                }
                
             }
 };

            
        