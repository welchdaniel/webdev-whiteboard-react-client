export default class WidgetService {
    static myInstance = null;

    constructor() {}

    static getInstance = () => {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }

    findAllWidgets = () => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/widgets")
            .then(function(response) {return response.json();})
    }

    findWidgetById = wid => {
        const findWidgetUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/widgets/USER_ID".replace('USER_ID', wid);
        return fetch(findWidgetUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateWidget = (wid, widget) => {
        const updateWidgetUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/widgets/USER_ID".replace('USER_ID', wid);
        return fetch(updateWidgetUrl, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteWidget = wid => {
        const deleteWidgetUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/widgets/USER_ID".replace('USER_ID', wid);
        return fetch(deleteWidgetUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}