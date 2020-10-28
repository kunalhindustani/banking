CREATE TABLE user_info(cust_id int(20) NOT NULL UNIQUE,
account_number varchar(40) NOT NULL UNIQUE,
cust_first_name varchar(20),
cust_middle_name varchar(20),
cust_last_name varchar(20),
cust_account_opening_dat date,
employee_create_id varchar(30)
);

CREATE TABLE user_account_type(user_cust_id int(20) NOT NULL UNIQUE,
account_number varchar(40) NOT NULL UNIQUE,
cust_account_type varchar(20),
cust_account_status boolean,
cust_balance varchar(10),
UNIQUE(account_number,cust_account_type)
);