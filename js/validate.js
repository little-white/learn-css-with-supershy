(function(window) {
    function Validate() {
        this.isValid = false;
        this.message = {
            register: '请输入正确的注册信息',
            login: '请输入正确的登录信息'
        }
    }

    Validate.prototype.register = function(user) {
        if (user.name && user.password && user.repeatPassword && (user.password === user.repeatPassword)) {
            this.isValid = true;
        } else {
            alert(this.message.register);
        }

        return this.isValid;
    }

    Validate.prototype.login = function(user) {
        if (user.name && user.password) {
            this.isValid = true;
        } else {
            alert(this.message.login);
        }

        return this.isValid;
    }

    function validateSingleton() {
        var validate = null;
        return function() {
            if (!validate) {
                validate = new Validate();
            }

            return validate;
        }
    }

    window.Validate = Validate;
    window.validateSingleton = validateSingleton;
})(window);
