<?php

class RoutingController
{

    public function route(array $post, array $get) : string
    {
        if(isset($get["route"]))
        {
            if($get["route"] === "all-customers" || $get["route"] === "customer" || $get["route"] === "create-customer")
            {
                $controller = new CustomerController();

                $controller->route($post, $get);
            }
        }



    }
}