import s from "./style.module.css";
import { TvShowItemList } from "../TvShowItemList/TvShowItemList";
export const TvShowRecommendation = ({ tvShowRecommendation, onClickShow }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowRecommendation.map((tv_show) => {
          return (
            <span key={tv_show.id} className={s.tv_show_item}>
              <TvShowItemList
                tvShow={tv_show}
                onClick={(tvShow) => {
                  onClickShow(tv_show);
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};
