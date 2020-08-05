

function defaultPreferences() {
        const data = (
            {
            "Settings":
                {"Stats": {
                    "ShowWeek" : true,
                    "ShowMonth" : true,
                    "ShowYear" : true,
                    "ShowSettings" : false,
                    "WeekExtras" : true,
                    "MonthExtras" : true
                    }
                }
            }
        );
        return data;
    }


export { defaultPreferences };