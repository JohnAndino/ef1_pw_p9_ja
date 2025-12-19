import axios from "axios";

const construirApi = async () => {
    const respuesta = axios.get('https://randomuser.me/api/').then(r=>r.data);
    return respuesta;
}

export function construirApiFacade() {
    return construirApi();
}
