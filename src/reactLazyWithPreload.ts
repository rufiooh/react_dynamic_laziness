import React from "react";

type FactoryType<T> = () => Promise<{
  default: T;
}>;

export interface LazyExoticComponentWithPreload<
  T extends React.ComponentType<any>
> extends React.LazyExoticComponent<T> {
  preload: FactoryType<T>;
}

export const reactLazyWithPreload = <T extends React.ComponentType<any>>(
  factory: FactoryType<T>
): LazyExoticComponentWithPreload<T> => {
  const Component = React.lazy(factory);

  (Component as LazyExoticComponentWithPreload<T>).preload = factory;

  return Component as LazyExoticComponentWithPreload<T>;
};
