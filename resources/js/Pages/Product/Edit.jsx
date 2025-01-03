import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/button/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ProductEdit({ auth, product, errors, flash }) {
    const { data, setData, put, processing, reset } = useForm({
        id: product?.id || '',
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        quantity: product?.quantity || '',
        active: product?.active ? 1 : 0,
    });

    useEffect(() => {
        if (product) {
            setData({
                id: product.id || '',
                name: product.name || '',
                description: product.description || '',
                price: product.price || '',
                quantity: product.quantity || '',
                active: product.active ? 1 : 0,
            });
        }
    }, [product]);

    console.log(product);


    const submit = (e) => {
        e.preventDefault();
        put(route('products.update', { product: data.id }), {
            onSuccess: () => reset(),
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Product</h2>}>
            <Head title="Edit Product" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200"></h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('products.index')}>
                                    <PrimaryButton>Lists</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                        <form onSubmit={submit} className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 space-y-4">

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Product Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Enter the product name'
                                        required
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Product Description</label>
                                    <textarea
                                        type="text"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Enter the product description'
                                    />
                                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Price</label>
                                    <input
                                        type="number"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Enter the price of the product'
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Quantity</label>
                                    <input
                                        type="number"
                                        value={data.quantity}
                                        onChange={e => setData('quantity', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Enter the quantity of the product'
                                    />
                                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Status</label>
                                    <select
                                        value={data.active} 
                                        onChange={(e) => setData('active', parseInt(e.target.value, 10))}
                                        className="mt-1 block w-full rounded-md"
                                    >
                                        <option value="">Select Status</option>
                                        <option value={1}>Active</option>
                                        <option value={0}>Inactive</option>
                                    </select>
                                    {errors.active && <p className="text-red-500 text-sm">{errors.active}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                    disabled={processing}
                                >
                                    {processing ? 'Saving...' : 'Edit Producto'}
                                </button>
                            </div>

                            {flash?.success && (
                                <div className="bg-green-500 text-white p-4 rounded-md mt-4">
                                    <p>{flash.success}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
