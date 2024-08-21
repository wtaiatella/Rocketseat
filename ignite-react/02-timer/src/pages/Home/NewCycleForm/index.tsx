import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { CyclesContext } from "../../../context/CyclesContext";

export function NewCycleForm(): JSX.Element {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label id="task" htmlFor="">
        I'm working on
      </label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Give a name for your task"
        list="tasks-sugestions"
        disabled={activeCycle ? true : false}
        {...register("task")}
      />
      <datalist id="tasks-sugestions">
        <option value="Front-end" />
        <option value="Back-end" />
        <option value="Mobile" />
        <option value="Design" />
      </datalist>
      <div>
        <label htmlFor="" id="minutesAmount">
          For
        </label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          disabled={activeCycle ? true : false}
          {...register("minutesAmount", {
            valueAsNumber: true,
          })}
        />

        <span>minutes</span>
      </div>
    </FormContainer>
  );
}
