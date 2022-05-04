import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Button, Box } from "@chakra-ui/react";
import Video from "./Video";

export default function MovieVideoCarousel({ movie }) {
  const [allVideos, setAllVideos] = useState([]);

  const [current, setCurrent] = useState(0);
  const getVideos = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setAllVideos(
          data.results.filter(
            (video) => video.type === "Trailer" && video.official === true
          )
        );
      });
  };

  const filterVideos = (cur, allVid) => {
    const res = [];
    res.push(allVid[cur]);
    if (cur === allVid.length - 1) {
      res.push(allVid[0]);
      res.push(allVid[1]);
    } else if (cur === allVid.length - 2) {
      res.push(allVid[allVid.length - 1]);
      res.push(allVid[0]);
    } else {
      res.push(allVid[cur + 1]);
      res.push(allVid[cur + 2]);
    }
    return res;
  };

  useEffect(() => {
    getVideos();
  }, []);

  const nextSlide = () => {
    setCurrent(current === allVideos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? allVideos.length - 1 : current - 1);
  };
  if (allVideos.length === 1) {
    return current + 1;
  }

  return (
    <Flex
      mr={{ "2xl": "2em" }}
      W="70vw"
      mt={{ xl: "5em", "2xl": "5em" }}
      justify="center"
    >
      {allVideos.length && (
        <>
          <Button
            _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
            variant="solid"
            borderRadius="100%"
            w="3.125em"
            h="3.125em"
            mt={{ xl: "2.5em", "2xl": "5em" }}
            mr={{ xl: "1em", "2xl": "1em" }}
          >
            <ArrowBackIcon
              color="red"
              fontSize="3rem"
              className="left-arrow"
              onClick={prevSlide}
            />
          </Button>
          {filterVideos(current, allVideos).map((video) => (
            <Box key={video.key}>
              <Video videoInfo={video} key={video.key} />
            </Box>
          ))}
          <Button
            variant="solid"
            borderRadius="100%"
            w="3.125em"
            h="3.125em"
            ml={{ xl: "1.5em" }}
            mt={{ xl: "2.5em", "2xl": "5em" }}
          >
            <ArrowForwardIcon
              _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
              color="red"
              fontSize="3rem"
              className="right-arrow"
              onClick={nextSlide}
            />
          </Button>
        </>
      )}
    </Flex>
  );
}
