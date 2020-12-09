import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

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
  const { signed } = useAuth();

  return (
    <div style={styles.header}>
      {signed && (
        <Link style={styles.link} to="/dashboard">
          Dashboard
        </Link>
      )}
      {!signed && (
        <Link style={styles.link} to="/signin">
          SignIn
        </Link>
      )}
    </div>
  );
}
