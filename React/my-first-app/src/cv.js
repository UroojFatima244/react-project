import React from "react";
import logo from './assets/mypic.jpeg'
const CV = () => {
  const basicInfo = {
    name: "urooj fatima ",
    email: "urooj4811@example.com",
    phone: "03269088.....",
    address: "street no 5 hussainabad Nishsatabad",
  };

  const summary =
    "Experienced software developer with a passion for building user-friendly web applications. Skilled in React, JavaScript, and Python.";

  const skills = [
    "HTML, CSS, JavaScript",
    "Python Programming",
    "React.js",
    "Data Analysis",
    "Version Control (Git)",
  ];

  return (
    <div style={styles.container}>
      <img
        src={logo}
        alt={`${basicInfo.name} Profile`}
        style={styles.image}
      />
      <h1 style={styles.name}>{basicInfo.name}</h1>

      <section style={styles.section}>
        <h2 style={styles.heading}>Summary</h2>
        <p>{summary}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Basic Information</h2>
        <p><strong>Email:</strong> {basicInfo.email}</p>
        <p><strong>Phone:</strong> {basicInfo.phone}</p>
        <p><strong>Address:</strong> {basicInfo.address}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 20,
    border: "3px solid #007BFF",
  },
  name: {
    color: "#333",
    borderBottom: "2px solid #007BFF",
    paddingBottom: 6,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    textAlign: "left",
  },
  heading: {
    color: "#333",
    borderBottom: "2px solid #007BFF",
    paddingBottom: 6,
    marginBottom: 10,
  },
  skillItem: {
    fontSize: "1.1em",
    marginBottom: 6,
  },
};

export default CV;

