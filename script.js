async function loadConfigData(){
    const response=await fetch("./pokemon.json");
    const data=await response.json();
    console.log(data);
}