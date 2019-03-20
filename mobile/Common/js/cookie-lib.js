
        //-- Cookie Lib 
        function setCookie( name, value, expiredays )
        {
            var todayDate = new Date();
            var domainName = document.domain;
            todayDate.setDate( todayDate.getDate() + expiredays );
            document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";domain=" + domainName;
        }

        function getCookie( name )
        {
            var nameOfCookie = name + "=";
            var x = 0;
            while ( x <= document.cookie.length )
            {
                var y = (x+nameOfCookie.length);
                if ( document.cookie.substring( x, y ) == nameOfCookie )
                {
                    if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                        endOfCookie = document.cookie.length;
                    return unescape( document.cookie.substring( y, endOfCookie ) );
                }
                x = document.cookie.indexOf( " ", x ) + 1;
                if ( x == 0 )
                    break;
            }
            return "";
        }
     
        //-- topBanner Action 
        function hideKakaoBanner() {
            $('#kakaobanner_area').slideUp();
        }

        function closeWin(obj) {
            if( obj == "7") {
                setCookie("kakao_cookie_key" , "done" , 7);
            }
            hideKakaoBanner();
        }
  
        function checkCookies() {   
            if(getCookie("kakao_cookie_key") == "done") {
                return true;
            } else {
                return false;
            }
        }
        