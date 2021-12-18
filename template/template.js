console.log("script: template.js activé");

var couleurFondSite = document.body.style.backgroundColor ="#5A5353";
console.log("couleur de fond: " + couleurFondSite);

var couleurTextSite = document.body.style.color ="white";
console.log("couleur de text: " + couleurTextSite);

var applyBandeau = document.body.appendChild(bandeau);

console.log("apply: " + "var applyBandeau " + applyBandeau);

bandeau.style.width = widthBandeau;
bandeau.style.height = heightBandeau;
bandeau.style.backgroundColor = backgroundColorBandeau;
bandeau.style.borderBottom = borderBottomBandeau;
bandeau.style.position = positionBandeau;
bandeau.style.top = topBandeau;
bandeau.style.left =leftBandeau;

console.log("bandeau afficher " + bandeau);

var applyLogo = bandeau.appendChild(logo);

console.log("apply: " + "var applyLogo " + applyLogo);

logo.style.width = widthLogo;
logo.style.height = heightLogo;
logo.style.border = borderLogo;
logo.style.borderRadius = borderRadiusLogo;
logo.style.position = positionLogo;
logo.style.top = topLogo;
logo.style.left = leftLogo;

console.log("logo afficher " + logo);