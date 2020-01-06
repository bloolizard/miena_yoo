##### How to Update
Make sure CSV file has columns: `Date	Time	Location	Website`
```
mongoimport -h <HOST> --username <USERNAME> --password <PASSWORD> --db <DB_NAME> -c events --type csv --file miena_yoo_schedule_2020.csv --headerline
```