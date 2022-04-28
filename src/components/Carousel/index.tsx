import {
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";
import { WithChildren } from "../../common/childrenType";
import { CarrouselButton } from "../CarrouselButton";
import {
  Container,
  Content,
  ContainerProps,
  ContentProps,
} from "./styles";

type CarouselProps = { itemsWidth: number } & WithChildren<
  ContainerProps & ContentProps
>;

export const Carousel = ({
  children,
  buttonsGap,
  carouselPadding,
  carouselWidth,
  itemsGap,
  itemsWidth,
}: CarouselProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutIdRef = useRef<ReturnType<typeof setTimeout>>();
  const clickTimeoutIdRef = useRef<ReturnType<typeof setTimeout>>();
  const [distFromLeft, setDistFromLeft] = useState(0);
  const [distFromRight, setDistFromRight] = useState(100);

  const getDebounced = (
    idRef: MutableRefObject<ReturnType<typeof setTimeout> | undefined>,
    callback: (...args: unknown[]) => void,
    ignoreSubsequents = false,
    timeout = 300,
  ) => {
    if (ignoreSubsequents) {
      return (...args: unknown[]) => {
        if (!idRef.current) {
          callback(...args);
        } else {
          clearTimeout(idRef.current);
        }

        idRef.current = setTimeout(() => {
          idRef.current = undefined;
        }, timeout);
      };
    }

    return (...args: unknown[]) => {
      if (idRef.current) {
        clearTimeout(idRef.current);
      }

      idRef.current = setTimeout(() => {
        callback(...args);
      }, timeout);
    };
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollEnd = contentRef.current.scrollWidth - contentRef.current.clientWidth;
      const distanceFromRight = contentRef.current.scrollLeft - scrollEnd;

      setDistFromLeft(contentRef.current.scrollLeft);
      setDistFromRight(distanceFromRight);
    }
  };

  const getHandleScrollClick = (offset: number) => () => {
    if (contentRef.current) {
      const scrollEnd = contentRef.current.scrollWidth - contentRef.current.clientWidth;
      let newScroll = distFromLeft + offset;

      if (distFromLeft === 0 && offset < 0) {
        newScroll = scrollEnd;
      } else if (distFromRight === 0 && offset > 0) {
        newScroll = 0;
      }

      contentRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = contentRef.current;
    const debouncedHandleScroll = getDebounced(
      scrollTimeoutIdRef,
      handleScroll,
    );

    if (carousel) {
      handleScroll();
      carousel.addEventListener("scroll", debouncedHandleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", debouncedHandleScroll);
      }
    };
  }, []);

  return (
    <Container
      buttonsGap={buttonsGap}
      carouselWidth={carouselWidth}
      carouselPadding={carouselPadding}
    >
      <CarrouselButton
        left
        aria-label="Item anterior"
        onClick={getDebounced(
          clickTimeoutIdRef,
          getHandleScrollClick(-itemsWidth),
          true,
        )}
      />
      <Content ref={contentRef} itemsGap={itemsGap}>
        {children}
      </Content>
      <CarrouselButton
        aria-label="Próximo item"
        onClick={getDebounced(
          clickTimeoutIdRef,
          getHandleScrollClick(itemsWidth),
          true,
        )}
      />
    </Container>
  );
};
