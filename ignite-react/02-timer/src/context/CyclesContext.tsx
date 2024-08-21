import { differenceInSeconds } from "date-fns";
import { createContext, useEffect, useReducer, useState } from "react";
import {
  createCycleAction,
  markCycleAsCompletedAction,
  stopCurrentCycleAction,
} from "../reducers/cycles/actions";
import { Cycle, CyclesState, cyclesReducer } from "../reducers/cycles/reducer";

interface CycleFormData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextData {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  amountSecondsPassed: number;
  markCycleAsCompleted: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CycleFormData) => void;
  stopCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextData);

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cyclesState, dispatchCycles] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState: CyclesState) => {
      const stateJSON = localStorage.getItem("@ignite-times:cyclesState-1.0.0");
      if (stateJSON) {
        return JSON.parse(stateJSON);
      }
      return initialState;
    }
  );
  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), activeCycle.startDate);
    }
    return 0;
  });

  console.log(cycles);
  console.log(activeCycle);

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-times:cyclesState-1.0.0", stateJSON);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCycleAsCompleted() {
    /*     setCycles((prevCycles: Cycle[]) =>
      prevCycles.map((cycle: Cycle) => {
        const currentCycleCompleted = {
          ...cycle,
          status: "Completed",
          stopDate: new Date(),
          duration: differenceInMinutes(new Date(), activeCycle.startDate),
        } as Cycle;

        if (cycle.id === activeCycle.id) {
          return currentCycleCompleted;
        } else {
          return cycle;
        }
      })
    ); */
    dispatchCycles(markCycleAsCompletedAction());
  }

  function createNewCycle(data: CycleFormData) {
    const id = String(new Date().getTime());
    console.log(data);
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      status: "In Progress",
      startDate: new Date(),
    };
    console.log(newCycle);
    dispatchCycles(createCycleAction(newCycle));

    //reset Amount of seconds from previous cycle
    setAmountSecondsPassed(0);
  }

  function stopCurrentCycle() {
    dispatchCycles(stopCurrentCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        amountSecondsPassed,
        markCycleAsCompleted,
        setSecondsPassed,
        createNewCycle,
        stopCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
