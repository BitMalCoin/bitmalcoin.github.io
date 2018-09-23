console.log("hello")



var button = document.querySelector('.btnUpdate');
button.onclick = function(){
    document.querySelector('.btnUpdate').className = "hideText";
    document.getElementById('Text').className = 'show-Text-button';
    document.getElementById('Button').className = 'show-Text-button';
    
}