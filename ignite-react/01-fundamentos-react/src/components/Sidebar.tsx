import React from "react";
import style from "./Sidebar.module.css";

import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "./avatar";

export function Sidebar(): React.ReactElement {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="aside cover"
      />
      <div className={style.profile}>
        <Avatar src="https://github.com/diego3g.png" />

        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          <span>Editar seu perfil</span>
        </a>
      </footer>
    </aside>
  );
}
