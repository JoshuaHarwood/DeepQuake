

    function defaultPreferences() {
        const data = (
            {
            "Settings":
                {"Stats": {
                    "ShowWeek" : true,
                    "ShowMonth" : false,
                    "ShowYear" : false,
                    "ShowSettings" : false,
                    "WeekExtras" : false,
                    "MonthExtras" : false
                    }
                }
            }
        );
        return data;
    }


export { defaultPreferences };