<?php

$conn = new mysqli("localhost", "root", "", "test_db");

if ($conn->connect_error) {
    die("Connection failed.");
}

echo "Database connected successfully.";

$conn->close();
?>