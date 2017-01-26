import './publish.js';
import {
    TestData
} from './collection.js';

Meteor.methods({
    checkPasswordToRefresh(data) {
        console.log(data);
        // TestData.insert({name:data });
        var excelbuilder = require('msexcel-builder');
        var workbook = excelbuilder.createWorkbook(process.env.PWD + '/.uploads/', '111132' + '.xlsx');
        var sheet1 = workbook.createSheet('sheet1', 100, 126);
        sheet1.set(2, 2, 'Revision Sought by');
        sheet1.border(2, 2, {
            left: 'medium',
            top: 'medium',
            right: 'medium',
            bottom: 'medium'
        });
        sheet1.align(2, 2, 'center');
        sheet1.merge({
            col: 2,
            row: 2
        }, {
            col: 5,
            row: 2
        });
        sheet1.set(6, 2, 'Revision Number');
        sheet1.border(6, 2, {
            left: 'medium',
            top: 'medium',
            right: 'medium',
            bottom: 'medium'
        });
        sheet1.align(6, 2, 'center');
        // sheet1.wrap(6, 2, 'wrap');
        // sheet1.width(6, 50);
        sheet1.set(1, 3, 'Dates');
        sheet1.align(1, 3, 'center');

        // sheet1.border(1, 3, {
        //     left: 'medium',
        //     top: 'medium',
        //     right: 'medium',
        //     bottom: 'medium'
        // });
        //
        // sheet1.height(3, 60);
        var spdArray = [{spdName:'Azure power mars'},{spdName:'GPCL'},{spdName:'GSECL'},{spdName:'Enerson'},{spdName:'Backbone'}];
        var toReturn = {spdArray:spdArray};
        for (var i = 0; i < toReturn.spdArray.length; i++) {
            sheet1.width(i + 2, 18);
            sheet1.wrap(i + 2, 3, 'true');
            sheet1.align(i + 2, 3, 'center');
            sheet1.set(i + 2, 3, toReturn.spdArray[i].spdName + '(REV.NO)');
            sheet1.border(i + 2, 3, {
                left: 'medium',
                top: 'medium',
                right: 'medium',
                bottom: 'medium'
            });
        }
        // sheet1.border(7, 3, {
        //     left: 'medium'
        // });
        // sheet1.set(6, 3, 'TOTAL');
        // sheet1.align(6, 3, 'center');
        // sheet1.width(1, 12);
        // for (var i = 0; i < toReturn.datesArray.length; i++) {
        //     sheet1.set(1, i + 4, toReturn.datesArray[i]);
        //     sheet1.border(1, i + 4, {
        //         left: 'medium',
        //         top: 'medium',
        //         right: 'medium',
        //         bottom: 'medium'
        //     });
        //     for (var k = 0; k < toReturn.spdArray.length; k++) {
        //         sheet1.set(k + 2, i + 4, returnHelper(toReturn.revisionValues, k, i));
        //         sheet1.set(6, i + 4, returnHelper(toReturn.revisionValues, 4, i));
        //         sheet1.border(k + 2, i + 4, {
        //             left: 'medium',
        //             top: 'medium',
        //             right: 'medium',
        //             bottom: 'medium'
        //         });
        //         sheet1.border(6, i + 4, {
        //             left: 'medium',
        //             top: 'medium',
        //             right: 'medium',
        //             bottom: 'medium'
        //         });
        //     }
        // }
        // sheet1.set(1, toReturn.datesArray.length + 4, 'TOTAL');
        // sheet1.border(1, toReturn.datesArray.length + 4, {
        //     left: 'medium',
        //     top: 'medium',
        //     right: 'medium',
        //     bottom: 'medium'
        // });
        //
        // for (var i = 0; i < toReturn.spdArray.length; i++) {
        //     sheet1.set(i + 2, toReturn.datesArray.length + 4, returningColoum(toReturn.totalRevision, i));
        //     sheet1.border(i + 2, toReturn.datesArray.length + 4, {
        //         left: 'medium',
        //         top: 'medium',
        //         right: 'medium',
        //         bottom: 'medium'
        //     });
        // }
        // sheet1.set(6, toReturn.datesArray.length + 4, returningColoum(toReturn.totalRevision, 4));
        // sheet1.border(6, toReturn.datesArray.length + 4, {
        //     left: 'medium',
        //     top: 'medium',
        //     right: 'medium',
        //     bottom: 'medium'
        // });
        //
        // sheet1.set(1, toReturn.datesArray.length + 6, 'Note: ');
        // sheet1.set(2, toReturn.datesArray.length + 6, 'Revision 0 is not included');

        // workbook.save(function(ok) {
        //     console.log('workbook saved ' + (ok ? 'ok' : 'MP Revision Report'));
        // });
        workbook.save(function(err) {
            console.log('workbook saved ' + (err ? 'failed' : 'ok'));
        });
    }
});
