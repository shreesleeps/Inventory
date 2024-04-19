import React from "react";
import Sidebar from "../components/Sidebar";
import Inventory from "../components/inventory/Inventory";
import Navbarwebbuilder from "../components/Navbarwebbuilder";
import styles from "./Page.module.css";

export default function InventoryPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Navbarwebbuilder />
        <Inventory />
      </div>
    </div>
  );
}
