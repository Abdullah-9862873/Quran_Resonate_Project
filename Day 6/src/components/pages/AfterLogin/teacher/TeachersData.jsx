import profilePhoto from "../../../images/afterLogin-teacher-images/profilePhoto.jpg";
import coverPhoto from "../../../images/afterLogin-teacher-images/cover.png";

// teachersData.js
const teachers = [
  {
    id: 0,
    name: "Teacher A",
    role: "Teacher",
    profilePhotoUrl: profilePhoto,  // Use the path to the teacher's profile image
    coverPhotoUrl: coverPhoto,  // Use the path to the teacher's cover photo
    enrolledStudents: [
      { id: 1, name: "Student A", subject: "Math" },
      { id: 2, name: "Student B", subject: "Science" },
    ],
    myNotes: [ // Add notes for Teacher A
      {
        title: "Lesson 1",
        date: "Monday, January 1, 2024",
        note: "This is the first note for Teacher A."
      },
      {
        title: "Lesson 2",
        date: "Tuesday, January 2, 2024",
        note: "This is another note for Teacher A."
      }
    ],
    languages: ["English", "Arabic"], // Make sure languages is always an array
  },
  {
    id: 1,
    name: "Teacher B",
    role: "Teacher",
    profilePhotoUrl: profilePhoto,  // Profile photo for Teacher B
    coverPhotoUrl: coverPhoto,  // Cover photo for Teacher B
    enrolledStudents: [
      { id: 3, name: "Student C", subject: "History" },
      { id: 4, name: "Student D", subject: "English" },
    ],
    myNotes: [ // Add notes for Teacher B
      {
        title: "Lesson 1",
        date: "Wednesday, January 3, 2024",
        note: "This is the first note for Teacher B."
      },
      {
        title: "Lesson 2",
        date: "Thursday, January 4, 2024",
        note: "This is another note for Teacher B."
      }
    ],
    languages: ["French", "Spanish"], // Make sure languages is always an array
  },
  // Add more teacher entries as needed
];

export default teachers;
