import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import CreateCategory from '@/app/shared/ecommerce/category/create-category';
import Link from 'next/link';
import { metaObject } from '@/config/site.config';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

/**
 * for dynamic metadata
 * @link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return metaObject(`Edit ${id}`);
}

const pageHeader = {
  title: 'Edit Category',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.eCommerce.categories,
      name: 'Categories',
    },
    {
      name: 'Edit',
    },
  ],
};

const categoryData1 = {
  name: 'Vegetables',
  slug: 'vegetables',
  type: 'Diet Foods',
  parentCategory: 'Grocery',
  description: 'Incredible Granite Ball',
  images: undefined,
};

const URL = "http://localhost:8080/categories/66d17c567247d5d088b92f73";

const getCategories = async () => {
  return await fetch(URL, { cache: 'no-store' })
    .then((res) => res.json())
    .catch((err) => "error");
};

export default async function EditCategoryPage({ params }: any) {
  const categoryData = await getCategories();
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.categories}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto" variant="outline">
            Cancel
          </Button>
        </Link>
      </PageHeader>
      <CreateCategory id={params.id} category={categoryData} />
    </>
  );
}
