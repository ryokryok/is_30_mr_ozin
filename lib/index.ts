export function calcRemainingTime(isDebug: Boolean, birthDate: string) {
  const presentTime = new Date().getTime();
  const birthDayTime = isDebug
    ? presentTime + 1000 * 10
    : new Date(birthDate).getTime();
  return birthDayTime - presentTime;
}

function convertMsToDateInfo(inputTime: number) {
  const diffSec = Math.floor(inputTime / 1000);
  const date = Math.floor(diffSec / 86400);
  const hour = Math.floor(diffSec / 3600) % 24;
  const min = Math.floor(diffSec / 60) % 60;
  const sec = diffSec % 60;
  return { date, hour, min, sec };
}

export function formatTimeToString(ms: number) {
  const { date, hour, min, sec } = convertMsToDateInfo(Math.abs(ms));
  const hmsText = `${hour}時間${min}分${sec}秒`;
  return date === 0 ? hmsText : `${date}日${hmsText}`;
}
