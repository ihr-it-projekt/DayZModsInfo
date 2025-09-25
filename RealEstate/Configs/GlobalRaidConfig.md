## GlobalRaidConfig.json

```json lines
{
    "version": "1", // Never touch this value. It is necessary internally
    "isInitialized": 1, // Never touch this value. It is necessary internally
    "useUTCTime": 0, // 1 = on 0 = off, if on, the time is in UTC time, otherwise it is local time
    "isEnabled": 1, // 1 = on 0 = off, if on, the raid times are enabled
    "raidTimes": [
        { //Beginning of daily raid time example
            "start": { // Start time of raid time 1
                "year": 0, // 0 = means every year if this is 0 month and day musst also 0
                "month": 0, // 0 = means every month if this is 0 day+++ must also 0
                "day": 0, // 0 = means every day
                "hour": 19, // 0 - 24
                "minute": 0, // 0 - 59
                "second": 0 // 0 - 59
            },
            "end": { // End time of the raid time 1
                "year": 0, // 0 = means every year
                "month": 0, // 0 = means every month
                "day": 0, // 0 = means every day
                "hour": 19, // 0 - 24
                "minute": 25, // 0 - 59
                "second": 0 // 0 - 59
            }
        }, // End of daily raid time example
        { // Beginning of raid time exact time example
            "start": { // Start time of raid time 2
                "year": 2025, // You can also set a specific year
                "month": 12, // You can also set a specific month
                "day": 25, // You can also set a specific day
                "hour": 8, // 0 - 24
                "minute": 0, // 0 - 59
                "second": 0 // 0 - 59
            },
            "end": { // End of raid time exact time example
                "year": 2025, // You can also set a specific year
                "month": 12, // You can also set a specific month
                "day": 27, // You can also set a specific day
                "hour": 21, // 0 - 24
                "minute": 0, // 0 - 59
                "second": 0 // 0 - 59
            }
        }, // End of raid time exact time example
        { // Beginning of weekday time example
            "start": {
                 "year": 1, // must be 1 for weekday config
                 "month": 1, // must be 1 for weekday config
                 "day": 3, // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
                 "hour": 15, // 0 - 24
                 "minute": 0, // 0 - 59
                 "second": 0 // 0 - 59
            },
            "end": {
                 "year": 1, // must be 1 for weekday config
                 "month": 1, // must be 1 for weekday config
                 "day": 3, // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
                 "hour": 19, // 0 - 24
                 "minute": 25, // 0 - 59
                 "second": 0 // 0 - 59
            }
        } // End of weekday time example
        // you can add more raid times
    ]
}

```