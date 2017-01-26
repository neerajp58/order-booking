import {
    Meteor
} from 'meteor/meteor';
import './template_test.html';
import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

Template.templateTest.onCreated(function() {

});

Template.templateTest.rendered = function() {

};

Template.templateTest.events({
    'click #viewReportDateWise' (e, instance) {
        var data = $('#txtData').val();
        Meteor.call("checkPasswordToRefresh", data, function(error, result) {
            if (error) {
                alert("Please try again!");
            } else {
                if (result.status) {
                    alert("AAAAAA");
                }
            }
        });
        console.log(data);
    }
});

Template.templateTest.helpers({
    // aarHelper() {
    //     var data = [
    //         [1, 2, 3, 4, 5, 15],
    //         [1, 2, 3, 4, 5, 15],
    //         [1, 2, 3, 4, 5, 15],
    //         [1, 2, 3, 4, 5, 15],
    //         [4, 8, 12, 16, 20, 60]
    //     ];
    //     var dataloss = [
    //         [6, 7, 8, 9, 10, 40],
    //         [6, 7, 8, 9, 10, 40],
    //         [6, 7, 8, 9, 10, 40],
    //         [6, 7, 8, 9, 10, 40],
    //         [24, 28, 32, 36, 40, 160]
    //     ];
    //     var json = {
    //         data: data,
    //         dataloss: dataloss
    //     };
    //     return json;
    // },
    // loooping() {
    //     var ary = [];
    //     for (var i = 0; i < 6; i++) {
    //         ary.push(i)
    //     }
    //     return ary;
    // },
    // helper(ary, index, val) {
    //   console.log(ary);
    //   console.log(index);
    //   console.log(val);
    //     return ary[index][val];
    // }
});
