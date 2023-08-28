import { clientsConfig } from '../clients';

export function helloApi() {
    return clientsConfig.get('/api/message');
}
