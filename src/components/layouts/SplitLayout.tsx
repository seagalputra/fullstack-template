import { type HTMLAttributes, type PropsWithChildren } from "react";
import clsx from "clsx";

type SplitLayoutType = HTMLAttributes<HTMLDivElement>;

const SplitLayout = (props: PropsWithChildren<SplitLayoutType>) => {
  return (
    <div className={clsx("flex h-screen", props?.className)}>
      {props?.children}
    </div>
  );
};

type ScreenType = HTMLAttributes<HTMLDivElement>;

const Screen = (props: PropsWithChildren<ScreenType>) => {
  return (
    <div className={clsx("flex-1", props?.className)}>{props?.children}</div>
  );
};

SplitLayout.Screen = Screen;

export default SplitLayout;
