export  function tradName(categoryName){
    switch (categoryName){
    case "all" : return "Toutes les histoires";
    case "famille": return "Les histoires de famille";
    case "ami" : return "Les histroires entre amis";
    case "voyage" : return "Les histoires en voyage";
    case "dossier" : return "Les histoire comprométantes"}
}

export  function titleName(nameTitle){
    switch(nameTitle){
        case 'famille': return 'En famille';
        case 'ami' : return 'Entre amis';
        case 'voyage': return 'En voyage';
        case 'dossier' : return 'Les dossiers';
        default : return 'Accueil'
    }
}