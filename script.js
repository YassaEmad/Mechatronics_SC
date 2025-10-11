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
// preload  animations
const preload = [
  "https://lottie.host/b48fb89b-2fa0-4fbb-a64f-29b9a6dcca39/MdhLGIjqht.lottie",
  "https://lottie.host/8b4f51d7-a9a4-4641-ba6c-06b29a2e2aea/5yFFCbnqUO.lottie",
];

preload.forEach((url) => {
  fetch(url)
    .then((res) => res.blob())
    .then(() => {
      console.log("Preloaded:", url);
    });
});
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
    changeLottie(
      "https://lottie.host/b48fb89b-2fa0-4fbb-a64f-29b9a6dcca39/MdhLGIjqht.lottie"
    );
  } else {
    changeLottie(
      "https://lottie.host/8b4f51d7-a9a4-4641-ba6c-06b29a2e2aea/5yFFCbnqUO.lottie"
    );
    numbergroup.value = "";
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
    6: [
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
        lecture: 1,
        doctor: "د. محمد",
        time: "10:00-11:00",
        place: "قاعة 303",
      },
      {
        subject: "إحصاء",
        lecture: 2,
        doctor: "د. سامية",
        time: "11:00-12:00",
        place: "قاعة 105",
      },
    ],
    3: [
      // Wednesday
      { subject: "رياضيات", doctor: "د. أحمد", place: "قاعة 101", lecture: 1 },
      { subject: "برمجة", doctor: "د. منى", place: "معمل 3", lecture: 2 },
    ],
    4: [
      // Thursday
      {
        subject: "دوائر كهربائية",
        doctor: "د. علي",
        place: "قاعة 202",
        lecture: 1,
      },
    ],
    5: [
      // Friday
      { subject: "راحة", doctor: "-", place: "-", lecture: "-" },
    ],
    0: [
      // Saturday (New Data)
      {
        subject: "Electrical Machines",
        doctor: "Dr. Mohamed Magdy",
        time: "10:20-12:00",
        place: "C202 SSP Building",
        lecture: 1,
      },
      {
        subject: "Signals",
        doctor: "Dr. Ahmed ElTrass",
        time: "02:00-04:30",
        place: "C101 SSP Building",
        lecture: 2,
      },
      // Section 1
      {
        subject: "Signals Lab (Section 1)",
        time: "12:10-01:50",
        place: "_",
      },
      // Section 2
      {
        subject: "Electrical Machines Tut (Section 2)",
        time: "09:00-10:10",
        place: "Machines Lab Electricity Building 1st Floor",
      },
      {
        subject: "Signals Lab (Section 2)",
        time: "12:10-01:50",
        place: "Lab8 Electricity Building 3rd Floor",
      },
    ],
  },

  group2: {
    6: [
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
        time: "11:00-12:00",
        place: "قاعة 303",
      },
    ],
    3: [
      // Wednesday
      { subject: "راحة", doctor: "-", place: "-", lecture: "-" },
    ],
    4: [
      // Thursday
      { subject: "راحة", doctor: "-", place: "-", lecture: "-" },
    ],
    5: [
      // Friday
      { subject: "راحة", doctor: "-", place: "-", lecture: "-" },
    ],
    0: [
      // Saturday (New Data)
      {
        subject: "Control",
        doctor: "Dr. Osama",
        time: "10:20-12:00",
        place: "C403 SSP Building",
        lecture: 1,
      },
      {
        subject: "Electrical Machines",
        doctor: "Dr. Mohamed Magdy",
        time: "12:10-01:50",
        place: "C202 SSP Building",
        lecture: 2,
      },
      {
        subject: "Signals",
        doctor: "Dr. Ahmed ElTrass",
        time: "04:30-07:20",
        place: "C101 SSP Building",
        lecture: 3,
      },
      // Section 1
      {
        subject: "Signals Lab (Section 1)",
        time: "02:00-03:40",
        place: "Lab1 Electricity Building 3rd Floor",
      },
      // Section 2
      {
        subject: "Signals Lab (Section 2)",
        time: "02:00-03:40",
        place: "Lab8 Electricity Building 3rd Floor",
      },
    ],
  },
};

// =======================================================================================================================
// logout button
logoutbtn.addEventListener("click", (e) => {
  e.preventDefault();
  logoutview();
});





















