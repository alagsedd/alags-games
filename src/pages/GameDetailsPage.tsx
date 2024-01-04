import { Link, useParams } from "react-router-dom";
import styles from "../styles/GameDetails.module.css";
import useDetails from "../services/useDetails";
import { useEffect, useState } from "react";
import ExpandableText from "../components/ExpandableText";
import Screenshots from "../components/Screenshots";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data } = useDetails(slug!);
  console.log(data);
  const [currentPic, setCurrentPic] = useState(data?.background_image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPic((prevPic) => {
        if (prevPic === data?.background_image) {
          return data?.background_image_additional;
        } else {
          return data?.background_image;
        }
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [data]);

  return (
    <>
      {" "}
      <h1 className={styles.headerOne}>
        <span>{data?.name}</span>
      </h1>
      <div className={styles.parent}>
        <div className={styles.foreBackground}>
          <img src={currentPic} alt="Your browser doesn't support this image" />
        </div>

        <div className={styles.gameMeta}>
          <div>
            <p>Rating:{" " + data?.rating} </p>
          </div>

          <div>
            <p>Playtime: {" " + data?.playtime}hrs</p>
          </div>

          <div>
            <p>
              Genres:{" "}
              {data?.genres.map((i) => (
                <span key={i.id}>{i.name + "," + "  "} </span>
              ))}
            </p>
          </div>

          <div>
            <p>
              Developers:{" "}
              {data?.developers.map((i) => (
                <span key={i.id}>{i.name + "," + "  "} </span>
              ))}
            </p>
          </div>

          <div>
            <Link
              className={styles.link}
              to={
                data?.website
                  ? data?.website
                  : "https://edmund-alags-portfolio.vercel.app/"
              }
            >
              Click here for more details{" "}
            </Link>
          </div>
        </div>

        <div className={styles.desc}>
          <h1 className={styles.headerOne}>
            <span>Description</span>
          </h1>
          <ExpandableText description={data?.description_raw} />
        </div>

        <div className={styles.screenshotsBox}>
          <Screenshots />
        </div>

        <div className={styles.tagsBox}>
          <p>
            Tags:{" "}
            {data?.tags.map((i) => (
              <span key={i.id}>{i.name + "," + "  "} </span>
            ))}
          </p>
        </div>

        <div className="buttonBox">
          <Link
            to={"https://edmund-alags-portfolio.vercel.app/"}
            target="_blank"
          >
            <Button variant="outlined" leftIcon={<FaCloudDownloadAlt />}>
              Download now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameDetailsPage;
