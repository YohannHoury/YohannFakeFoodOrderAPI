<?php

require "./src/Controllers/RoutingController.php";

$routing = new RoutingController();

echo $routing->route($_POST, $_GET);

?>
