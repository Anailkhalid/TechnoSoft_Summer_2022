const Students = require('./Students');


const s1 = new Students('Anail', 20, 'USA', 'Math');


/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('Anail', 20, 'USA', 'Math');
/*
        idValue = 1
        student = {
        sName : 'Anail',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Math',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

s1.showMyDetails();