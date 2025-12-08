
export const checkMobile = (userAgent: string) => {
  const isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(
    userAgent
  );
  return isMobile || isTablet || window.innerWidth < 768;
};
