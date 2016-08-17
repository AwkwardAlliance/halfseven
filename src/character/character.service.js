export default function characterService($http) {
    const service = {
        character: {},
        get,
    };
    return service;

    function get() {
        return $http.get('/mos-deth.json')
            .then((res) => service.character = res.data);
    }
}
