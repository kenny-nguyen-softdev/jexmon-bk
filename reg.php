<?php
include "connect.php";
$data = json_decode(file_get_contents('php://input'), true);
$data_array = array();
// check email
if (mysqli_query($conn, "select * from users where email='" . $data[0] . "';")->num_rows > 0) {
    array_push($data_array,array("response" => false, "message" => "Email đã được sử dụng."));
    echo json_encode($data_array);
    die();
};
if (mysqli_query($conn, "select * from users where phone='" . $data[2] . "';")->num_rows > 0) {
    array_push($data_array,array("response" => false, "message" => "Phone đã được sử dụng."));
    echo json_encode($data_array);
    die();
};

// check

$sql = "insert into users(name,email,password,phone) value('user" . round(rand(1, 9999999)) . "','" . $data[0] . "','" . $data[1] . "','" . $data[2] . ".')";
array_push($data_array, array("response" => $conn->query($sql) === TRUE, "message" => "reg success"));
echo json_encode($data_array);

