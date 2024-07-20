import { useWindowResize } from "./useWindowResize";

const useScreenSizes = () => {
  const { width } = useWindowResize();
  const isMobileXS = width <= 250;
  const isMobileSM = width <= 431;
  const isMobile = width <= 640;
  const isTablet = width <= 771;
  const isLaptop = width <= 1024;
  const isMonitor = width <= 1280;

  return { isMobile, isMobileXS, isMobileSM, isTablet, isLaptop, isMonitor };
};

export default useScreenSizes;
