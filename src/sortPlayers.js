export default function sortPlayers(playersInfo) {
  const result = playersInfo.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });

  return result;
}
