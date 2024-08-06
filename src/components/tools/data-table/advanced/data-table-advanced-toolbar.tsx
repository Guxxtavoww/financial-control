'use client';

import { useState, type HTMLAttributes, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Table } from '@tanstack/react-table';
import { CaretSortIcon, PlusIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils/cn.util';
import { Button } from '@/components/ui/button';

import { DataTableFilterCombobox } from './data-table-filter-combobox';
import { DataTableViewOptions } from '../data-table-view-options';
import { DataTableFilterItem } from './data-table-filter-item';
import { DataTableMultiFilter } from './data-table-multi-filter';

interface DataTableAdvancedToolbarProps<TData>
  extends HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
  filterFields?: DataTableFilterField<TData>[];
}

export function DataTableAdvancedToolbar<TData>({
  table,
  filterFields = [],
  children,
  className,
  ...props
}: DataTableAdvancedToolbarProps<TData>) {
  const searchParams = useSearchParams();

  const options = useMemo<DataTableFilterOption<TData>[]>(() => {
    return filterFields.map((field) => {
      return {
        id: crypto.randomUUID(),
        label: field.label,
        value: field.value,
        options: field.options ?? [],
      };
    });
  }, [filterFields]);

  const initialSelectedOptions = useMemo(() => {
    return options
      .filter((option) => searchParams.has(option.value as string))
      .map((option) => {
        const value = searchParams.get(String(option.value)) as string;
        const [filterValue, filterOperator] =
          value?.split('~').filter(Boolean) ?? [];

        return {
          ...option,
          filterValues: filterValue?.split('.') ?? [],
          filterOperator,
        };
      });
  }, [options, searchParams]);

  const [selectedOptions, setSelectedOptions] = useState<
    DataTableFilterOption<TData>[]
  >(initialSelectedOptions);
  const [openFilterBuilder, setOpenFilterBuilder] = useState(
    initialSelectedOptions.length > 0 || false
  );
  const [openCombobox, setOpenCombobox] = useState(false);

  function onFilterComboboxItemSelect() {
    setOpenFilterBuilder(true);
    setOpenCombobox(true);
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col space-y-2.5 overflow-auto p-1',
        className
      )}
      {...props}
    >
      <div className="ml-auto flex items-center gap-2">
        {children}
        {(options.length > 0 && selectedOptions.length > 0) ||
        openFilterBuilder ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpenFilterBuilder(!openFilterBuilder)}
          >
            <CaretSortIcon
              className="mr-2 size-4 shrink-0"
              aria-hidden="true"
            />
            Filter
          </Button>
        ) : (
          <DataTableFilterCombobox
            options={options.filter(
              (option) =>
                !selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                )
            )}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            onSelect={onFilterComboboxItemSelect}
          />
        )}
        <DataTableViewOptions table={table} />
      </div>
      <div
        className={cn(
          'flex items-center gap-2',
          !openFilterBuilder && 'hidden'
        )}
      >
        {selectedOptions
          .filter((option) => !option.isMulti)
          .map((selectedOption) => (
            <DataTableFilterItem
              key={String(selectedOption.value)}
              table={table}
              selectedOption={selectedOption}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              defaultOpen={openCombobox}
            />
          ))}
        {selectedOptions.some((option) => option.isMulti) ? (
          <DataTableMultiFilter
            table={table}
            allOptions={options}
            options={selectedOptions.filter((option) => option.isMulti)}
            setSelectedOptions={setSelectedOptions}
            defaultOpen={openCombobox}
          />
        ) : null}
        {options.length > 0 && options.length > selectedOptions.length ? (
          <DataTableFilterCombobox
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            onSelect={onFilterComboboxItemSelect}
          >
            <Button
              variant="outline"
              size="sm"
              role="combobox"
              className="h-7 rounded-full"
              onClick={() => setOpenCombobox(true)}
            >
              <PlusIcon className="mr-2 size-4 opacity-50" aria-hidden="true" />
              Add filter
            </Button>
          </DataTableFilterCombobox>
        ) : null}
      </div>
    </div>
  );
}
