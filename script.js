const numbergroup = document.querySelector(".groupNumber");
const loginbtn = document.querySelector(".login__btn");
const log = document.querySelector(".login_section");
const nav = document.querySelector("nav");
const parent = document.querySelector(".parent");
const app = document.querySelector(".app");
const logoutbtn = document.querySelector(".logout__btn");
const groupnum = document.querySelector(".groupNum");
const day = document.querySelector(".day");
const img = document.querySelector("dotlottie-wc");
// =======================================================================================================================
// function to change the img
function changeLottie(url) {
  img.classList.add("fade-out");
  setTimeout(() => {
    img.setAttribute("src", url);
    img.classList.remove("fade-out");
  }, 700);
}
// reseting login view
function logoutview() {
  numbergroup.value = "";
  changeLottie(
    "https://lottie.host/b48fb89b-2fa0-4fbb-a64f-29b9a6dcca39/MdhLGIjqht.lottie"
  );
}

//  function- renders the schedule based on the group number and the current day of the week.
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
//login button
loginbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const groupnumber = numbergroup.value;
  groupnum.textContent = `Group : ${numbergroup.value}`;

  if (groupnumber === "1" || groupnumber === "2") {
    log.classList.add("fade-out");
    nav.classList.add("fade-out");
    // change the login interface to the main app interface
    setTimeout(() => {
      log.style.display = "none";
      nav.style.display = "none";
      requestAnimationFrame(() => {
        app.classList.add("active");
      });
    }, 600);
  } else {
    changeLottie(
      "https://lottie.host/8b4f51d7-a9a4-4641-ba6c-06b29a2e2aea/5yFFCbnqUO.lottie"
    );
    //seting the error message and resetting the input field
    setTimeout(() => {
      numbergroup.value = "";
      numbergroup.placeholder = "Please enter 1 or 2";
    }, 700);
  }

  renderSchedule(groupnumber);
});

// =======================================================================================================================
// days of the week
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//shcedules data base for different groups
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
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
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
// logout button
logoutbtn.addEventListener("click", (e) => {
  e.preventDefault();
  logoutview();
  app.classList.remove("active");

  setTimeout(() => {
    log.style.display = "flex";
    nav.style.display = "block";
    //return to the login interface
    requestAnimationFrame(() => {
      log.classList.remove("fade-out");
      nav.classList.remove("fade-out");
    });
  }, 600);
});














