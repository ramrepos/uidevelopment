define(['knockout'], function(ko){
    function PersonalDetailsFormViewModel() {
     var self = this;
       
        
        
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.fullName = ko.pureComputed(function(){
            return self.lastName() +  ', ' + self.firstName();
        },self);  
    };
    
    return PersonalDetailsFormViewModel;
});