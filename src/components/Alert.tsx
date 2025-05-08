import css from "./Alert.module.css";

export default function Alert() {
  return <p className={css.alert}>***This is alert text*** // CSS-модулі – це окремі .module.css файли, які прив’язані до конкретного компонента.
Класи стають локальними: їх не видно іншим компонентам.
Ви імпортуєте модуль як об’єкт і звертаєтесь до класів через css.className </p>;
}