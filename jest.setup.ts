import '@testing-library/jest-dom';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axios);

export default mockAxios;