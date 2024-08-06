import { type Column } from '@tanstack/react-table';
import { MixIcon, SquareIcon } from '@radix-ui/react-icons';

export type DataTableConfig = typeof dataTableConfig;

export const dataTableConfig = {
  comparisonOperators: [
    { label: 'Contains', value: 'ilike' as const },
    { label: 'Does not contain', value: 'notIlike' as const },
    { label: 'Is', value: 'eq' as const },
    { label: 'Is not', value: 'notEq' as const },
    { label: 'Starts with', value: 'startsWith' as const },
    { label: 'Ends with', value: 'endsWith' as const },
    { label: 'Is empty', value: 'isNull' as const },
    { label: 'Is not empty', value: 'isNotNull' as const },
  ],
  selectableOperators: [
    { label: 'Is', value: 'eq' as const },
    { label: 'Is not', value: 'notEq' as const },
    { label: 'Is empty', value: 'isNull' as const },
    { label: 'Is not empty', value: 'isNotNull' as const },
  ],
  logicalOperators: [
    {
      label: 'And',
      value: 'and' as const,
      description: 'All conditions must be met',
    },
    {
      label: 'Or',
      value: 'or' as const,
      description: 'At least one condition must be met',
    },
  ],
  featureFlags: [
    {
      label: 'Advanced filter',
      value: 'advancedFilter' as const,
      icon: MixIcon,
      tooltipTitle: 'Toggle advanced filter',
      tooltipDescription: 'A notion like query builder to filter rows.',
    },
    {
      label: 'Floating bar',
      value: 'floatingBar' as const,
      icon: SquareIcon,
      tooltipTitle: 'Toggle floating bar',
      tooltipDescription: 'A floating bar that sticks to the top of the table.',
    },
  ],
};

export function getCommonPinningStyles<TData>({
  column,
}: {
  column: Column<TData>;
}): React.CSSProperties {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-5px 0 5px -5px hsl(var(--border)) inset'
      : isFirstRightPinnedColumn
      ? '5px 0 5px -5px hsl(var(--border)) inset'
      : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: isPinned ? 0.97 : 1,
    position: isPinned ? 'sticky' : 'relative',
    background: isPinned ? 'hsl(var(--background))' : undefined,
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
}
