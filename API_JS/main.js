
    document.addEventListener("DOMContentLoaded", function(event) { 
    var allCustomersBtn = document.getElementById("load-all-customers-btn");
    var tableBody = document.getElementById("all-customers-body");
    
    // when my button is clicked
    allCustomersBtn.addEventListener("click", function(){
        
        // i'm calling my API with the correct GET parameters
        fetch("https://yohannhoury.sites.3wa.io/DEVELOPPEMENT/PHP/PHP-API/YohannFakeFoodOrderAPI/index.php?route=all-customers", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
           });
                
     
                // for each customer the API sent back
               let customers = customers.forEach(function(item){
                    
                    // i create a <tr>
                    let row = document.createElement("tr");
                    let id = addTd(item.id);
                    let firstName = addTd(item.firstName);
                    let lastName = addTd(item.lastName);
                    let email = addTd(item.email);
                    
                    // i add the appropriate <td>s 
                    row.appendChild(id);
                    row.appendChild(firstName);
                    row.appendChild(lastName);
                    row.appendChild(email);
                    
                    // and I append it to my table
                    $tableBody.appendChild(row);
                });
            });
    