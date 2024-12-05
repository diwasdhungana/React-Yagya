import { ComponentType, ElementType, Suspense, lazy } from 'react';

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export function LazyPage(callback: () => Promise<{ default: ComponentType<any> }>) {
  const Component = Loadable(lazy(callback));
  return <Component />;
}
