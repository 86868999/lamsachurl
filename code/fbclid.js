/* Làm sạch URL: https://lamsachurl.thaison.page

* Code gỡ bỏ UTM: <script src="//son.li/I6Qi" note="Remove UTM" async></script>

* Code gỡ bỏ FBclid: <script src="//son.li/hR8x" note="Remove FBclid" async></script>

* Code gỡ bỏ UTM và FBclid: <script src="//son.li/s9Dx" note="Remove UTM and FBclid" async></script>

* Chia sẻ bởi Lâm Thái Sơn: https://son.lt */

/* Gỡ bỏ FBclid */

(function(){var param='fbclid';if(location.search.indexOf(param+'=')!==-1){var replace='';try{var url=new URL(location);url.searchParams.delete(param);replace=url.href}catch(ex){var regExp=new RegExp('[?&]'+param+'=.*$');replace=location.search.replace(regExp,'');replace=location.pathname+replace+location.hash}
history.replaceState(null,'',replace)}})()
