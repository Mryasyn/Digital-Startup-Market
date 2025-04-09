function annul() {
    code = document.getElementById("code");
    mdp = document.getElementById("mdp");
    nmdp = document.getElementById("nmdp");
    cmdp = document.getElementById("cmdp");

    if (code.value !== "" || mdp.value !== "" || nmdp.value !== "" || cmdp.value !== "") {
        alert("Vider le contenu !");
        code.value = "";
        mdp.value = "";
        nmdp.value = "";
        cmdp.value = "";
    } else {
        alert("Remplir les données !");
    }

    return false;
}

function estLettre(ch){
    return /[a-zA-Z]/.test(ch);
}

function estChiffre(ch){
    return /[0-9]/.test(ch);
}

function complexite(){
    nmdp = document.getElementById("nmdp").value;
    span = document.getElementById("span");
    
    if (nmdp == ""){
        span.innerHTML = "";}

    else if (chiffre(nmdp) && lettre(nmdp)){
        span.innerHTML = "complexite forte";
        span.style.color = "green";
    }
    else{
        span.innerHTML = "complexite faible";
        span.style.color = "red";
    }
}

function verif1(){
    code = document.getElementById("code").value;
    mdp = document.getElementById("mdp").value;
    nmdp = document.getElementById("nmdp").value;
    cmdp = document.getElementById("cmdp").value;
    valide = false;

    if(code.length>=3){
        deuxch = estLettre(code[0]) && estLettre(code[1]);
        restech = true;
        for (i = 2 ; i<code.length ; i++){
            if (!estChiffre(code[i])){
                restech = false;
            }
        }
        valide = deuxch && restech;
    }

    if (!valide){
        alert("Il doit commencer par deux lettres et se terminer par des chiffres");
        return;
    }

    else if (mdp.length !== 8){
        alert("compose de 8 caracteres")
        return;
    }
    
    else if (nmdp.length !== 8 || nmdp == mdp){
        alert("compose de 8 caracteres et deff a mot de passe actuel")
        return;
    }
    if (cmdp !== nmdp){
        alert("Confirmation du mot de passe doit être identique au nouveau")
        return;
    }
    document.querySelector("form").submit();
}
function plus(n){
    n1 = document.getElementById("n1");
    if (parseInt(n.value) < 9){
        n.value = parseInt(n.value) + 1;
    }
    return false;
}

function moin(n){
    n2 = document.getElementById("n2");
    if (parseInt(n.value) > 0){
        n.value = parseInt(n.value) - 1;
    }
    return false;
}

function verif2(){
    mdp = document.getElementById("mdp").value;
    code = document.getElementById("code").value;
    list1 = document.getElementById("list1").selectedIndex;
    list2 = document.getElementById("list2").selectedIndex;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    valide = false;
    if(code.length>=3){
        deuxch = estLettre(code[0]) && estLettre(code[1]);
        restech = true;
        for (i = 2 ; i<code.length ; i++){
            if (!estChiffre(code[i])){
                restech = false;
            }
        }
        valide = deuxch && restech;
    }

    if (!valide){
        alert("Il doit commencer par deux lettres et se terminer par des chiffres");
        return;
    } 

    else if(mdp.length !== 8){
        alert("compose de 8 caracteres")
        return;
    }

    if (list1 !== 0 && parseInt(n1) == 0){
        alert("Entrez la quantité souhaitée");
        return;
    }
    else if (list1 == 0 && parseInt(n1) !== 0){
        alert("Vous ne pouvez pas choisir une quantité si vous n'avez pas choisi de produit");
        return;
    }

    if (list2 !== 0 && parseInt(n2) == 0){
        alert("Entrez la quantité souhaitée");
        return;
    }
    else if (list2 == 0 && parseInt(n2) !== 0){
        alert("Vous ne pouvez pas choisir une quantité si vous n'avez pas choisi de produit")
        return;
    }
    document.querySelector("form").submit();
}

function annul2() {
    code = document.getElementById("code");
    mdp = document.getElementById("mdp");
    list1 = document.getElementById("list1");
    list2 = document.getElementById("list2");
    n1 = document.getElementById("n1");
    n2 = document.getElementById("n2");


    if (code.value !== "" || mdp.value !== "" || list1.selectedIndex !== 0 || list2.selectedIndex !== 0 ||
         parseInt(n1).value !== 0 || parseInt(n2).value !== 0) {
        alert("Vider le contenu !");
        code.value = "";
        mdp.value = "";
        n1.value = "0";
        n2.value = "0";
        list1.selectedIndex = 0;
        list2.selectedIndex = 0;
    } else {
        alert("Remplir les données !");
    }

    return false;
}