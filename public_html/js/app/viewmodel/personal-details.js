define(['knockout'], function(ko){
    function PersonalDetailsFormViewModel() {
     var self = this;
       
        
        
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.fullName = ko.pureComputed(function(){
            if (self.lastName().length > 0 && self.lastName().length > 0)
                return self.lastName() +  ', ' + self.firstName();
            else
                return '';
        },self);  
    };
    
    return PersonalDetailsFormViewModel;
});