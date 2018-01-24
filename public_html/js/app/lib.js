var lib = {
    submitName: function () {
        var fName = document.getElementById('firstName').value;
        var lName = document.getElementById('lastName').value;
        var fullName = '';
        if (!util.isEmpty(fName) && !util.isEmpty(lName)){
            fullName = fName + ', ' + lName;
            document.getElementById('fullName').innerText = fullName;
        }       
    }
}; 