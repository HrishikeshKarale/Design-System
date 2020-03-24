  export const cookie= {

    methods: {
        getCookie: function (name) {
            var cname = name + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) == 0) {
                    return c.substring(cname.length, c.length);
                }
            }
            return "";
        },

        setCookie: function (name, value, exdays= 1) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        },

        checkCookie: function (name) {
            var value = getCookie(name);
            if (value == "") {
             alert('no cookie for "'+name+'" was found');
            } 
            // else {
            //   username = prompt("Please enter your name:", "");
            //   if (username != "" && username != null) {
            //     setCookie(name, value, 365);
            //   }
            // }
        }
    }
}