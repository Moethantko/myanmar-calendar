import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setDayDialongTargetDay } from "@/store/modelControlState";
import { Dialog, Transition } from "@headlessui/react";
import DayDialogContent, { DayDialogContentProps } from "./DayDialogContent";
import BottomSheetMobile from "@/components/ui/sheets/BottomSheetMobile";

function RenderDayDialog() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dayDialogTargetDay = useSelector(
    (state: RootState) => state.modelControlState.dayDialogTargetDay,
  );
  const enterMobileMode = useSelector(
    (state: RootState) => state.systemState.enterMobileMode,
  );
  const timeoutRef = useRef<any>(null);
  useEffect(() => {
    if (dayDialogTargetDay) setIsOpen(true);
  }, [dayDialogTargetDay]);

  const handleClose = () => {
    setIsOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      dispatch(setDayDialongTargetDay(null));
    }, 200);
  };

  if (enterMobileMode)
    return (
      <DayDialogMobile
        open={isOpen}
        onClose={handleClose}
        selectedDay={new Date(dayDialogTargetDay)}
      />
    );

  return (
    <Transition appear show={isOpen}>
      <DayDialogDesktop
        onClose={handleClose}
        selectedDay={new Date(dayDialogTargetDay)}
      />
    </Transition>
  );
}

export default RenderDayDialog;

// Mobile
function DayDialogMobile(
  props: DayDialogContentProps & {
    open: boolean;
  },
) {
  return (
    <BottomSheetMobile isOpen={props.open} onClose={props.onClose}>
      <div className="mx-auto mt-auto flex h-full w-full transform flex-col overflow-hidden bg-gray-0 transition-all dark:bg-gray-50 sm2:my-auto">
        <DayDialogContent {...props} />
      </div>
    </BottomSheetMobile>
  );
}

// Desktop
function DayDialogDesktop(props: DayDialogContentProps) {
  return (
    <Dialog as="div" className="relative z-10" onClose={props.onClose}>
      <Transition.Child
        as={Fragment}
        enterFrom={"opacity-0  translate-y-5"}
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo={"opacity-0  translate-y-5"}
        enter={" duration-200"}
        leave={"ease-in duration-150"}
      >
        <Dialog.Panel className="fixed inset-0 mx-auto mt-auto flex h-[calc(100%-5rem)] w-full transform flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-gray-0 text-left align-middle shadow-model transition-all dark:bg-gray-75 dark:shadow-model-dark sm2:my-auto sm2:h-[90%] sm2:max-h-[33rem] sm2:max-w-[27rem]  sm2:rounded-[0.5rem] sm2:border sm2:border-gray-200">
          <DayDialogContent {...props} />
        </Dialog.Panel>
      </Transition.Child>
    </Dialog>
  );
}
