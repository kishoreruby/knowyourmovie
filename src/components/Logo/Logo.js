import s from "./style.module.css";
export const Logo = ({ title, subtitle, img }) => {
  return (
    <>
      <div className={s.logo_title}>
        <img className={s.img} src={img} alt="logo"></img>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
};
