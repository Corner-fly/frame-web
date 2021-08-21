/**
 * 公共方法
 */
// 设置cookie
const getCookie = function (cname) {
    var name = cname + "=";
    let token = "";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) {
            token = c.substring(name.length, c.length);
            break;
        }
    }
    if (token) {
        let str1 = token.match(/\.(\S*)\./)[1];
        let str2 = str1.replace(/-/g, "+").replace(/_/g, "\\");
        return JSON.parse(window.atob(str2)).user;
    } else {
        return false;
    }
};

/**
 * 打开视频弹窗
 * @param { String } id 组织ID
 */
const openVideo = function (url, meetId, userId) {
    var url = `${url}?room=${meetId}&username=${userId}`; //转向网页的地址;
    var name = "视频会议";
    var iWidth = 1500;
    var iHeight = 900;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    window.open(
        url,
        name,
        "height=" +
        iHeight +
        ",,innerHeight=" +
        iHeight +
        ",width=" +
        iWidth +
        ",innerWidth=" +
        iWidth +
        ",top=" +
        iTop +
        ",left=" +
        iLeft +
        ",toolbar=no,titlebar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no"
    );
};



export {
    getCookie,
    openVideo
};