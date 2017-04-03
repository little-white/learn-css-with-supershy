(function(window) {
    function storeData(data) {
        return new Promise(function(resolve, reject) {
            db.put(data, function(error, response) {
                if (error) {
                    console.log(error);
                    reject(error);
                    return;
                } else if (response && response.ok) {
                    console.log('success');
                    resolve(response);
                }
            });
        })
    }

    function getUser(username) {
        return new Promise(function(resolve, reject) {
            db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function(result) {

                var user = result.rows.filter(function(elem) {
                    return elem.doc.name === username;
                });
                resolve(user);
            }).catch(function(err) {
                console.log(err);
                reject(err);
            });
        })
    }

    window.storeData = storeData;
    window.getUser = getUser;
})(window);
