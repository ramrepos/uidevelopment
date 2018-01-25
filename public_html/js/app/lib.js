 var lib;
 lib =
         {
             submitName : function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                if (fName && fName.length > 0 && lName && lName.length > 0) {
                            fullName = fName + ',' + lName;
                            document.getElementById('fullName').innerText = fullName;
                }
             }
 };

            
        