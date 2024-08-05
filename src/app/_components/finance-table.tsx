'use client';

import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { useFinances } from '@/contexts/finances.context';
import { formatToCurrency } from '@/utils/currency.util';
import { DataTable } from '@/components/tools/data-table/data-table';
import { DataTableColumnHeader } from '@/components/tools/data-table/data-table-column-header';

export function FinanceTable() {
  const { finances } = useFinances();

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
    ],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return <DataTable table={table} />;
}
