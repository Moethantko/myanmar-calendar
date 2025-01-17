import React from "react";
import { camelToSentenceCase } from "@/utils/stringHelpers";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";

interface CheckListInterface {
  title: string;
  children: React.ReactNode;
}

export function CheckList({ title, children }: CheckListInterface) {
  return (
    <div className="">
      <p className="mb-[0.35rem] text-[0.75rem] font-medium text-gray-450">
        {title}
      </p>
      <ul>{children}</ul>
    </div>
  );
}

export function CheckListItem({
  tagColor,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { tagColor?: string }) {
  return (
    <li>
      <label
        htmlFor={props.id}
        className="flex h-[2.5rem] cursor-pointer items-center gap-3 rounded-[0.25rem] px-2 hover:bg-gray-100 sm2:h-[1.95rem]"
      >
        <div className="relative flex items-center justify-center">
          <input
            {...props}
            type="checkbox"
            className=" h-[1.25rem] w-[1.25rem] cursor-pointer appearance-none rounded-[0.15rem] border-[1.8px] border-red-400 outline-none checked:bg-red-400 sm2:h-[1.1rem] sm2:w-[1.1rem]"
            style={{
              backgroundColor: props.checked ? tagColor : "transparent",
              borderColor: tagColor,
            }}
          />
          <IoMdCheckmark
            size={17}
            className={cn(
              "absolute",
              props.checked ? "text-gray-50" : "text-gray-100/0",
            )}
          />
        </div>
        <span className=" whitespace-nowrap text-[1.1rem] font-normal text-gray-600 first-letter:capitalize sm2:text-[0.875rem]">
          {props.name}
        </span>
      </label>
    </li>
  );
}

export function CheckListAddButton({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={cn(
        "flex h-[2.25rem] w-full cursor-pointer items-center justify-center rounded-[0.25rem] bg-gray-200/80 text-[0.825rem] font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300/80 sm2:h-[2rem] xl:h-[1.85rem]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
