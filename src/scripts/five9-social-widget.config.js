var options = {
    "rootUrl": "https://app.five9.com/consoles/",
    "type": "chat",
    "title": "Revive Health Chat",
    "tenant": "Complete Call Solutions",
    "profiles": "Revive Chat",
    "showProfiles": false,
    "autostart": true,
    "theme": "flagship.css",
    "surveyOptions": {
        "showComment": true,
        "requireComment": false
    },
    "fields": {
        "name": {
            "value": "",
            "show": true,
            "label": "Name"
        },
        "email": {
            "value": "",
            "show": true,
            "label": "Email"
        }
    },
    "playSoundOnMessage": true,
    "allowCustomerToControlSoundPlay": true,
    "showEmailButton": true,
    "hideDuringAfterHours": false,
    "useBusinessHours": true,
    "showPrintButton": false,
    "allowUsabilityMenu": true,
    "enableCallback": false,
    "callbackList": "",
    "allowRequestLiveAgent": false
};

Five9SocialWidget.addWidget(options);