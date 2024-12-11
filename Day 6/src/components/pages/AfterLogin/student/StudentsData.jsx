import profilePhoto from "../../../images/afterLogin-student-images/profilePhoto.jpg";
import coverPhoto from "../../../images/afterLogin-student-images/cover.png";

// studentsData.js
const students = [
  {
    id: 0,
    name: "John Doe",
    role: "Student",
    profilePhotoUrl: profilePhoto,  // Use the path to the student's profile image
    coverPhotoUrl: coverPhoto,  // Use the path to the student's cover photo
    hiredTeachers: [
      { id: 1, name: "Teacher A", subject: "Math" },
      { id: 2, name: "Teacher B", subject: "Science" },
    ],
    myNotes: [  // Add the notes field
      {
        title: "Lesson 1",
        date: "Monday, December 11, 2024",
        note: "Reviewed basic math concepts and solved algebra problems.",
      },
      {
        title: "Lesson 2",
        date: "Tuesday, December 12, 2024",
        note: "Started learning about fractions and decimals.",
      },
    ],
    languages: ["English", "Spanish"],  // Ensure languages is an array
  },
  {
    id: 1,
    name: "Jane Smith",
    role: "Student",
    profilePhotoUrl: profilePhoto,  // Profile photo for Jane Smith
    coverPhotoUrl: coverPhoto,  // Cover photo for Jane Smith
    hiredTeachers: [
      { id: 3, name: "Teacher C", subject: "English" },
      { id: 4, name: "Teacher D", subject: "History" },
    ],
    myNotes: [  // Add the notes field
      {
        title: "Lesson 1",
        date: "Monday, December 11, 2024",
        note: "Read the first chapter of English Literature and discussed the key themes.",
      },
      {
        title: "Lesson 2",
        date: "Tuesday, December 12, 2024",
        note: "Reviewed historical events from the Renaissance period.",
      },
    ],
    languages: ["English", "French"],  // Ensure languages is an array
  },
  // Add more student entries as needed
];

export default students;
