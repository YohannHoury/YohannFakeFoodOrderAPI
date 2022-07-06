
        
        // i'm calling my API with the correct GET parameters
             fetch("https://api.quotable.io/random", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });
         
         fetch("https://api.quotable.io/quotes?author=albert-einstein", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });

          // i'm calling my API with the correct GET parameters
         fetch("https://api.quotable.io/random?author=albert-einstein", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });

    fetch("https://api.quotable.io/random?author=abraham-lincoln", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });


    fetch("https://api.quotable.io/random?author=abraham-lincoln", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });


    fetch("https://api.quotable.io/search/quotes?query=wander+lost", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
               
    });

    