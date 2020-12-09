import React from "react";

import { Link } from "react-router-dom";

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    margin: "1rem",
  },
};

export default function Header() {
  return (
    <div style={styles.header}>
      <Link style={styles.link} to="/dashboard">
        Dashboard
      </Link>
      <Link style={styles.link} to="/signin">
        SignIn
      </Link>
    </div>
  );
}
