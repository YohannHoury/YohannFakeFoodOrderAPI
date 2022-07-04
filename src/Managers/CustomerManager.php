<?php

class CustomerManager
{
    private array $customers;

    public function __construct()
    {
        $this->customers = [];
    }

    public function setCustomers(array $customers) :void
    {
        $this->customers = $customers;
    }

    public function getAllCustomers() : array
    {
        return $this->customers;
    }

    public function createCustomer(Customer $customer) : ?Customer
    {
        $customer->setId(count($this->customers) + 1);
        $this->customers[] = $customer;

        return $customer;
    }

    public function getCustomerById(int $id) : ?Customer
    {
        foreach($this->customers as $customer)
        {
            if($customer->getId() === $id)
            {
                return $customer;
            }
        }

        return null;
    }
}