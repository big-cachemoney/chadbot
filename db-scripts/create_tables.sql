create table "user"
(
    id               bigint generated always as identity primary key,
    user_name        varchar(20) not null,
    height           numeric,
    weight           numeric,
    age              smallint,
    gender           gender_enum not null,
    goal             varchar(20) not null,
    activity_level   varchar(20) not null,
    chad_personality varchar(20) not null
);

comment on table "user" is 'Table with user data';

alter table "user"
    owner to avnadmin;

