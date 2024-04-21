import { Flex, Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CarouselProps {
  children: JSX.Element[];
  setIndex?: (index: number) => void;
}

const Carousel = ({ children, setIndex }: CarouselProps) => {
  const [cursour, setCoursor] = useState(0);

  useEffect(() => {
    if (children?.length && setIndex) setIndex(cursour);
  }, [cursour, setIndex, children]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoursor((cursour + 1) % children.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cursour, children]);

  return (
    <>
      {children[cursour]}

      <Center>
        <Flex gap={2}>
          {children.map((_, index) => (
            <Box
              _hover={{ opacity: 1 }}
              onClick={() => setCoursor(index)}
              cursor={"pointer"}
              key={index}
              borderRadius={"7px"}
              height={"7px"}
              opacity={index == cursour ? 1 : 0.3}
              width={index == cursour ? "21px" : "7px"}
              backgroundColor={"gray.200"}
            />
          ))}
        </Flex>
      </Center>
    </>
  );
};

export default Carousel;
