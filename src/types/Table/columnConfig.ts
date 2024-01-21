import { FunctionComponent, MutableRefObject, ReactNode } from 'react';

export type FunctionType = (...args: any[]) => any;

export type ColumnConfig<Row = never> = ColumnConfigBase<Row>;

export type ColumnConfigBase<Row = never> = {
  id: keyof Row;
  label: string;
  checked: boolean;
  type: 'string' | 'number' | 'date' | 'boolean';
  dependentFromFields?: string[][]; // sets of fields required at the smae time for the current field; e.g. [[a],[b,c]] reads as "a" is required or ("b" and "c") are required
  renderCell?: (
    row: Row,
    props: { isRowSelected: boolean; isRowHovered: boolean; isTableExpanded: boolean }
  ) => ReactNode;
  newEntryField?: boolean;
  width?: number;
  pinAdjustedTo?: 'left' | 'right';
  filter?: FunctionComponent<{
    columnId: ColumnConfig['id'];
    columnType: ColumnConfig['type'];
    handleToggleTableFiltering: FunctionType;
  }>;
  _unpinnedIndex?: number; // index to reset pinned column to
};

// export type ColumnConfigDate<Row = never> = ColumnConfigBase<Row> & {
//   altInputType: 'date';
//   inputProps?: DatePickerProps<never>;
// };

export type Column<Row> = ColumnConfig<Row> & {
  ref: MutableRefObject<HTMLDivElement | null>;
};
