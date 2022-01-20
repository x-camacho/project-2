# project-2
Mech Keyboard Builder


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link type="text/css" rel='stylesheet' href='../css/style.css' />
</head>
<body>
<!-- Partials nav bar css -->
<style>
  /* Partials nav bar */
#nav-items {
  list-style: none;
  padding: 10;
  overflow: hidden;
  position: relative;
  background-color: #59821e;
}

.nav-lists {
  float: left;
  margin: 10px;
  padding: 10px;
  font-size: 25px;
}

.nav-lists, .nav-links {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}
.nav-lists .nav-links:hover {
  background-color: #b4be60;
}
</style>
<div>
    <nav>
        <ul id="nav-items">
            <li class="nav-lists"><a class="nav-links" href="/keyboards">Keyboard List</a></li>
            <li class="nav-lists"><a class="nav-links" href="/keyboards/new">Build</a></li>
        </ul>
    </nav>
</div>
  <main>


<!DOCTYPE html>
<html>

<head>
  <title>Keyboardy!</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Baloo&display=swap" rel="stylesheet">
  <!-- Materialize Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Materialize CSS Framework -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="/css/style.css" />
  <!-- JavaScript for Materialize -->
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <!-- <script> $(document).ready(function(){$('select').formSelect();});</script> -->
  <script> document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems, options);
  });</script>
</head>