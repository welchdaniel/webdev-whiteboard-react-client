export default class ModuleService {
    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance = new ModuleService();
        }
        return this.myInstance;
    }

    createModule = module => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/modules", {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }
     
    findAllModules = () => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/modules")
            .then(function(response) {return response.json();})
    }

    findModuleById = id => {
        const findModuleUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/modules/USER_ID".replace('USER_ID', id);
        return fetch(findModuleUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateModule = (id, module) => {
        const updateModuleUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/modules/USER_ID".replace('USER_ID', id);
        return fetch(updateModuleUrl, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteModule = id => {
        const deleteModuleUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/modules/USER_ID".replace('USER_ID', id);
        return fetch(deleteModuleUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}