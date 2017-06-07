class Ajaxy {
	constructor(parms) {
		parms = parms || {};
		var model = {
				url: parms.url || "inext.php",
				method: parms.method || "GET",
				data: null,
				onFail: toArray(parms.onFail),
				onSuccess: toArray(parms.onSuccess),
				onSend: toArray(parms.onSend),
				onAbort: toArray(parms.onAbort),
				onConnected: toArray(parms.onConnected),
				onReceived: toArray(parms.onReceived),
				onProcessing: toArray(parms.onProcessing),
				onFinished: toArray(parms.onFinished),
			},
			XHR = new XMLHttpRequest();

		function toArray(e) {
			return e ? (Array.isArray(e) ? e : [e]) : [];
		}

		function runArry(arr, d) {
			arr.forEach(function (func) {
				func(d);
			});
		}
		(function () {
			XHR.onreadystatechange = function () {
				switch (XHR.readyState) {
					case 1:
						runArry(model.onConnected);
						break;
					case 2:
						runArry(model.onReceived);
						break;
					case 3:
						runArry(model.onProcessing);
						break;
					case 4:
						var respons = XHR.responseText;
						runArry(model.onFinished, respons);
						if ((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304 ||XMLR.status == 0 || XMLR.status == 4 ) {
							var type = XHR.getResponseHeader("Content-Type");
							runArry(model.onSuccess, respons);
						} else {
							runArry(model.onFail, respons);
						}
						break;
				}
			};
		})();

		this.abort = function () {
			runArry(model.onAbort);
			XHR.abort();
		}
		this.type = function (t) {
			if (t)
				model.method = t;
			return model.method;
		}
		this.url = function (t) {
			if (t)
				model.url = t;
			return model.url;
		}

		this.send = function (nPars) {
			model.data = nPars || model.data;
			XHR.abort();
			XHR.open(model.method, model.url, true);
			XHR.setRequestHeader("Content-Type", "application/json");
			XHR.send(typeof model.data == "object" ? JSON.stringify(model.data) : model.data);
		}
		this.onConnected = function (func) {
			if (func)
				model.onConnected.push(func);
			return model.onConnected;
		}
		this.onReceived = function (func) {
			if (func)
				model.onReceived.push(func);
			return model.onReceived;
		}
		this.onProcessing = function (func) {
			if (func)
				model.onProcessing.push(func);
			return model.onProcessing;
		}
		this.onFinished = function (func) {
			if (func)
				model.onFinished.push(func);
			return model.onFinished;
		}
		this.onSuccess = function (func) {
			if (func)
				model.onSuccess.push(func);
			return model.onSuccess;
		}
		this.onFail = function (func) {
			if (func)
				model.onFail.push(func);
			return model.onFail;
		}
		this.onAbort = function (func) {
			if (func)
				model.onAbort.push(func);
			return model.onAbort;
		}
	}
}
