const studentsData = [
  {
    id: 1,
    name: "Ahmed Khan",
    age: 10,
    level: "Beginner",
    desiredTimeSlots: {
      Sunday: ["3:00 PM - 4:00 PM", "5:00 PM - 6:00 PM"],
      Monday: ["4:00 PM - 5:00 PM"],
      Tuesday: ["3:00 PM - 4:00 PM", "5:00 PM - 6:00 PM"],
      Wednesday: ["4:00 PM - 5:00 PM"],
      Thursday: ["3:00 PM - 4:00 PM"],
      Friday: ["5:00 PM - 6:00 PM"],
      Saturday: ["2:00 PM - 3:00 PM"],
    },
    terms: {
      payPerMonth: 20,
      classesPerWeek: 6,
      classDuration: 30, 
    },
  },
  {
    id: 2,
    name: "Fatima Ali",
    age: 12,
    level: "Intermediate",
    desiredTimeSlots: {
      Sunday: ["2:00 PM - 3:00 PM"],
      Monday: ["3:00 PM - 4:00 PM", "6:00 PM - 7:00 PM"],
      Tuesday: ["4:00 PM - 5:00 PM"],
      Wednesday: ["2:00 PM - 3:00 PM", "5:00 PM - 6:00 PM"],
      Thursday: ["3:00 PM - 4:00 PM"],
      Friday: ["4:00 PM - 5:00 PM"],
      Saturday: ["3:00 PM - 4:00 PM"],
    },
    terms: {
      payPerMonth: 25,
      classesPerWeek: 5,
      classDuration: 45,
    },
  },
  {
    id: 3,
    name: "Sara Ahmed",
    age: 15,
    level: "Advanced",
    desiredTimeSlots: {
      Sunday: ["5:00 PM - 6:00 PM"],
      Monday: ["2:00 PM - 3:00 PM", "5:00 PM - 6:00 PM"],
      Tuesday: ["3:00 PM - 4:00 PM"],
      Wednesday: ["2:00 PM - 3:00 PM"],
      Thursday: ["4:00 PM - 5:00 PM"],
      Friday: ["3:00 PM - 4:00 PM", "6:00 PM - 7:00 PM"],
      Saturday: ["2:00 PM - 3:00 PM"],
    },
    terms: {
      payPerMonth: 30,
      classesPerWeek: 4,
      classDuration: 60,
    },
  },
  {
    id: 4,
    name: "Ali Hassan",
    age: 8,
    level: "Beginner",
    desiredTimeSlots: {
      Sunday: ["10:00 AM - 11:00 AM"],
      Monday: ["1:00 PM - 2:00 PM"],
      Tuesday: ["10:00 AM - 11:00 AM"],
      Wednesday: ["1:00 PM - 2:00 PM"],
      Thursday: ["10:00 AM - 11:00 AM"],
      Friday: ["1:00 PM - 2:00 PM"],
      Saturday: ["10:00 AM - 11:00 AM"],
    },
    terms: {
      payPerMonth: 15,
      classesPerWeek: 3,
      classDuration: 30,
    },
  },
  {
    id: 5,
    name: "Omar Farooq",
    age: 14,
    level: "Intermediate",
    desiredTimeSlots: {
      Sunday: ["4:00 PM - 5:00 PM"],
      Monday: ["3:00 PM - 4:00 PM", "6:00 PM - 7:00 PM"],
      Tuesday: ["4:00 PM - 5:00 PM"],
      Wednesday: ["3:00 PM - 4:00 PM"],
      Thursday: ["4:00 PM - 5:00 PM"],
      Friday: ["3:00 PM - 4:00 PM"],
      Saturday: ["5:00 PM - 6:00 PM"],
    },
    terms: {
      payPerMonth: 25,
      classesPerWeek: 2,
      classDuration: 45,
    },
  },
];

export default studentsData;
