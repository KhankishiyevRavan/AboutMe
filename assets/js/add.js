let profilesData = [
  {
    name: "Khankishiyev Ravan",
    img: "./assets/image/github_PNG23.png",
    link: "https://github.com/KhankishiyevRavan",
  },
  {
    name: "Khankishiyev Ravan",
    img: "./assets/image/LinkedIn-Logo.wine.png",
    link: "https://www.linkedin.com/in/khankishiyevravan/",
  },
  {
    name: "Ravan Khankishiyev",
    img: "./assets/image/hackerrank.png",
    link: "https://www.hackerrank.com/profile/KhankisiyevRavan",
  },
  {
    name: "Khankishiyev Ravan",
    img: "./assets/image/FreeCodeCamp_logo.svg.png",
    link: "https://www.freecodecamp.org/KhankishiyevRavan",
  },
];

const profilesDiv = document.querySelector("#profiles");

profilesData.map((profile) => {
  let div = document.createElement("div");
  div.classList.add("col-xs-12", "col-sm-6", "col-xl-3");
  div.innerHTML = `
      <a
        id="col_inner_831ae7ae8f7189a8a47ec09caf7501f4"
        class="fw-col-inner"
        data-paddings="0px 0px 0px 0px"
        href="${profile.link}"
        target="_blank"
      >
        <div class="lm-info-block gray-default">
          <img
            src="${profile.img}"
            style="object-fit: contain ; aspect-ratio: 185/70;"
            alt=""
          />
          <!-- <i class="linecons linecons-heart"></i> -->
          <h4>${profile.name}</h4>
          <span class="lm-info-block-value"></span>
          <span class="lm-info-block-text"></span>
        </div>
      </a>
        `;
  profilesDiv.append(div);
});

let experienceData = [
  {
    period: "01.05.2024 - Current",
    job_type: "Full-time",
    position: "Director assistant, Middle Front-end Developer",
    company: "ND Company QSC",
  },
  {
    period: "13.12.2023 - 01.05.2024",
    job_type: "Freelancer",
    position: "Web System Developer",
    company: "Caspian Capital Group MMC",
  },
  {
    period: "01.07.2023 - 01.05.2024",
    job_type: "Full-time",
    position: "Middle Frontend Web Developer",
    company: "NF Education",
  },
  {
    period: "01.04.2023 - 27.09.2023",
    job_type: "Part-time",
    position: "Information Technology Team Lead",
    company: "TRUST CENTER",
  },
  {
    period: "08.01.2022 - 15.06.2023",
    job_type: "Part-time",
    position: "Digital Technology Front End Trainer",
    company: "Coders Azerbaijan",
  },
];

const experienceDiv = document.querySelector("#timeline-66976e23834c4");
experienceData.map((experience) => {
  let div = document.createElement("div");
  div.classList.add("timeline-item", "clearfix");
  div.innerHTML = `
      <h5 class="item-period current">
        ${experience.period}
      </h5>
      <span class="item-company">${experience.job_type}</span>
      <h4 class="item-title">
        ${experience.position}
      </h4>
      <div class="text">${experience.company}</div>
    `;
  experienceDiv.append(div);
});
console.log(experienceData);
const universitiesDiv = document.querySelector("#timeline-66976e2383348");

const universitiesData = [
  {
    period: "2023 - 2025",
    degree: "Master degree",
    specialty: "Business Development",
    name: "Azerbaijan Technical University",
  },
  {
    period: "2019 - 2023",
    degree: "Bachelor degree",
    specialty: " Information Technology",
    name: " Azerbaijan State Oil and Insdustry University",
  },
];

universitiesData.map((university) => {
  let div = document.createElement("div");
  div.classList.add("timeline-item", "clearfix");
  div.innerHTML = `
      <h5 class="item-period">${university.period}</h5>
      <span class="item-company">
        ${university.degree}
      </span>
      <h4 class="item-title">
        ${university.specialty}
      </h4>
      <div class="text">
        ${university.name}
      </div>
  `;
  universitiesDiv.append(div);
});

const coursesDiv = document.querySelector("#timeline-66976eadfsf2");

const coursesData = [
  {
    period: "14.08.2021 - 14.12.2021",
    name: "16 weeks Intensive Web Programming",
    company: "Coders Azerbaijan",
  },
  {
    period: "05.02.2021 -06.08.2021",
    name: "Web Development",
    company: "EA Camp",
  },
];

coursesData.map((course) => {
  let div = document.createElement("div");
  div.classList.add("timeline-item", "clearfix");
  div.innerHTML = `
    <h5 class="item-period">
      ${course.period}
    </h5>
    <span class="item-company"> </span>
    <h4 class="item-title">
      ${course.name}
    </h4>
    <div class="text">${course.company}</div>
  `;
  coursesDiv.append(div);
});

const skillsDiv = document.querySelector("#skills_div");

