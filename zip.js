function checkValidZip(){
    var entry = document.getElementById("zip").value;
    var userZip = parseInt(entry);

    function isThisActuallyANumberDontLie( data ){
        return ( typeof data === "number" && !isNaN(data) );
    }

    try{
        if(isThisActuallyANumberDontLie( userZip ) ){
            if(userZip.toFixed(0).length === 5) {
                console.log("Yes it is a zip code of length 5");
                return true;
            } else {
                throw new Error("Nope!");
            }
        }
        else{
            throw new Error("Nope!");
        }
    }
    catch(e){
        if(e.message === "Nope!"){
            alert("Please enter a valid zip, dude. (which isn't really very robust, but oh well)");
            return false;
        }
        // other error responses go here...
    }

}