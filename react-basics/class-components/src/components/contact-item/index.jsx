import React from "react";
import Seperator from "../base-components/seperator";
import styles from "./style.module.scss";

class ContactItem extends React.Component {
  render() {
    const { contactData } = this.props;
    const { name, familyName, phoneNumber, ID } = contactData;
    return (
      <div className={styles.wrapper}>
        <div className={styles.badge} />
        <p className={styles.title}>Contact Item</p>

        <Seperator />
        <div className={styles.itemRow}>
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className={styles.itemRow}>
          <p>Family Name:</p>
          <p>{familyName}</p>
        </div>
        <div className={styles.itemRow}>
          <p>Phone Number:</p>
          <p>{phoneNumber}</p>
        </div>
        <div className={styles.itemRow}>
          <p>ID:</p>
          <p>{ID}</p>
        </div>
      </div>
    );
  }
}

export default ContactItem;
