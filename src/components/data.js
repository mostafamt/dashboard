import imgSrc from "../img/profile.jpg";

export const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    responsive: ["lg"],
    sorter: (a, b) => a.code.length - b.code.length,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => <span>{name} A Customer Name</span>,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Mobile Number",
    dataIndex: "mobile-number",
    key: "mobile-number",
    sorter: (a, b) => a["mobile-number"] - b["mobile-number"],
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    responsive: ["xm"],
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Job Title",
    dataIndex: "job-title",
    key: "job-title",
    responsive: ["md"],
    sorter: (a, b) => a["job-title"].length - b["job-title"].length,
  },
  {
    title: "Authorized Module",
    dataIndex: "authorized-module",
    key: "authorized-module",
    responsive: ["sm"],
    sorter: (a, b) =>
      a["authorized-module"].length - b["authorized-module"].length,
  },
  {
    title: "Joining Date",
    dataIndex: "joining-date",
    key: "joining-date",
    responsive: ["xl"],
    sorter: (a, b) => a["joining-date"].length - b["joining-date"].length,
  },
];

export const dataSource = [
  {
    key: "1",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "2",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "3",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "4",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "5",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "6",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "7",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "8",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "9",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "10",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "11",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "12",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
  {
    key: "13",
    code: "BD5428844",
    name: (
      <img
        src={imgSrc}
        alt="user"
        className="profile-img"
        style={{ display: "inline" }}
      />
    ),
    "mobile-number": "01023456789",
    email: "Islamalsoultan@gmail.com",
    "job-title": "Product Manager",
    "authorized-module": "Trustree (CRM)",
    "joining-date": "Mon . 5 Nov 2020 10:00am",
  },
];
