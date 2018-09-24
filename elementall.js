/*Selector*/
function $(selector) {

	var about =
	{
		Author: "Mustafa Uzun"
	};

	if (selector)
	{

		if (window === this)
		{
			return new $(selector);
		}

		this.element = document.querySelector(selector);
		return this;
	}
	else
	{
		return about;
	}

}

function CheckBoolean(bool)
{
	
	if(typeof bool === 'boolean')
	{
		return true;
	}
	else
	{
		console.log("is not boolean");
		return false;
	}

}

$.prototype =
{
	visible: function (visible)
	{
		if(CheckBoolean(visible))
		{

			if(visible)
			{
				this.element.style.display = 'block';
				return this;
			}
			else
			{
				this.element.style.display = 'none';
				return this;
			}
		}
		return this;
	},

	hide: function()
	{
		
		this.element.style.display = 'none';
		return this;

	},

	show: function ()
	{

		this.element.style.display = "block";
		return this;
		
	},

	enabled: function(enabled)
	{
		if(typeof enabled === 'undefined')
		{
			this.element.disabled = false;
			return this;
		}

		if(CheckBoolean(enabled))
		{
			if(enabled)
			{
				this.element.disabled = false;
			}
			else
			{
				this.element.disabled = true;
			}
		}
		return this;
	},

	disabled: function()
	{
		this.element.disabled = true;
	},

	readOnly: function(readOnly)
	{
		if(typeof readOnly === 'undefined')
		{
			this.element.readOnly = true;
			return this;
		}

		if(CheckBoolean(readOnly))
		{
			if(readOnly)
			{
				this.element.readOnly = true;
			}
			else
			{
				this.element.readOnly = false;
			}
		}
		return this;
	},

	attribute: function(attr, value)
	{
		var isJson, parseJson;
		if(typeof cssName !== "string")
		{
			var jsonParse = JSON.stringify(cssName);
			try
			{
				parseJson = JSON.parse(jsonParse);
				isJson = true;
			}
			catch(e)
			{
				isJson = false;
			}
		}
		else
			isJson = false;

		if(!isJson)
		{
			if(typeof value === 'undefined' && typeof attr !== 'undefined')
			{
				return this.element.setAttribute(attr);
			}

			if(typeof value !== 'undefined')
			{
				return this.element.setAttribute(attr, value);
			}
		}
		else
		{
			for(var element in parseJson)
			{
				this.element.setAttribute(element, parseJson[element]);
			}
		}
		return this;
	},

	text: function(text)
	{
		if(typeof text === 'undefined')
		{
			return this.element.innerText;
		}
		
		return this.element.innerText = text;
	},

	value: function(value)
	{
		if(typeof value === 'undefined')
		{
			return this.element.value;
		}
		
		return this.element.value = value;
	},

	color: function(color)
	{
		if(typeof color === 'undefined')
		{
			return this.element.style.color;
		}
		
		return this.element.style.color = color;
	},

	backgroundColor: function(backgroundColor)
	{
		if(typeof backgroundColor === 'undefined')
		{
			return this.element.style.backgroundColor;
		}
		
		return (this.element.style.backgroundColor = backgroundColor);
	},

	css: function (cssName, value)
	{
		var isJson, parseJson;
		if(typeof cssName !== "string")
		{
			var jsonParse = JSON.stringify(cssName);
			try
			{
				parseJson = JSON.parse(jsonParse);
				isJson = true;
			}
			catch(e)
			{
				isJson = false;
			}
		}
		else
			isJson = false;

		if(!isJson)
		{
			if(typeof value === 'undefined' && typeof cssName !== 'undefined')
			{
				return this.element.style[cssName];
			}

			if(typeof value !== 'undefined')
			{
				return this.element.style[cssName] = value;
			}
		}
		else
		{
			for(var element in parseJson)
			{
				this.element.style[element] = parseJson[element];
			}
		}
		return this;
	},

	check:function()
	{
		if(this.element != null)
		{
			return true;
		}
		else
		{
			return false;
		}
	},

	width: function(width)
	{
		if(typeof width === 'undefined')
		{
			return this.element.width;
		}
		
		return this.element.width = width;
	},

	height: function(height)
	{
		if(typeof height === 'undefined')
		{
			return this.element.height;
		}
		
		return this.element.height = height;
	},

	size: function(width, height)
	{
		if(typeof width === 'undefined' &&  typeof height === 'undefined')
		{
			return (this.element.width + 'x' + this.element.height);
		}
		else if(typeof width !== 'undefined' &&  typeof height !== 'undefined')
		{
			this.element.height = height;
			this.element.width = width;
			return this;
		}
		else
		{
			return this;
		}
	},
	/* EVENTS */
	click: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('click', argument, false);
		}
		else
		{
			return this.element.addEventListener('click', argument, capture);
		}
	},

	mousemove: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mousemove', argument, false);
		}
		else
		{
			return this.element.addEventListener('mousemove', argument, capture);
		}
	},

	mouseover: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mouseover', argument, false);
		}
		else
		{
			return this.element.addEventListener('mouseover', argument, capture);
		}
	},



	mouseout: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mouseout', argument, false);
		}
		else
		{
			return this.element.addEventListener('mouseout', argument, capture);
		}
	},

	mouseup: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mouseup', argument, false);
		}
		else
		{
			return this.element.addEventListener('mouseup', argument, capture);
		}
	},

	mouseleave: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mouseleave', argument, false);
		}
		else
		{
			return this.element.addEventListener('mouseleave', argument, capture);
		}
	},

	
	mouseenter: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mouseenter', argument, false);
		}
		else
		{
			return this.element.addEventListener('mouseenter', argument, capture);
		}
	},

	mousedown: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('mousedown', argument, false);
		}
		else
		{
			return this.element.addEventListener('mousedown', argument, capture);
		}
	},

	dblclick: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dblclick', argument, false);
		}
		else
		{
			return this.element.addEventListener('dblclick', argument, capture);
		}
	},
	
	contextmenu: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('contextmenu', argument, false);
		}
		else
		{
			return this.element.addEventListener('contextmenu', argument, capture);
		}
	},

	abort: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('abort', argument, false);
		}
		else
		{
			return this.element.addEventListener('abort', argument, capture);
		}
	},
	
	beforeunload: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('beforeunload', argument, false);
		}
		else
		{
			return this.element.addEventListener('beforeunload', argument, capture);
		}
	},
	
	error: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('error', argument, false);
		}
		else
		{
			return this.element.addEventListener('error', argument, capture);
		}
	},
	
	hashchange: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('hashchange', argument, false);
		}
		else
		{
			return this.element.addEventListener('hashchange', argument, capture);
		}
	},
	
	load: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('load', argument, false);
		}
		else
		{
			return this.element.addEventListener('load', argument, capture);
		}
	},
	
	pageshow: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('pageshow', argument, false);
		}
		else
		{
			return this.element.addEventListener('pageshow', argument, capture);
		}
	},
	
	pagehide: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('pagehide', argument, false);
		}
		else
		{
			return this.element.addEventListener('pagehide', argument, capture);
		}
	},
	
	resize: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('resize', argument, false);
		}
		else
		{
			return this.element.addEventListener('resize', argument, capture);
		}
	},

	scroll: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('scroll', argument, false);
		}
		else
		{
			return this.element.addEventListener('scroll', argument, capture);
		}
	},
	
	unload: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('unload', argument, false);
		}
		else
		{
			return this.element.addEventListener('unload', argument, capture);
		}
	},

	blur: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('blur', argument, false);
		}
		else
		{
			return this.element.addEventListener('blur', argument, capture);
		}
	},

	change: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('change', argument, false);
		}
		else
		{
			return this.element.addEventListener('change', argument, capture);
		}
	},

	focus: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('focus', argument, false);
		}
		else
		{
			return this.element.addEventListener('focus', argument, capture);
		}
	},

	focusin: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('focusin', argument, false);
		}
		else
		{
			return this.element.addEventListener('focusin', argument, capture);
		}
	},

	focusout: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('focusout', argument, false);
		}
		else
		{
			return this.element.addEventListener('focusout', argument, capture);
		}
	},

	input: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('input', argument, false);
		}
		else
		{
			return this.element.addEventListener('input', argument, capture);
		}
	},

	invalid: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('invalid', argument, false);
		}
		else
		{
			return this.element.addEventListener('invalid', argument, capture);
		}
	},

	reset: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('reset', argument, false);
		}
		else
		{
			return this.element.addEventListener('reset', argument, capture);
		}
	},

	search: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('search', argument, false);
		}
		else
		{
			return this.element.addEventListener('search', argument, capture);
		}
	},

	select: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('select', argument, false);
		}
		else
		{
			return this.element.addEventListener('select', argument, capture);
		}
	},
	
	submit: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('submit', argument, false);
		}
		else
		{
			return this.element.addEventListener('submit', argument, capture);
		}
	},

	drag: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('drag', argument, false);
		}
		else
		{
			return this.element.addEventListener('drag', argument, capture);
		}
	},

	dragend: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dragend', argument, false);
		}
		else
		{
			return this.element.addEventListener('dragend', argument, capture);
		}
	},

	dragenter: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dragenter', argument, false);
		}
		else
		{
			return this.element.addEventListener('dragenter', argument, capture);
		}
	},

	dragleave: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dragleave', argument, false);
		}
		else
		{
			return this.element.addEventListener('dragleave', argument, capture);
		}
	},

	dragover: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dragover', argument, false);
		}
		else
		{
			return this.element.addEventListener('dragover', argument, capture);
		}
	},

	dragstart: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('dragstart', argument, false);
		}
		else
		{
			return this.element.addEventListener('dragstart', argument, capture);
		}
	},

	drop: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('drop', argument, false);
		}
		else
		{
			return this.element.addEventListener('drop', argument, capture);
		}
	},

	wheel: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('wheel', argument, false);
		}
		else
		{
			return this.element.addEventListener('wheel', argument, capture);
		}
	},

	copy: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('copy', argument, false);
		}
		else
		{
			return this.element.addEventListener('copy', argument, capture);
		}
	},

	cut: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('cut', argument, false);
		}
		else
		{
			return this.element.addEventListener('cut', argument, capture);
		}
	},
	
	paste: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('paste', argument, false);
		}
		else
		{
			return this.element.addEventListener('paste', argument, capture);
		}
	},

	error: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('error', argument, false);
		}
		else
		{
			return this.element.addEventListener('error', argument, capture);
		}
	},

	show: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('show', argument, false);
		}
		else
		{
			return this.element.addEventListener('show', argument, capture);
		}
	},

	toggle: function(argument, capture)
	{
		if(typeof capture === 'undefined')
		{
			return this.element.addEventListener('toggle', argument, false);
		}
		else
		{
			return this.element.addEventListener('toggle', argument, capture);
		}
	},

	listen: function(event, argument, capture)
	{
		if(typeof event !== 'undefined' && typeof argument !== 'undefined' && capture === 'undefined')
		{
			return this.element.addEventListener(event, argument, false);
		}
		else if(capture !== 'undefined')
		{
			return this.element.addEventListener(event, argument, capture);
		}
		return this;
	}
};