import { HandPalm, Play } from "phosphor-react";

import { FormProvider, useForm } from "react-hook-form";
import { Countdown } from "./CountDown";
import { NewCycleForm } from "./NewCycleForm";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import * as zod from "zod";
import { CyclesContext } from "../../context/CyclesContext";

//interface NewCycleFormData {
//  task: string;
//  minutesAmount: number;
//}
// o proprio zod cria o tipo inferido

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Task name is required"),
  minutesAmount: zod
    .number()
    .min(1, "Minutes amount must be between 5 and 60")
    .max(60, "Minutes amount must be between 5 and 60"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home(): JSX.Element {
  const { activeCycle, createNewCycle, stopCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, formState, reset } = newCycleForm;

  console.log(formState.errors);

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");
  const isSubmmitDisabled = !task || !minutesAmount;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  function handleStopCurrentCycle() {
    stopCurrentCycle();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={handleStopCurrentCycle} type="button">
            <HandPalm size={24} /> Stop
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmmitDisabled} type="submit">
            <Play size={24} /> Start
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
