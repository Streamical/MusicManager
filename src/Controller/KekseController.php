<?php

/*
 * This file is part of the DriftPHP Project
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Feel free to edit as you please, and have fun.
 *
 * @author Marc Morera <yuhu@mmoreram.com>
 */

declare(strict_types=1);

namespace App\Controller;

use Domain\Query\GetValue;
use Drift\CommandBus\Bus\QueryBus;
use React\Promise\PromiseInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use function \React\Promise\resolve;

/**
 * Class KekseController.
 */
class KekseController
{

    /**
     * Invoke.
     *
     * @param Request $request
     *
     * @return PromiseInterface
     */
    public function __invoke(Request $request) : PromiseInterface
    {
        $count = $request
            ->attributes
            ->get('count');
        
            return resolve( new JsonResponse(
                [
                    'success' => true,
                    'count' => $count,
                ],
                200
            ));
    }
}
