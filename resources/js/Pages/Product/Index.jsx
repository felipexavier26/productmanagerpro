import AlertMsg from '@/Components/alert/AlertMsg';
import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';
import Pagination from '@/Components/Pagitation';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function ProductList({ auth, products }) {
    const { flash } = usePage().props;
    // console.log('Flash from usePage:', flash);
    // console.log("Auth:", auth);
    // console.log("products:", products);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Product
                </h2>
            }
        >
            <Head title="Products" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">View</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('products.create')}>
                                    <PrimaryButton>New product</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <AlertMsg message={flash} />

                    <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                        <thead className='bg-gray-50 dark:bg-gray-700'>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>ID:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>Name:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>Description:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>Price:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>Quantity:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider'>Active:</th>
                                <th className='px-6 py-3 text-center text-sm font-medium text-gray-200 tracking-wider'>Actions:</th>
                            </tr>
                        </thead>

                        <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                            {products?.data?.map((product) => (
                                <tr key={product.id}>
                                    <td className='px-6 py-2 text-left text-sm text-gray-200 tracking-wider'>{product.id}</td>
                                    <td className='px-6 py-2 text-left text-sm text-gray-200 tracking-wider'>{product.name}</td>
                                    <td className='px-6 py-2 text-left text-sm text-gray-200 tracking-wider'>{product.description}</td>
                                    <td className='px-6 py-2 text-left text-sm text-gray-200 tracking-wider'>$ {product.price}</td>
                                    <td className='px-6 py-2 text-left text-sm text-gray-200 tracking-wider'>{product.quantity}</td>

                                    <td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {product.active ? (
                                                <span className="text-green-500">🟢 Active</span>
                                            ) : (
                                                <span className="text-red-500">🔴 Inactive</span>
                                            )}
                                        </td>
                                    </td>

                                    <td className='px-6 py-2 text-sm text-gray-200 tracking-wider'>

                                        <Link href={route('products.show', { id: product.id })}>
                                            <PrimaryButton className='ms-1'>
                                                View
                                            </PrimaryButton>
                                        </Link>

                                        <Link href={route('products.edit', { id: product.id })}>
                                            <WarningButton className='ms-1'>
                                                Edit
                                            </WarningButton>
                                        </Link>

                                        <ConfirmDeleteButton id={product.id} routeName={'products.destroy'} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={products.links} currentPage={products.current_page} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
