module.exports = {
	getValueType: function getValueType(value) {
		var type = module.exports.type;

		for (var name in type) {
			if (type[name].test(value)) return name;
		}

		return 'keyword';
	},
	matchValueType: function matchValueType(value) {
		var index = -1;
		var types = Array.prototype.slice.call(arguments, 1);
		var test = module.exports.getValueType;

		while (type = types[++index]) {
			if (test(value) === type) {
				return true;
			}
		}

		return false;
	},
	type: {
		'border-style-keyword': /^(dashed|dotted|double|groove|inset|outset|ridge|solid)$/,
		'calc-function': /^calc\(.*\)$/,
		'color-hex': /^#([0-9A-f]{3}|[0-9A-f]{6})$/,
		'color-hsl-function': /^hsla?\(.+\)$/,
		'color-keyword': /^(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|currentColor|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i,
		'color-rgb-function': /^(hsl|rgb)a?\(.+\)$/,
		'font-style-keyword': /^(italic|oblique)$/,
		'font-weight-keyword': /^(100|200|300|400|500|600|700|800|900|black|bold|book|demibold|extrabold|extralight|heavy|light|medium|regular|roman|semibold|thin|ultrabold|ultralight)$/,
		'font-weight-relative-keyword': /^(bolder|lighter)$/,
		'global-keyword': /^(inherit|initial|unset)$/,
		'length': /^([-+]?0|[-+]?[0-9]*\.?[0-9]+(ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))$/,
		'length-absolute-size-keyword': /^(xx-small|x-small|small|medium|large|x-large|xx-large)$/,
		'length-keyword': /^(available|border-box|content-box|fit-content|max-content|min-content)$/,
		'length-percentage': /[-+]?[0-9]*\.?[0-9]+%/,
		'length-relative-size-keyword': /^(larger|smaller)$/,
		'position-keyword': /^(absolute|fixed|relative|static|sticky)$/,
		'var-function': /^var\(.*\)$/
	}
};
