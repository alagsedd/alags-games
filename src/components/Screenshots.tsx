import { useParams } from "react-router-dom";
import useScreenshots from "../services/useScreenshots";
import styles from "../styles/Screenshots.module.css";
import React, { useState } from "react";

const Screenshots = () => {
  const { slug } = useParams();
  const { data } = useScreenshots(slug!);

  const [currentPic, setCurrentPic] = useState(data?.results[2].image);

  return (
    <>
      <h2 className={styles.header}>
        <span>Screenshots </span>
      </h2>{" "}
      <div className={styles.parent}>
        <div className={styles.main}>
          <img
            src={currentPic}
            alt="Your browser doesn't support this image"
            className={styles.image}
          />
        </div>
        <div className={styles.subs}>
          {data?.results.map((i, index) => (
            <React.Fragment key={index}>
              {" "}
              <img
                onClick={() => setCurrentPic(i.image)}
                src={i.image}
                alt="Your browser doesn't support this image"
                className={styles.subImage}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screenshots;
