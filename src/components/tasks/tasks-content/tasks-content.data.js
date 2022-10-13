const businessContexts = [
  {
    title: "New sprint, tasks and intro information.",
    authorName: "Olga Nelson",
    date: {
      day: "17",
      month: "December",
      hours: "11:20",
    },
    markdown: `Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌
    
    You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. 
    
    Here's the project overview: 
    You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
    new: true,
  },
  {
    title: "Application has been accepted 🎉🙌",
    authorName: "Kirsten Aniston",
    date: {
      day: "17",
      month: "December",
      hours: "11:20",
    },
    markdown: `Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌
    
    You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. 
    
    Here's the project overview: 
    You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
    new: false,
  },
  {
    title: "New sprint, tasks and intro information.",
    authorName: "Olga Nelson",
    date: {
      day: "17",
      month: "December",
      hours: "11:20",
    },
    markdown: `Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌 You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
    new: false,
  },
];

export const tasks = [
  {
    title: "Application Setup",
    icon: "/assets/checkmark.svg",
    businessContexts,
    status: "completed",
  },
  {
    title: "Static Books List",
    icon: "/assets/checkmark.svg",
    businessContexts,
    status: "completed",
  },
  {
    title: "Administration Panel",
    icon: "/assets/checkmark.svg",
    businessContexts,
    status: "completed",
  },
  {
    title: "Connect Admin with Frontend",
    icon: "/assets/Arrow.svg",
    businessContexts,
    status: "active",
  },
  {
    title: "Book Review Feature",
    icon: "/assets/Sidebar.svg",
    businessContexts,
    status: "blocked",
  },
];
