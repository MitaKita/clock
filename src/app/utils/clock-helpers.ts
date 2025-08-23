export const HOUR_MARKS = [...Array(12)].map((_, i) => {
  const angle = i * 30 * (Math.PI / 180);
  const x1 = 100 + 75 * Math.sin(angle);
  const y1 = 100 - 75 * Math.cos(angle);
  const x2 = 100 + 85 * Math.sin(angle);
  const y2 = 100 - 85 * Math.cos(angle);
  return {
    x1: x1.toFixed(6),
    y1: y1.toFixed(6),
    x2: x2.toFixed(6),
    y2: y2.toFixed(6),
  };
});

export const getCurrentTime = () => {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  const secAngle = sec * 6;
  const minAngle = min * 6 + sec * 0.1;
  const hrAngle = hr * 30 + min * 0.5;

  return {
    hour: hrAngle,
    minute: minAngle,
    second: secAngle,
  };
};