const skillsData = [
  {
    name: "HTML5",
    imageUrl: "./assets/image/HTML-5-Logo.png",
  },
  {
    name: "CSS",
    imageUrl: "./assets/image/CSS-Logo.png",
  },
  {
    name: "SASS",
    imageUrl: "./assets/image/sass-logo.png",
  },
  {
    name: "JavaScript",
    imageUrl: "./assets/image/JavaScript-logo.png",
  },
  {
    name: "Git",
    imageUrl: "./assets/image/Git_icon.svg.png",
  },
  {
    name: "Bootstrap",
    imageUrl: "./assets/image/bootstrap-logo.png",
  },
  {
    name: "JQuery",
    imageUrl: "./assets/image/jquery-logo.png",
  },
  {
    name: "TypeScript",
    imageUrl: "./assets/image/typescript.png",
  },
  {
    name: "ReactJs",
    imageUrl: "./assets/image/react.png",
  },
  {
    name: "Redux",
    imageUrl: "./assets/image/redux.png",
  },
  {
    name: "Figma",
    imageUrl: "./assets/image/figma-logo.png",
  },
  {
    name: "NodeJs",
    imageUrl: "./assets/image/nodeJs-logo.png",
  },
];

skillsData.map((skill) => {
  let div = document.createElement("div");
  div.classList.add("col-xl-2", "col-lg-3", "col-md-3", "col-sm-4", "col-xs-6");
  div.innerHTML = `
    <div class="skill">
      <img
        src="${skill.imageUrl}"
        alt=""
      />
      <span> ${skill.name} </span>
    </div>
  `;
  skillsDiv.append(div);
});

const certificatesDiv = document.querySelector("#certificates")

const certificatesData = [
  {
    imageUrl: "./assets/image/certificates/Duolingo English Test.jpg",
    companyImageUrl: "./assets/image/cea9d9ec97e008b56579.svg",
    name: "Upper Intermediate: CEFR B2",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "9 May 2024",
  },
  {
    imageUrl: "./assets/image/certificates/front-end-libraries.png",
    companyImageUrl: "./assets/image/fcc_secondary_small.svg",
    name: "Front End Development Libraries",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "15 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/js(intermediate).png",
    companyImageUrl: "./assets/image/HackerRank_Icon-1000px.png",
    name: "JavaScript (Intermediate)",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "15 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/js_algorithms_data.png",
    companyImageUrl: "./assets/image/fcc_secondary_small.svg",
    name: "JavaScript Algorithms and Data Structures (Beta)",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "14 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/responsive_design.png",
    companyImageUrl: "./assets/image/fcc_secondary_small.svg",
    name: "Responsive Web Design",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "14 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/js_basic.png",
    companyImageUrl: "./assets/image/HackerRank_Icon-1000px.png",
    name: "JavaScript (Basic)",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "15 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/css_basic.png",
    companyImageUrl: "./assets/image/HackerRank_Icon-1000px.png",
    name: "CSS (Basic)",
    membershipID: "Membership ID: @KhankishiyevRavan",
    date: "15 July 2024",
  },
  {
    imageUrl: "./assets/image/certificates/cisco.png",
    companyImageUrl: "./assets/image/cisco_netacad_logo.png",
    name: "JavaScript Essentials 1 (JSE)",
    membershipID: " Membership ID: @KhankishiyevRavan",
    date: "15 April 2022",
  },
  {
    imageUrl: "./assets/image/certificates/coders.png",
    companyImageUrl: "./assets/image/coders_logo.png",
    name: "16 weeks Intensive Web Programming",
    membershipID: "&nbsp; ",
    date: "15 April 2022",
  },
];

certificatesData.map((certificate) => {
  let div = document.createElement("div");
  div.classList.add("col-xs-12", "col-sm-12", "col-xl-6");
  let randomID = Math.round(Math.random()*1000);
  div.innerHTML = `
  <div
    id="col_inner_c62f8085404399e3c77be1f4a2${randomID}"
    class="fw-col-inner"
    data-paddings="0px 0px 0px 0px"
  >
    <a
      href="${certificate.imageUrl}"
      class="lightbox"
    >
      <div class="certificate-item clearfix">
        <div class="certi-logo">
          <img
            decoding="async"
            style="aspect-ratio: 1/1; object-fit:contain;"
            src="${certificate.companyImageUrl}"
            alt="logo"
          />
        </div>
        <div class="certi-content">
          <div class="certi-title">
            <h4>${certificate.name}</h4>
          </div>
          <div class="certi-id">
            <span
              >${certificate.membershipID}
            </span>
          </div>
          <div class="certi-date">
            <span>${certificate.date}</span>
          </div>
          <div class="certi-company">
            <span></span>
          </div>
        </div>
      </div>
    </a>
  </div>
  `;
  certificatesDiv.append(div);
});
