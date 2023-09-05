import { clientsConfig } from '../clients';

export function getSlider() {
    return clientsConfig.get('/api/slider');
}
