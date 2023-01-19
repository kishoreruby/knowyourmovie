import s from "./style.module.css";
import { BACKDROP_SMALL_BASE_URL } from "../../config";
const MAX_TITLE_CHAR = 20;
export const TvShowItemList = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.tvshow_container}>
      <img
        alt={tvShow.name}
        src={BACKDROP_SMALL_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};
