const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

    const courseDetails = [
        {
            courseName : 'English',
            price : 500,
            length : 6
        },
        {
            courseName : 'Math',
            price : 600,
            length : 8
        },
        {
            courseName : 'History',
            price : 700,
            length : 12
        }
    ]


class Students extends Members {

    static #idValue = 0;
    #student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }

    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super();
        if (studentAge >= 16 && this.#isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.#isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.#student.sCourseDetails.courseName = courseData.courseName;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sBalance = courseData.price;
            this.#student.sId = ++Students.#idValue;
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails = () => {
        console.log(`\nStudent details:\nId: ${this.#student.sId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#student.sCourseDetails.courseName}\nBalance: $${this.#student.sBalance}\n`);

    }

    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }


}
module.exports = Students;