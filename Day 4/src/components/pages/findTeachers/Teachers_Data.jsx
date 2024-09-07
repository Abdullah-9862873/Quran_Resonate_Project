import CoverPhoto from "../../images/find_teacher_images/cover.png";
import ProfilePhoto from "../../images/home_page_images/qari.jpg";
import QariRecite from "../../videos/qari_recite.mp4";
const teachersData = [
    {
      id: 1,
      name: "Hafiz Amir",
      role: "Teacher",
      profilePhotoUrl: ProfilePhoto,
      coverPhotoUrl: CoverPhoto,
      location: "Faisalabad, Pakistan",
      languages: ["English", "Urdu"],
      gender: "Male",
      joinedDate: "Feb 29, 2024",
      about: "I am Hafiza Khadijah. My qualification is Hafiz-e-Quran and a Bachelor in Computer Science...",
      recitationSamples: [
        QariRecite,
        QariRecite
      ],
      packages: [
        {
          name: "Package1",
          classesPerWeek: 2,
          payPerMonth: 30,
          classDuration: "30 Min",
          subjectsCovered: "Reading, Part time hifz, Tajweed Rules, Salah and dua"
        }
      ]
    },
    {
      id: 2,
      name: "Hafiz Ahmed",
      role: "Teacher",
      profilePhotoUrl: ProfilePhoto,
      coverPhotoUrl: CoverPhoto,
      location: "Wayoming, United States",
      languages: ["English", "Arabic"],
      gender: "Male",
      joinedDate: "Mar 15, 2023",
      about: "Experienced in teaching Tajweed and Hifz with 10 years of experience...",
      recitationSamples: [
        QariRecite,
        QariRecite
      ],
      packages: [
        {
          name: "Package2",
          classesPerWeek: 3,
          payPerMonth: 40,
          classDuration: "45 Min",
          subjectsCovered: "Tajweed, Hifz, Quranic Studies"
        }
      ]
    },
    {
      id: 3,
      name: "Hafiz Sara",
      role: "Teacher",
      profilePhotoUrl: ProfilePhoto,
      coverPhotoUrl: CoverPhoto,
      location: "Paris, France",
      languages: ["Urdu", "Farsi"],
      gender: "Female",
      joinedDate: "Jan 5, 2022",
      about: "Specializes in teaching Quran to women and children with a focus on practical learning...",
      recitationSamples: [
        QariRecite,
        QariRecite
      ],
      packages: [
        {
          name: "Package3",
          classesPerWeek: 1,
          payPerMonth: 25,
          classDuration: "60 Min",
          subjectsCovered: "Quran Reading, Islamic Studies"
        }
      ]
    }
  ];
  
  export default teachersData;
  