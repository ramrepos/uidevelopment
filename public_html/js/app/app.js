define([],function(){
    function App() {
    }
    App.prototype.submitName = function() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName = lName + ',' + fName;
                document.getElementById('fullName').innerText = fullName;
             }
    var app = new App();
    return app;
});
            
        