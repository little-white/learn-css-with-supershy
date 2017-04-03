(function() {
    var getValidate = validateSingleton();

    var validate = getValidate();

    store.namespace('form')('login', true);

    function register(user) {
        if (!validate.register(user)) {
            return false;
        }

        var registerData = {
            name: user.name,
            password: user.password,
            repeatPassword: user.repeatPassword,
            _id: (new Date).getTime().toString()
        }

        getUser(user.name).then(function(user) {
            return user.length > 0 ? false : storeData(registerData)
        }).then(function(data) {
            if (data) {
                store.namespace('user')('login', false);
                window.dispatchEvent(renderEvent);
                alert('注册成功');
            } else {
                alert('用户已存在');
            }
        })

    }

    function login(user) {
        if (!validate.login(user)) {
            return false;
        }

        var loginData = {
            name: user.name,
            password: user.password,
            // _id: (new Date).getTime().toString()
        }
        getUser(user.name).then(function(users) {
            if (users.length > 0) {
                if (users[0].doc.password === user.password) {
                    store.namespace('user')('login', true);
                    store.namespace('user')('name', user.name);
                    window.dispatchEvent(renderEvent);
                    alert('登录成功')
                } else {
                    alert('密码不正确')
                }
            }
        })

    }

    function logoutHandler(event) {
        if (event.target.className.indexOf('btn-logout') !== -1) {
            store.namespace('user')('login', false);
            window.dispatchEvent(renderEvent);
        }
    }

    function registerHandler(event) {
        if (event.target.className.indexOf('btn-register') !== -1) {
            register({
                name: document.querySelector('[name=name]').value,
                password: document.querySelector('[name=password]').value,
                repeatPassword: document.querySelector('[name=repeatPassword]').value
            });
        }
    }

    function loginHandler(event) {
        if (event.target.className.indexOf('btn-login') !== -1) {
            login({
                name: document.querySelector('[name=name]').value,
                password: document.querySelector('[name=password]').value
            });
        }
    }

    function formView(event) {
        if (event.target.className.indexOf('go-login') !== -1) {
            store.namespace('form')('login', true);
            window.dispatchEvent(renderEvent);
        }

        if (event.target.className.indexOf('go-register') !== -1) {
            store.namespace('form')('login', false);
            window.dispatchEvent(renderEvent);
        }
    }

    window.document.onclick = function(e) {
        logoutHandler(e);
        registerHandler(e);
        loginHandler(e);
        formView(e);
    }



})();
