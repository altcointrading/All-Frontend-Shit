<!-- add page spefic body class to allow custom page specific css -->
<?php
  $app    = JFactory::getApplication();
  $menu   = $app->getMenu();
  $active = $menu->getActive();
  $class  = $active->alias . " pageid-" . $active->id;
?>
<body class="<?php echo $class; ?>">
