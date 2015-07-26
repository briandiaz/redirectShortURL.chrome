function ApiRequest(api_url, params, dataType){
	this.api_url = api_url;
	this.params = params;
	this.dataType = dataType;

	this.request = function(method){
		var response_data = null;
	    $.ajax({
	      type: method,
	      url: this.api_url,
	      data: this.params,
	      dataType: this.dataType,
	      async: false,
	      statusCode: {
	        200: function(data) {
	          response_data = (this.dataType == 'text/xml') ? data.responseText : data;

	        },
	        500: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        },
	        400: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        },
	        401: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        },
	        402: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        },
	        405: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        },
	        406: function(xhr, textStatus, errorThrown) {
	        	console.log(xhr.Status +" " + xhr.StatusDescription + "\n" + errorThrown);
	        }
	      }
	    });
	    return response_data;
	   };

	this.post = function(){
		return this.request("POST");
	};

	this.get = function(){
		return this.request("GET");
	};

	this.xml_response = function(request){
		return request.responseXML;
	};

	this.json_response = function(request){
		return JSON.parse(request.responseText);
	};
}

console.log(window.location.href);
