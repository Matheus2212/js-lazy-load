document.addEventListener('DOMContentLoaded', function () {
        (function LazyLoad(elm) {
                if (typeof elms == "undefined") {
                        elm = document
                }
                var elms = elm.getElementsByClassName("lazy-load");
                for (var i = 0; i < elms.length; i++) {
                        var elm = elms[i];
                        var img = document.createElement('img');
                        var data = elm.dataset;
                        var keys = Object.keys(data);
                        for (var ii = 0; ii < keys.length; ii++) {
                                img.setAttribute(keys[ii], data[keys[ii]]);
                        }
                        elm.appendChild(img);
                }
        })()
});