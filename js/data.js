
var CountriesSpeedLimit = {};

function fillData()
{

	function kmph2mph(speed)
	{
		var value_has_asterisk = (speed.indexOf('*') > -1);

		speed = speed.split('*')[0];

		var values = speed.split('/');

		for (i = 0; i < values.length; ++i) {
			switch (values[i]) {
				case "-":  values[i] = "-"; break;
				case "30": values[i] = 20; break;
				case "40": values[i] = 25; break;
				case "50": values[i] = 30; break;
				case "60": values[i] = 37; break;
				case "65": values[i] = 40; break;
				case "70": values[i] = 44; break;
				case "75": values[i] = 47; break;
				case "80": values[i] = 50; break;
				case "90": values[i] = 56; break;
				case "96": values[i] = 60; break;
				case "100": values[i] = 62; break;
				case "110": values[i] = 68; break;
				default: values[i] = Math.round( values[i] / 1.609 ); break;
			}
		}

		speed = values.join('/');

		return speed + (value_has_asterisk ? "*" : "");
	}

	function getObjSpeed(city_speed, one_way_speed, dual_way_speed, expressway_speed, motorway_speed)
	{
		var speedObj = {
			city 		: [ city_speed, kmph2mph(city_speed) ],
			one_way 	: [ one_way_speed, kmph2mph(one_way_speed) ],
			dual_way 	: [ dual_way_speed, kmph2mph(dual_way_speed) ],
			expressway 	: [ expressway_speed, kmph2mph(expressway_speed) ],
			motorway 	: [ motorway_speed, kmph2mph(motorway_speed) ]
		};
		return speedObj;
	}

	function getObjLoad(is_no_trailer, is_long, min_mass, max_mass, is_adr, adr_class) 
	{
		var LoadObj = {
			is_no_trailer	: is_no_trailer,
			is_long			: is_long,
			min_mass		: min_mass,
			max_mass		: max_mass,
			is_adr			: is_adr,
			adr_class		: adr_class
		};
		return LoadObj;
	}

	function getObjLoadIsNoTrailerOnly() {
		return { is_no_trailer: true, is_long: false, is_adr: false };
	}

	function getObjLoadIsLongOnly() {
		return { is_no_trailer: false, is_long: true, is_adr: false };
	}

	function getObjLoadIsMassOnly(min_mass, max_mass) {
		return { min_mass: min_mass, max_mass: max_mass };
	}

	function getObjLoadIsADROnly(adr_class) {
		return { is_no_trailer: false, is_adr: true, adr_class: adr_class };
	}

	function getObjLoadIsNormalTrailerOnly(is_long) {
		return { is_no_trailer: false, is_long: is_long, is_adr: false };
	}

	function addCountry(name, short_code, in_ets2 ) {
		CountriesSpeedLimit[name] = { code: short_code, ets2: in_ets2, param: [] };
	}

	function addSpeed(name, obj_speed, obj_load ) {
		CountriesSpeedLimit[name].param.push( { speed: obj_speed, load: obj_load } );
	}

	addCountry("Albania", "al", false);
	addSpeed("Albania", getObjSpeed("40", "60/90", "70/110", "70/110", "80/110"));

	addCountry("Andorra", "ad", false);
	addSpeed("Andorra", getObjSpeed("50", "90", "-", "-", "-"));

	addCountry("Armenia", "am", false);
	addSpeed("Armenia", getObjSpeed("60", "90", "90", "90", "90"));

	addCountry("Austria", "at", true);
	addSpeed("Austria", getObjSpeed("50", "70", "70", "80", "80"), getObjLoad(undefined, false));
	addSpeed("Austria", getObjSpeed("50", "50", "50", "65", "65"), getObjLoadIsLongOnly());

	addCountry("Azerbaijan", "az", false);
	addSpeed("Azerbaijan", getObjSpeed("60", "70", "70", "90", "90"));

	addCountry("Belarus", "by", false);
	addSpeed("Belarus", getObjSpeed("60", "70", "70", "90", "90"));

	addCountry("Belgium", "be", true);
	addSpeed("Belgium", getObjSpeed("50", "60", "90", "90", "90"));
	addSpeed("Belgium", getObjSpeed("30", "40", "75", "75", "75"), getObjLoad(undefined, undefined, 7.5, NaN, true, [ "1" ]));

	addCountry("Bulgaria", "bg", false);
	addSpeed("Bulgaria", getObjSpeed("50", "70", "90", "90", "90"), getObjLoadIsNormalTrailerOnly());
	addSpeed("Bulgaria", getObjSpeed("40", "50", "90", "90", "90"), getObjLoadIsADROnly());
	addSpeed("Bulgaria", getObjSpeed("50", "80", "100", "100", "100"), getObjLoadIsNoTrailerOnly());

	addCountry("Bosnia and Herzegovina", "ba", false);
	addSpeed("Bosnia and Herzegovina", getObjSpeed("50", "80", "80", "100", "100"));

	addCountry("Croatia", "hr", false);
	addSpeed("Croatia", getObjSpeed("50", "80", "80", "80", "80"), getObjLoad(undefined, undefined, 3.5, 7.5, false));
	addSpeed("Croatia", getObjSpeed("50", "70", "70", "70", "70"), getObjLoad(undefined, undefined, 7.5, NaN, false));
	addSpeed("Croatia", getObjSpeed("50", "64", "64", "64", "64"), getObjLoad(undefined, undefined, 3.5, 7.5, true));
	addSpeed("Croatia", getObjSpeed("50", "56", "56", "56", "56"), getObjLoad(undefined, undefined, 7.5, NaN, true));

	addCountry("Cyprus", "cy", false);
	addSpeed("Cyprus", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("Czech Republic", "cz", true);
	addSpeed("Czech Republic", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("Denmark", "dk", false);
	addSpeed("Denmark", getObjSpeed("50", "70", "70", "80", "80"));

	addCountry("Estonia", "ee", false);
	addSpeed("Estonia", getObjSpeed("50", "90", "90", "90", "90"));

	addCountry("Finland", "fi", false);
	addSpeed("Finland", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("France", "fr", true);
	addSpeed("France", getObjSpeed("50", "80", "100", "100", "110"), getObjLoad(undefined, undefined, 3.5, 12.0, false));
	addSpeed("France", getObjSpeed("50", "60", "80", "80", "90"), getObjLoad(undefined, undefined, 12.0, NaN, false));
	addSpeed("France", getObjSpeed("50", "80", "100", "100", "110"), getObjLoad(undefined, undefined, 3.5, 12.0, true));
	addSpeed("France", getObjSpeed("50", "60", "60/70*", "60/70*", "80"), getObjLoad(undefined, undefined, 12.0, NaN, true));

	addCountry("Georgia", "ge", false);
	addSpeed("Georgia", getObjSpeed("60", "70", "70", "90", "90"));

	addCountry("Germany", "de", true);
	addSpeed("Germany", getObjSpeed("50", "60", "60", "80", "80"), getObjLoad(false, undefined, 3.5, 7.5));
	addSpeed("Germany", getObjSpeed("50", "60", "60", "80", "80"), getObjLoad(false, undefined, 7.5, NaN));
	addSpeed("Germany", getObjSpeed("50", "80", "80", "80", "80"), getObjLoad(true, undefined, 3.5, 7.5));
	addSpeed("Germany", getObjSpeed("50", "60", "60", "80", "80"), getObjLoad(true, undefined, 7.5, NaN));

	addCountry("Gibraltar", "gi", false);
	addSpeed("Gibraltar", getObjSpeed("35", "35", "-", "-", "-"));

	addCountry("Greece", "gr", false);
	addSpeed("Greece", getObjSpeed("50", "70", "70", "70", "70"), getObjLoadIsNormalTrailerOnly());
	addSpeed("Greece", getObjSpeed("40", "50", "50", "50", "50"), getObjLoadIsADROnly());
	addSpeed("Greece", getObjSpeed("50", "80", "90", "90", "90"), getObjLoadIsNoTrailerOnly());

	addCountry("Hungary", "hu", true);
	addSpeed("Hungary", getObjSpeed("50", "70", "70", "80", "80"));

	addCountry("Iceland", "is", false);
	addSpeed("Iceland", getObjSpeed("50", "80", "80", "80", "-"));

	addCountry("Ireland", "ie", false);
	addSpeed("Ireland", getObjSpeed("50", "80", "80", "80*", "80*"));

	addCountry("Italy", "it", true);
	addSpeed("Italy", getObjSpeed("50", "80", "80", "100", "100"), getObjLoad(undefined, undefined, 3.5, 12.0, false));
	addSpeed("Italy", getObjSpeed("50", "70", "70", "80", "80"), getObjLoad(undefined, undefined, 12.0, NaN, false));
	addSpeed("Italy", getObjSpeed("30", "50", "50", "50", "80"), getObjLoadIsADROnly());

	addCountry("Latvia", "lv", false);
	addSpeed("Latvia", getObjSpeed("50", "80", "80", "80", "80"), getObjLoad(false));
	addSpeed("Latvia", getObjSpeed("50", "90", "90", "90", "90"), getObjLoad(true, undefined, 3.5, 7.5));
	addSpeed("Latvia", getObjSpeed("50", "80", "80", "80", "80"), getObjLoad(true, undefined, 7.5, NaN));

	addCountry("Liechtenstein", "li", false);
	addSpeed("Liechtenstein", getObjSpeed("50", "80", "80", "80", "-"));

	addCountry("Lithuania", "lt", false);
	addSpeed("Lithuania", getObjSpeed("50", "70", "80", "80", "90"));

	addCountry("Luxembourg", "lu", true);
	addSpeed("Luxembourg", getObjSpeed("50", "75", "75", "90*", "90*"), getObjLoad(undefined, undefined, undefined, undefined, false));
	addSpeed("Luxembourg", getObjSpeed("40", "60", "60", "60", "60"), getObjLoadIsADROnly());

	addCountry("Macedonia", "mk", false);
	addSpeed("Macedonia", getObjSpeed("50", "80", "80", "80", "80"), getObjLoadIsMassOnly(3.5, 7.5));
	addSpeed("Macedonia", getObjSpeed("50", "70", "70", "70", "70"), getObjLoadIsMassOnly(7.5, NaN));

	addCountry("Malta", "mt", false);
	addSpeed("Malta", getObjSpeed("40", "60", "60", "60", "60"));

	addCountry("Moldova", "md", false);
	addSpeed("Moldova", getObjSpeed("50", "70", "70", "90", "90"));

	addCountry("Monaco", "mc", false);
	addSpeed("Monaco", getObjSpeed("30", "30", "-", "-", "-"));

	addCountry("Montenegro", "me", false);
	addSpeed("Montenegro", getObjSpeed("50", "80", "80", "80", "-"));

	addCountry("Netherlands", "nl", true);
	addSpeed("Netherlands", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("Norway", "no", false);
	addSpeed("Norway", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("Poland", "pl", true);
	addSpeed("Poland", getObjSpeed("50", "70", "80", "80", "80"));

	addCountry("Portugal", "pt", false);
	addSpeed("Portugal", getObjSpeed("50", "80", "80", "90", "90"));

	addCountry("Romania", "ro", false);
	addSpeed("Romania", getObjSpeed("50", "70", "80", "80", "100"), getObjLoad(false));
	addSpeed("Romania", getObjSpeed("50", "80", "90", "90", "110"), getObjLoadIsNoTrailerOnly());

	addCountry("Russia", "ru", false);
	addSpeed("Russia", getObjSpeed("60", "70", "70", "90", "90"));

	addCountry("San Marino", "sm", false);
	addSpeed("San Marino", getObjSpeed("-", "-", "-", "-", "-"));

	addCountry("Serbia", "rs", false);
	addSpeed("Serbia", getObjSpeed("50", "80", "80", "100", "100"), getObjLoadIsMassOnly(3.5, 7.5));
	addSpeed("Serbia", getObjSpeed("50", "70", "70", "90", "90"), getObjLoadIsMassOnly(7.5, NaN));

	addCountry("Slovakia", "sk", true);
	addSpeed("Slovakia", getObjSpeed("60", "80", "80", "80", "90"));

	addCountry("Slovenia", "si", false);
	addSpeed("Slovenia", getObjSpeed("50", "80", "80", "80", "80"), getObjLoad(undefined, undefined, 3.5, 7.5, false));
	addSpeed("Slovenia", getObjSpeed("50", "70", "70", "70", "70"), getObjLoad(undefined, undefined, 7.5, NaN, false));
	addSpeed("Slovenia", getObjSpeed("50", "70", "70", "70", "70"), getObjLoadIsADROnly());

	addCountry("Spain", "es", false);
	addSpeed("Spain", getObjSpeed("50", "70", "80", "80", "90"), getObjLoad(undefined, undefined, undefined, undefined, false));
	addSpeed("Spain", getObjSpeed("40", "60", "70", "70", "80"), getObjLoadIsADROnly());

	addCountry("Sweden", "se", false);
	addSpeed("Sweden", getObjSpeed("50", "70", "70", "80", "80"));

	addCountry("Switzerland", "ch", true);
	addSpeed("Switzerland", getObjSpeed("50", "80", "80", "80", "80"));

	addCountry("Turkey", "tr", false);
	addSpeed("Turkey", getObjSpeed("40", "40", "70", "70", "80*"), getObjLoad(false, undefined, undefined, undefined, false));
	addSpeed("Turkey", getObjSpeed("30", "30", "50", "50", "60*"), getObjLoadIsADROnly());
	addSpeed("Turkey", getObjSpeed("50", "50", "80", "80", "90*"), getObjLoadIsNoTrailerOnly());

	addCountry("Ukraine", "ua", false);
	addSpeed("Ukraine", getObjSpeed("60", "70", "70", "90", "90"));

	addCountry("United Kingdom", "gb", true);
	addSpeed("United Kingdom", getObjSpeed("48", "64", "80", "80", "96"));

}

function fillTable()
{
	function checkLoadParam(load_param)
	{
		var suffix = "";

		var has_load_param = (load_param !== undefined);

		if (has_load_param) {

			suffix += " (";

			if (load_param.is_no_trailer === true)
				suffix += "E,";

			if (load_param.is_long === true)
				suffix += "L,";

			if (load_param.is_adr === true) {
				if (load_param.adr_class !== undefined)
					suffix += "D" + load_param.adr_class + ",";
				else
					suffix += "D,";
			}

			if ((load_param.min_mass !== undefined) && (load_param.min_mass !== 3.5))
				suffix += ">" + load_param.min_mass + ",";

			if (0 === suffix.localeCompare(" ("))
				suffix = "";
			else
				suffix = suffix.slice(0, -1) + ")";
		}

		return suffix;
	}


	var countryETS2Checked = getCountriesETS2OnlyChecked();
	var filterByCargo = getFilterByCargoChecked();
	var speedIndex = (0 === getSpeedDimension().localeCompare("kmph")) ? 0 : 1;

	var cargo_type = getCargoType();

	var is_no_trailer 	= (0 === cargo_type.localeCompare("empty"));
	var is_normal 		= (0 === cargo_type.localeCompare("normal"));
	var is_long 		= (0 === cargo_type.localeCompare("long"));
	var is_adr			= (0 === cargo_type.localeCompare("adr"));
	var adr_class 		= undefined;

	var min_mass 		= undefined;
	var max_mass 		= undefined;

	if (is_adr) {
		adr_class = getADRClass();
	}

	switch (getMass()) {
		case "1": min_mass = 3.5; max_mass = 7.5; break;
		case "2": min_mass = 7.5; max_mass = 12.0; break;
		case "3": min_mass = 12.0; max_mass = NaN; break;
	}

	$.each(CountriesSpeedLimit, function(key, value) {

		// skip other if use ets2 only contries
		if (countryETS2Checked && !value.ets2)
			return;

		var len = value.param.length;

		function addRow(value, index)
		{
			var caption = key + checkLoadParam(value.param[index].load);

			$('table.list')
				.append($('<tr>')
					.append($('<td>')
						.text(caption)
						.prepend($('<img>')
							.attr('src', 'img/blank.gif')
							.addClass('flag flag-' + value.code)
							.attr('alt', caption)
						)
						.addClass('country')
					)
					.append($('<td>').addClass('speed').text(value.param[index].speed.city[speedIndex]))
					.append($('<td>').addClass('speed').text(value.param[index].speed.one_way[speedIndex]))
					.append($('<td>').addClass('speed').text(value.param[index].speed.dual_way[speedIndex]))
					.append($('<td>').addClass('speed').text(value.param[index].speed.expressway[speedIndex]))
					.append($('<td>').addClass('speed').text(value.param[index].speed.motorway[speedIndex]))
			);
		}

		if (filterByCargo) {

			// if only 1 speed limit for country
			if (len === 1) {

				addRow(value, 0);

			} else {

				// Belgium specific
				if (0 === value.code.localeCompare("be")) {
					if ((min_mass >= 7.5)
						&& (is_adr)
						&& (0 === adr_class.localeCompare("1")))
					{
						addRow(value, 1);
					} else {
						addRow(value, 0);
					}
					return;
				}

				var matches = [];

				for (i = 0; i < len; ++i) {

					var load = value.param[i].load;

					if (   ((undefined === load.is_no_trailer) ||
							(is_no_trailer === load.is_no_trailer))
						&& ((undefined === load.is_long) || 
							(is_long === load.is_long))
						&& ((undefined === load.is_adr) || 
							(is_adr === load.is_adr)))
					{
						if ((adr_class !== undefined) 
							&& (load.adr_class !== undefined))
						{
							if (-1 !== $.inArray( adr_class, load.adr_class )) {
								matches.push(i);
							}
						} else {
							matches.push(i);
						}
					}

				}

				if (matches.length === 1) {
					addRow(value, matches[0]);
				// get by mass
				} else if (matches.length === 2) {

					for (i = 0; i < matches.length; ++i)
					{
						var load = value.param[matches[i]].load;

						if ((min_mass.toFixed(1) === load.min_mass.toFixed(1)) ||
							(max_mass.toFixed(1) === load.max_mass.toFixed(1))) {
							addRow(value, matches[i]);
							break;
						}
					}
				} else {
					throw Exception;
				}
			}
		} else {
			for (i = 0; i < len; ++i) {
				addRow(value, i);
			}
		}
	});
}

function getCountriesETS2OnlyChecked() {
	return $( 'input[name=ets2_only]' ).prop('checked');
}

function getSpeedDimension() {
	return $('input[name=speed_dimension]:checked').val();
}

function getFilterByCargoChecked() {
	return $( 'input[name=filter_cargo]' ).prop('checked');
}

function getCargoType() {
	return $('input[name=cargo]:checked').val();
}

function getADRClass() {
	return $('input[name=adr_class]:checked').val();
}

function getMass() {
	return $('input[name=mass]:checked').val();
}

function updateCountries()
{
	var countryETS2Checked = getCountriesETS2OnlyChecked();
	var filterByCargo = getFilterByCargoChecked();

	$("td.country").each(function() {
		$(this).parent("tr").remove();
	});

	fillTable();

	$("div.note").each(function() {
		if (countryETS2Checked && !$(this).hasClass("ets2")) {
			$(this).hide();
		} else {
			$(this).show();
		}
	});

	if (filterByCargo) {
		$("#adr_class > div").each(function() {
			if (countryETS2Checked && !$(this).hasClass("ets2")) {
				$(this).hide();
			} else {
				$(this).show();
				$(this).children().each(function() {
					if (countryETS2Checked && !$(this).hasClass("ets2")) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			}
		});
	}
}

function updateFilterCargo()
{
	var filterByCargo = getFilterByCargoChecked();

	if (filterByCargo) {
		$("#cargo").show();
		$("#mass").show();
		updateCargo();
	} else {
		$("#cargo").hide();
		$("#mass").hide();
		$("#adr_class").hide();
	}
	updateCountries();
}

function updateCargo()
{
	var radio_cargo = getCargoType();

	if (radio_cargo === "adr") {
		$("#adr_class").show();
	} else {
		$("#adr_class").hide();
	}
}

$(function() {

	fillData();
	updateFilterCargo();

	$( "input[name=ets2_only], input[name=speed_dimension]" ).on( "click", function() {
		updateCountries();
	});

	$( "input[name=filter_cargo], input[name=cargo], input[name=adr_class], input[name=mass]" ).on( "click", function() {
		updateFilterCargo();
	});
});