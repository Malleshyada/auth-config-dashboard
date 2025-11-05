export const storage = {
getAuthToken: () => typeof window!== 'undefined' ? localStorage.getItem('authToken') : null,
setAuthToken: (t: string) => { localStorage.setItem('authToken', t) },
removeAuthToken: () => { localStorage.removeItem('authToken') },
getConfigKey: () => typeof window!== 'undefined' ? localStorage.getItem('configKey') : null,
setConfigKey: (k: string) => { localStorage.setItem('configKey', k) },
removeConfigKey: () => { localStorage.removeItem('configKey') },
}