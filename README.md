# jQuery Dynaprice

jQuery Dynaprice est un petit plugin jQuery qui permet de calculer automatiquement un coût depuis un \<input\>.

![alt tag](https://raw.githubusercontent.com/AkibaTech/jQuery.Dynaprice/master/example/screenshot.png)

## Cas d'utilisation

J'ai un champ "quantité" auquel je veux associé un calcul dynamique d'un prix en fonction de cette dernière.

Mon HTML est le suivant :

```html
<label for="quantite">Quantité souhaitée</label>
<input name="quantite" id="quantite" value="5" />
<p>Cela vous coûtera <span class="prix">0</span>€.</p>
```

Mon script est le suivant :

```javascript
$('input[name="quantite"]').dynaprice({
    cost: 8, // Prix unitaire voulu
    destination: $('span.price') // L'élément où j'affiche le prix
});
```

## Paramètres

### destination (jQuery)
Element HTML qui contiendra le prix dynamique calculé.
> Par défaut : $('.js-dnp-destination')

### cost (int|float)
Coût unitaire du calcul.
> Par défaut : 3

### autoInit (bool)
Le calcul doit-il se faire à l'inialisation ?
> Par défaut : true

### bind (string)
L'évenement qui détecte le changement dans l'input.
> Par défaut : 'change'

### debug (bool)
Activer ou non le debugage du plugin (dans la console).
> Par défaut : false

### round (bool)
Arrondi ou non le résultat.
> Par défaut : false

## Callbacks

### beforeUpdate (function)
Fonction à appeler avant la mise à jour. Signature : $source, $destination, oldCost
> Par défaut : null

### afterUpdate (function)
Fonction à après avant la mise à jour. Signature : $source, $destination, newCost
> Par défaut : null

## A propos

Ce script est vraiment pour le fun.

Le code est sale, pas intelligent et pas optimisé mais il rendra service à ceux qui ne jurent que par "tant que ça fonctionne !".

Réalisé par [Marceau Casals].

## Licence

WTFPL - Do What The Fuck You Want To Public License.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004

Copyright (C) 2004 Sam Hocevar sam@hocevar.net

Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

You just DO WHAT THE FUCK YOU WANT TO.

[Marceau Casals]: <https://marceau.casals.fr>