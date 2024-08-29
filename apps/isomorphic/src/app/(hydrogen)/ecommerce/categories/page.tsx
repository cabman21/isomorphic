import { routes } from '@/config/routes';
import CategoryTable from '@/app/shared/ecommerce/category/category-list/table';
import CategoryPageHeader from './category-page-header';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Categories'),
};

const pageHeader = {
  title: 'Categories',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.categories,
      name: 'Categories',
    },
    {
      name: 'List',
    },
  ],
};

const URL = "https://nestjs-mongodb-tau.vercel.app/categories";

const getCategories = async () => {
  return await fetch(URL, { cache: 'no-store' })
    .then((res) => res.json())
    .catch((err) => "error");
};

export default async function CategoriesPage() {
  const categoryData = await getCategories();
  return (
    <>
      <CategoryPageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <CategoryTable data={categoryData} />
    </>
  );
}
