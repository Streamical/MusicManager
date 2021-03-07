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
use React\Promise\FulfilledPromise;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use function \React\Promise\resolve;

/**
 * Class TestController.
 */
class TestController
{
    /**
     * @var QueryBus
     */
    private $queryBus;

    /**
     * TestController constructor.
     *
     * @param QueryBus $queryBus
     */
    public function __construct(QueryBus $queryBus)
    {
        $this->queryBus = $queryBus;
    }

    /**
     * Invoke.
     *
     * @param Request $request
     *
     * @return PromiseInterface
     */
    public function __invoke(Request $request) 
    {

        return resolve( new JsonResponse(
                        [
                            'success' => true,
                            'value' => 'TEST',
                        ],
                        200
                    ));
    }
}
