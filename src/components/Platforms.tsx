import * as React from "react";
import usePlatforms from "../services/usePlatforms";
import PlatformContext from "../contexts/onSelectPlatformContext";
import { useContext } from "react";
import styles from "../styles/Platforms.module.css";

const Platforms = () => {
  const { data } = usePlatforms();

  const { dispatch } = useContext(PlatformContext);

  return (
    <>
      <div className={styles.parent}>
        <select
          className={styles.select}
          onChange={(event) => {
            console.log(
              event.target.value,
              dispatch({
                type: "selectPlatform",
                platformId: event.target.value,
              })
            );
          }}
        >
          {data?.results.map((i, index) => (
            <React.Fragment key={index}>
              {i.platforms.map((platform) => (
                <option
                  onClick={() =>
                    dispatch({
                      type: "selectPlatform",
                      platformId: platform.id.toString(),
                    })
                  }
                  value={platform.id}
                  key={platform.id}
                >
                  {platform.name}
                </option>
              ))}
            </React.Fragment>
          ))}
        </select>
      </div>
    </>
  );
};

export default Platforms;
