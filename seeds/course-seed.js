const { Course } = require("../models");

const courseData = [
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    },
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    },
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    },
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    },
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    },
    {
        course_name: "",
        professor: "",
        credits:"",
        time:"",
    }
];

const courseSong = () => Course.bulkCreate(courseData);

module.exports = courseSong;