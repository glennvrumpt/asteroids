const getForwardVector = (angle) => {
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radians),
    y: Math.sin(radians),
  };
};

export { getForwardVector };
