import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../context/CyclesContext";
import { CountdownContainer, Separator } from "./styles";

export function Countdown(): JSX.Element {
  const {
    activeCycle,
    markCycleAsCompleted,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesLeft = Math.floor(currentSeconds / 60);
  const secondsLeft = (currentSeconds % 60).toString().padStart(2, "0");

  const minutes = String(minutesLeft).padStart(2, "0");
  const seconds = String(secondsLeft).padStart(2, "0");

  useEffect(() => {
    if (!activeCycle) return;

    if (currentSeconds <= 0) {
      markCycleAsCompleted();
    }

    const intervalId = setInterval(() => {
      //const interval = new Date().getTime() - activeCycle.startDate.getTime();
      //setAmountSecondsPassed(Math.floor(interval / 1000));
      setSecondsPassed(differenceInSeconds(new Date(), activeCycle.startDate));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeCycle, currentSeconds, markCycleAsCompleted, setSecondsPassed]);

  useEffect(() => {
    if (!activeCycle) return;
    document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
  }, [activeCycle, minutes, seconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
