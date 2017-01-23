import {Meteor} from 'meteor/meteor';
import './template_test.html';
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

Template.templateTest.onCreated (function(){

});

Template.templateTest.rendered = function(){

};

Template.templateTest.events({
  'click #viewReportDateWise'(e, instance){
    var data = $('#txtData').val();
    Meteor.call("checkPasswordToRefresh",data, function(error, result) {
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

});
