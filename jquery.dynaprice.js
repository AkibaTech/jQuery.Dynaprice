/*
 *
 * @package jQuery Dynaprice
 * @author 	Marceau Casals <marceau@casals.fr>
 * @doc 	https://github.com/AkibaTech/jQuery.Dynaprice
 * @url 	https://marceau.casals.fr
 * @version 0.0.1
 *
 */
(function($) {

	$.fn.dynaprice = function( options ) {

		// Options par défaut
		var settings = $.extend({
			destination : $('.js-dnp-destination'),
			bind : 'change',
			autoInit : true,
			debug : false,
			allowFloat : true,
			cost : 3,
			beforeUpdate : null,
			afterUpdate : null,
		}, options);

		var that = this;

		// Méthode de debug
		var debug = function(message) {
			if (settings.debug) {
				console.log('jQuery.Dynaprice : ' + message);
			}
		};

		// La source est valide ?
		if (false == (that instanceof jQuery)) {
			debug('Invalid source.');
			return;
		}

		// La source est un input ?
		if (false == (that.is('input'))) {
			debug('Source need to be an Input.');
			return;
		}

		// La destination est valide ?
		if (false == (settings.destination instanceof jQuery)) {
			debug('Destination need to be a jQuery object.');
			return;
		}

		// Il y'a un attribut "data-cost" ?
		if (that.data('cost')) {
			settings.cost = parseInt(that.data('cost'));
		}

		/*
		 * Calcule le montant
		 */
		var calcCost = function(amount) {
			return parseCost(amount) * parseCost(settings.cost);
		};

		/*
		 * Retourne la quantité
		 */
		var getQuantity = function() {
			return that.val();
		};

		/*
		 * Retourne le montant calculé actuel
		 */
		var getDestinationAmount = function() {
			return parseCost(settings.destination.text());
		}

		/*
		 * Parse le coût
		 */
		var parseCost = function(cost) {
			if (settings.allowFloat) {
				return parseFloat(cost);
			} else {
				return parseInt(cost);
			}
		}

		/*
		 * Applique l'opération de calcul
		 */
		var apply = function() {
			if (settings.beforeUpdate instanceof Function) {
				settings.beforeUpdate($(that), settings.destination, getDestinationAmount());
			}

			settings.destination.text(calcCost(getQuantity()));

			if (settings.afterUpdate instanceof Function) {
				settings.afterUpdate($(that), settings.destination, getDestinationAmount());
			}
		}

		// Capture l'event
		this.on(settings.bind, function(e) {
			e.preventDefault();

			apply();

			return false;
		});

		// Doit-on initialiser ?
		if (settings.autoInit) {
			apply();
		}

		// Retourne la fonction
		return that;

	};

}(jQuery));