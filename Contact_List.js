var friends = {
    bill:{
    firstName:"Bill",
    lastName:"Gates",
    number:"(201) 555-1234",
    address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve:{
    firstName:"Steve",
    lastName:"Jobs",
    number:"(103) 333-5869",
    address:['Apple RD','Red River','NY','00321']
    },
    robby:{
    firstName:"Robby",
    lastName:"Bultten",
    number:"(032) 553-1934",
    address:['EUCENTER','Roterdam','NL','30291']
    }
};

var list = function(friends){
    for (var key in friends ){
        console.log(key);
    }
};

list();

var search =  function (name){
    for (var key in friends ){ 
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
}

search("Bill");