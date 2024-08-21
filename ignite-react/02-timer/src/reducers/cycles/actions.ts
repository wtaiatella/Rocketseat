import { Cycle } from "./reducer";

export enum CyclesActionTypes {
  CREATE_CYCLE = "CREATE_CYCLE",
  STOP_CYCLE = "STOP_CYCLE",
  MARK_AS_COMPLETED_CYCLE = "MARK_AS_COMPLETED_CYCLE",
}

export function createCycleAction(newCycle: Cycle) {
  return {
    type: CyclesActionTypes.CREATE_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCycleAsCompletedAction() {
  return {
    type: CyclesActionTypes.MARK_AS_COMPLETED_CYCLE,
  };
}

export function stopCurrentCycleAction() {
  return {
    type: CyclesActionTypes.STOP_CYCLE,
  };
}
