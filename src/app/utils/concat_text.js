export default function concatText(textIn, maxLength = 200) {
  if (!textIn || textIn.length < maxLength) {
    return { textOut: textIn, isConcat: false };
  }
  // on extrait les caractère de 0 à la longueur max
  let concatT = text.substr(0, maxLength);

  //on recherche le dernier espace
  let lastScpace = concatT.lastIndexOf(' ');

  //si le dernier espace existe on coupe à cet endroit sinon on coupe à la taille max

  if (lastScpace > 0) {
    concatT = concatT.substr(0, lastScpace);
  }

  //On retourne le texte modifié
  return { textOut: concatT.trim() + '✂...', isConcat: true };
}
