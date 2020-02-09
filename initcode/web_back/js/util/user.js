/** 
 * 
 * 封装user对象
 * 登陆 登出 获取当前用户信息
 * author：LiDemin
 * Time:2020.1.16
 * 
 */
let user = {
    // 登陆
    login: (user_name, password) => {
        return $.post(APIURLS.getLogin, {
            user_name,
            password
        });
    },
    // 登出
    logout: () => {
        $.post(APIURLS.getLogout)
            .then(function (res) {
                if (res.code == 200) {
                    alert(res.msg);
                    location.href = "./login.html";
                } else {
                    alert(res.msg);
                }
            });
    },
    // 获取用户信息
    getUserInfo: () => {
        return $.get(APIURLS.getUserInfo);
    }
}