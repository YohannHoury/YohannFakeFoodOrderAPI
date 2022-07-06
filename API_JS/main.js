
// easily create a <td> from a value
function addTd($value)
{
    $td = document.createElement("td");
    $val = document.createTextNode($value);
    $td.appendChild($val);
    
    return $td;
}
// when my DOM is ready
document.addEventListener("DOMContentLoaded", function(event) { 
    var $allCustomersBtn = document.getElementById("load-all-customers-btn");
    var $tableBody = document.getElementById("all-customers-body")
    // when my button is clicked
    $allCustomersBtn.addEventListener("click", function(){
        
        // i'm calling my API with the correct GET parameters
         fetch("https://yohannhoury.sites.3wa.io/DEVELOPPEMENT/PHP/PHP-API/YohannFakeFoodOrderAPI/index.php?route=all-customers", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                
                $customers = responseJson; // this is not necessary but makes its easier to read
                
                // for each customer the API sent back
                $customers.forEach(function($item){
                    
                    // i create a <tr>
                    $row = document.createElement("tr");
                    $id = addTd($item.id);
                    $firstName = addTd($item.firstName);
                    $lastName = addTd($item.lastName);
                    $email = addTd($item.email);
                    
                    // i add the appropriate <td>s 
                    $row.appendChild($id);
                    $row.appendChild($firstName);
                    $row.appendChild($lastName);
                    $row.appendChild($email);
                    
                    // and I append it to my table
                    $tableBody.appendChild($row);
                });
            })
            .catch((error) => { console.log(error); });
    });

    
});
function getVal() {
  $login = document.querySelector('input').value;
  console.log($login);
}

$form = new FormData(document.getElementById('login-form'));
fetch("https://yohannhoury.sites.3wa.io/DEVELOPPEMENT/PHP/PHP-API/YohannFakeFoodOrderAPI/index.php?route=create-customer", {
  method: "POST",
  body: $form
});




    