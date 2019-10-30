<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title'=>rtrim($faker->sentence(rand(5,10)),"."),
        'body'=>$faker->paragraphs(rand(5,7),true),
    ];
});
