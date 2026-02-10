<?php

echo "Enter a number: ";
$number = trim(fgets(STDIN));

if (!is_numeric($number)) {
    echo "Not Valid" . PHP_EOL;
    exit;
}

if ($number % 2 === 0) {
    echo "Even" . PHP_EOL;
} else {
    echo "Odd" . PHP_EOL;
}
?>