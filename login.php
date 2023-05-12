<?php
include "connect.php";
$data = json_decode(file_get_contents('php://input'), true);
$sql = "select * from users where email='" . $data[0] . "' and password='" . $data[1] . "' limit 1;";
$result = $conn->query($sql);
$data_array = array();
while ($row = $result->fetch_assoc()) {
    array_push($data_array, new User($row["id"], $row["name"], $row["email"], $row["password"], $row["phone"]));
}
echo json_encode($data_array);

class User
{
    public $id;
    public $name;
    public $email;
    public $password;
    public $phone;

    /**
     * @param $name
     * @param $email
     * @param $password
     * @param $phone
     */
    public function __construct($id, $name, $email, $password, $phone)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->phone = $phone;
    }


}