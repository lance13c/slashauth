import { cloneElement, useMemo, useState } from 'react';

import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { mergeRefs } from 'react-merge-refs';
import styles from './index.module.scss';

interface Props {
  label: string;
  placement?: Placement;
  children: JSX.Element;
}

// TOOK THIS FROM: https://codesandbox.io/s/winter-tree-wmmffl?file=/src/Tooltip.tsx:0-1458
const Tooltip = ({ children, label, placement = 'top' }: Props) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(() => mergeRefs([reference, (children as any).ref]), [reference, children]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <div
          ref={floating}
          className={styles.Tooltip}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          {...getFloatingProps()}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default Tooltip;
