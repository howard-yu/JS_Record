var DfiowApi_Singleton = (function () {
    var instance;

    function createInstance(options) {
        options = options || {};
        var object = new Dfiow(options);
        return object;
    }

    return {
        getInstance: function (options) {
            if (!instance) {
                instance = createInstance(options);
            }
            return instance;
        }
    };
})();

function Dfiow(options) {
    this.client_id = options.clientid || "";
    this.redirect_uri = options.redirecturl || "";
    this.nonce = options.nonce || "";
    this.btoc_url = options.btocurl || "";
}

Dfiow.prototype.setClientid = function (clientid) {
    this.client_id = clientid;
}

Dfiow.prototype.setRedirectUrl = function (redirecturl) {
    this.redirect_uri = redirecturl;
}

Dfiow.prototype.setNonce = function (nonce) {
    this.nonce = nonce;
}

Dfiow.prototype.setBtoCUrl = function (url) {
    this.btoc_url = url;
}

Dfiow.prototype.setCookie = function () {
    var result;
    var options = {
        type: "GET",
        url: "http://localhost/",
        async: false,
        xhrFields: { withCredentials: true },

        success: function (data) {
            result = true;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            result = false;
        }
    };
    $.ajax(options);
    return result;  
};

Dfiow.prototype.getDFIAzureB2CIDToken = function () {
    var result;
    var options = {
        type: "GET",
        url: "http://localhost/",
        async:false,
        xhrFields: { withCredentials: true },

        success: function (data) {
            result = true;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            result = false;
        }
    };
    $.ajax(options);
    return result;
};

Dfiow.prototype.getDFIAzureB2CURL = function () {
    var url = "http://localhost/";
    return url;
};

Dfiow.prototype.getDFIUserAuthorization = function (SystemName,token) {
    var url = "http://localhost/";
    return get(url, Success);
};

Dfiow.prototype.getDFIPZGroupList = function (SystemName, token) {
    var url = "http://localhost/";
    return get(url, Success);
};

function get(url, successFunction) {
    var result;
    var options = {
        type: "GET",
        url: url,
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data, textStatus) {
            result =  successFunction(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            return "Error";
        }
    };
    $.ajax(options);
    return result;
};

String.prototype.format = function () {
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++) {
        var exp = getStringFormatPlaceHolderRegEx(i);
        txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
    }
    return cleanStringFormatResult(txt);
};

function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
};

function cleanStringFormatResult(txt) {
    if (txt == null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
};


function dfiTokenSuccess(result) {
    if (result.token != null) {
        return result.token;
    }
};

function dfiUserAuthSuccess(result) {
    if (result != null) {
        return result;
    }
};

function dfiGroupListSuccess(result) {
    if (result != null) {
        return result;
    }
};