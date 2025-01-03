<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Produto 1',
                'description' => 'Descrição do Produto 1',
                'price' => 10.50,
                'quantity' => 100,
                'active' => true,
            ],
            [
                'name' => 'Produto 2',
                'description' => 'Descrição do Produto 2',
                'price' => 20.99,
                'quantity' => 50,
                'active' => false,
            ],
            [
                'name' => 'Produto 3',
                'description' => 'Descrição do Produto 3',
                'price' => 15.75,
                'quantity' => 200,
                'active' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
