import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import Carousel from "./carousel";
import { Movie } from "../types/movies";

interface BannerProps {
  data: Movie[];
}

const Banner = ({ data }: BannerProps) => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    keys: null,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <>
      <Carousel setIndex={(index: number) => setIndex(index)}>
        {data.map((movie: Movie, index: number) => (
          <Box key={index} width={"100vw"} height={"75vh"}>
            {movie.title}
          </Box>
        ))}
      </Carousel>
      <Box position={"absolute"} top={0} zIndex={-10}>
        {transitions((style, i) => {
          return (
            <animated.div style={style}>
              <Image
                width={"100vw"}
                height={"90vh"}
                src={data[i].url}
                objectFit="cover"
              />
            </animated.div>
          );
        })}

        <Box
          top={0}
          position={"absolute"}
          width={"100vw"}
          height={"90vh"}
          bgGradient="linear(to-b, transparent, gray.800)"
        />
      </Box>
    </>
  );
};

export default Banner;
