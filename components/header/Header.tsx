import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.claim}>
        Hallo, ich bin Andi, ein Frontend Entwickler
      </p>
    </header>
  );
}
