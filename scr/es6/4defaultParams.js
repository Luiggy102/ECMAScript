// forma antigua 
function newUser(name, age, country) {
    var name = name || "Default username";
    var age = age || 10;
    var country = country || "US";
    console.log(name, age, country);
}

newUser();

// forma nueva
function newAdmin(name = 'Joe', age = 18, country = 'US') {
   console.log(name, age, country); 
}

newAdmin();
newAdmin('Charles', 20, 'UK')
