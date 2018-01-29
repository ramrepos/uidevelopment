 define([],function(){
    function Lib() {
    }
    Lib.prototype.submitName = function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName = fName + ',' + lName;
                document.getElementById('fullName').innerText = fullName;
             }
    var lib = new Lib();
    return lib;
});
            
                