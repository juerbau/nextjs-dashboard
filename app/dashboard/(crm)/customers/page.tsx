import CustomersTable from '@/app/ui/customers/table';
import {Metadata} from "next";
import {fetchCustomers} from "@/app/lib/data";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {

  const customers = await fetchCustomers();

  return <CustomersTable customers={customers} />;
}