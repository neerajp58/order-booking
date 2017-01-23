import './publish.js';
import {TestData} from './collection.js';

Meteor.methods({
  checkPasswordToRefresh(data){
    console.log(data);
    TestData.insert({name:data });
  }
});
