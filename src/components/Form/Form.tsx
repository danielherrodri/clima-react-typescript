import { countries } from "../../data/countries";
import styles from "../Form/Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" placeholder="Ciudad" />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select name="" id="">
          <option value="">Seleccione un país</option>
          {countries.map((country) => (
            <option value={country.code} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" className={styles.submit} value="Consultar Clima" />
    </form>
  );
}
