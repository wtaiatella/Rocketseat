import { differenceInMinutes } from "date-fns";
import { CyclesActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  status: "Completed" | "Canceled" | "In Progress";
  startDate: Date;
  stopDate?: Date;
  duration?: number;
}

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CyclesState, action: any): CyclesState {
  console.log("action: ", action);
  console.log("cycles: ", state);

  switch (action.type) {
    case CyclesActionTypes.CREATE_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    case CyclesActionTypes.STOP_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              status: "Canceled",
              stopDate: new Date(),
              duration: differenceInMinutes(new Date(), cycle.startDate),
            };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    case CyclesActionTypes.MARK_AS_COMPLETED_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              status: "Completed",
              stopDate: new Date(),
              duration: differenceInMinutes(new Date(), cycle.startDate),
            };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    default:
      return state;
  }
}
