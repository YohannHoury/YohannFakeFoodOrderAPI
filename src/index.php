<?php

$routing = new RoutingController();

echo $routing->route($_POST, $_GET);

?>
