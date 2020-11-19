<?php

namespace Pecotamic\BardHR;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/hr.js',
    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addMark(HR::class);
    }
}
