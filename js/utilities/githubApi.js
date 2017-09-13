const api = {
    getLinks() {
        const url = `https://api.github.com/users/twilczek88/repos`;

        return fetch(url)
        .then(r => r.json())
        .then(r => {
            return r.filter(link => {
                return (link.homepage != null);
            });
        });
    }
};

module.exports = api;
