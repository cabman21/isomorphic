import { routes } from '@/config/routes';
// import { invoiceData } from '@/data/invoice-data';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Enhanced Table'),
};

const pageHeader = {
  title: 'Enhanced Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Enhanced',
    },
  ],
};

const URL = "https://nestjs-mongodb-tau.vercel.app/invoices";

const getInvoices = async () => {
  return await fetch(URL, { cache: 'no-store' })
    .then((res) => res.json())
    .catch((err) => "error");
};

export default async function EnhancedTablePage() {
  const invoiceData = await getInvoices();
  console.log("invoiceData:", invoiceData);
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={invoiceData}
      fileName="invoice_data"
      header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
    >
      <InvoiceTable data={invoiceData} />
    </TableLayout>
  );
}
