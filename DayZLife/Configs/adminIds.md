# adminIds.json

[**`back`**](../Readme.md)

```json lines
{
  "access": [], // Deprecated, will removed in future
  "playerAccesses": [
    {
      "id": "yWqfOC-DbZMpRXQ8NHEL1VPSTG2elJWrU1pMdqSGrN0=", // DayZ Player ID
      "canManage": { // here where all jobs on your server listed, do not add jobs here, they will automatically added if you add more jobs in paycheck.json
        "Medic": 1, // 1 = can manage, 0 = can not manage
        "Cop": 1,
        "Mechanic": 1,
        "Army": 1,
        "Players": 1,
        "Cars": 1
      }
    }
  ],
  "version": "7"
}
```