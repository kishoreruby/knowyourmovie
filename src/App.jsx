import { useEffect } from "react";
import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { Logo } from "./components/Logo/Logo";
import { TvShowDetail } from "./components/TVShowDetail/TvShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import logoImg from "./assets/images/logo.png";
import s from "./style.module.css";
import { TvShowRecommendation } from "./components/TVShowRecommendation/TvShowRecommendation";
import { SearchBar } from "./components/SearchBar/SearchBar";

export const App = (props) => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [tvShowRecommendation, setTVShowRecommendation] = useState([]);
  async function fetchTVShow() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchTVRecommendation(tvShowID) {
    const popularTVShowRecommendation = await TVShowAPI.fetchRecommendation(
      tvShowID
    );
    if (popularTVShowRecommendation.length > 0) {
      setTVShowRecommendation(popularTVShowRecommendation);
    }
  }

  async function fetchSearchTitle(title) {
    const searchResponse = await TVShowAPI.searchTvShow(title);
    console.log("I am here" + searchResponse[0]);
    if (searchResponse.length > 0) {
      console.log("I am here" + searchResponse);
      setCurrentTVShow(searchResponse[0]);
    }
  }

  function updateTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  useEffect(() => {
    fetchTVShow();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchTVRecommendation(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(tvShowRecommendation);
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="KnowYourMovie"
              subtitle="Search your movie mind here!"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onClickSearch={fetchSearchTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TvShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TvShowRecommendation
            onClickShow={updateTVShow}
            tvShowRecommendation={tvShowRecommendation}
          />
        )}
      </div>
    </div>
  );
};
