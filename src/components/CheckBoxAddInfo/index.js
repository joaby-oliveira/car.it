import styles from "./styles.module.scss";
import { Input } from "./../Input/index";

export const CheckBoxAddInfo = () => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>Adicionais</legend>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input
                type="checkbox"
                value="arCondicionado"
                name="arCondicionado"
              />
              <span>Ar condicionado</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input
                type="checkbox"
                value="cambioBorboleta"
                name="cambioBorboleta"
              />
              <span>Câmbio borboleta</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input
                type="checkbox"
                value="controleEstabilidade"
                name="controleEstabilidade"
              />
              <span>Controle de estabilidade</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input type="checkbox" value="airbag" name="airbag" />
              <span>Airbag</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input
                type="checkbox"
                value="vidroEletrico"
                name="vidroEletrico"
              />
              <span>Vidro elétrico</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input type="checkbox" value="alarme" name="alarme" />
              <span>Alarme</span>
            </label>
          </div>

          <div className={styles.formColumn}>
            <label className={styles.labelCheckBox}>
              <input
                type="checkbox"
                value="travaEletrica"
                name="travaEletrica"
              />
              <span>Trava Elétrica</span>
            </label>
          </div>

        </div>
      </fieldset>
    </>
  );
};
