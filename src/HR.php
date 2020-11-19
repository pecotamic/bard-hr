<?php

namespace Pecotamic\BardHR;

use ProseMirrorToHtml\Marks\Mark;

class HR extends Mark
{
    protected $markType = 'hr';
    protected $tagName = 'hr';

    public function tag(): ?array
    {
        return [
            ['tag' => 'hr'],
        ];
    }
}
