<?php

class CustomerController
{
    private CustomerManager $cm;

    public function __construct()
    {
        $this->cm = new CustomerManager();

        $customer1 = new Customer("Martin", "Dupont", "martin.dupont@example.com");
        $this->cm->createCustomer($customer1);

        $customer2 = new Customer("Céline", "Scoarnec", "cayline@example.com");
        $this->cm->createCustomer($customer2);

        $customer3 = new Customer("Charlie", "Roliot", "chariot@example.com");
        $this->cm->createCustomer($customer3);
    }

    public function createCustomer(array $post) : string
    {
        if(isset($post["data"]))
        {
            $data = json_decode($post["data"]);

            if($data["firstName"] && $data["lastName"] && $data["email"])
            {
                $customer = new Customer($data["firstName"], $data["lastName"], $data["email"]);
                $this->cm->createCustomer($customer);

                return json_encode($customer);
            }
        }
    }

    public function route(array $post, array $get) : string
    {
        if ($get["route"] === "all-customers")
        {
            return json_encode($this->cm->getAllCustomers());
        }
        else if($get["route"] === "customer")
        {
            if (isset($get["id"]))
            {
                $id = (int) $get["id"];
                return json_encode($this->cm->getCustomerById($id));
            }
        }
        else
        {
            return $this->createCustomer($post);
        }
    }
}