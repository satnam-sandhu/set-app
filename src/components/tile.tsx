import { useState, useEffect } from "react";
import { AspectRatio, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import { Movie } from "../types/movies";

interface TileProps {
  item: Movie;
}

const Tile = ({ item }: TileProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const transRef = useSpringRef();
  const transitions = useTransition(showInfo, {
    keys: null,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
  });

  useEffect(() => {
    transRef.start();
  }, [showInfo, transRef]);

  return (
    <Box
      cursor={"pointer"}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      minWidth={"160px"}
      minHeight={"240px"}
      borderRadius={5}
      transition={"transform 100ms ease 100ms"}
      _hover={{ transform: "scale(1.2)", zIndex: 2 }}
    >
      <AspectRatio ratio={0.67} cursor={"pointer"}>
        <Image
          objectFit="cover"
          borderRadius={5}
          src={item.url || "https://source.unsplash.com/random"}
        />
      </AspectRatio>

      {transitions((style, state) => {
        return (
          <animated.div style={style}>
            {state && (
              <Stack
                borderRadius={5}
                bgGradient="linear(to-b, transparent, gray.900)"
                bottom={0}
                zIndex={2}
                position={"absolute"}
                minHeight={"100%"}
                minWidth={"100%"}
                paddingX={2}
                paddingY={5}
                flexDirection={"column-reverse"}
              >
                <Text fontSize="xs" noOfLines={3}>
                  {item.description || "Description"}
                </Text>
                <Heading size="sm">{item.title || "Title"}</Heading>
              </Stack>
            )}
          </animated.div>
        );
      })}
    </Box>
  );
};

export default Tile;
