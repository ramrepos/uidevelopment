function submitName() {
                 var fName = document.getElementById('firstName').value;
                var lName = document.getElementById('lastName').value;
                var fullName = '';
                if (!isEmpty(fName) && !isEmpty(lName)){
                    fullName = lName + ', ' + fName;
                }                
                document.getElementById('fullName').innerText = fullName;
             }
function isEmpty(val){
    if (val && val.length > 0){
        return false;
    }
    return true;
}
 

            
        