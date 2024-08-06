'use client';

import { Trash } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Table,
  useReactTable,
} from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { useFinances } from '@/contexts/finances.context';
import { formatToCurrency } from '@/utils/currency.util';
import { DataTable } from '@/components/tools/data-table/data-table';
import { DataTableColumnHeader } from '@/components/tools/data-table/data-table-column-header';
import { DataTableExcelExport } from '@/components/tools/data-table/data-table-excel-export';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/tools/icon';
import { CustomTooltip } from '@/components/tools/custom-tooltip';

function FinanceTableFloatingBar({ table }: { table: Table<IFinance> }) {
  return (
    <div className="w-full flex items-center">
      <DataTableExcelExport table={table} />
    </div>
  );
}

export function FinanceTable() {
  const { finances, removeFinance } = useFinances();

  const table = useReactTable({
    data: finances,
    columns: [
      {
        accessorKey: 'description',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Descrição" />
        ),
        cell: ({ row }) => (
          <div className="w-20">{row.getValue('description')}</div>
        ),
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: 'amount',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Valor" />
        ),
        cell: ({ row }) => (
          <div className="w-20">{formatToCurrency(row.getValue('amount'))}</div>
        ),
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: 'type',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Tipo" />
        ),
        cell: ({ row }) => {
          const isIn = row.getValue('type') === 'in';

          return (
            <div className="w-20">
              <Badge variant={isIn ? 'outline' : 'destructive'}>
                {isIn ? 'Entrada' : 'Saída'}
              </Badge>
            </div>
          );
        },
        enableSorting: true,
        enableHiding: false,
      },
      {
        id: 'sctions',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Ações" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2">
              <CustomTooltip tooltipText="Deletar finança">
                <Button
                  size="icon"
                  onClick={async () => {
                    removeFinance(row.original.id);

                    revalidatePath('/');
                  }}
                  variant="destructive"
                >
                  <Icon icon={Trash} size="sm" />
                </Button>
              </CustomTooltip>
            </div>
          );
        },
        enableSorting: false,
        enableHiding: false,
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <DataTable table={table}>
      <FinanceTableFloatingBar table={table} />
    </DataTable>
  );
}
