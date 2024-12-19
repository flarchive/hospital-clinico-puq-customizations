<?php


use Flarum\Extend;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
];
