export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return hours? `${hours}ч ${formatMinutes}м` : `${formatMinutes} минут`;
};
