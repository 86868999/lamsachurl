/* Làm sạch URL: https://lamsachurl.thaison.page
* Thủ thuật về Tumblr: https://thuthuatve.tumblr.com
* Xóa chuyển hướng href.li của Tumlbr: https://thaison.link/e6rt
* Chia sẻ bởi Lâm Thái Sơn: https://son.lt */

/* Xóa chuyển hướng href.li của Tumlbr */
function RemoveHrefLi(){var e=document.querySelectorAll('a[href*="href.li/?"]');Array.prototype.forEach.call(e,(function(r,t){var f=e[t].getAttribute("href").split("href.li/?")[1];e[t].setAttribute("href",f)}))}RemoveHrefLi()
