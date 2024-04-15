import { NavLink, Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        {/* <svg className={styles.logo}>
        <use href="../../assets/sprite.svg#icon-cinema-film"></use>
      </svg> */}
        <h4>The Movies DB</h4>
        <nav>
          <ul>
            <li>
              <NavLink
                className={styles.link}
                to="/"
                // style={({ isActive }) => {
                //   return isActive ? { color: "plum" } : {};
                // }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
