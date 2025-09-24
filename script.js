const numbergroup = document.querySelector(".groupNumber");
const loginbtn = document.querySelector(".login__btn");
const log = document.querySelector(".login_section");
const nav = document.querySelector("nav");
const parent = document.querySelector(".parent");
const app = document.querySelector(".app");
const logoutbtn = document.querySelector(".logout__btn");
const groupnum = document.querySelector(".groupNum");
const day = document.querySelector(".day");
const anouncement = document.querySelector(".anoucement");
// =======================================================================================================================
function renderSchedule(num) {
  const today = new Date().getDay();
  parent.innerHTML = "";
  if (schedules[`group${num}`][today]) {
    day.textContent = `${days[today]}`;
    schedules[`group${num}`][today].forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      Object.entries(item).forEach(([key, value]) => {
        const p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        card.appendChild(p);
      });
      parent.appendChild(card);
    });
  }
}
// =======================================================================================================================

loginbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const groupnumber = numbergroup.value;
  groupnum.textContent = `Group : ${numbergroup.value}`;

  if (groupnumber === "1" || groupnumber === "2") {
    log.classList.add("fade-out");
    nav.classList.add("fade-out");

    setTimeout(() => {
      log.style.display = "none";
      nav.style.display = "none";
      requestAnimationFrame(() => {
        app.classList.add("active");
      });
    }, 600);
  } else {
    alert("Invalid Group Number");
  }
  renderSchedule(groupnumber);
});

// =======================================================================================================================

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const schedules = {
  group1: {
    0: [
      // Sunday
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
    ],
    1: [
      // Monday
      {
        subject: "دوائر كهربائية",
        doctor: "د. علي",
        place: "قاعة 202",
        lecture: 1,
      },
    ],
    2: [
      // Tuesday
      {
        subject: "إلكترونيات",
        lecture: 5555,
        doctor: "د. محمد",
        time: "10-11",
        place: "قاعة 303",
      },
      {
        subject: "إحصاء",
        lecture: 2,
        doctor: "د. سامية",
        time: "10-11",
        place: "قاعة 105",
      },
    ],
    3: [
      // Wednesday
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
    ],
  },

  group2: {
    0: [
      // Sunday
      { subject: "كيمياء", doctor: "د. فاطمة", place: "قاعة 201", lecture: 1 },
      { subject: "تحكم آلي", doctor: "د. ياسر", place: "قاعة 104", lecture: 2 },
    ],
    1: [
      // Monday
      {
        subject: "دوائر كهربائية",
        doctor: "د. علي",
        place: "قاعة 202",
        lecture: 2,
      },
    ],
    2: [
      // Tuesday
      {
        subject: "إلكترونيات",
        lecture: 3,
        doctor: "د. محمد",
        time: "11-12",
        place: "قاعة 303",
      },
    ],
    3: [
      // Tuesday
      {
        subject: "إلكترونيات",
        lecture: 3,
        doctor: "د. محمد",
        time: "11-12",
        place: "قاعة 303",
      },
    ],
    4: [
      // Tuesday
      {
        subject: "إلكترونيات",
        lecture: 3,
        doctor: "د. محمد",
        time: "11-12",
        place: "قاعة 303",
      },
    ],
  },
};

// =======================================================================================================================
logoutbtn.addEventListener("click", (e) => {
  e.preventDefault();

  app.classList.remove("active");

  setTimeout(() => {
    log.style.display = "flex";
    nav.style.display = "block";

    requestAnimationFrame(() => {
      log.classList.remove("fade-out");
      nav.classList.remove("fade-out");
    });
  }, 600);
});

// =======================================================================================================================
