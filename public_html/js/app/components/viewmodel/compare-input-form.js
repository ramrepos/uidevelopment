define(['app/model/CompareModel','knockout','app/util/pub-sub','app/components/viewmodel/compare-output-details'],function(CompareModel, ko, po){
    function CompareInputViewModel(param){
        var self = this;  
        self.param = param;
        self.input1 = ko.observable('');
        self.input2 = ko.observable(''); 
    }
    CompareInputViewModel.prototype.compare = function(){
        var self = this;
        var compareModel = new CompareModel(self.param.compareObj);
        var input1Data = compareModel.compare(self.input1());
        if (input1Data) {
            input1Data.then(function(data){
                po.publish(data,'compare_detail1');
            });
        }
        var input2Data = compareModel.compare(self.input2());
        if (input2Data) {
                input2Data.then(function(data){
                    po.publish(data,'compare_detail2');
                });
        }
    };  
    return CompareInputViewModel;
});