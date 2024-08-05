import { useMemo } from 'react';
import { ArrowRightFromLine } from 'lucide-react';
import type { Table } from '@tanstack/react-table';
import { mkConfig, generateCsv, download } from 'export-to-csv';

import { Button } from '@/components/ui/button';

import { Icon } from '../icon';

interface DataTableExcelExportProps<T> {
  table: Table<T>;
}

const csvConfig = mkConfig({
  fieldSeparator: ',',
  filename: 'financas', // export file name (without .csv)
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

export function DataTableExcelExport<T>({
  table,
}: DataTableExcelExportProps<T>) {
  const rows = useMemo(() => table.getFilteredRowModel().rows, [table]);

  if (!rows.length) return null;

  function exportToExcel() {
    const data = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(data as any);

    download(csvConfig)(csv);
  }

  return (
    <Button
      className="inline-flex items-center gap-2"
      variant="outline"
      onClick={exportToExcel}
    >
      <Icon icon={ArrowRightFromLine} size="sm" />
      Exportar
    </Button>
  );
}
