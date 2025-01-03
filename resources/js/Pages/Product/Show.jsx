import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ProductShow({ auth, product }) {

    // console.log("Auth:", auth);
    // console.log("Product:", product);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    View Product
                </h2>
            }
        >
            <Head title="Produto" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">View</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('products.index')}>
                                    <PrimaryButton>List Products</PrimaryButton>
                                </Link>
                                <Link href={route('products.edit', { product: product.id })}>
                                    <WarningButton>Edit</WarningButton>
                                </Link>
                                <ConfirmDeleteButton id={product.id} routeName={'products.destroy'} />
                            </div>
                        </div>

                        <div className="overflow-x-auto bg-gray-50 text-sm dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">ID</td>
                                        <td className="px-4 py-2 text-gray-200">{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Name</td>
                                        <td className="px-4 py-2 text-gray-200">{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Description</td>
                                        <td className="px-4 py-2 text-gray-200">{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Price</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            }).format(product.price)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Quantity</td>
                                        <td className="px-4 py-2 text-gray-200">{product.quantity}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Active</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {product.active ? (
                                                <span className="text-green-500">🟢 Active</span>
                                            ) : (
                                                <span className="text-red-500">🔴 Inactive</span>
                                            )}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Created in</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(product.created_at).toLocaleString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false,
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Updated in</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(product.updated_at).toLocaleString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false,
                                            })}

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
