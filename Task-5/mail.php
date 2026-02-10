<?php

$email = "abdallah@email.com";
$result = @mail($email, "Test", "Message from PHP");

if ($result) {
    echo "Email sent successfully to $email.";
} else {
    echo "Failed to send email to $email.";
}
?>