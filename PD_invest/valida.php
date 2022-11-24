<?php

if((isset($_POST['usuario'])) && (isset($_POST['senha']))){

}else{
    $_SESSION['loginErro'] = "Usuário ou senha inválida]";
    header("Location: index.php");
}

?>