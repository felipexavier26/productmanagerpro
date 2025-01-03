<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word, 
            'description' => $this->faker->sentence(10), 
            'price' => $this->faker->randomFloat(2, 1, 1000), 
            'quantity' => $this->faker->numberBetween(1, 100),
            'active' => $this->faker->boolean, 
        ];
    }
}