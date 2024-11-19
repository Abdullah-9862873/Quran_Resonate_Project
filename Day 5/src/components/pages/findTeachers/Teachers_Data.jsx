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
    about: "I am Hafiz Amir. My qualification is Hafiz-e-Quran and a Bachelor in Computer Science...",
    recitationSamples: [QariRecite, QariRecite],
    packages: [
      {
        name: "Package1",
        classesPerWeek: 2,
        payPerMonth: 30,
        classDuration: "30 Min",
        subjectsCovered: "Reading, Part time hifz, Tajweed Rules, Salah and dua",
      },
    ],
    qualification: {
      degrees: ["Hifz", "Bachelor's in Computer Science"],
    },
    teachingExperience: [
      {
        heading: "Junior Qari at Madrassa Dar Ul Huda Kalri",
        duration: "2018-08-21 - 2020-10-21",
      },
    ],
    note: "I have 6 years of experience leading Tarawee prayer and 2 years of teaching experience.",
    reviews: [
      {
        reviewerName: "Ali Khan",
        stars: 5,
        note: "Highly knowledgeable and patient teacher.",
        timestamp: "2023-04-21",
        coursePurchaseDate: "2023-03-01",
      },
      {
        reviewerName: "Sarah Ameer",
        stars: 4,
        note: "Very effective teaching style, especially in Tajweed.",
        timestamp: "2023-06-15",
        coursePurchaseDate: "2023-05-01",
      },
    ],
  },
  {
    id: 2,
    name: "Hafiz Ahmed",
    role: "Teacher",
    profilePhotoUrl: ProfilePhoto,
    coverPhotoUrl: CoverPhoto,
    location: "Wyoming, United States",
    languages: ["English", "Arabic"],
    gender: "Male",
    joinedDate: "Mar 15, 2023",
    about: "Experienced in teaching Tajweed and Hifz with 10 years of experience...",
    recitationSamples: [QariRecite, QariRecite],
    packages: [
      {
        name: "Package2",
        classesPerWeek: 3,
        payPerMonth: 40,
        classDuration: "45 Min",
        subjectsCovered: "Tajweed, Hifz, Quranic Studies",
      },
    ],
    qualification: {
      degrees: ["Hifz", "Bachelor's in Islamic Studies"],
    },
    teachingExperience: [
      {
        heading: "Senior Instructor at Islamic Center of Wyoming",
        duration: "2012-05-10 - 2022-10-21",
      },
    ],
    note: "10 years of experience in Tajweed instruction and 5 years leading local prayers.",
    reviews: [
      {
        reviewerName: "John Doe",
        stars: 5,
        note: "Fantastic teacher with in-depth knowledge.",
        timestamp: "2023-08-10",
        coursePurchaseDate: "2023-06-15",
      },
      {
        reviewerName: "Fatima Qureshi",
        stars: 4,
        note: "Great teaching methods, especially for beginners.",
        timestamp: "2023-09-02",
        coursePurchaseDate: "2023-07-20",
      },
    ],
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
    recitationSamples: [QariRecite, QariRecite],
    packages: [
      {
        name: "Package3",
        classesPerWeek: 1,
        payPerMonth: 25,
        classDuration: "60 Min",
        subjectsCovered: "Quran Reading, Islamic Studies",
      },
    ],
    qualification: {
      degrees: ["Hifz", "Bachelor's in Arabic Literature"],
    },
    teachingExperience: [
      {
        heading: "Quran Teacher at Al-Noor Center",
        duration: "2015-03-12 - 2021-12-30",
      },
    ],
    note: "7 years of experience teaching Quran to children and women.",
    reviews: [
      {
        reviewerName: "Amal Rouhani",
        stars: 5,
        note: "Wonderful teacher, engaging and very patient.",
        timestamp: "2023-11-10",
        coursePurchaseDate: "2023-10-05",
      },
      {
        reviewerName: "Leila Haidar",
        stars: 4,
        note: "Sara’s teaching approach is excellent for kids.",
        timestamp: "2024-01-15",
        coursePurchaseDate: "2023-12-10",
      },
    ],
  },
];

export default teachersData;
